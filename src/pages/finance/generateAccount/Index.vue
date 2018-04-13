<template>
  <con-head title="结算单生成">
    <el-button type="primary" slot="append" @click="createBill">生成结算单</el-button>
    <el-row slot="preappend">
      <!-- <el-col :span="9">
        <div class="searchselect">
          <span class="inputname">物业类型</span>
          <el-select v-model="query.name" placeholder="物业类型" class="dialogselect">
            <el-option
              v-for="item in selects.accountGroup"
              :key="item.id"
              :value="item.label">
            </el-option>
          </el-select>
        </div>
      </el-col> -->
      <el-col :span="9">
        <div class="searchselect">
            <span class="inputname">结算组别</span>
            <el-select v-model="query.settleGroupId" placeholder="结算组别" class="dialogselect">
              <el-option
                v-for="item in selects.accountGroup"
                :key="item.id"
                :label="item.settleGroupName"
                :value="item.id">
              </el-option>
            </el-select>
        </div>
      </el-col>
      <el-col :span="9"  :offset="6">
        <div class="searchselect">
            <span class="inputname">结算日</span>
            <el-date-picker
              v-model="query.settleDate"
              type="date"
              value-format="yyyy-MM-dd"
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
      createTree: [],
      originalTree: [],
      defaultProps: {
        children: "children",
        label: "label"
      },
      selects: {
        accountGroup: [], // 结算组别
        contracts: [] // 合同
      },
      query: {
        settleGroupId: "",
        contractId: "",
        settleDate: "",
        filterName: "",
        contractId: []
      }
    };
  },
  mounted() {},
  methods: {
    filterTree(name) {
      if (!name) this.createTree = this.originalTree;
      this.createTree = filterTree(this.originalTree, name);
    },
    handleCheckChange(data, checked) {     
      //console.log(data, checked);
    },
    async getGenetateAccount() {
      await this.$api.financeapi.createListUsingGET({}).then(returnObj => {
        if (returnObj.data.status === 200) {
          this.createTree = formatTree(returnObj.data.data);
          Object.assign(this.originalTree, this.createTree);
        }
      });
    },
    async createBill() {
      this.query.contractId = [];
      const nodes = this.$refs.tree.getCheckedNodes();
      nodes.forEach(item => {
        if (!item.children) {
          this.query.contractId.push(item.contractId);
        }
      });
      const request = {
        settleGroupId: this.query.settleGroupId,
        contractId: new Set(this.query.contractId),
        settleDate: this.query.settleDate
      };
      await this.$api.financeapi.createUsingPOST({ request }).then(returnObj => {
        if (returnObj.data.status === 200) {
          $message("success", returnObj.data.msg);
        } else {
          $message('error', returnObj.data.msg);
        }
      });
    },
    async init() {
      let [accountGroup, merchants, contracts] = await Promise.all([
        queryAccountGroup(),
        queryMerchant(),
        queryContract()
      ]);
      this.selects.accountGroup = accountGroup.data.list;
      this.selects.merchants = merchants.data.list;
      this.selects.contracts = contracts.data.list;
      await this.getGenetateAccount();
    }
  },
  computed: {},
  created() {
    this.init();
  }
};

// TODO: 需要点击结算组别和日期之后才能再点击“生成”按钮；
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