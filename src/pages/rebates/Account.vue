<template>
    <div v-loading.fullscreen="loading">
        <con-head title="对账文件管理">
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入任务名称" v-model.trim="searchName" @keyup.enter="pageHandler(1,pageSize)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="2">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">类型：</span>
                            <el-select v-model="channelId" placeholder="请选择" filterable clearable class="dialogselect" @change="pageHandler(1,pageSize)">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in channelOptions"
                                        :key="item.value"
                                        :label="item.text"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </con-head>
        <con-head>
            <div class="mainbox">
                <data-table :tableData="datalist" :colConfigs="columnData">
                </data-table>
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
        name: "index",
        data(){
            return{
                loading: false,
                listid:0,
                dialogVisible:false,
                datalist:[],
                searchName: '',
                channelId: '',
                channelOptions: [],
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                columnData:[
                    { prop: 'fileName', label: '任务名称'},
                    { prop: 'typeStr', label: '类型' },
                    { prop: 'uploadPerson', label: '上传人' },
                    { prop: 'createDateStr', label: '上传时间' }
                ]
            }
        },
        watch:{
            searchName(){
                this.$delay(()=>{
                    this.pageHandler(1,this.pageSize);
                },300)
            }
        },
        mounted(){
            this.getChannelList();
        },
        methods:{
            pageHandler(pageNum, pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                let params = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    fileName: this.searchName,
                    type: this.channelId
                }
                this.$api.refundapi.getListForPageUsingGET_2(params).then(res=>{
                    if(res.data.status === 200){
                        this.datalist = res.data.data.list;
                        this.total = Number(res.data.data.total);
                        this.loading = false;
                    }else{
                        this.loading = false;
                        this.$message.error(res.data.msg);
                    }
                }).catch(res=>{
                    this.loading = false;
                    this.$message.error(res.data.msg);
                })
            },
            getChannelList(){
                this.$api.refundapi.getChannelUsingGET().then(res=>{//渠道
                    this.channelOptions = res.data.data;
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
</style>