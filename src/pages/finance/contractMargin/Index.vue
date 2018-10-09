<template>
  <con-head title="合同保证金">
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入合同编号" v-model="searchName" @keyup.enter="getContractList()"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname inputnameauto">商户</span>
            <el-select v-model="query.merchantId" placeholder="商户名称" filterable clearable class="dialogselect" @change="checkShopList(query.merchantId)">
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="item in selects.merchants"
                :key="item.id"
                :label="item.merchantName"
                :value="item.id">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
    <el-row slot="preappend">
        <el-col :span="9">
            <div class="texttitle">
                <span class="inputname">合同阶段：</span>
                <div class="line-nav">
                    <a href="javascript:void(0)" 
                        v-for="status in selects.status" 
                        :key="status.id" 
                        :class="{active:status.isStatus}" 
                        @click="statusHandler(status)">{{status.label}}</a>
                    <!-- <el-radio-button v-for="status in selects.status" :key="status.id" :class="{active:status.isStatus}">{{status.label}}</el-radio-button> -->
                </div>
            </div>
        </el-col>
        <el-col :span="9" :offset="6">
            <div class="searchselect">
                <span class="inputname inputnameauto">店铺</span>
                <el-select v-model="query.shopId" placeholder="请选择店铺" filterable clearable @change="getContractList()" class="dialogselect">
                  <el-option label="全部" value=""></el-option>
                  <el-option
                    v-for="item in selects.shopIds"
                    :key="item.id"
                    :label="item.codeInfo"
                    :value="item.shopId">
                  </el-option>
                </el-select>
            </div>
        </el-col>
    </el-row>
    <erp-table :header="header" :content="dataList" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
    <erp-dialog v-loading="dialog.loading" title='保证金处理' :dialog="dialog"></erp-dialog>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";
