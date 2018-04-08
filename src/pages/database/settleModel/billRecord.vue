<template>
    <div>
        <con-head title="账单维护记录">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialogData()">添加</el-button>
            <el-row slot="preappend">
                <el-col :span="9">
                    <div class="searchbox">
                        <input type="text" placeholder="请输入名称" v-model.trim="searchName" @keyup.enter="pageHandler(1)"><i class="iconfont icon-sousuo"></i>
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
                            <button class="btn_text" @click="dialogData(scope.row.id,scope.row)">编辑</button>
                            <button class="btn_text" @click="deleteList(scope.row.id)">删除</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="pageHandler" style="margin-bottom:30px"></rt-page>
        </con-head>
        <el-dialog
                :title="listid?'编辑区域':'添加区域'"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">区域名称</span>
                    <input class="inputtext" type="text" placeholder="请输入区域名称" v-model="add.regionName">
                </div>
                <div class="dialoginput">
                    <span class="inputname">英文缩写</span>
                    <input class="inputtext" type="text" placeholder="请输入英文缩写" v-model="add.regionEnglishName">
                </div>
                <div class="dialoginput">
                    <span class="inputname">上级区域</span>
                    <input class="inputtext" type="text" v-if="listid" v-model="add.pname==null?'无':add.pname+'（不可更改）'" disabled>
                    <el-tree
                        v-if="!listid"
                        :data="treeData"
                        node-key="id"
                        ref="tree"
                        @node-click="checkHandler"
                        :props="defaultProps">
                    </el-tree>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addbuilding(add.id)">确 定</el-button>
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
                datalist:[],
                listid:'',
                searchName: '',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                treeData: [],
                add:{
                    id: '',
                    pid: '',
                    regionName: '',
                    regionEnglishName: '',
                    pname: '',
                    treeId: ''
                },
                columnData:[
                    { prop: 'regionCode', label: '编码'},
                    { prop: 'regionName', label: '区域名称' },
                    { prop: 'regionEnglishName', label: '英文缩写' },
                    { prop: 'pname', label: '上级区域' },
                    { prop: 'showUpdateDate', label: '更新时间' }
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        mounted(){

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
                    name: this.searchName
                }
                this.$api.systemapi.listUsingGET_6(params).then(res=>{
                    this.datalist = res.data.data.list;
                    this.total = Number(res.data.data.total);
                }).catch(res=>{
                    this.$message.error(res.data.msg);
                })
            },
            addbuilding(id){
                if(id){
                    if(!this.add.regionName){
                        this.$message.warning('区域名称不能为空');
                    }else if(!this.add.regionEnglishName){
                        this.$message.warning('英文缩写不能为空');
                    }else if(!this.add.pid){
                        this.$message.warning('上级区域不能为空');
                    }else{
                        this.$api.systemapi.updateUsingPOST_4({request:{
                            regionId: this.add.id,
                            pid: this.add.pid,
                            regionName: this.add.regionName,
                            regionEnglishName: this.add.regionEnglishName
                        }}).then(res=>{
                            if(res.data.code==200){
                                this.$message.success(res.data.msg);
                                this.pageHandler(1);
                            }else{
                                this.$message.error(res.data.msg);
                            }
                        }).catch(res=>{
                            this.$message.error(res.data.msg);
                        });
                    }
                }else{
                    this.$api.systemapi.saveUsingPOST_4({request:{
                        pid: this.add.treeId,
                        regionName: this.add.regionName,
                        regionEnglishName: this.add.regionEnglishName
                    }}).then(res=>{
                        if(res.data.code==200){
                            this.$message.success(res.data.msg);
                            this.pageHandler(1);
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.$message.error(res.data.msg);
                    });
                }
                this.dialogVisible = false;
            },
            dialogData(id, data){
                this.listid = id;
                this.dialogVisible = true;
                if(id) {
                    this.add = {
                        id: data.id,
                        pid: data.pid,
                        regionName: data.regionName,
                        regionEnglishName: data.regionEnglishName,
                        pname: data.pname
                    }
                }else{
                    this.add = {};
                    this.$api.systemapi.queryTreeUsingGET().then(res=>{
                        this.treeData = res.data.data;
                    }).catch(res=>{
                        this.$message.error(res.data.msg);
                    })
                }
            },
            deleteList(id){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.systemapi.deleteUsingDELETE_3({id: id}).then(res =>{
                        if(res.data.code==200){
                            this.$message.success(res.data.msg);
                            this.pageHandler(1);
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res => {
                        this.$message.error(res.data.msg);
                    });
                })
            },
            checkHandler(data){
                this.add.treeId = data.id;
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