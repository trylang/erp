<template>
    <div>
        <con-head title="任务中心">
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
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
                            <th width="190"><div class="cell">操作</div></th>
                            <th class="gutter" style="width: 0px;"></th>
                        </tr>
                    </thead>
                    <tbody v-if="dataList != null">
                        <tr v-for="item in dataList">
                            <td><div class="cell" v-text="item.taskName"></div></td>
                            <td><div class="cell" v-text="item.typeStr"></div></td>
                            <td><div class="cell" v-text="item.startDateStr"></div></td>
                            <td><div class="cell" v-text="item.runTime"></div></td>
                            <td><div class="cell" v-text="item.statusStr"></div></td>
                            <td>
                                <div class="cell">
                                    <button class="btn_text" v-if="item.status==0 || item.status ==2" @click="downloadHandler">下载</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="el-table__empty-block" v-if="dataList == null">
                    <span class="el-table__empty-text">暂无数据</span>
                </div>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="pageHandler" style="margin-bottom:30px;padding: 0 20px;"></rt-page>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    import RtPage from '../../../components/Pagination'
    export default {
        name: "index",
        data(){
            return{
                dataList:[],
                statusId: '',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                statusData:[
                    {
                        text:"全部",
                        isStatus:true,
                        value: ''
                    },{
                        text:"成功",
                        isStatus:false,
                        value: 0
                    },{
                        text:"进行中",
                        isStatus:false,
                        value: 1
                    },{
                        text:"失败",
                        isStatus:false,
                        value: 2
                    }
                ],
            }
        },
        mounted(){

        },
        methods:{
            pageHandler(pageNum, pageSize){
                let params = {
                    pageNum: pageNum,
                    pageSize: this.$refs.page.pageSize,
                    status: this.statusId
                }
                this.$api.systemapi.listUsingGET_6(params).then(res=>{
                    if(res.data.status === 200){
                        this.dataList = res.data.data.list;
                        this.total = Number(res.data.data.total);
                    }
                }).catch(res=>{
                    this.$message.error(res.data.msg);
                })
            },
            statusHandler(status){
                this.statusData.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus;
                this.statusId = status.value;
                this.pageHandler(1);
            },
            downloadHandler(){

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
</style>