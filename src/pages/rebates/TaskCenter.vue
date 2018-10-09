<template>
    <div v-loading.fullscreen="loading" :element-loading-text="loadingText">
        <con-head title="任务中心">
            <el-button type="primary" slot="append" @click="handleRefresh()">刷新</el-button>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="texttitle">
                            <span class="inputname">类型：</span>
                            <div class="line-nav">
                                <a href="javascript:void(0)" v-for="typelist in typeData" :class="{active:typelist.isStatus}" @click="typeHandler(typelist)">{{typelist.text}}</a>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12" :offset="2">
                        <div class="texttitle">
                            <span class="inputname">状态：</span>
                            <div class="line-nav">
                                <a href="javascript:void(0)" v-for="statuslist in statusData" :class="{active:statuslist.isStatus}" @click="statusHandler(statuslist)">{{statuslist.text}}</a>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </con-head>
        <con-head>
            <div class="mainbox">
                <table class="el-table table_box">
                    <thead class="table_header">
                        <tr>
                            <th><div class="cell">任务名称</div></th>
                            <th><div class="cell">任务类型</div></th>
                            <th><div class="cell">开始时间</div></th>
                            <th><div class="cell">运行时间</div></th>
                            <th><div class="cell">运行状态</div></th>
                            <th><div class="cell">操作人</div></th>
                            <th width="100"><div class="cell">操作</div></th>
                            <th class="gutter" style="width: 0px;"></th>
                        </tr>
                    </thead>
                    <tbody v-if="dataList != null">
                        <tr v-for="item in dataList">
                            <td><div class="cell" v-text="item.taskName"></div></td>
                            <td><div class="cell" v-text="item.typeStr"></div></td>
                            <td><div class="cell" v-text="item.startDateStr"></div></td>
                            <td><div class="cell" v-text="item.runTime"></div></td>
                            <td><div class="cell" :class="['gray',item.status==1?'green':'',item.status==2?'red':'']" v-text="item.statusStr"></div></td>
                            <td><div class="cell" v-text="item.userName"></div></td>
                            <td>
                                <div class="cell">
                                    <a style="cursor: pointer;color: blue;" v-if="(item.type==0 && item.status == 2) || (item.type==0 && item.status == 3) || (item.type==1 && item.status==1)" @click="downloadHandler(item)">下载</a>
                                    <!-- <button class="btn_text" v-if="item.status==1 || item.status ==2" @click="downloadHandler(item.id)">下载</button> -->
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="el-table__empty-block" v-if="dataList.length<=0">
                    <span class="el-table__empty-text">暂无数据</span>
                </div>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="pageHandler" style="margin-bottom:30px;padding: 0 20px;"></rt-page>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    import RtPage from '../../components/Pagination'
    export default {
        name: "index",
        data(){
            return{
                loading: false,
                dataList:[],
                typeId: '',
                statusId: '',
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                typeData:[],
                statusData:[],
                loadingText: ''
            }
        },
        mounted(){
            this.$api.refundapi.getTaskTypeUsingGET().then(res=>{//类型
                this.typeData = res.data.data;
                this.typeData = res.data.data.map(item=>{
                    return {
                        text: item.text,
                        value: item.value,
                        isStatus: false
                    }
                });
                this.typeData[0].isStatus = true;
            })
            this.$api.refundapi.getTaskStatusUsingGET().then(res=>{//状态
                this.statusData = res.data.data;
                this.statusData = res.data.data.map(item=>{
                    return {
                        text: item.text,
                        value: item.value,
                        isStatus: false
                    }
                });
                this.statusData[0].isStatus = true;
            })
        },
        methods:{
            pageHandler(pageNum, pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                let params = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    type: this.typeId,
                    status: this.statusId
                }
                this.$api.refundapi.getListForPageUsingGET_6(params).then(res=>{
                    if(res.data.status === 200){
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
            typeHandler(status){
                this.typeData.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus;
                this.typeId = status.value;
                this.pageHandler(1,this.pageSize);
            },
            statusHandler(status){
                this.statusData.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus;
                this.statusId = status.value;
                this.pageHandler(1,this.pageSize);
            },
            downloadHandler(item){
                this.loading = true;
                this.loadingText = '下载中...';
                this.$api.refundapi.downloadUsingGET({id: item.id}).then(res=>{
                    this.loading = false;
                    this.loadingText = '';
                    var eleLink = document.createElement('a');
                    eleLink.download = item.taskName+'.'+res.headers['content-disposition'].split('.')[1]
                    eleLink.href = URL.createObjectURL(res.data);
                    eleLink.click();
                    // function createDownloadFile() {
                    //     var blob = new Blob([res.data]);
                    //     var link = document.createElement('a');
                    //     link.download = item.taskName+'.'+res.headers['content-disposition'].split('.')[1]
                    //     link.href = URL.createObjectURL(blob);
                    //     link.click();
                    // }

                    // if (res.data.msg) {
                    //     this.$message.error(res.data.msg);
                    // } else {
                    //     createDownloadFile();
                    // }
                })
            },
            handleRefresh(){
                this.pageHandler(1,this.pageSize);
            }
        },
        components:{
            ConHead,
            RtPage,
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
    .gray{
        color: #606266;
    }
    .green{
        color: green;
    }
    .red{
        color: red;
    }
    table tbody tr{
        background-color: #fff;
    }
    table tbody tr:hover{
        background-color: #f5f7fa;
    }
    table tbody tr:nth-of-type(2n){
        width: 100%;
        background-color: #FAFAFA;
    }
</style>
