<template>
  <con-head tab="tab">
    <div slot="appendtab" class="tabmenu">
        <router-link to="/finance/dealMargin" v-if="dealMargin">保证金处理</router-link>
        <router-link to="/finance/dealMarginAudit" v-if="dealMarginAudit">保证金处理审核</router-link>
    </div>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入处理单号/合同号" v-model="searchName" @keyup.enter="getDealMarginList()"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname inputnameauto">商户</span>
            <el-select v-model="query.merchantId" placeholder="商户名称" filterable clearable class="dialogselect" @change="checkContractList(query.merchantId)">
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
            <span class="inputname">状态：</span>
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
            <span class="inputname inputnameauto">合同</span>
            <el-select v-model="query.contractCode" placeholder="请选择合同" filterable clearable @change="getDealMarginList()" class="dialogselect">
              <el-option label="全部" value=""></el-option>
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
		<el-row slot="preappend">
			<div class="global-block">
				<button class="global-btn" @click="batchConfirm">确 定</button>
			</div>
		</el-row>
    <erp-table :header="header" :content="dataList" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
    <erp-dialog v-loading="dialog.loading" title="保证金处理" :dialog="dialog"></erp-dialog>
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
          label: "",
          name: "checked",
          type: "checkbox"
        },
        {
          label: "处理单号",
          type: "text",
          name: "dealNumber"
        },
        {
          label: "合同号",
          type: "text",
          name: "contractCode"
        },
        {
          label: "商户名称",
          type: "text",
          name: "merchantName"
        },
        {
          label: "店铺名称",
          type: "text",
          name: "shopName"
        },
        {
          label: "金额",
          type: "fmoney",
          name: "dealAmount"
        },
        {
          label: "类型",
          type: "text",
          name: "typeText"
        },
        {
          label: "处理日期",
          type: "text",
          name: "dealDate"
        },
        {
          label: "备注",
          type: "text",
          name: "remark"
        },
        {
          label: "状态",
          type: "text",
          name: "statusText"
        }
      ],
      dialog: {
        models: [{
          label: '处理方式：',
          name: 'typeText',
          type: 'text',
          placeholder: ''
        }, {
          label: '处理金额：',
          name: 'dealAmount',
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
          typeText: "",
          dealAmount: "",
          remark: ""
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
      selects: {
        merchants: [],
        contracts: [],
        status: [{
          isStatus:true,
          label: '全部',
          id: ''
        }, {
          isStatus:false,
          label: '新增',
          id: 0
        }, {
          isStatus:false,
          label: '取消',
          id: 2
        }]
      },
      query: {
        searchName: '',
        merchantId: '',
        contractCode: '',
        status: ''
      },
      searchName: '',
      dataList:[],
    };
  },
  watch:{
      searchName(){
          this.$delay(()=>{
              this.getDealMarginList();
          },300)
      }
  },
  computed:{
      dealMargin(){
          return this.$root.menus.indexOf('/finance/dealMargin') >= 0;
      },
      dealMarginAudit(){
          return this.$root.menus.indexOf('/finance/dealMarginAudit') >= 0;
      }
  },
  mounted() {
    this.getDealMarginList();
    this.$api.rentapi.listIntentAndFormalUsingGET().then(res=>{ //商户列表
        this.selects.merchants = res.data.data;
    })
    this.checkContractList(-1); //合同下拉
  },
  methods: {
    checkContractList(merchantId){
        this.query.contractCode = '';
        this.getDealMarginList();
        let merchantIds = merchantId==-1?'' : merchantId;
        this.$api.rentapi.listIntentAndFormalContractUsingGET({merchantId: merchantIds}).then(res=>{//合同列表
            this.selects.contracts = res.data.data;
        })
    },
    getDealMarginList(page={}, callback){
        let params ={
            dealNumber: this.searchName,
            contractCode: this.query.contractCode,
            merchantId: this.query.merchantId,
            status: this.query.status,
            pageNum: this.query.pageNum,
            pageSize: this.query.pageSize
        }
        this.$api.financeapi.confirmlistUsingGET_8(params).then(res=>{
            if(res.data.status === 200){
                res.data.data.list.forEach(item=>{
                    item.checked = false;
                    if (item.status === 0 ) {
                        item.statusText = '新增';
                        item.showEdit = true;
                        item.showCancel = false;
                    }else if(item.status === 1){
                        item.statusText = '已确认';
                        item.showEdit = false;
                        item.showCancel = true;
                    }else if(item.status === 2){
                        item.statusText = '取消';
                        item.showEdit = true;
                        item.showCancel = false;
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
      this.getDealMarginList();
    },
    getpageSize(pageSize) {
      this.query.pageSize = pageSize;
      this.getDealMarginList();
    },
    filterIds() {
      const param = this.dataList.list.filter(item => {
        return item.checked === true;
      });
      let ids = [];
      param.forEach(item => {
        ids.push(item.id);
      });
      return ids;
    },
    batchConfirm() {
      this.confirmIrregularCost(this.filterIds());
    },
    confirmIrregularCost(param) {
        let params = {
            ids: param
        };
        this.$api.financeapi.confirmsUsingPOST(params).then(returnObj => {
            if(returnObj.data.status === 200) {
                $message("success", returnObj.data.msg);
              this.getDealMarginList({}, () => {
                $message("success", returnObj.data.msg);
              });
            } else {
              $message("error", returnObj.data.msg);
            }       
        });
    },
    linkTo(path) {
      this.$router.push({ path });
    },
    statusHandler(status){
		this.selects.status.forEach(function(obj){
			obj.isStatus = false;
		});
		status.isStatus = !status.isStatus
        this.query.status = status.id;
        this.getDealMarginList();
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {//编辑
        
        this.dialog.loading = true;
        let params = {
            request: this.dialog.param
        }
        this.$api.financeapi.updateUsingPUT_1(params).then(res=>{
            if(res.data.status === 200){
                this.$message.success(res.data.msg);
                this.getDealMarginList();
                this.dialog.dialogVisible = false;
                this.dialog.loading = false;
            }else{
                this.dialog.loading = false;
                this.$message.error(res.data.msg);
            }
        }).catch(res=>{
            this.dialog.loading = false;
            this.$message.error(res.data.msg);
        });
    },
    deleteDialog: function(item) {
      this.$confirm("是否删除该条数据?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(()=>{
        this.$api.financeapi.deleteUsingDELETE({ id: item.id }).then(res => {
            if (res.data.status == 200) {
              this.$message.success(res.data.msg);
              this.getDealMarginList();
            } else {
              this.$message.error(res.data.msg);
            }
        }).catch(res => {
            this.$message.error(res.data.msg);
        });
      });
    },
    cancelsDialog: function(item) {
      this.$confirm("是否要取消该条数据?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(()=>{
        this.$api.financeapi.cancelsUsingPUT({ id: item.id }).then(res => {
            if (res.data.status == 200) {
              this.$message.success(res.data.msg);
              this.getDealMarginList();
            } else {
              this.$message.error(res.data.msg);
            }
        }).catch(res => {
            this.$message.error(res.data.msg);
        });
      })
    }
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
		.global-block {
			margin-top: 1rem;
		}
		
</style>