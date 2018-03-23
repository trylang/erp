<template>
  <con-head title="不规则费用管理">
    <el-button type="primary" slot="append" @click="linkTo('irregularCost/entering')">录入</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
          <input type="text" placeholder="请输入收款单号\合同号\票据号" v-model="query.costNo"><i class="iconfont icon-sousuo" @click="queryList(query)"></i>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname">商户</span>
            <el-select v-model="query.merchantId" placeholder="商户名称" class="dialogselect">
              <el-option
                v-for="item in selects.expenses"
                :key="item.id"
                :value="item.label">
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
                <!-- <el-radio-button v-for="status in selects.status" :key="status.id" :class="{active:status.isStatus}">{{status.label}}</el-radio-button> -->
            </div>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname">物业性质</span>
            <el-select v-model="query.name" placeholder="商铺" class="dialogselect">
              <el-option
                v-for="item in selects.shops"
                :key="item.id"
                :value="item.label">
              </el-option>
            </el-select>
        </div>
      </el-col>
    </el-row>
		<el-row slot="preappend">
			<div class="global-block">
				<button class="global-btn" @click="batchConfirm">确 定</button>	
				<button class="global-btn" @click="batchDelete">删 除</button>	
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
          type: "text",
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
          type: "text",
          name: "sum"
        },
        {
          label: "录入日期",
          name: "updateDate",
          type: "time",
          filter: "yyyy-MM-dd hh:mm:ss.S"
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
              show: "showEdit",
              style: {
                // color: "#902323"
              },
              class: "edit",
              click: function(item) {
                Object.assign(this.dialog.param, item);
                this.$router.push({path: '/finance/irregularCost/entering', query: { id: item.id, contractId: item.contractId, merchantId: item.merchantId, settleGroupId: item.settleGroupId }})
              }.bind(this)
            },
            {
              label: "取消",
              show: "showCancel",
              style: {
                // color: "#093216"
              },
              class: "delete",
              click: (item, data) => {
                this.cancelIrregularCost(item, data);
              }
            }
          ]
        }
      ],
      content: [],
      dialog: {
        param: {}
      },
      selects: {
        shops: [{
          id: 1,
          label: '商铺1'
        }, {
          id: 2,
          label: '商铺2'
        }],
        expenses: [{
          id: 11,
          label: '费用11'
        }, {
          id: 22,
          label: '费用22'
        }],
        status: [{
          isStatus:true,
          label: '全部'
        }, {
          isStatus:false,
          label: '新增'
        }, {
          isStatus:false,
          label: '已确认'
        }, {
          isStatus:false,
          label: '取消'
        }]
      },
      query: {
        costNo: '',
        merchantId: '',
        contractId: '',
        status: ''
      }
    };
  },
  mounted() {},
  methods: {
    linkTo(path) {
      this.$router.push({ path });
    },
    statusHandler(status){
			this.selects.status.forEach(function(obj){
					obj.isStatus = false;
			});
			status.isStatus = !status.isStatus;
      this.query.status = status.isStatus;
    },
    getCurrentPage(pageNum) {
      this.getIrregularCost({pageNum});
    },
    getpageSize(pageSize) {
      this.getIrregularCost({pageSize});
    },
    filterIds() {
      const param = this.content.list.filter(item => {
        return item.checked === true;
      });
      let ids = [];
      param.forEach(item => {
        ids.push(item.id);
      });
      return ids.toString();
    },
    batchConfirm() {
      this.confirmIrregularCost(this.filterIds());
    },
    batchDelete() {
      this.deleteIrregularCost(this.filterIds());
    },
    async getIrregularCost(page={}, callback) {
      let params = {
        // costNo: this.query.costNo || null,
        // merchantId: this.query.merchantId || null,
        // contractId: this.query.contractId || null,
        // status: this.query.status || null,
        pageNum: page.pageNum,
        pageSize: page.pageSize
      };
      this.$api.financeapi.listUsingGET_12(params).then(res => {
        const data = res.data;
        if(data.code === 200) {
          data.data.list.forEach(item => {
            item.checked = false;
            if (item.status === 10) {
              item.showEdit = true;
              item.showCancel = false;
            }
            if (item.status >= 20) {
              item.showEdit = false;
              item.showCancel = true;
            }
          });
          this.content = data.data;
          if(callback) callback();
        } else {
          return data.message;
        }        
      })
    },
    async confirmIrregularCost(param) {
      let params = {
        id: param
      };
      await this.$api.financeapi.confirmUsingPUT_4(params).then(returnObj => {
        if(returnObj.data.code === 200) {
          this.getIrregularCost({}, () => {
            $message("success", "确认成功!");
          });  
        } else {
          $message("error", "确认失败!");
        }       
      });
    },
    async deleteIrregularCost(param) {
      let params = {
        id: param
      };
      await this.$api.financeapi.delUsingDELETE_3(params).then(returnObj => {
        if(returnObj.data.code === 200) {
          this.getIrregularCost({}, () => {
            $message("success", "删除成功!");
          });  
        } else {
          $message("error", "删除失败!");
        }       
      });
    },
    async cancelIrregularCost(param) {
      let params = {
        id: param.id
      };
      await this.$api.financeapi.cancelUsingPUT_4(params).then(returnObj => {
        if(returnObj.data.code === 200) {
          this.getIrregularCost({}, () => {
            $message("success", "取消成功!");
          });
        } else {
          console.log('cuowu')
          $message("error", "取消失败!");
        }       
      });
    }
  },
  computed: {},
  created() {
    this.getIrregularCost();
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