<template>
  <con-head title="保证金收取管理">
    <el-button type="primary" slot="append" @click="linkTo('takeMargin/collectEarnest')">诚意金收取</el-button>
    <el-button type="primary" slot="append" @click="linkTo('takeMargin/collectDeposit')">租赁保证金收取</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入店铺号/店铺名称" v-model="searchName" @keyup.enter="getTakeMarginList()"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname">商户</span>
            <el-select v-model="query.merchantId" placeholder="商户名称" class="dialogselect" @change="getTakeMarginList">
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
            <span class="inputname">合同</span>
            <el-select v-model="query.contractCode" placeholder="请选择合同" @change="getTakeMarginList()" class="dialogselect">
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
		<el-row slot="preappend">
			<div class="global-block">
				<button class="global-btn" @click="batchConfirm">确 定</button>
			</div>
		</el-row>
    <erp-table :header="header" :content="dataList" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>

    <erp-dialog :title="dialog.param.id? '修改结算组别': '添加结算组别'" :dialog="dialog"></erp-dialog>
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
              label: "收款单号",
              type: "link",
              name: "receiptNumber",
              linkStyle: {color: "#457fcf"},
              basehref: '#/finance/takeMargin/detail/',
              urlId: 'receiptNumber',
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
            },{
              label: "店铺名称",
              type: "text",
              name: "shopName"
            },{
              label: "阶段",
              type: "text",
              name: "stageText"
            },{
              label: "收款金额",
              type: "text",
              name: "receivedAmount"
            },
            {
              label: "收款时间",
              name: "receivedDate",
              type: "time",
              filter: "yyyy-MM-dd hh:mm:ss.S"
            },{
              label: "状态",
              type: "text",
              name: "statusText"
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
                  show: "showEdit",
                  type: "",
                  style: {
                    // color: "#902323"
                  },
                  class: "edit",
                  click: (item) => {
                    Object.assign(this.dialog.param, item);
                    if(item.stage == 0){
                        this.$router.push({path: '/finance/takeMargin/collectEarnest', query: {contractCode:item.contractCode, merchantId:item.merchantId,receiptNumber:item.receiptNumber,shopId: item.shopId, stage:0}})
                    }else{
                        this.$router.push({path: '/finance/takeMargin/collectDeposit', query: {contractCode:item.contractCode, merchantId:item.merchantId,receiptNumber:item.receiptNumber,shopId: item.shopId, stage:1}})
                    }
                    // this.dialog.dialogVisible = true;
                  }
                },
                {
                  label: "取消",
                  name: "edit",
                  show: "showCancel",
                  type: "",
                  style: {
                    // color: "#902323"
                  },
                  class: "delete",
                  click: (item, data) => {
                    this.cancelTakeMargin(item, data);
                  }
                },
                {
                  label: "删除",
                  name: "delete",
                  show: "showEdit",
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
              label: '编码',
              name: 'id',
              type: 'text',
              placeholder: '请输入编号'
            }, {
              label: '名称',
              name: 'name',
              type: 'text',
              placeholder: '请输入名称'
            }, {
              label: '备注',
              name: 'desc',
              type: 'text',
              placeholder: '请输入备注'
            }],
            dialogVisible: false,
            param: {
              id: "",
              name: "",
              desc: ""
            },
            options: [{
              label: "确 定",
              name: "submit",
              type: "primary",
              disabledFun: () => {
                return Object.values(this.dialog.param).some(item => {
                  console.log(item);
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
              label: '已确认',
              id: 1
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
        dataList: []
    };
  },
    watch:{
        searchName(){
            this.$delay(()=>{
                this.getTakeMarginList();
            },300)
        }
    },
    mounted() {
        this.getTakeMarginList();
        this.$api.rentapi.listUsingGET_12({
            status:1
        }).then(res=>{ //商户列表 status:4 已确定状态没加
            this.selects.merchants = res.data.data;
            this.dialog.models[0].options = res.data.data;
        }).catch(res=>{
            this.$message.error(res.data.msg);
        });
        this.$api.rentapi.getListForPageUsingGET({}).then(res=>{//合同列表 status:30 已确定状态没加
            this.selects.contracts = res.data.data.list;
            this.dialog.models[1].options = res.data.data.list;
        }).catch(res=>{
            this.$message.error(res.data.msg);
        });
    },
    methods: {
        getTakeMarginList(page={}, callback){
            let params ={
                shopName: this.searchName,
                shopCode: this.searchName,
                merchantId: this.query.merchantId,
                contractCode: this.query.contractCode,
                status: this.query.status,
                pageNum: page.pageNum,
                pageSize: page.pageSize
            }
            this.$api.financeapi.listUsingGET_4(params).then(res=>{
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
                        if (item.stage === 0 ) {
                            item.stageText = '意向';
                        }else if(item.stage === 1){
                            item.stageText = '正式';
                        }
                    })
                    this.dataList = res.data.data;
                }
            })
        },
        getCurrentPage(pageNum) {
          this.getTakeMarginList({pageNum});
        },
        getpageSize(pageSize) {
          this.getTakeMarginList({pageSize});
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
            this.getTakeMarginList();
        },
        filterIds() {
          const param = this.dataList.list.filter(item => {
            return item.checked === true;
          });
          let ids = [];
          param.forEach(item => {
            ids.push(item.receiptNumber);
          });
          return ids;
        },
        batchConfirm() {
          this.confirmIrregularCost(this.filterIds());
        },
        async confirmIrregularCost(param) {
          let params = {
              receiptNumbers: param
          };
          await this.$api.financeapi.bondConfirmsUsingPOST(params).then(returnObj => {
            if(returnObj.data.status === 200) {
                $message("success", returnObj.data.msg);
              this.getTakeMarginList({}, () => {
                $message("success", "确认成功!");
              });  
            } else {
              $message("error",  returnObj.data.msg);
            }       
          });
        },
        cancelDialog: function() {
          this.dialog.dialogVisible = false;
          this.dialog.param = {};
        },
        confirmDialog: function() {
          if (this.dialog.param.id) {
            // 修改
            this.dialog.dialogVisible = false;
            this.$store
              .dispatch("updateAccountGroup", {
                id: this.dialog.param.id,
                param: this.dialog.param
              })
              .then(() => {
                $message("success", "修改成功!");
              })
              .catch(error => {
                $message("error", !error.message? "无法修改，请重试!" : error.message);
              });
          } else {
            // 新增
            if (this.dialog.param.id && this.dialog.param.name) {
              this.dialog.dialogVisible = false;
              this.$store
                .dispatch("addAccountGroup", this.dialog.param)
                .then(() => {
                  $message("success", "添加成功!");
                })
                .catch(error => {
                  $message("error", !error.message? "无法添加，请重试!" : error.message);
                });
            }
          }
        },  
        deleteDialog: function(item) {//删除操作
          this.$confirm("此操作将永久删除该结算组别, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            this.$api.financeapi.deleteUsingDELETE_1({ receiptNumber: item.receiptNumber }).then(res => {
                if (res.data.status == 200) {
                  this.$message.success(res.data.msg);
                  this.getTakeMarginList();
                } else {
                  this.$message.error(res.data.msg);
                }
              })
              .catch(res => {
                this.$message.error(res.data.msg);
              });
            })
            .catch(() => {
              $message("info", "已取消删除!");
            });
        },
        cancelTakeMargin: function(item) {//取消操作
          this.$confirm("此操作将取消该条数据, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            this.$api.financeapi.cancelsUsingPUT_1({ receiptNumber: item.receiptNumber }).then(res => {
                if (res.data.status == 200) {
                  this.$message.success(res.data.msg);
                  this.getTakeMarginList();
                } else {
                  this.$message.error(res.data.msg);
                }
              })
              .catch(res => {
                this.$message.error(res.data.msg);
              });
            })
            .catch(() => {
              $message("info", "已取消!");
            });
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