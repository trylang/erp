<template>
  <con-head tab="tab">
    <div slot="appendtab" class="tabmenu">
        <router-link to="/finance/takeadvancePay" v-if="takeadvancePay">预付款收取</router-link>
        <router-link to="/finance/takeadvancePayAudit" v-if="takeadvancePayAudit">预付款审核</router-link>
    </div>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
            <input type="text" placeholder="请输入收款单号" v-model="searchName" @keyup.enter="getAdvanceList()"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname inputnameauto">商户</span>
            <el-select v-model="query.merchantId" placeholder="请选择商户名称" filterable clearable @change="checkShopNameList(query.merchantId)" class="dialogselect">
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
                <a href="javascript:void(0)" v-for="status in selects.status" :key="status.id" :class="{active:status.isStatus}" @click="statusHandler(status)">{{status.label}}</a>
                <!-- <el-radio-button v-for="status in selects.status" :key="status.id" :class="{active:status.isStatus}">{{status.label}}</el-radio-button> -->
            </div>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname inputnameauto">合同</span>
            <el-select v-model="query.contractId" placeholder="请选择合同" filterable clearable @change="getAdvanceList()" class="dialogselect">
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="item in selects.contracts"
                :key="item.id"
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
    <erp-dialog v-loading.fullscreen="dialog.loading" :title="dialog.param.id?'预付款编辑':'预付款收取'" :dialog="dialog"></erp-dialog>
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
      dataList: [],
      header: [
        {
          label: "",
          name: "checked",
          type: "checkbox"
        },
        {
          label: "收款单号",
          type: "text",
          name: "receiptNumber"
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
          label: "收款金额",
          type: "fmoney",
          name: "receivedAmount"
        },
        {
          label: "收款日期",
          type: "time",
          filter: "yyyy-MM-dd",
          name: "receivedDate"
        },
        {
          label: "收款方式",
          type: "text",
          name: "paymentName"
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
        models: [
          {
            label: "商户",
            name: "merchantId",
            type: "select",
            value: "id",
            valueLabel: "merchantName",
            options: [],
            placeholder: "请选择商户",
            async event(id) {//dialog 根据商户id查询合同
              _this.dialog.models[1].optionsGroups = [];
              await _this.getSelectedcontracts(id);               
            },
          },
          {
            label: "合同编号",
            name: "contractItem", //这里需要给他传shopId和contractCode，下拉列表必须传两个值
            type: "custom_select",
            value: "contractCode", // 传值参数
            valueLabel: "contractAndShop", // 显示名称参数
            optionsStyle: { "padding-right": "10px" },
            optionsGroups: [],
            placeholder: "请选择合同编号"
          },
          {
            label: "收款方式",
            name: "paymentCode",
            type: "select",
            value: "id",
            valueLabel: "name",
            options: [],
            placeholder: "请选择收款方式"
          },
          {
            label: "收款金额",
            name: "receivedAmount",
            type: "text",
            placeholder: "请输入收款金额"
          },
          {
            label: "收款日期",
            name: "receivedDate",
            type: "date",
            placeholder: "请选择时间"
          },
          {
            label: "备注(选填)",
            name: "remark",
            type: "textarea",
            placeholder: "请输入"
          }
        ],
        dialogVisible: false,
        loading: false,
        param: {
          id: "",
          merchantId: "",
          contractItem: "",
          paymentCode: "",
          receivedAmount: "",
          receivedDate: "",
          // remark: ""
        },
        options: [
          {
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
          },
          {
            label: "取 消",
            name: "edit",
            type: "",
            click: () => {
              this.cancelDialog();
            }
          }
        ]
      },
      selects: {
        dialogGroupContracts: [],
        contracts: [], //合同
        merchants: [], //商户
        status: [
          {
            isStatus: true,
            label: "全部",
            id: ""
          },
          {
            isStatus: false,
            label: "新增",
            id: 0
          },
          {
            isStatus: false,
            label: "取消",
            id: 2
          }
        ]
      },
      query: {
        searchName: "",
        merchantId: "",
        contractId: "",
        status: ""
      },
      searchName: ""
    };
  },
  watch: {
    searchName() {
      this.$delay(() => {
        this.getAdvanceList();
      }, 300);
    }
  },
  mounted() {
    this.getAdvanceList();
    // this.$api.rentapi.listUsingGET_12({status: 1}).then(res => {//商户列表 status:1 已确定状态
    //     res.data.data.map(item => {
    //       return item.merchantName = `${item.merchantCode}（${item.merchantName}）`;
    //     });
    //     this.selects.merchants = res.data.data;
    //     this.dialog.models[0].options = res.data.data;
    // })
    this.$api.rentapi.listForFormalUsingGET().then(res => {//已经确定过合同的商户列表
        this.selects.merchants = res.data.data;
        this.dialog.models[0].options = res.data.data;
    })
    this.checkShopNameList(-1); //合同下拉
    this.$api.systemapi.typeListUsingGET({ nameOrCode: "0006" }).then(res => {//类型code
      let paymentCode = res.data.data[0].code;
      this.$api.systemapi.itemListUsingGET({ code: paymentCode }).then(res => {//根据code查询付款方式
        this.dialog.models[2].options = res.data.data;
      });
    });
    
  },
  computed:{
      takeadvancePay(){
          return this.$root.menus.indexOf('/finance/takeadvancePay') >= 0;
      },
      takeadvancePayAudit(){
          return this.$root.menus.indexOf('/finance/takeadvancePayAudit') >= 0;
      }
  },
  methods: {
    checkShopNameList(merchantId){  //根据商户id查合同
        this.query.contractId = '';
        let merchantIds = merchantId==-1?'' : merchantId;
        this.$api.rentapi.listFormalContractUsingGET({merchantId: merchantIds}).then(res => {
            this.selects.contracts = res.data.data;
            this.getAdvanceList();
        }).catch(res => {
            this.$message.error(res.data.msg);
        });
    },
    getAdvanceList(page = {}, callback) {
      let params = {
        receiptNumber: this.searchName,
        merchantId: this.query.merchantId,
        contractCode: this.query.contractId,
        status: this.query.status,
        pageNum: this.query.pageNum,
        pageSize: this.query.pageSize
      };
      this.$api.financeapi.confirmslistUsingGET_2(params).then(res => {
          if (res.data.status === 200) {
            res.data.data.list.forEach(item => {
              item.checked = false;
              if (item.status === 0) {
                item.statusText = "新增";
                item.showEdit = true;
                item.showCancel = false;
              } else if (item.status === 1) {
                item.statusText = "已确认";
                item.showEdit = false;
                item.showCancel = true;
              } else if (item.status === 2) {
                item.statusText = "取消";
                item.showEdit = true;
                item.showCancel = false;
              }
            });
            this.dataList = res.data.data;
            if (callback) callback();
          }
        }).catch(res => {
          this.$message.error(res.data.msg);
        });
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
      this.$api.financeapi.confirmsTakeadvancePay(params).then(res => {
        if (res.data.status === 200) {
          this.getAdvanceList({}, () => {
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
    getCurrentPage(pageNum) {
      this.query.pageNum = pageNum;
      this.getAdvanceList();
    },
    getpageSize(pageSize) {
      this.query.pageSize = pageSize;
      this.getAdvanceList();
    },
    statusHandler(status) {
      this.selects.status.forEach(function(obj) {
        obj.isStatus = false;
      });
      status.isStatus = !status.isStatus;
      this.query.status = status.id;
      this.getAdvanceList();
    },
    cancelDialog: function() {
      this.dialog.dialogVisible = false;
      this.dialog.param = {};
    },
    confirmDialog: function() {
      this.dialog.loading = true;
      if (this.dialog.param.id) {
        // 修改
        this.editAccountGroup(this.dialog.param);
      } else {
        // 新增
        this.addAccountGroup(this.dialog.param);
      }
    },
    async getSelectedcontracts(id) {
      await this.$api.rentapi.getContractShopByMerchantUsingGET({merchantId: id}).then(res => {
        if (res.data.status === 200) {
          this.selects.dialogGroupContracts = res.data.data;
          const contractsObj = Object.assign({label: '合同编号 店铺号 店铺'}, {options: res.data.data});
          this.dialog.models[1].optionsGroups = new Array(contractsObj);
        } 
      });  
    },
    addAccountGroup(param) {
      const contractItem = this.selects.dialogGroupContracts.find(item => item.contractCode === this.dialog.param.contractItem);
      //收取 新增      
      let params = {
        merchantId: this.dialog.param.merchantId,
        paymentCode: this.dialog.param.paymentCode,
        receivedAmount: this.dialog.param.receivedAmount,
        receivedDate: this.dialog.param.receivedDate,
        remark: this.dialog.param.remark,
        shopId: contractItem.shopId,
        contractCode: contractItem.contractCode
      }; //合同列表需要多传一个shopId
      this.$api.financeapi.saveUsingPOST_5({ request: params }).then(res => {
        if (res.data.status === 200) {
            this.dialog.dialogVisible = false;
            this.dialog.loading = false;
          this.getAdvanceList({}, () => {
              this.dialog.dialogVisible = false;
              this.dialog.loading = false;
            $message("success", res.data.msg);
          });
        } else {
            this.dialog.loading = false;
          $message("error", res.data.msg);
        }
      });
    },
    editAccountGroup(param) {
      //编辑
      this.$api.financeapi.updateUsingPUT_10({ request: param }).then(res => {
        if (res.data.status === 200) {
          this.getAdvanceList({}, () => {
            $message("success", "修改成功!");
            this.dialog.dialogVisible = false;
            this.dialog.loading = false;
          });
        } else {
            this.dialog.loading = false;
          $message("error", res.data.msg);
        }
      });
    },
    deleteDialog: function(item) {
      this.$confirm("是否删除该条数据?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$api.financeapi
          .deleteUsingDELETE_4({ id: item.id })
          .then(res => {
            if (res.data.status == 200) {
              this.$message.success(res.data.msg);
              this.getAdvanceList();
            } else {
              this.$message.error(res.data.msg);
            }
          })
          .catch(res => {
            this.$message.error(res.data.msg);
          });
      });
    },
    cancelTakeAdPay: function(item) {//取消操作
      this.$confirm("此操作将取消该条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$api.financeapi.cancelsUsingPUT_3({ id: item.id }).then(res => {
            if (res.data.status == 200) {
              this.$message.success(res.data.msg);
              this.getAdvanceList();
            } else {
              this.$message.error(res.data.msg);
            }
          })
          .catch(res => {
            this.$message.error(res.data.msg);
          });
        })
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.line-nav {
  flex: 1;
  line-height: 30px;
}
.line-nav a {
  margin: 0 10px;
  color: #666;
  font-weight: bold;
  height: 30px;
  text-decoration: none;
  display: inline-block;
}
.line-nav a.active {
  color: #457fcf;
  border-bottom: 2px solid #457fcf;
}
.global-block {
  margin-top: 1rem;
}
</style>