export default {
  name: "account-group",
  components: {
    conHead,
    erpTable,
    erpDialog
  },
  data() {
    return {
      header: [
        {
          label: "合同编号",
          type: "text",
          name: "contractCode"
        },
        {
          label: "阶段",
          type: "text",
          name: "stageText"
        },
        {
          label: "店铺",
          type: "text",
          name: "shopName"
        },
        {
          label: "商户",
          type: "text",
          name: "merchantName"
        },
        {
          label: "应收金额",
          type: "fmoney",
          name: "receivableAmount"
        },
        {
          label: "已收金额",
          type: "fmoney",
          name: "receivedAmount"
        },
        {
          label: "处理金额（待确认）",
          type: "text",
          name: "concatAmount",
          // name: "dealtAmount"
        },
        {
          label: "剩余金额",
          type: "fmoney",
          name: "restAmount"
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
              label: "罚没",
              name: "edit",
              type: "",
              style: {
                // color: "#902323"
              },
              class: "edit",
              click: (item) => {
                Object.assign(this.dialog.param, item);
                this.dialog.param.type = 0; // 罚没
                this.dialog.param.id = item.id;
                if(item.restAmount<=0){
                    this.$message.warning('无可用金额！');
                }else{
                    this.dialog.param.dealtAmounts = '';
                    this.dialog.dialogVisible = true;
                }
              }
            },
            {
              label: "归还",
              name: "delete",
              show: "showback",
              type: "",
              style: {
                // color: "#093216"
              },
              class: "delete",
              click: (item, data) => {
                Object.assign(this.dialog.param, item);
                this.dialog.param.type = 1; // 归还
                this.dialog.param.id = item.id;
                if(item.restAmount<=0){
                    this.$message.warning('无可用金额！');
                }else{
                    this.dialog.param.dealtAmounts = '';
                    this.dialog.dialogVisible = true;
                }
              }
            }
          ]
        }
      ],
      selects: {
        status: [{
          isStatus:true,
          label: '全部',
          id: ''
        }, {
          isStatus:false,
          label: '意向',
          id: 0
        }, {
          isStatus:false,
          label: '正式',
          id: 1
        }],
        merchants: [],
        shopIds: []
      },
      dialog: {
        models: [{
          label: '处理方式',
          name: 'type',
          type: 'word',
          valueLabel: 'label',
          options: [{
            id: 0,
            label: '罚没'
          }, {
            id: 1,
            label: '归还'
          }]
        }, {
          label: '处理金额',
          name: 'dealtAmounts',
          type: 'text',
          placeholder: '请输入'
        }, {
          label: '备注',
          name: 'remark',
          type: 'textarea',
          placeholder: '请输入备注'
        }],
        dialogVisible: false,
        loading: false,
        param: {
            id: '',
            dealtAmounts: '',
            type: ''
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
      query: {
        merchantId: '',
        shopId: '',
        stage: ''
      },
      searchName: '',
      dataList: [],
    };
  },
  watch:{
      searchName(){
          this.$delay(()=>{
              this.getContractList();
          },300)
      }
  },
  mounted() {
    this.getContractList();
    this.$api.rentapi.listIntentAndFormalUsingGET().then(res=>{ //商户列表
        this.selects.merchants = res.data.data;
    })
    this.checkShopList(-1);
  },
  methods: {
    checkShopList(merchantId){
        this.query.shopId = '';
        this.getContractList();
        let merchantIds = merchantId==-1?'' : merchantId;
        this.$api.financeapi.shopinfoUsingGET({merchantId: merchantIds}).then(res=>{ //店铺列表
            this.selects.shopIds = res.data.data;
        }).catch(res=>{
            this.$message.error(res.data.msg);
        });
    },
    getContractList(page={}, callback){
        let params ={
            contractCode: this.searchName,
            merchantId: this.query.merchantId,
            shopId: this.query.shopId,
            stage: this.query.stage,
            pageNum: this.query.pageNum,
            pageSize: this.query.pageSize
        }
        this.$api.financeapi.listUsingGET_5(params).then(res=>{
            if(res.data.status === 200){
                res.data.data.list.forEach(item=>{
                    if (item.stage === 0 ) {
                        item.stageText = '意向';
                        item.showback = false;
                    }else if(item.stage === 1){
                        item.stageText = '正式';
                        item.showback = true;
                    }
                    if(item.type === 0){
                        item.typeText = '罚没'
                    }else if(item.type === 1){
                        item.typeText = '归还'
                    }
                })
                this.dataList = res.data.data;
            }
        })
    },
    getCurrentPage(pageNum) {
      this.query.pageNum = pageNum;
      this.getContractList();
    },
    getpageSize(pageSize) {
      this.query.pageSize = pageSize;
      this.getContractList();
    },
    statusHandler(status){
		this.selects.status.forEach(function(obj){
			obj.isStatus = false;
		});
		status.isStatus = !status.isStatus
        this.query.stage = status.id;
        this.getContractList();
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog() {
        this.dialog.loading = true;
        let params = {
            id: this.dialog.param.id,
            dealtAmount: Number(this.dialog.param.dealtAmounts),
            type: this.dialog.param.type,
            remark: this.dialog.param.remark
        }
        if(params.dealtAmount < 0){
          this.$message.info('处理金额不能小于0！');
          this.dialog.loading = false;
          return;
        }
        this.$api.financeapi.givebackUsingPOST({request: params}).then(res=>{ //罚没，归还
            if(res.data.status === 200){
                this.dialog.dialogVisible = false;
                this.dialog.loading = false;
                this.$message.success(res.data.msg);
                this.getContractList();
            }else{
                this.dialog.loading = false;
                this.$message.error(res.data.msg);
            }
        }).catch(res=>{
            this.dialog.loading = false;
            this.$message.error(res.data.msg);
        });
    },
  }
};
</script>

<style lang="scss" scoped>
.line-nav{
        flex:1;
        line-height: 30px;
    }
    .line-nav a{
        margin: 0 10px;
        color: #666;
        font-weight: bold;
        height: 30px;
        text-decoration: none;
        display: inline-block;
    }
    .line-nav a.active{
        color: #457fcf;
        border-bottom: 2px solid #457fcf;
    }
</style>