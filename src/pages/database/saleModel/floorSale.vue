<template>
  <con-head title="楼层销售报表" v-loading.fullscreen="loading">
    <el-button type="primary" slot="append" :disabled="showBtn" @click="exportHandler()">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="12">
        <div class="searchinput searchdatepicker">
          <span class="inputname inputnameauto">销售日期：</span>
            <el-date-picker
                    v-model="query.startDateData"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="startpickerOptions"
                    @change="getList()"
                    value-format="yyyy-MM-dd">
            </el-date-picker>
            ~
            <el-date-picker
                    v-model="query.endDateData"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="endpickerOptions"
                    @change="getList()"
                    value-format="yyyy-MM-dd">
            </el-date-picker>
        </div>
      </el-col>
        <el-col :span="11" :offset="1">
            <div class="searchselect">
                <span class="inputname inputnameauto">楼层：</span>
                <el-select v-model="query.floorId" placeholder="请选择" filterable clearable class="dialogselect" @change="floorSelect()">
                    <el-option label="全部" value=""></el-option>
                    <el-option
                            v-for="item in floorOptions"
                            :key="item.id"
                            :label="item.floorName"
                            :value="item.id">
                    </el-option>
                </el-select>
            </div>
        </el-col>
	    <!-- <el-col :span="11" :offset="1">
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
        </el-col> -->
    </el-row>
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage" @pageSize="getpageSize">
        <tr class="last_tr" slot="lastTr" v-if="totalShow && content.list.length > 0">
            <td><div class="cell"><span>合计</span></div></td>
            <td><div class="cell"><span>{{detail.signedArea}}</span></div></td>
            <td><div class="cell"><span>{{detail.totalArea}}</span></div></td>
            <td><div class="cell"><span>{{detail.salesAmount | fmoney}}</span></div></td>
            <td><div class="cell"><span>{{detail.salesTimes}}</span></div></td>
            <td colspan="3"><div class="cell"><span></span></div></td>
        </tr>
    </erp-table>
  </con-head>

</template>

<script>
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import { reExport } from '@/utils/'

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
          label: "楼层",
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
          type: "fmoney",
          name: "salesAmount"
        },
        {
          label: "交易笔数",
          type: "text",
          name: "salesTimes"
        },
        {
          label: "客单价（元）",
          type: "fmoney",
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
          // {
          //   isStatus: false,
          //   label: "全部",
          //   id: 1
          // },
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
      query: {
          startDateData:'',
          endDateData:''
      },
      floorOptions:[],
      buildId:'',
      detail:'',
      totalShow:true,
      showBtn: true,
      loading: false,
        startpickerOptions:{
            disabledDate: (time) => {
                if (this.query.endDateData != '' || this.query.endDateData != null) {
                    let oneYear = 365 * 24 * 3600 * 1000;
                    let oneYearNum = (new Date(this.query.endDateData)).getTime() - oneYear;
                    return time.getTime() < oneYearNum;
                }
            }
        },
        endpickerOptions:{
            disabledDate: (time) => {
                if (this.query.startDateData != '' || this.query.startDateData != null) {
                    let oneYear = 365 * 24 * 3600 * 1000;
                    let oneYearNum = (new Date(this.query.startDateData)).getTime() + oneYear;
                    if(oneYearNum > oneYear) {
                        return time.getTime() > oneYearNum;
                    }
                }
            }
        }
    };
  },
  mounted() {
      this.getBuildList();
  },
  methods: {
    getCurrentPage(pageNum) {
      this.query.pageNum = pageNum;
      this.getList();
    },
    getpageSize(pageSize) {
      this.query.pageSize = pageSize;
      this.getList();
    },
      async getBuildList(){
          await this.$api.rentapi.listUsingGET_4().then(res=>{
              res.data.data.forEach(item => {
                  if (item.buildName == '商场') {
                      this.buildId = item.id;
                  }
              })
              this.getFloorList();
          })
      },
      async getFloorList(){
          await this.$api.rentapi.selectByBuildIdUsingGET({
              buildId: this.buildId
          }).then(res=>{
              this.floorOptions = res.data.data;
          })
      },
    methodsHandler(method) {
      this.content.list = [];
      this.selects.methods.forEach(function(obj) {
        obj.isStatus = false;
      });
      method.isStatus = !method.isStatus;
      this.query.businessTypeOrFloorCode = method.id;
      this.getList();
    },
    async getList(page = {}, callback) {
      let params = {
          startDate: this.query.startDateData ? this.query.startDateData : undefined,
          endDate: this.query.endDateData ? this.query.endDateData : undefined,
        // businessTypeOrFloorCode: this.query.businessTypeOrFloorCode || 2,
        businessTypeOrFloorCode: 3,
        floorId:this.query.floorId,
        pageNum: this.query.pageNum,
        pageSize: this.query.pageSize
      };
      if(params.startDate && params.endDate){
        this.loading = true;
        this.totalShow = false;
        this.$api.reportapi.businessTypeAndFloorSalesListUsingGET(params).then(res => {
          const data = res.data;
          if (data.status === 200) {
            this.content = data.data;
            this.content.list.forEach(item=>{
                item.totalArea = item.totalArea==null?'--':item.totalArea
                item.productivenessOfTotalArea = item.productivenessOfTotalArea==null?'--':item.productivenessOfTotalArea
            })
            if(this.content.list.length>0){
                this.showBtn = false;
            }
            if (data.data.isLastPage) {
              this.$api.reportapi.businessTypeAndFloorSalesListSumUsingGET(params).then(returnObj => {
                  if (returnObj.data.status === 200) {
                      this.detail = returnObj.data.data;
                      this.totalShow = true;
                  }
              });
            }else{
              this.totalShow = false;
            }
            if (callback) callback();
            this.loading = false;
          } else {
            this.loading = false;
            this.$message.error(res.data.msg);
          }
        }).catch(res=>{
            this.loading = false;
            this.$message.error(res.data.msg);
        });
      }else{
        this.content.list = [];
      }
    },
    floorSelect(){
       this.getList();
    },
    exportHandler(){
        reExport(this, 'showBtn', true);
        let params = {
            startDate: this.query.startDateData ? this.query.startDateData : undefined,
            endDate: this.query.endDateData ? this.query.endDateData : undefined,
            businessTypeOrFloorCode: 3,
            floorId:this.query.floorId,
            // pageNum: this.query.pageNum,
            // pageSize: this.query.pageSize
        };
        if(this.content.list.length>0){
            this.$api.reportapi.exportBusinessTypeAndFloorSalesListUsingGET(params).then(res=>{
                if(res.data.status == 200){
                    this.$message.success(res.data.msg);
                }
            }).catch(res=>{
                this.$message.error(res.data.msg);
            })
        }
    },
  },
  computed: {},
  created() {
    this.getList();
    this.content.list = [];
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