<template>
    <div v-loading.fullscreen="loading">
        <con-head title="广告位类型">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="handleOpen()">添加</el-button>
        </con-head>
        <con-head>
            <div class="mainbox">
                <data-table :tableData="dataList" :colConfigs="columnData">
                    <el-table-column
                            label="更新时间"
                            width="150"
                            slot="operation">
                        <template slot-scope="scope">
                            {{scope.row.updateDate | formatDate('yyyy-MM-dd hh:mm:ss')}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="110"
                            slot="operation">
                        <template slot-scope="scope">
                            <button class="btn_text" @click="getUnitInfo(scope.row.id)">编辑</button>
                            <button class="btn_text" @click="deleteListData(scope.row.id)">删除</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getDataList" style="margin-bottom:30px"></rt-page>
        </con-head>
        <el-dialog
                :title="listId?'编辑广告位类型':'添加广告位类型'"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname inputnameauto">编码</span>
                    <input class="inputtext" type="text" placeholder="请输入编码" v-model="unitInfoData.advertisingTypeCode">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameauto">名称</span>
                    <input class="inputtext" type="text" placeholder="请输入名称" v-model="unitInfoData.advertisingTypeName">
                </div>
                <div class="dialoginput noline" style="flex-direction: column;">
                    <div>
                        <span class="inputname">备注</span>
                    </div>
                    <textarea class="textareabox" placeholder="选填" v-model="unitInfoData.remark"></textarea>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="submitFormData()">确 定</el-button>
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
                loading: false,
                dialogVisible:false,
                dataList:[],
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                listId:'',
                unitInfoData:{
                    advertisingTypeCode: "",
                    advertisingTypeName: "",
                    id: 0,
                    remark: ""
                },
                columnData:[
                    { prop: 'advertisingTypeCode', label: '编码'},
                    { prop: 'advertisingTypeName', label: '名称' },
                    { prop: 'remark', label: '备注' },
                    { prop: 'updateUser', label: '操作人'}
                ]
            }
        },
        mounted(){

        },
        methods:{
            handleOpen(){
                this.dialogVisible = true;
                this.unitInfoData={
                    advertisingTypeCode: "",
                    advertisingTypeName: "",
                    id: 0,
                    remark: ""
                }
                this.listId = '';
            },
            handleClose(){
                this.dialogVisible = false;
            },
            async getDataList(pageNum,pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                await this.$api.rentapi.listUsingGET({
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                }).then(res=>{
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
            async getUnitInfo(id){
                this.dialogVisible = true;
                this.listId = id;
                this.unitInfoData={
                    advertisingTypeCode: "",
                    advertisingTypeName: "",
                    id: 0,
                    remark: ""
                }
                this.$api.rentapi.getByIdUsingGET({
                    id: id
                }).then(res => {
                    this.unitInfoData = res.data.data;
                })
            },
            async submitFormData(){
                this.loading = true;
                if(this.listId == '') {
                    await this.$api.rentapi.addUsingPOST({
                        param: this.unitInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.getDataList(1,this.pageSize);
                            this.dialogVisible = false;
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }else{
                    this.unitInfoData.id=this.listId;
                    await this.$api.rentapi.updateUsingPUT({
                        param: this.unitInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.getDataList(1,this.pageSize);
                            this.dialogVisible = false;
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }
            },
            async deleteListData(id){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.updateUsingDELETE({
                        id:id
                    }).then(res=>{
                        if (res.data.status == 200) {
                            this.getDataList(1,this.pageSize);
                            this.$message.success(res.data.msg);
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
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