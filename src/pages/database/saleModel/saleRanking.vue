<template>
  <con-head title="店铺业态销售汇总表" v-loading.fullscreen="loading">
    <el-button type="primary" slot="append" :disabled="showBtn" @click="exportHandler()">导出</el-button>
    <el-row slot="preappend">
      <el-col :span="10">
        <div class="searchinput searchdatepicker">
          <span class="inputname inputnameauto">销售日期：</span>
            <el-date-picker
                    v-model="query.startDateData"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="startpickerOptions"
                    value-format="yyyy-MM-dd">
            </el-date-picker>
            ~
            <el-date-picker
                    v-model="query.endDateData"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="endpickerOptions"
                    value-format="yyyy-MM-dd">
            </el-date-picker>
        </div>
      </el-col>
			<el-col :span="11" :offset="1">
          <div class="searchselect">
            <span class="inputname">店铺区间：</span>
            <el-select v-model="query.startCode" clearable filterable placeholder="请输入店铺号" class="dialogselect">
              <el-option
                v-for="item in selects.shops"
                :key="item.id"
                :label="item.shopCode"
                :value="item.shopCode">
              </el-option>
            </el-select>
            <span>~</span>
            <el-select v-model="query.endCode" clearable filterable placeholder="请输入店铺号" class="dialogselect">
              <el-option
                v-for="item in selects.shops"
                :key="item.id"
                :label="item.shopCode"
                :value="item.shopCode">
              </el-option>
            </el-select>
          </div>
        </el-col>
    </el-row>
    <el-row slot="preappend">
        <el-col :span="10">
            <div class="searchselect">
                <span class="inputname inputnameauto">一级业态：</span>
                <el-select v-model="query.businessId" placeholder="请选择" filterable clearable class="dialogselect" @change="getBusinessTypeSList(query.businessId)">
                    <el-option label="全部" value=""></el-option>
                    <el-option
                            v-for="item in formatsOptions"
                            :key="item.value"
                            :label="item.text"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </el-col>
        <el-col :span="11" :offset="1">
            <div class="searchselect">
                <span class="inputname inputnameauto">二级业态：</span>
                <el-select v-model="query.twobusinessId" placeholder="请选择" filterable clearable class="dialogselect">
                    <el-option label="全部" value=""></el-option>
                    <el-option
                            v-for="item in formatsOptionsS"
                            :key="item.id"
                            :label="item.businessName"
                            :value="item.id">
                    </el-option>
                </el-select>
            </div>
        </el-col>
        <el-col :span="2"><span class="erpsearchbtn" @click="getList">查询</span></el-col>
    </el-row>
    <erp-table :header="header" :content="content" @currentPage="getCurrentPage" @pageSize="getpageSize">
        <tr class="last_tr" slot="lastTr" v-if="totalShow && content.list.length > 0">
            <td colspan="11"><div class="cell"><span>合计</span></div></td>
            <td><div class="cell"><span>{{detail.shopDayAmount | fmoney}}</span></div></td>
            <td><div class="cell"><span>{{detail.dayTradeCount}}</span></div></td>
        </tr>
    </erp-table>
  </con-head>

</template>

<script>
import { $message } from "../../../utils/notice";
import conHead from "../../../components/ConHead";
import erpTable from "../../../components/Table";
import { reExport } from '@/utils/'
import { saleQueryShop } from "@/utils/rest/financeAPI";
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
              label: "商户编号",
              type: "text",
              name: "merchantCode"
          },
          {
              label: "商户名称",
              type: "text",
              name: "merchantName"
          },
        {
          label: "店铺号",
          type: "text",
          name: "shopCode"
        },
        {
          label: "店铺名称",
          type: "text",
          name: "shopName"
        },
        {
          label: "店铺区域",
          type: "text",
          name: "shopRegionName"
        },
        {
          label: "店铺面积",
          type: "text",
          name: "shopArea"
        },
        {
          label: "合同类型",
          type: "text",
          name: "contractKindName"
        },
        {
          label: "品牌",
          type: "text",
          name: "brandName"
        },
        {
          label: "一级业态",
          type: "text",
          name: "businessTypeName"
        },
        {
          label: "二级业态",
          type: "text",
          name: "businessType2Name"
				},
				{
          label: "三级业态",
          type: "text",
          name: "businessType3Name"
				},
				{
          label: "销售额",
          type: "fmoney",
          name: "shopDayAmount"
        },
        {
          label: "交易笔数",
          type: "text",
          name: "dayTradeCount"
        }
      ],
      content: [],
      selects: {
        shops: []
      },
      query: {
          startDateData:'',
          endDateData:'',
          businessId:'',
          twobusinessId:''
      },
      formatsOptions:[],
      formatsOptionsS:[],
      detail:'',
      totalShow:false,
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
      this.getBusinessList();
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
    async getBusinessList(){
      await this.$api.rentapi.getOptionsUsingGET({level: 1}).then(res=>{
          this.formatsOptions = res.data.data;
      })
    },
    getBusinessTypeSList(id){
        this.query.twobusinessId = '';
        this.formatsOptionsS = [];
        if(id) {
            this.$api.rentapi.getListByPidUsingGET({pid: id}).then(res => {
                this.formatsOptionsS = res.data.data;
            })
        };
    },
    async getList(page = {}, callback) {
      let params = {
          startDate: this.query.startDateData ? this.query.startDateData : '',
          endDate: this.query.endDateData ? this.query.endDateData : '',
          startCode: this.query.startCode,
          endCode: this.query.endCode,
          oneId:this.query.businessId,
          twoId:this.query.twobusinessId,
          pageNum: this.query.pageNum,
          pageSize: this.query.pageSize
      };
      if (!this.query.startDateData && !this.query.endDateData) {
        // $message('info', '请先选择时间段');
        this.content.list = [];
        return;
      }else{
        this.loading = true;
        this.$api.reportapi.shopBusinessTypeSalesListUsingGET(params).then(res => {
          const data = res.data;
          if (data.status === 200) {
            this.content = data.data;
            if(this.content.list.length>0){
                this.showBtn = false;
            }
            if (data.data.isLastPage) {
              this.$api.reportapi.exportShopBusinessTypeSalesListSumUsingGET(params).then(returnObj => {
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
        });;
      }
    },
    exportHandler(){
        reExport(this, 'showBtn', true); 
        let params = {
            startDate: this.query.startDateData ? this.query.startDateData : '',
            endDate: this.query.endDateData ? this.query.endDateData : '',
            startCode: this.query.startCode,
            endCode: this.query.endCode,
            oneId:this.query.businessId,
            twoId:this.query.twobusinessId,
            // pageNum: this.query.pageNum,
            // pageSize: this.query.pageSize
        };
        if(this.content.list.length>0 && params.startDate && params.endDate){
            this.$api.reportapi.exportShopBusinessTypeSalesListUsingGET(params).then(res=>{
                if(res.data.status == 200){
                    this.$message.success(res.data.msg);
                }
            }).catch(res=>{
                this.$message.error(res.data.msg);
            })
        }
    },
    async init() {
      let [shop] = await Promise.all([
        saleQueryShop()
      ]);
      this.selects.shops = shop.data || [];
      await this.getList();
    }
  },
  computed: {},
  created() {
    this.init();
    this.content.list = [];
  }
};
</script>

<style scoped>

</style>