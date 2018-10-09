<template>
    <div v-loading.fullscreen="loading">
        <con-head title="三个月到期合同">
            <el-button type="primary" slot="append" :disabled="showBtn" @click="exportHandler()">导出</el-button>
            <el-row slot="preappend">
                <el-col :span="10">
                    <div class="searchinput">
                        <span class="inputname inputnameauto">截止日期：</span>
                        <el-date-picker
                            v-model="searchData"
                            type="date"
                            placeholder="选择日期"
                            value-format="yyyy-MM-dd"
                            @change="pageHandler(1,pageSize)">
                        </el-date-picker>
                    </div>
                </el-col>
            </el-row>
        </con-head>
        <con-head>
            <div class="mainbox">
              <el-table
                :data="datalist"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="merchantCode"
                  label="商户号">
                  <template slot-scope="scope">
                    <span :class="{red:scope.row.overdue}">{{scope.row.merchantCode}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="merchantName"
                  label="商户名称">
                  <template slot-scope="scope">
                    <span :class="{red:scope.row.overdue}">{{scope.row.merchantName}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="shopCode"
                  label="店铺号">
                  <template slot-scope="scope">
                    <span :class="{red:scope.row.overdue}">{{scope.row.shopCode}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="shopName"
                  label="店铺名称">
                  <template slot-scope="scope">
                    <span :class="{red:scope.row.overdue}">{{scope.row.shopName}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="contractCode"
                  label="合同号">
                  <template slot-scope="scope">
                    <span :class="{red:scope.row.overdue}">{{scope.row.contractCode}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="propertyType"
                  label="物业性质">
                  <template slot-scope="scope">
                    <span :class="{red:scope.row.overdue}">{{scope.row.propertyType}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="brandName"
                  label="品牌">
                  <template slot-scope="scope">
                    <span :class="{red:scope.row.overdue}">{{scope.row.brandName}}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="showStartAndEndDate"
                  label="合同有效期">
                  <template slot-scope="scope">
                    <span :class="{red:scope.row.overdue}">{{scope.row.showStartAndEndDate}}</span>
                  </template>
                </el-table-column>
              </el-table>
                <!-- <data-table :tableData="datalist" :colConfigs="columnData"></data-table> -->
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" :pageSize="20" @change="pageHandler" style="margin-bottom:30px"></rt-page>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    import RtPage from '../../../components/Pagination'
    import DataTable from '../../../components/DataTable'
    import { reExport } from '@/utils/'
    
    export default {
        data(){
            return{
                loading: false,
                datalist:[],
                searchData: '',
                pageNum: Number(this.$route.params.pageId)||1,
                // pageSize: 20,
                total: 0,
                showBtn: true,
                columnData:[
                    { prop: 'merchantCode', label: '商户号'},
                    { prop: 'merchantName', label: '商户名称' },
                    { prop: 'shopCode', label: '店铺号' },
                    { prop: 'shopName', label: '店铺名称' },
                    { prop: 'contractCode', label: '合同号' },
                    { prop: 'propertyType', label: '物业性质' },
                    { prop: 'brandName', label: '品牌' },
                    { prop: 'showStartAndEndDate', label: '合同有效期' }
                ]
            }
        },
        mounted(){

        },
        methods:{
            pageHandler(pageNum, pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                if(this.searchData){
                    this.loading = true;
                    let params = {
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
                        startDate: this.searchData
                    }
                    this.$api.reportapi.expireUsingPOST({request: params}).then(res=>{
                        if(res.data.status === 200){
                            this.loading = false;
                            this.datalist = res.data.data.list.map(item=>{
                              // split()
                              let end = item.showStartAndEndDate.split('~')[1];
                              let condition = (new Date(end) - new Date(this.searchData))<1000*60*60*24*29
                              if(condition){
                                item.overdue = true
                              }
                              return item
                            });
                            if(this.datalist.length>0){
                                this.showBtn = false;
                            }
                            this.total = Number(res.data.data.total);
                        }else{
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                        this.$message.error(res.data.msg);
                    })
                }else{
                    this.datalist = [];
                    this.total = 0;
                }
            },
            exportHandler(){
                reExport(this, 'showBtn', true);
                let params = {
                    // pageNum: this.pageNum,
                    // pageSize: this.$refs.page.pageSize,
                    startDate: this.searchData
                }
                if(this.datalist.length>0){
                    this.$api.reportapi.expireExportUsingPOST({request: params}).then(res=>{
                        if(res.data.status == 200){
                            this.$message.success(res.data.msg);
                        }
                    }).catch(res=>{
                        this.$message.error(res.data.msg);
                    })
                }
            }
        },
        components:{
            ConHead,
            RtPage,
            DataTable
        }
    }
</script>

<style scoped>
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
    .red{
      color: red;
    }
</style>
