<template>
  <con-head tab="tab">
    <div slot="appendtab" class="tabmenu">
        <router-link to="/finance/costAdjust" v-if="costAdjust">费用调整管理</router-link>
        <router-link to="/finance/costAdjustAudit" v-if="costAdjustAudit">费用调整审核</router-link>
    </div>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
          <input type="text" placeholder="请输入费用单号/合同号" v-model="query.costNo" @keyup.enter="getCostAdjust"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname inputnameauto">商户</span>
            <el-select v-model="query.merchantId" @change="query.contractCode='', getCostAdjust(),getMerchantId()" filterable clearable placeholder="商户名称" class="dialogselect">
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="item in selects.merchants"
                :key="item.id"
                :value="item.id"
                :label="item.merchantName">
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
                <a href="javascript:void(0)" v-for="status in selects.status"
                :key="status.id" 
                :class="{active:status.isStatus}" 
                @click="statusHandler(status)">{{status.label}}</a>
            </div>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname inputnameauto">合同</span>
            <el-select v-model="query.contractCode" @change="getCostAdjust" filterable clearable placeholder="合同" class="dialogselect">
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
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import erpDialog from "../../../components/Dialog";
import { queryAccountGroup, queryMerchant, queryContract,queryMerchantContract } from "@/utils/rest/financeAPI";

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
          label: "费用单号",
          type: "link",
          basehref: "#/finance/costAdjust/detail/",
          urlId: 'id',
          name: "costNo"
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
          label: "结算组别",
          type: "text",
          name: "settleGroupName"
        },
        {
          label: "金额",
          type: "fmoney",
          name: "sum"
        },
        {
          label: "录入日期",
          name: "createDate",
          type: "text",
          filter: "yyyy-MM-dd hh:mm:ss.S"
        },
        {
          label: "状态",
          type: "text",
          name: "statusText"
        }
      ],
      content: [],
      dialog: {
        param: {}
      },
      selects: {
        merchants: [],
        contracts: [],
        status: [{
          isStatus:true,
          id: JSON.stringify([10, 30]),
          label: '全部'
        }, {
          isStatus:false,
          id: 10,
          label: '新增'
        }, {
          isStatus:false,
          id: 30,
          label: '取消'
        }]
      },
      query: {
        costNo: '',
        merchantId: '',
        contractCode: '',
        status: '',
        statuses: [10, 30]
      }
    };
  },
  mounted() {},
  computed:{
      costAdjust(){
          return this.$root.menus.indexOf('/finance/costAdjust') >= 0;
      },
      costAdjustAudit(){
          return this.$root.menus.indexOf('/finance/costAdjustAudit') >= 0;
      }
  },
  methods: {
    linkTo(path) {
      this.$router.push({ path });
    },
    statusHandler(status){
			this.selects.status.forEach(function(obj){
					obj.isStatus = false;
			});
			status.isStatus = !status.isStatus;
      let statusId = JSON.parse(status.id);
      if (Array.isArray(statusId)) {
        this.query.statuses = statusId;
        this.query.status = '';
      } else {
        this.query.statuses = [];
        this.query.status = statusId;
      }
      this.getCostAdjust();
    },
    getCurrentPage(pageNum) {
      this.query.pageNum = pageNum;
      this.getCostAdjust();
    },
    getpageSize(pageSize) {
      this.query.pageSize = pageSize;
      this.getCostAdjust();
    },
    filterIds() {
      const param = this.content.list.filter(item => {
        return item.checked === true;
      });
      let ids = [];
      param.forEach(item => {
        ids.push(item.id);
      });
      return ids;
    },
    batchConfirm() {
      if(this.filterIds().length == 0) return $message('info', '请选择费用单号');
      this.confirmCostAdjust(this.filterIds());
    },
    async getCostAdjust(page={}, callback) {
      let params = {
        costNo: this.query.costNo,
        merchantId: this.query.merchantId,
        contractCode: this.query.contractCode,
        status: this.query.status,
        statuses: this.query.statuses,
        adjustType: 20,
        pageNum: this.query.pageNum,
        pageSize: this.query.pageSize
      };
      this.$api.financeapi.getlistUsingGET(params).then(res => {
        const data = res.data;
        if(data.status === 200) {
          data.data.list.forEach(item => {
            item.checked = false;
            if (item.status === 10) {
              item.showEdit = true;
              item.showCancel = false;
            }else if(item.status === 20){
              item.showEdit = false;
              item.showCancel = true;
            }else if (item.status === 30) {
              item.showEdit = true;
              item.showCancel = false;
            }
          });
          this.content = data.data;
          if(callback) callback();
        } else {
          return data.message;
        }        
      })
    },
    async confirmCostAdjust(param) {
      await this.$api.financeapi.confirmUsingPUT({id:param}).then(returnObj => {
        if(returnObj.data.status === 200) {
          this.getCostAdjust({}, () => {
            $message("success", "确认成功!");
          });  
        } else {
          $message("error", returnObj.data.msg);
        }       
      });
    },
    async deleteCostAdjust(id) {
      this.$confirm("此操作将永久删除该费用调整, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$api.financeapi.delUsingDELETE({id: [id]}).then(returnObj => {
            if(returnObj.data.status === 200) {
              this.getCostAdjust({}, () => {
                $message("success", "删除成功!");
              });  
            } else {
              $message("error", returnObj.data.msg);
            }       
          });
        });
      
    },
    async cancelCostAdjust(param) {
      let params = {
        id: param.id
      };
      await this.$api.financeapi.cancelUsingPUT(params).then(returnObj => {
        if(returnObj.data.status === 200) {
          this.getCostAdjust({}, () => {
            $message("success", "取消成功!");
          });
        } else {
          $message("error", returnObj.data.msg);
        }       
      });
    },
    async getMerchantId(){
      let [merchantsContracts] = await Promise.all([queryMerchantContract(this.query.merchantId)]);
      this.selects.contracts = merchantsContracts ? merchantsContracts.data : [];
    },
    async init() {
      let [merchants, merchantsContracts] = await Promise.all([
        queryMerchant(), queryMerchantContract()
      ]);
      this.selects.merchants = merchants.data;
      this.selects.contracts = merchantsContracts ? merchantsContracts.data : [];
      await this.getCostAdjust();
    }
  },
  watch:{
    'query.costNo': function(){
      this.$delay(()=>{
          this.getCostAdjust();
      },300)
    }
  },
  created() {
    this.init();
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