<template>
    <div>
        <con-head title="货品组别管理">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="handleOpen()">添加</el-button>
            <el-button type="primary" slot="append" @click="getInfoData()">修改</el-button>
            <el-button type="primary" slot="append" @click="deleteData()">删除</el-button>
        </con-head>
        <con-head>
            <div class="mainbox">
                <el-tree
                        :data="dataTreeList"
                        :props="defaultProps"
                        :highlight-current=true
                        @node-click="handleNodeClick"
                        :expand-on-click-node="false"
                ></el-tree>
            </div>
        </con-head>
        <el-dialog
                :title="addInfoData.id?'编辑货品组别':'添加货品组别'"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">编码</span>
                    <input class="inputtext" type="text" placeholder="请输入货品组别编号" v-model="addInfoData.businessCode" :disabled="addInfoData.id != ''">
                </div>
                <div class="dialoginput">
                    <span class="inputname">名称</span>
                    <input class="inputtext" type="text" placeholder="请输入货品组别名称" v-model="addInfoData.businessName">
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="addTreeData()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    import DataTable from '../../../components/DataTable'
    export default {
        name: "index",
        data(){
            return{
                dialogVisible:false,
                dataTreeList:[],
                addInfoData:{
                    businessCode: '',
                    businessName: '',
                    id:'',
                    pid: null
                },
                defaultProps: {
                    children: 'tree',
                    label: 'goodsTypeName'
                },
                listId:'',
                treeData:''
            }
        },
        mounted(){
            this.getDataList();
        },
        methods:{
            handleOpen() {
                this.dialogVisible = true;
            },
            handleClose(){
                this.dialogVisible = false;
                this.addInfoData = {
                    goodsTypeCode: '',
                    goodsTypeName: '',
                    id:'',
                    pid: null
                }
            },
            async getDataList(){
                await this.$api.rentapi.treeUsingGET_1().then(res=>{
                    this.dataTreeList = res.data.data;
                })
            },
            handleNodeClick(data){
                this.treeData = data;
                console.log(data)
            },
            async getInfoData(){
                this.addInfoData.id = this.treeData.id;
                if(this.treeData.id){
                    this.dialogVisible = true;
                    await this.$api.rentapi.detailUsingGET_5({
                        id:this.treeData.id
                    }).then(res=>{
                        this.addInfoData = res.data.data;
                    })
                }
            },
            async addTreeData(){
                if(this.addInfoData.id == '') {
                    this.addInfoData.pid = this.treeData.id;
                    await this.$api.rentapi.addUsingPOST_6({
                        request: this.addInfoData
                    }).then(res => {
                        this.treeData = '';
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.getDataList();
                            this.dialogVisible = false;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    await this.$api.rentapi.updateUsingPUT_8({
                        request: this.addInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.getDataList();
                            this.dialogVisible = false;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async deleteData(){
                if(this.treeData.id) {
                    this.$confirm('是否删除该条数据?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$api.rentapi.deleteUsingDELETE_3({
                            id: this.treeData.id
                        }).then(res => {
                            if (res.data.status == 200) {
                                this.$message.success(res.data.msg);
                                this.getDataList();
                            } else {
                                this.$message.error(res.data.msg);
                            }
                        })
                    })
                }
            }
        },
        components:{
            ConHead,
            DataTable
        }
    }
</script>

<style scoped>

</style>