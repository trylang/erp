<template>
    <div v-loading.fullscreen="loading">
        <con-head title="店铺同步报告">
            <div class="btn"><button @click="allResyncListData">批量同步</button></div>
            <div class="mainbox">
                <data-table :tableData="dataList" :colConfigs="columnData" @listSelected="childData">
                    <el-table-column
                            label="原因"
                            width="300"
                            slot="operation">
                        <template slot-scope="scope">
                            <div class="dataremrks">{{scope.row.remrks}}</div>
                            <div class="dataremrksbtn" @click="getDataRemrks(scope.row.remrks)">详情></div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="110"
                            slot="operation">
                        <template slot-scope="scope">
                            <button class="btn_text" @click="resyncListData(scope.row)">重新同步</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getDataList" style="margin-bottom:30px"></rt-page>
        </con-head>
        <el-dialog
                title="原因"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput noline">
                    <span class="inputname inputnameauto">查看原因</span>
                    <textarea class="inputtext textareabox" style="border: 1px solid #e5e5e5;min-height:160px;" placeholder="" v-model="remrksText" readonly></textarea>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="remrksClose()">关 闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    import RtPage from '../../../components/Pagination'
    import DataTable from '../../../components/DataTable'
    export default {
        name: "unit",
        data(){
            return{
                loading: false,
                dialogVisible:false,
                dataList:[],
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                columnData:[
                    { type: 'selection', width:'50'},
                    { prop: 'shopNameCode', label: '店铺'},
                    { prop: 'startTime', label: '同步时间' },
                    { prop: 'statusText', label: '运行状态' }
                ],
                multipleSelection:[],
                remrksText:''
            }
        },
        mounted(){
        },
        computed:{
        },
        watch:{
        },
        methods:{
            async getDataList(pageNum,pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                await this.$api.reportapi.getSelectListData({
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                }).then(res=>{
                    if(res.data.status === 200){
                        res.data.data.list.forEach(item=>{
                            item.shopNameCode = item.shopName+':'+item.shopCode;
                            item.statusText = item.status == 0?'失败':'成功';
                        });
                        this.dataList = res.data.data.list;
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
            getDataRemrks(remrks){
                this.dialogVisible = true;
                this.remrksText = remrks;
            },
            remrksClose(){
                this.dialogVisible = false;
            },
            resyncListData(listData){
                this.multipleSelection = [];
                this.multipleSelection.push(listData.id);
                this.allResyncListData();
            },
            childData(data){
                this.multipleSelection = data.map(item=>{
                    return item.id
                });
            },
            async allResyncListData(){
                if(this.multipleSelection.length != 0) {
                    await this.$api.reportapi.resetShopToCrm({
                        ids:this.multipleSelection
                    }).then(res=>{
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.getDataList(1,this.pageSize);
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    this.$message.error('请选择需要同步的数据');
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
    .btn{
        padding: 0 20px;
    }
    .btn button{
        background: #457fcf;
        border: none;
        color: #fff;
        padding: 5px 28px;
        border-radius: 15px;
        cursor: pointer;
        margin-top:60px;
    }
    .dataremrks{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 240px;
        float: left;
    }
    .dataremrksbtn{
        color: #457fcf;
        cursor: pointer;
        text-decoration: underline;
        float: right;
    }
</style>