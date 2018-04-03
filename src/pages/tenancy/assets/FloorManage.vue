<template>
    <div>
        <con-head title="楼宇管理">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="handleOpen()">添加</el-button>
            <el-button type="primary" slot="append" @click="getFloor()">修改</el-button>
            <el-button type="primary" slot="append" @click="deleteFloor()">删除</el-button>
        </con-head>
        <con-head>
            <div class="mainbox">
                <el-tree
                        :data="dataTreeList"
                        :props="defaultProps"
                        :highlight-current=true
                        @node-click="handleNodeClick"
                        :expand-on-click-node="false"
                        class="treestyle"
                ></el-tree>
            </div>
        </con-head>
        <el-dialog
                title="添加楼层"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname inputnameauto">楼层编码</span>
                    <input class="inputtext" type="text" placeholder="请输入编号" v-model="addBuild.floorCode">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameauto">楼层名称</span>
                    <input class="inputtext" type="text" placeholder="请输入名称" v-model="addBuild.floorName">
                </div>
                <div class="dialoginput">
                    <span class="inputname">所属楼宇</span>
                    <el-select v-model="addBuild.buildId" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in dataList"
                                :key="item.id"
                                :label="item.buildName"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose()">取 消</el-button>
                <el-button type="primary" @click="postAddBuild()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    export default {
        name: "floor-manage",
        data() {
            return {
                dialogVisible:false,
                dataTreeList:[],
                dataList:[],
                addBuild:{
                    buildId: '',
                    floorArea: '',
                    floorCode: '',
                    floorName: '',
                    id: 0
                },
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
                buildingData:''
            };
        },
        mounted(){
            this.getBuildingTreeList();
        },
        methods:{
            handleClose(){
               this.dialogVisible = false;
               this.addBuild = {
                   buildId: '',
                   floorArea: '',
                   floorCode: '',
                   floorName: '',
                   id: 0
               };
            },
            handleOpen(){
                this.dialogVisible = true;
                this.getBuildingList();
            },
            async getBuildingTreeList(){
                await this.$api.rentapi.treeListUsingGET().then(res=>{
                    this.dataTreeList = res.data.data;
                })
            },
            async getBuildingList(){
                await this.$api.rentapi.listUsingGET_4().then(res=>{
                    this.dataList = res.data.data;
                })
            },
            async postAddBuild(){
                if(this.addBuild.id == 0) {
                    await this.$api.rentapi.addUsingPOST_4({
                        param: this.addBuild
                    }).then(res => {
                        if (res.data.code == 200) {
                            this.$message.success(res.data.msg);
                            this.dialogVisible = false;
                            this.getBuildingTreeList();
                            this.addBuild = {
                                buildId: '',
                                floorArea: '',
                                floorCode: '',
                                floorName: '',
                                id: 0
                            }
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    await this.$api.rentapi.updateUsingPUT_6({
                        param:this.addBuild
                    }).then(res=>{
                        if (res.data.code == 200) {
                            this.$message.success(res.data.msg);
                            this.dialogVisible = false;
                            this.getBuildingTreeList();
                            this.addBuild = {
                                buildId: '',
                                floorArea: '',
                                floorCode: '',
                                floorName: '',
                                id: 0
                            }
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            handleNodeClick(data){
                this.buildingData = data;
                console.log(data)
            },
            async getFloor(){
                if(this.buildingData.level == 3){
                    this.getBuildingList();
                    this.dialogVisible = true;
                    await this.$api.rentapi.selectByIdUsingGET_2({
                        id:this.buildingData.id
                    }).then(res=>{
                        this.addBuild = res.data.data;
                    })
                }
            },
            async deleteFloor(){
                if(this.buildingData.level == 3){
                    this.$confirm('是否删除该条数据?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$api.rentapi.updateUsingDELETE_1({
                            id:this.buildingData.id
                        }).then(res=>{
                            if (res.data.code == 200) {
                                this.$message.success(res.data.msg);
                                this.getBuildingTreeList();
                            } else {
                                this.$message.error(res.data.msg);
                            }
                        })
                    }).catch(() => {});
                }
            }
        },
        components:{
            ConHead
        }
    }
</script>

<style scoped>

</style>