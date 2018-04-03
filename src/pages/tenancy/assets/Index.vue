<template>
    <div>
        <con-head title="楼宇类型">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialogVisible = true">添加</el-button>
        </con-head>
        <con-head>
            <div class="mainbox">
                <data-table :tableData="dataList" :colConfigs="columnData">
                    <el-table-column
                            label="操作"
                            width="110"
                            slot="operation">
                        <template slot-scope="scope">
                            <button class="btn_text">编辑</button>
                            <button class="btn_text">删除</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getBuildingList" style="margin-bottom:30px;padding: 0 20px;"></rt-page>
        </con-head>
        <el-dialog
                title="添加楼宇类型"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname inputnameauto">编码</span>
                    <input class="inputtext" type="text" placeholder="请输入编号" v-model="addBuilding.positionCode">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameauto">名称</span>
                    <input class="inputtext" type="text" placeholder="请输入名称" v-model="addBuilding.positionName">
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    import RtPage from '../../../components/Pagination'
    import DataTable from '../../../components/DataTable'
    export default {
        name: "index",
        data(){
            return{
                dialogVisible:false,
                dataList:[],
                addBuilding:{
                    positionCode:"",
                    positionName:""
                },
                columnData:[
                    { prop: 'positionCode', label: '编码'},
                    { prop: 'positionName', label: '名称' },
                    { prop: 'updateDate', label: '更新时间' }
                ],
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0
            }
        },
        mounted(){
            //this.getBuildingList();
        },
        methods:{
            handleClose(){
                this.dialogVisible = false;
            },
            async getBuildingList(pageNum,pageSize){
                await this.$api.rentapi.listUsingGET_5({
                    pageNum:pageNum,
                    pageSize:this.$refs.page.pageSize,
                    name:this.searchText
                }).then(res=>{
                    this.dataList = res.data.data.list;
                    this.total = Number(res.data.data.total);
                })
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

</style>