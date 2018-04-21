<template>
  <con-head title="商户预付款">
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname">商户</span>
            <el-select v-model="query.merchantId" placeholder="商户名称" @change="checkShopNameList(query.merchantId)" class="dialogselect">
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
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname">合同</span>
            <el-select v-model="query.contractCode" placeholder="请选择"  @change="getmerchantList()" class="dialogselect">
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="item in selects.contracts"
                :key="item.id"
                :label="item.contractCode"
                :value="item.contractCode">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
    <erp-table :header="header" :content="dataList" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
    <erp-dialog title='商户预付款处理' :dialog="dialog"></erp-dialog>
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
          type: "text",
          name: "receivedAmount"
        },
        {
          label: "核销金额",
          type: "text",
          name: "canceledAmount"
        },
        {
          label: "处理金额",
          type: "text",
          name: "dealtAmount"
        },
        {
          label: "剩余金额",
          type: "text",
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
              label: "归还",
              name: "edit",
              type: "",
              style: {
                // color: "#902323"
              },
              class: "edit",
              click: (item) => {
                Object.assign(this.dialog.param, item);
                this.dialog.dialogVisible = true;
              }
            }
          ]
        }
      ],
      selects: {
        merchants: [],
        contracts: []
      },
      dialog: {
        models: [{
          label: '处理金额',
          name: 'dealtAmount',
          type: 'text',
          placeholder: '请输入处理金额'
        }, {
          label: '备注',
          name: 'remark',
          type: 'textarea',
          placeholder: '请输入备注'
        }],
        dialogVisible: false,
        param: {
          dealtAmount: "",
        },
        options: [{
          label: "确 定",
          name: "submit",
          type: "primary",
          disabledFun: () => {
            return Object.values(this.dialog.param).some(item => {
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
        contractCode: "",
        merchantId: ''
      },
      dataList: [],
    };
  },
    mounted() {
        this.getmerchantList();
        // this.$api.rentapi.listUsingGET_12({status: 1}).then(res=>{ //商户列表 status:1 已确定状态
        //     this.selects.merchants = res.data.data;
        // })
        this.$api.rentapi.getMerchantForAdvancePaymentUsingGET().then(res => {//已经确定过合同的商户列表
            this.selects.merchants = res.data.data;
        })
        this.checkShopNameList(-1); //合同下拉
        this.$api.rentapi.getListForPageUsingGET({status: 30}).then(res=>{//合同列表 status:30 已确定状态
            this.selects.contracts = res.data.data.list;
        }).catch(res=>{
            this.$message.error(res.data.msg);
        });
    },
    methods: {
        checkShopNameList(merchantId){  //根据商户id查合同
            let merchantIds = merchantId==-1?'' : merchantId;
            this.$api.rentapi.getContractShopByMerchantUsingGET({merchantId: merchantIds}).then(res => {
                this.selects.contracts = res.data.data;
                this.getmerchantList();
            }).catch(res => {
                this.$message.error(res.data.msg);
            });
        },
        getmerchantList(page={}, callback){
            let params ={
                contractCode: this.query.contractCode,
                merchantId: this.query.merchantId,
                pageNum: page.pageNum,
                pageSize: page.pageSize
            }
            this.$api.financeapi.listUsingGET_8(params).then(res=>{
                this.dataList = res.data.data;
            })
        },
        getCurrentPage(pageNum) {
          this.getmerchantList({pageNum});
        },
        getpageSize(pageSize) {
          this.getmerchantList({pageSize});
        },
        cancelDialog: function() {
            this.dialog.dialogVisible = false;
            this.dialog.param = {};
        },
        confirmDialog(param){// 归还
            this.dialog.dialogVisible = false;
            this.$api.financeapi.saveUsingPOST_2({request: this.dialog.param}).then(res=>{
                this.$message.success(res.data.msg);
                this.getmerchantList();
            }).catch(res=>{
                this.$message.error(res.data.msg);
            })
            
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