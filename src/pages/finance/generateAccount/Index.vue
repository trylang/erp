<template>
  <con-head title="结算单生成">
    <el-button type="primary" slot="append" :disabled="!query.settleGroupId || !query.settleDate" @click="createBill">生成结算单</el-button>
    <el-row slot="preappend">
      <el-col :span="7">
        <div class="searchselect">
          <span class="inputname">物业性质</span>
          <el-select v-model="query.propertyType" filterable clearable @change="getAccountGroupByType(query.propertyType), getGenetateAccount()" placeholder="物业性质" class="dialogselect">
            <el-option
              v-for="item in selects.shops"
              :key="item.id"
              :label="item.label"
              :value="item.id">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="7" :offset="1">
        <div class="searchselect">
            <span class="inputname inputnameauto">结算组别</span>
            <el-select v-model="query.settleGroupId" filterable clearable placeholder="结算组别" class="dialogselect">
              <el-option
                v-for="item in selects.accountGroup"
                :key="item.id"
                :label="item.settleGroupName"
                :value="item.id">
              </el-option>
            </el-select>
        </div>
      </el-col>
      <el-col :span="7"  :offset="1">
        <div class="searchinput">
            <span class="inputname inputnameauto">结算日</span>
            <el-date-picker
              v-model="query.settleDate"
              type="date"
              value-format="yyyy-MM-dd"
              :picker-options="pickerOptions"
              placeholder="选择日期">
            </el-date-picker>
        </div>
      </el-col>
    </el-row>
    <el-row class="tree_container" slot="preappend">
      <el-col :span="12">
        <div class="erp_container border_1px">
          <div class="searchbox search_box">
            <input type="text" placeholder="请输入商户名称/合同号" v-model="query.filterName" @keyup.enter="filterTree(query.filterName)"><i class="iconfont icon-sousuo"></i>
          </div>
          <el-tree
            :data="createTree"
            ref="tree"
            show-checkbox
            default-expand-all
            highlight-current
            :props="defaultProps"            
            node-key="id"
            @check-change="handleCheckChange">
            <span slot-scope="{ node, data }">
              <el-tooltip class="item" effect="dark" :content="node.label" placement="right-end">
                <span>{{ node.label }}</span>
              </el-tooltip> 
            </span>
          </el-tree>
        </div>
      </el-col>
    </el-row>
  </con-head>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import { formatTree, filterTree } from "@/utils";
import {
  queryAccountGroup,
  queryMerchant,
  queryContract
} from "@/utils/rest/financeAPI";

export default {
  name: "account-group",
  components: {
    conHead
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      createTree: [],
      originalTree: [],
      defaultProps: {
        children: "children",
        label: "label"
      },
      selects: {
        accountGroup: [], // 结算组别
        contracts: [], // 合同
        shops: [
          {
            id: 0,
            label: "商铺"
          },
          {
            id: 2,
            label: "场地"
          },
          {
            id: 3,
            label: "广告位"
          },
          {
            id: 1,
            label: "写字楼"
          }
        ],
      },
      query: {
        propertyType: "",
        settleGroupId: "",
        contractId: "",
        settleDate: "",
        filterName: "",
        contractId: []
      },
      timestamp:''
    };
  },
  mounted() {},
  methods: {
    filterTree(name) {
      if (!name) this.createTree = this.originalTree;
      this.createTree = filterTree(this.originalTree, name);
    },
    handleCheckChange(data, checked) {
    },
    async getProduceTokenData() {
      await this.$api.financeapi.getProduceToken().then(res => {
          if (res.data.status === 200) {
              this.timestamp = res.data.data
          }
      });
    },
    async getGenetateAccount() {
      let param = {
        propertyType: this.query.propertyType
      };
      await this.$api.financeapi.createListUsingGET(param).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.createTree = formatTree(returnObj.data.data);
          Object.assign(this.originalTree, this.createTree);
        }
      });
    },
    async createBill() {
      this.query.contracts = [];
      const nodes = this.$refs.tree.getCheckedNodes();
      nodes.forEach(item => {
          if (!item.children) {
              this.query.contracts.push({
                  contractCode: item.contractCode,
                  contractId: item.contractId
              });
          }
      });
      const request = {
        settleGroupId: this.query.settleGroupId,
        contracts: new Set(this.query.contracts),
        settleDate: this.query.settleDate
      };
      /*request.contracts = Array.from(request.contracts).forEach(item => {
          if(JSON.stringify(item) == "{}"){
              delete item;
          }
      })*/
      await this.$api.financeapi.createUsingPOST({
          $config:{
              params: {
                  timestamp: this.timestamp
              }
          },
          request
      }).then(returnObj => {
        if (returnObj.data.status === 200) {
          $message("success", returnObj.data.msg);
          this.getGenetateAccount();
        }else if(returnObj.data.status === 429){

        }else {
          $message('error', returnObj.data.msg);
        }
        this.getProduceTokenData();
      });
    },
    // 根据物业类型过滤结算组别
    async getAccountGroupByType(type) {
      this.query.settleGroupId = '';
      if (type === '' || type === undefined) return;
      await this.$api.financeapi.selectGroupsUsingGET({propertyTypeId: type}).then(res => {
        if (res.data.status === 200) {
          this.selects.accountGroup = res.data.data;
        }
      })
    },
    async init() {
      await this.getGenetateAccount();
    }
  },
  computed: {},
  watch:{
    'query.filterName': function(){
      this.$delay(()=>{
          this.filterTree(this.query.filterName)
      },300)
    }
  },
  created() {
    this.getProduceTokenData();
    this.init();
  }
};

</script>

<style scoped>
.tree_container {
  margin: 1.5rem 0;
  padding: 1rem 0;
}
.search_box {
  margin: 20px 10px;
  width: 85%;
}
.border_1px {
  border: 1px solid #e5e5e5;
}
</style>