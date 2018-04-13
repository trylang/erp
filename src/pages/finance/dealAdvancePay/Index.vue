<template>
  <con-head title="预付款处理">
    <el-button type="primary" slot="append" @click="dialog.dialogVisible = true, dialog.param={merchantId: '', contractCode: '', dealAmount: ''}">处理</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入处理单号" v-model="searchName" @keyup.enter="getDealList()"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname">商户</span>
            <el-select v-model="query.merchantId" placeholder="商户名称" class="dialogselect" @change="getDealList()">
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
            <el-select v-model="query.contractCode" placeholder="请选择合同" class="dialogselect" @change="getDealList()">
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

    <erp-dialog title="预付款收取" :dialog="dialog"></erp-dialog>
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
    let _this = this;
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
              type: "text",
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
                  show: "showEdit",
                  style: {
                    // color: "#902323"
                  },
                  class: "edit",
                  click: (item) => {
                    Object.assign(this.dialog.param, item);
                    this.dialog.dialogVisible = true;
                  }
                },{
                  label: "取消",
                  name: "delete",
                  type: "",
                  show: "showCancel",
                  style: {
                    // color: "#902323"
                  },
                  class: "delete",
                  click: (item) => {
                    Object.assign(this.dialog.param, item);
                    this.dialog.dialogVisible = true;
                    this.cancelsDialog(item, data);
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
            models: [
                {
                  label: '商户',
                  name: 'merchantId',
                  type: 'select',
                  value: 'id',
                  valueLabel: 'merchantName',
                  options: [],
                  placeholder: '请选择商户',
                  async event(id) {//dialog 根据商户id查询合同
                      await _this.$api.rentapi.getContractShopByMerchantUsingGET({merchantId: id}).then(res => {
                          if (res.data.status === 200) {
                              _this.dialog.models[1].options = res.data.data;
                          } 
                      });
                  },
                }, {
                  label: '合同编号',
                  name: 'contractCode',
                  type: 'select',
                  value: 'contractCode',
                  valueLabel: 'contractCode',
                  options: [],
                  placeholder: '请选择合同编号'
                }, {
                  label: '处理金额',
                  name: 'dealAmount',
                  type: 'text',
                  placeholder: '请输入收款金额'
                }, {
                  label: '备注',
                  name: 'remark',
                  type: 'textarea',
                  placeholder: '请输入备注'
                }
            ],
            dialogVisible: false,
            param: {
              id: "",
              merchantId: '',
              contractCode: '',
              dealAmount: '',
              remark: ''
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
              label: '已确认',
              id: 1
            }, {
              isStatus:false,
              label: '取消',
              id: 2
            }]
        },
        query: {
            searchName: "",
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
                this.getDealList();
            },300)
        }
    },
    mounted() {
        this.getDealList();
        this.$api.rentapi.listUsingGET_12({status: 1}).then(res=>{ //商户列表
            this.selects.merchants = res.data.data;
            // this.dialog.models[0].options = res.data.data;
        }).catch(res=>{
            this.$message.error(res.data.msg);
        });
        this.$api.rentapi.getListForPageUsingGET({status: 30}).then(res=>{//合同列表
            this.selects.contracts = res.data.data.list;
            // this.dialog.models[1].options = res.data.data.list;
        }).catch(res=>{
            this.$message.error(res.data.msg);
        });
        this.$api.rentapi.getMerchantForAdvancePaymentUsingGET().then(res => {
            this.dialog.models[0].options = res.data.data;//已经确定过合同的商户列表
        }).catch(res => {
            this.$message.error(res.data.msg);
        });
    },
    methods: {
        getDealList(page={}, callback){
            let params ={
                dealNumber: this.searchName,
                merchantId: this.query.merchantId,
                contractCode: this.query.contractCode,
                status: this.query.status,
                pageNum: page.pageNum,
                pageSize: page.pageSize
            }
            this.$api.financeapi.listUsingGET_14(params).then(res=>{
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
                        if (item.type === 0 ) {
                            item.typeText = '罚没';
                        }else if(item.type === 1){
                            item.typeText = '归还';
                        }
                    })
                    this.dataList = res.data.data;
                }
            })
        },
        getCurrentPage(pageNum) {
          this.getDealList({pageNum});
        },
        getpageSize(pageSize) {
          this.getDealList({pageSize});
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
            this.$api.financeapi.confirmsPrepayment(params).then(returnObj => {
                if(returnObj.data.status === 200) {
                  this.getDealList({}, () => {
                    $message("success", "确认成功!");
                  });
                } else {
                  $message("error", "确认失败!");
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
            this.getDealList();
        },
        cancelDialog: function() {
            this.dialog.dialogVisible = false;
            this.dialog.param = {};
        },
        confirmDialog() {
          if (this.dialog.param.id) { // 修改
            this.dialog.dialogVisible = false;
            let params = {
                param: this.dialog.param
            };
            this.$api.financeapi.updateUsingPUT_9( this.dialog.param ).then(res=>{
                if(res.data.status === 200){
                    this.$message.success(res.data.msg);
                    this.getDealList();
                }
            }).catch(res=>{
                this.$message.error(res.data.msg);
            });
          } else { // 新增
            let params = {
                contractCode: this.dialog.param.contractCode,
                merchantId: this.dialog.param.merchantId,
                dealAmount: this.dialog.param.dealAmount,
                remark: this.dialog.param.remark
            };
            this.$api.financeapi.saveUsingPOST_4({request: this.dialog.param}).then(res=>{
                this.$message.success(res.data.msg);
                this.getDealList();
            }).catch(res=>{
                this.$message.error(res.data.msg);
            });
          }
        },
        deleteDialog: function(item) {
          this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
              this.$api.financeapi.deleteUsingDELETE_3({id: item.id}).then(res =>{
                  if(res.data.status==200){
                      this.$message.success(res.data.msg);
                      this.getDealList();
                  }else{
                      this.$message.error(res.data.msg);
                  }
              }).catch(res => {
                  this.$message.error(res.data.msg);
              });
            })
         .catch(() => {
            $message("info", "已取消删除!");
         });
        },
        cancelsDialog: function(item) {
          this.$confirm("是否要取消该条数据?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(()=>{
            this.$api.financeapi.cancelsUsingPUT_2({ id: item.id }).then(res => {
                if (res.data.status == 200) {
                  this.$message.success(res.data.msg);
                  this.getDealList();
                } else {
                  this.$message.error(res.data.msg);
                }
            }).catch(res => {
                this.$message.error(res.data.msg);
            });
          }).catch(() => {
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