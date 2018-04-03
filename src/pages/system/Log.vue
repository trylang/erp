<template>
    <div>
        <con-head title="操作日志">
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入操作人" v-model="searchName" @keyup.enter="pageHandler(1)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="12" :offset="2">
                        <div class="searchinput">
                            <span class="inputname inputnameauto">操作时间：</span>
                            <el-date-picker
                                v-model="searchData"
                                type="daterange"
                                range-separator="~"
                                placeholder="选择日期"
                                format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd"
                                @change="pageHandler(1)">
                            </el-date-picker>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="9">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">操作类型</span>
                            <el-select v-model="operationLogTypeId" placeholder="请选择" class="dialogselect" @change="pageHandler(1)">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in options"
                                        :key="item.id"
                                        :label="item.operationLogTypeName"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </con-head>
        <con-head>
            <div class="mainbox">
                <data-table :tableData="datalist" :colConfigs="columnData"></data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="pageHandler" style="margin-bottom:30px"></rt-page>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    import RtPage from '../../components/Pagination'
    import DataTable from '../../components/DataTable'
    export default {
        data(){
            return{
                dialogVisible:false,
                datalist:[],
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                searchName: '',
                searchData: [],
                operationLogTypeId: '',
                options: [],
                columnData:[
                    { prop: 'operationLogTypeName', label: '操作类型'},
                    { prop: 'content', label: '操作内容' },
                    { prop: 'userName', label: '操作人' },
                    { prop: 'operationDate', label: '操作时间' }
                ]
            }
        },
        mounted(){
            this.$api.systemapi.listUsingGET_4().then(res=>{
                this.options = res.data.data.list;
            }).catch(res=>{
                this.$message.error(res.data.msg);
            })
        },
        watch:{
            searchName(){
                this.$delay(()=>{
                    this.pageHandler(1);
                },300)
            }
        },
        methods:{
            pageHandler(pageNum, pageSize){
                let params = {
                    pageNum: pageNum,
                    pageSize: this.$refs.page.pageSize,
                    userName: this.searchName,
                    operationDate: this.searchData[0],
                    createDate: this.searchData[1],
                    operationLogTypeId: this.operationLogTypeId
                }
                this.$api.systemapi.listUsingGET_3(params).then(res=>{
                    this.datalist = res.data.data.list;
                    this.total = Number(res.data.data.total);
                }).catch(res=>{
                    this.$message.error(res.data.msg);
                })
            },
        },
        components:{
            ConHead,
            RtPage,
            DataTable
        }
    }
</script>

<style scoped>

</style>