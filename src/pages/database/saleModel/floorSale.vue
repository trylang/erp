<template>
  <con-head title="业态楼层销售报表">
    <el-button type="primary" slot="append">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="12">
        <div class="searchselect">
          <span class="inputname">销售日期：</span>
					<el-date-picker
						v-model="query.time"
						type="daterange"
            value-format="yyyy-MM-dd"
            @change="getList"
						range-separator="~"
						start-placeholder="开始日期"
						end-placeholder="结束日期">
					</el-date-picker>
        </div>
      </el-col>
			<el-col :span="11" :offset="1">
          <div class="texttitle">
            <span class="inputname">楼层/业态：</span>
            <div class="line-nav">
              <a href="javascript:void(0)" 
                v-for="method in selects.methods" 
                :key="method.id" 
                :class="{active:method.isStatus}" 
                @click="methodsHandler(method)">{{method.label}}</a>
            </div>
          </div>
        </el-col>
    </el-row>
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
  </con-head>

</template>

<script>
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";

export default {
  name: "account-group",
  components: {
    conHead,
    erpTable
  },
  data() {
    return {
      header: [
        {
          label: "楼层/业态",
          type: "text",
          name: "businessTypeOrFloorName"
        },
        {
          label: "签约面积",
          type: "text",
          name: "signedArea"
        },
        {
          label: "总面积",
          type: "text",
          name: "totalArea"
        },
        {
          label: "销售总额",
          type: "text",
          name: "salesAmount"
        },
        {
          label: "交易笔数",
          type: "text",
          name: "salesTimes"
        },
        {
          label: "客单价（元）",
          type: "text",
          name: "averagePrice"
        },
        {
          label: "签约面积坪效（天/平米）",
          type: "text",
          name: "productivenessOfSignedArea"
				},
				{
          label: "总面积坪效（天/平米）",
          type: "text",
          name: "productivenessOfTotalArea"
        }
      ],
      content: [],
      selects: {
        accounts: [],
        methods: [
          {
            isStatus: false,
            label: "全部",
            id: 1
          },
          {
            isStatus: true,
            label: "业态",
            id: 2
          },
          {
            isStatus: false,
            label: "楼层",
            id: 3
          }
        ]
      },
      query: {}
    };
  },
  mounted() {},
  methods: {
    getCurrentPage(pageNum) {
      this.getList({ pageNum });
    },
    getpageSize(pageSize) {
      this.getList({ pageSize });
    },
    methodsHandler(method) {
      this.selects.methods.forEach(function(obj) {
        obj.isStatus = false;
      });
      method.isStatus = !method.isStatus;
      this.query.businessTypeOrFloorCode = method.id;
      this.getList();
    },
    async getList(page = {}, callback) {
      let params = {
        startDate: this.query.time ? this.query.time[0] : '',
        endDate: this.query.time ? this.query.time[1] : '',
        businessTypeOrFloorCode: this.query.businessTypeOrFloorCode || 2,
        pageNum: page.pageNum,
        pageSize: page.pageSize
      };
      console.log(params)
      this.$api.reportapi.businessTypeAndFloorSalesListUsingGET(params).then(res => {
        const data = res.data;
        if (data.status === 200) {
          this.content = data.data;
          if (callback) callback();
        } else {
          return data.message;
        }
      });
    }
  },
  computed: {},
  created() {
    this.getList();
  }
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
</style>