<template>
    <div v-loading.fullscreen="loading">
        <con-head title="发布通知">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialogData">添加</el-button>
            <el-row slot="preappend">
                <el-col :span="9">
                    <div class="searchbox">
                        <input type="text" placeholder="请输入消息标题或者商户" v-model="searchName" @keyup.enter="pageHandler(1,pageSize)"><i class="iconfont icon-sousuo"></i>
                    </div>
                </el-col>
            </el-row>
        </con-head>
        <con-head>
            <div class="mainbox">
                <data-table :tableData="datalist" :colConfigs="columnData">
                    <el-table-column
                            label="操作"
                            width="110"
                            slot="operation">
                        <template slot-scope="scope">
                            <button class="btn_text" @click="deleteList(scope.row.id)">删除</button>
                        </template>
                    </el-table-column>
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
        data(){
            return{
                loading: true,
                dialogVisible:false,
                datalist:[],
                searchName: '',
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                columnData:[
                    { prop: 'noticeName', label: '标题', link: '/system/tenantmsg', param: 'id'},
                    { prop: 'merchantName', label: '接收商户' },
                    { prop: 'userName', label: '操作人' },
                    { prop: 'createDate', label: '操作时间' }
                ]
            }
        },
        mounted(){
        },
        watch:{
            searchName(){
                this.$delay(()=>{
                    this.pageHandler(1,this.pageSize);
                },300)
            }
        },
        methods:{
            pageHandler(pageNum, pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                let params = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    noticeName: this.searchName,
                    merchantName: this.searchName
                }
                this.$api.systemapi.listUsingGET_2(params).then(res=>{
                    if(res.data.status === 200){
                        this.loading = false;
                        this.datalist = res.data.data.list;
                        this.total = Number(res.data.data.total);
                    }else{
                        this.loading = false;
                        this.$message.error(res.data.msg);
                    }
                }).catch(res=>{
                    this.loading = false;
                    this.$message.error(res.data.msg);
                })
            },
            dialogData(){
                this.dialogVisible = true;
                this.$router.push('/system/addtenant/');
            },
            deleteList(id){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.systemapi.deletePhyUsingDELETE_2({ids: id}).then(res =>{
                        this.$message.success(res.data.msg);
                        this.pageHandler(1,this.pageSize);
                    }).catch(res => {
                        this.$message.error(res.data.msg);
                    });
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