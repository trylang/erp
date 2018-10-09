<template>
  <div class="savebox">
    <div class="savecont">
        <con-head title="保证金收取">
          <el-button type="primary" slot="append" @click="dialog.dialogVisible = true, dialog.param={paymentCode: '', receivedAmount: '', receivedDate: ''}" :disabled="!!(!query.merchantId||!query.contractCode)">收取</el-button>
          <el-row slot="preappend">
            <el-col :span="9">
              <div class="searchselect">
                  <span class="inputname inputnameauto">商户</span>
                  <el-select v-model="query.merchantId" placeholder="商户名称" class="dialogselect" @change="checkContractHandler(query.merchantId)" filterable clearable :disabled="!!this.$route.query.merchantId">
                    <el-option
                      v-for="item in selects.merchants"
                      :key="item.id"
                      :label="item.merchantName"
                      :value="item.id">
                    </el-option>
                  </el-select>
              </div>
            </el-col>
            <el-col :span="9" :offset="6">
              <div class="searchselect">
                <span class="inputname inputnameauto">正式合同</span>
                <el-select v-model="query.contractCode" placeholder="请选择合同" class="dialogselect" @change="checkMoneyHandler" filterable clearable :disabled="!!this.$route.query.contractCode">
                  <el-option
                    v-for="item in selects.contracts"
                    :key="item.contractCode"
                    :label="item.contractAndShop"
                    :value="item.contractCode">
                  </el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        </con-head>
        
        <blank-head title="店铺履约保证金">
          <cash-card :notCash="false" :cash="[{name:'应收金额', id:this.content.receivableAmount}, {name: '已收金额', id:this.content.receivedAmount}, {name: '未收金额', id:this.content.uncollectedAmount}]"></cash-card>
        </blank-head>
        
        <erp-table :header="header" :content="content"  @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
        <erp-dialog :title="dialog.param.id? '修改保证金': '保证金收取'" :dialog="dialog"></erp-dialog>
    </div>
    <div class="savebtn" v-loading.fullscreen="loading"><button @click="addEntering">提交</button></div>
  </div>
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import blankHead from "../../../components/BlankHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";
import cashCard from "../../../components/CashCard";
import { _changeJson, _replace, _remove, _uuid } from "@/utils";
import { formatDate } from '@/utils/filter';
export default {
  name: "account-group",
  components: {
    conHead,
    blankHead,
    erpTable,
    erpDialog,
    cashCard
  },
  data() {
    return {
      loading: false,
      header: [
        {
          label: "收款方式",
          type: "toggleText",
          name: "paymentCode",
          valueLabel: 'name',
          option: []
        },
        {
          label: "收款金额",
          type: "fmoney",
          name: "receivedAmount"
        },
        {
          label: "收款日期",
          type: "time",
          name: "receivedDate",
          filter: "yyyy-MM-dd"
        },
        {
          label: "备注",
          name: "remark",
          type: "text",
        },
        {
          label: "操作",
          name: "operations",
          type: "buttons",
          style: {
            width: "130px"
          },
          operations: [
            {
              label: "编辑",
              name: "edit",
              type: "",
              style: {
                // color: "#902323"
              },
              class: "edit",
              click: (item) => {
                this.dialog.param = {};
                Object.assign(this.dialog.param, item);
                this.dialog.dialogVisible = true;
              }
            },
            {
              label: "删除",
              name: "delete",
              type: "",
              style: {
                // color: "#093216"
              },
              class: "delete",
              click: (item, data) => {
                this.deleteDialog(item, data);
              }
            }
          ]
        }
      ],
      dialog: {
        models: [{
          label: '收款方式',
          name: "paymentCode",
          type: "select",
          value: "id",
          valueLabel: "name",
          options: [],
          placeholder: "请选择收款方式"
        }, {
          label: '收款金额',
          name: 'receivedAmount',
          type: 'text',
          placeholder: '请输入收款金额'
        }, {
            label: "收款日期",
            type: "date",
            name: "receivedDate",
            pickerOptions: {
              disabledDate(time) {
                return time.getTime() > Date.now();
              }
            }
        }, {
          label: '备注',
          name: 'remark',
          type: 'textarea',
          placeholder: '请输入...'
        }],
        dialogVisible: false,
        param: {
          //id: '',
          paymentCode: '',
          // paymentName: '',//弹窗收款方式要展示name
          receivedAmount: '',
          receivedDate: '',
          //remark: '',
          //receiptNumber: ''
        },
        options: [{
          label: "确 定",
          name: "submit",
          type: "primary",
          disabledFun: () => {
            let param = Object.assign({}, this.dialog.param);
            delete param.remark;
            return Object.values(param).some(item => {
                return item === (undefined || "");
            });
          },
          click: () => {
            this.confirmDialog();
          }
        }, {
          label: "取 消",
          name: "edit",
          type: "",
          click: () => {
            this.cancelDialog();
          }
        }]
      },
      selects: {
        merchants: [], //保证金下的所有商户
        contracts: [], //该商户下的意向合同
      },
      content: {list:[],receivableAmount: '',receivedAmount: '',uncollectedAmount: ''},
      query: {
        merchantId: '',
        contractCode: '',
        shopId: '', //店铺id
        bondId: '', //保证金id
        stage: '',    //正式
      },
      bondId: ''
    };
  },
    mounted() {
        this.getEntering();
        this.query.merchantId = this.querys.merchantId;
        this.query.contractCode = this.querys.contractCode;
        this.query.shopId = this.querys.shopId;
        if(this.$route.query.stage) {
            this.query.stage = this.querys.stage;
        }else{
            this.query.stage = 1;
        }
        this.$api.rentapi.listForFormalUsingGET().then(res=>{ //保证金下 的所有商户列表
            this.selects.merchants = res.data.data;
        }).catch(res=>{
            this.$message.error(res.data.msg);
        });
        this.$api.systemapi.typeListUsingGET({ nameOrCode: "0005" }).then(res => {//类型code
          let paymentCode = res.data.data[0].code;
          this.$api.systemapi.itemListUsingGET({ code: paymentCode }).then(res => {//根据code查询付款方式
            this.dialog.models[0].options = res.data.data;
            this.header[0].option = _changeJson(res.data.data, 'id');
          });
        });
    },
    methods: {
        checkContractHandler(merchantId){//根据商户id查询正式合同
            this.query.contractCode = '';
            this.content.receivableAmount = '';
            this.content.receivedAmount = '';
            this.content.uncollectedAmount = '';
            if(this.content.list.length>0){
                 this.content.list = [];
            }
            this.$api.rentapi.listFormalUsingGET({
                // stage: this.query.stage,
                merchantId : merchantId
            }).then(res => {//根据code查询付款方式
                this.selects.contracts = res.data.data;
            });
        },
        checkMoneyHandler(){
            this.content.receivableAmount = '';
            this.content.receivedAmount = '';
            this.content.uncollectedAmount = '';
            let params = {
                stage: 1,
                merchantId: this.query.merchantId,
                shopId: null,
                contractCode: this.query.contractCode
            };
            this.$api.financeapi.getContractMoney(params).then(res=>{//点击正式合同后查出三个金额
                let data = res.data.data;
                this.content.receivableAmount = data.receivableAmount;//应收金额
                this.content.receivedAmount = data.receivedAmount;  //已收金额
                this.content.uncollectedAmount = data.uncollectedAmount;//未收金额
                this.query.shopId = data.shopId;
                this.query.bondId = data.id;
                this.content.list = [];
            }).catch(res=>{
              this.$message.error(res.data.msg);
            });
        },
        getCurrentPage(pageNum) {
          this.getEntering({pageNum});
        },
        getpageSize(pageSize) {
          this.getEntering({pageSize});
        },
        cancelDialog: function() {
            this.dialog.dialogVisible = false;
            this.dialog.param = {};
        },
        confirmDialog: function() {
            if (this.dialog.param.id || this.dialog.param.itemId) {
              // 修改
              let filterData = this.content.list.filter(item => {
                if (item.id) {
                  return item.id != this.dialog.param.id;
                } else if (item.itemId) {
                  return item.itemId != this.dialog.param.itemId;
                }                
              });
              for(var i = 0; i<filterData.length; i++){
                let singData = filterData[i];
                if (singData.paymentCode == this.dialog.param.paymentCode){
                  this.$message.info('不能添加重复的收款方式！');
                  return;
                }             
              }
              if(this.dialog.param.receivedAmount < 0){
                this.$message.info('收款金额不能小于0！');
                return;
              }
              this.editItem(this.dialog.param);        
            } else {
              // 新增
              for(var i = 0; i<this.content.list.length; i++){
                let singData = this.content.list[i];
                if (singData.paymentCode == this.dialog.param.paymentCode){
                  this.$message.info('不能添加重复的收款方式！');
                  return;
                }             
              }
              if(this.dialog.param.receivedAmount < 0){
                this.$message.info('收款金额不能小于0！');
                return;
              }
              this.dialog.param.itemId = _uuid();
              this.addItem(this.dialog.param);
            }
        },
        editItem(param) {
          if (!param.id) {
            _replace('itemId', this.content.list, param);
          } else {
            _replace('id', this.content.list, param);
          }     
          this.dialog.dialogVisible = false;
        },
        addItem(param) {
          this.content.list.unshift(param);
          this.dialog.dialogVisible = false;
        },
        deleteDialog: function(item) {
            this.$confirm("此操作将永久删除该费用录入, 是否继续?", "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            })
              .then(() => {
                this.deleteItem(item);
              });
        },
        async getEntering(page={}, callback) {
          if (!this.$route.query.receiptNumber) return;
          this.$api.financeapi.detailUsingGET_3({ //列表---前边编辑带过来的数据
            receiptNumber: this.$route.query.receiptNumber,
            pageNum: page.pageNum,
            pageSize: page.pageSize,
          }).then(res => {
            const data = res.data;
            if (data.status === 200) {
              this.content = data.data;
              this.query.bondId = this.content.id;    //查出保证金id
              this.query.shopId = this.content.shopId;    //查出店铺id
              if (callback) callback();
            } else {
              return data.message;
            }
          });
        },
        deleteItem(param) {
          if (param.id) {
            _remove('id', param.id, this.content.list);
          } else {
            _remove('itemId', param.itemId, this.content.list);
          }
        },
        async addEntering() {
          this.loading = true;
          const param = {
            merchantId: this.query.merchantId,
            contractCode: this.query.contractCode,
            shopId: this.query.shopId,
            stage: this.query.stage,
            receiptNumber: this.$route.query.receiptNumber?this.querys.receiptNumber:null,//编辑传收款单号，新增不用传
            id: this.query.bondId,    //保证金id
            list: this.content.list
          }
          const apiFunc = (api, param) => {
            let aTotal = param.list.reduce((a,b)=>{ return a + Number(b.receivedAmount) },0);
            if(aTotal <= this.content.uncollectedAmount){ //收取金额必须小于未收金额
                this.$api.financeapi[api]({request: param}).then(returnObj => {
                  if (returnObj.data.status === 200) {
                    this.loading = false;
                    this.$message.success(returnObj.data.msg);
                    this.$router.push({path: '/finance/takeMargin'});
                  } else {
                    this.loading = false;
                    this.$message.error(returnObj.data.msg);
                  }
                });
            }else{
                this.loading = false;
                this.$message.warning('收款金额不能大于未收金额！');
            }
          };

          if (this.$route.query.receiptNumber) {
            param.receiptNumber = this.$route.query.receiptNumber;
            await apiFunc('updateUsingPUT_2', param);//编辑提交
          } else {
            await apiFunc('submitsUsingPOST', param);//新增提交
          }      
        },
    },
    computed: {
        querys(){
            return this.$route.query;
        }
    },
    created() {
    // this.$store.dispatch("getAccountGroups");
    }
};
</script>

