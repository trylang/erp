<template>
    <div>
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/rebates/poundage">手续费设置</router-link>
                <router-link to="/rebates/poundageOut">例外店手续费设置</router-link>
            </div>
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialogVisible = true">添加</el-button>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">渠道：</span>
                            <el-select v-model="contractId" placeholder="请选择" class="dialogselect" @change="pageHandler(1)">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in contracts"
                                        :key="item.id"
                                        :label="item.contractCode"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="2">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">类型：</span>
                            <el-select v-model="contractId" placeholder="请选择" class="dialogselect" @change="pageHandler(1)">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in contracts"
                                        :key="item.id"
                                        :label="item.contractCode"
                                        :value="item.id">
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
                :title="listid?'编辑终端号':'添加终端号'"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname inputnameauto">渠道</span>
                    <el-select v-model="contractId" placeholder="请选择" class="dialogselect" @change="pageHandler(1)">
                        <el-option label="全部" value=""></el-option>
                        <el-option
                                v-for="item in contracts"
                                :key="item.id"
                                :label="item.contractCode"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">手续费</span>
                    <input class="inputtext" type="text" placeholder="请输入英文缩写" v-model="add.regionEnglishName">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameauto">类型</span>
                    <el-select v-model="contractId" placeholder="请选择" class="dialogselect" @change="pageHandler(1)">
                        <el-option label="全部" value=""></el-option>
                        <el-option
                                v-for="item in contracts"
                                :key="item.id"
                                :label="item.contractCode"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameauto">有效期截止</span>
                    <el-date-picker
                        class="inputtext"
                        v-model="searchData"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        @change="pageHandler(1)">
                    </el-date-picker>
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
    import ConHead from '../../components/ConHead'
    import RtPage from '../../components/Pagination'
    import DataTable from '../../components/DataTable'
    export default {
        name: "index",
        data(){
            return{
                dialogVisible:false,
                datalist:[],
                listid:'',
                searchName: '',
                contractId: '',
                contracts: [],
                searchData: '',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                add:{
                    id: '',
                    pid: '',
                    regionName: '',
                    regionEnglishName: '',
                    pname: '',
                },
                columnData:[
                    { prop: 'regionCode', label: '渠道'},
                    { prop: 'regionName', label: '手续费率' },
                    { prop: 'regionEnglishName', label: '类型' },
                    { prop: 'showUpdateDate', label: '有效期' },
                    { prop: 'showUpdateDate', label: '更新时间' },
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        mounted(){
            this.pageHandler();
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
                        // pid: this.add.treeId,
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
                    // this.$api.systemapi.queryTreeUsingGET().then(res=>{
                    //     this.treeData = res.data.data;
                    // }).catch(res=>{
                    //     this.$message.error(res.data.msg);
                    // })
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