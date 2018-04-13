<template>
  <con-head title="免租管理">
    <el-button type="primary" slot="append" @click="linkTo('rentFree/addRentFree')">录入</el-button>
    <el-row slot="preappend">
      <el-col :span="9">
        <div class="searchbox">
          <input type="text" placeholder=" 请输入费用单号" v-model="query.costNo" @keyup.enter="getIrregularCost()"><i class="iconfont icon-sousuo"></i>
        </div>
      </el-col>
      <el-col :span="9" :offset="6">
        <div class="searchselect">
            <span class="inputname">商户</span>
            <el-select v-model="query.merchantId" placeholder="商户名称" @change="getIrregularCost()" class="dialogselect">
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
            <span class="inputname">合同</span>
            <el-select v-model="query.contractId" placeholder="请选择"  @change="getIrregularCost()" class="dialogselect">
              <el-option
                v-for="item in selects.contracts"
                :key="item.id"
                :label="item.contractCode"
                :value="item.id">
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
import qs from 'qs'

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
              name: "costNo",
              linkStyle: {color: "#457fcf"},
              basehref: '#/finance/rentFree/detail/',
              urlId: 'id',
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
              label: "免租金额",
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
                    this.$router.push({path: '/finance/rentFree/addRentFree', query: { id: item.id, contractId: item.contractId, merchantId: item.merchantId, settleGroupId: item.settleGroupId }})
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
                },
                {
                  label: "删除",
                  show: "showEdit",
                  style: {
                    // color: "#093216"
                  },
                  class: "delete",
                  click: (item, data) => {
                    this.deleteIrregularCost(item.id);
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
        contracts: [],//合同
        merchants: [],//商户
        status: [{
          isStatus:true,
          label: '全部',
          id: ''
        }, {
          isStatus:false,
          label: '新增',
          id: 10
        }, {
          isStatus:false,
          label: '已确认',
          id: 20
        }, {
          isStatus:false,
          label: '取消',
          id: 30
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
  mounted() {
    this.$api.rentapi.listUsingGET_12({
        status:1
    }).then(res=>{ //商户列表 status:4 已确定状态没加
        this.selects.merchants = res.data.data;
    }).catch(res=>{
        this.$message.error(res.data.msg);
    });
    this.$api.rentapi.getListForPageUsingGET({status:30}).then(res=>{//合同列表
        this.selects.contracts = res.data.data.list;
    }).catch(res=>{
        this.$message.error(res.data.msg);
    });
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
        this.query.status = status.id;
        this.getIrregularCost();
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
      return ids;
    },
    batchConfirm() {
      this.confirmIrregularCost(this.filterIds());
    },
    async getIrregularCost(page={}, callback) {
      let params = {
        costNo: this.query.costNo,
        merchantId: this.query.merchantId,
        contractId: this.query.contractId,
        status: this.query.status,
        pageNum: page.pageNum,
        pageSize: page.pageSize
      };
      this.$api.financeapi.listUsingGET_16(params).then(res => {
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
            }else if(item.status === 30) {
              item.showEdit = true;
              item.showCancel = false;
            } 
          });
          this.content = data.data;
          if(callback) callback();
        } else {
          $message('error', data.msg);
        }        
      })
    },
    async confirmIrregularCost(param) {
      let params = {
        id: param
      };
      await this.$api.financeapi.confirmUsingPUT_4(params).then(returnObj => {
        if(returnObj.data.status === 200) {
          this.getIrregularCost({}, () => {
            $message("success", "确认成功!");
          });  
        } else {
          $message("error", "确认失败!");
        }       
      });
    },
    async deleteIrregularCost(id) {
      this.$confirm("此操作将永久删除该费用调整, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$api.financeapi.delUsingDELETE_7({id}).then(returnObj => {
            if(returnObj.data.status === 200) {
              this.getIrregularCost({}, () => {
                $message("success", "删除成功!");
              });  
            } else {
              $message("error", returnObj.data.msg);
            }       
          });
        })
        .catch(() => {
          $message("info", "已取消删除!");
        });
    },
    async cancelIrregularCost(param) {
      let params = {
        id: param.id
      };
      await this.$api.financeapi.cancelUsingPUT_5(params).then(returnObj => {
        if(returnObj.data.status === 200) {
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