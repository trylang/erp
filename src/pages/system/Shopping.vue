<template>
    <div v-loading.fullscreen="loading">
        <con-head title="购物中心">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialogData()">添加</el-button>
            <el-row slot="preappend">
                <el-col :span="9">
                    <div class="searchbox">
                        <input type="text" placeholder="请输入名称" v-model="searchName" @keyup.enter="pageHandler(1,pageSize)"><i class="iconfont icon-sousuo"></i>
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
                :title="listid?'编辑购物中心':'添加购物中心'"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname inputnameWidth" style="width:140px;">购物中心编码</span>
                    <input class="inputtext" type="text" placeholder="请输入购物中心编码" v-model="add.marketCode" :readonly="listid">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameWidth" style="width:140px;">购物中心名称</span>
                    <input class="inputtext" type="text" placeholder="请输入购物中心名称" v-model="add.marketName">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameWidth" style="width:140px;">英文名称(选填)</span>
                    <input class="inputtext" type="text" placeholder="请输入英文名称" v-model="add.marketEnglishName">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameWidth" style="width:140px;">商场面积(m²)(选填)</span>
                    <input class="inputtext" type="number" min="0" placeholder="请输入商场面积" v-model.number="add.marketArea">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameWidth" style="width:140px;">所属区域</span>
                    <input class="inputtext" type="text" v-if="listid" v-model="add.regionName==null?'无':add.regionName" disabled style="background-color: #eee;">
                    <el-tree
                        v-if="!listid"
                        :data="treeData"
                        node-key="id"
                        ref="tree"
                        :highlight-current="true"
                        class="inputtext shopinputtext"
                        @node-click="checkHandler"
                        :props="defaultProps">
                    </el-tree>
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameWidth" style="width:140px;">电话</span>
                    <input class="inputtext" type="text" placeholder="请输入电话" v-model="add.phone">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameWidth" style="width:140px;">传真</span>
                    <input class="inputtext" type="text" placeholder="请输入传真" v-model="add.fax">
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
    import {
      numberNotE,
      numMax10,
      numPartmax2
    } from "@/utils";
    export default {
        name: "shopping",
        data(){
            return{
                loading: true,
                dialogVisible:false,
                datalist:[],
                listid: '',
                searchName: '',
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                treeData: [],
                add:{
                    id: '',
                    marketCode:'',
                    marketName: '',
                    marketEnglishName: '',
                    marketArea: '',
                    regionName:'',
                    regionId: '',
                    phone:'',
                    fax:''
                },
                options: [],
                columnData:[
                    { prop: 'marketCode', label: '购物中心编码'},
                    { prop: 'marketName', label: '购物中心名称' },
                    { prop: 'marketEnglishName', label: '英文名称' },
                    { prop: 'regionName', label: '上级区域' },
                    { prop: 'marketArea', label: '购物中心面积(m²)' },
                    { prop: 'showUpdateDate', label: '更新时间' }
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        mounted(){
            // this.pageHandler();
        },
        watch:{
            searchName(){
                this.$delay(()=>{
                    this.pageHandler(1,this.pageSize);
                },300)
            }
        },
        methods:{
            pageHandler(pageNum,pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                let params = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    name: this.searchName
                }
                this.$api.systemapi.listUsingGET_1(params).then(res=>{
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
            addbuilding(id){
                if(id){
                    if(this.add.marketArea){
                        if (!numberNotE(this.add.marketArea)) {
                          this.$message.info("请输入数字！");
                          return;
                        }
                        if (!numMax10(this.add.marketArea)) {
                          this.$message.info("请输入大于等于0，小于10位数的正数！");
                          return;
                        }
                        if (!numPartmax2(this.add.marketArea)) {
                          this.$message.info("只能保留两位小数！");
                          return;
                        }
                    }
                    this.loading = true;
                    this.$api.systemapi.updateUsingPOST_1({request:{
                        id: this.add.id,
                        regionId: this.add.regionId,
                        marketName: this.add.marketName,
                        marketEnglishName: this.add.marketEnglishName,
                        marketArea: this.add.marketArea,
                        marketCode: this.add.marketCode,
                        phone: this.add.phone,
                        fax: this.add.fax
                    }}).then(res=>{
                        if(res.data.status==200){
                            this.loading = false;
                            this.dialogVisible = false;
                            this.$message.success(res.data.msg);
                            this.pageHandler(1,this.pageSize);
                        }else{
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                        this.$message.error(res.data.msg);
                    });
                }else{
                    if(this.add.marketArea <= 0){
                        this.$message.warning('商场面积不能小于0');
                    }else{
                        this.loading = true;
                        this.$api.systemapi.saveUsingPOST_1({request:{
                            regionId: this.add.regionId,
                            marketName: this.add.marketName,
                            marketEnglishName: this.add.marketEnglishName,
                            marketArea: this.add.marketArea,
                            marketCode: this.add.marketCode,
                            phone: this.add.phone,
                            fax: this.add.fax
                        }}).then(res=>{
                            if(res.data.status==200){
                                this.loading = false;
                                this.dialogVisible = false;
                                this.$message.success(res.data.msg);
                                this.pageHandler(1,this.pageSize);
                            }else{
                                this.loading = false;
                                this.$message.error(res.data.msg);
                            }
                        }).catch(res=>{
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        });
                    }
                }
            },
            dialogData(id, data){
                this.listid = id;
                this.dialogVisible = true;
                if(id) {
                    this.add = {
                        id: data.id,
                        marketName: data.marketName,
                        marketEnglishName: data.marketEnglishName,
                        regionName: data.regionName,
                        regionId: data.regionId,
                        marketArea: data.marketArea,
                        marketCode: data.marketCode,
                        phone: data.phone,
                        fax: data.fax
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
                    this.$api.systemapi.deleteUsingDELETE_1({id: id}).then(res =>{
                        if(res.data.status==200){
                            this.$message.success(res.data.msg);
                            this.pageHandler(1,this.pageSize);
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res => {
                        this.$message.error(res.data.msg);
                    });
                })
            },
            checkHandler(data){
                this.add.regionId = data.id;
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