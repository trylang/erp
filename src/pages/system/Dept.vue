<template>
    <div v-loading.fullscreen="loading">
        <con-head title="部门管理">
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
                :title="listid?'编辑部门':'添加部门'"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname inputnameWidth">部门名称</span>
                    <input class="inputtext" type="text" placeholder="请输入部门名称" v-model="add.departmentName">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameWidth">所属购物中心</span>
                    <el-select v-model="add.marketId" placeholder="请选择" filterable clearable class="dialogselect">
                        <el-option
                                v-for="item in options"
                                :key="item.id"
                                :label="item.marketName"
                                :value="item.id">
                        </el-option>
                    </el-select>
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
        name: "dept",
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
                add:{
                    id: '',
                    marketId: '',
                    departmentName: '',
                    marketName: ''
                },
                options: [{
                    marketName:this.$userInfo.marketName,
                    id:this.$userInfo.marketId
                }],
                columnData:[
                    { prop: 'departmentCode', label: '部门编码'},
                    { prop: 'departmentName', label: '部门名称' },
                    { prop: 'marketName', label: '购物中心' },
                    { prop: 'showUpdateDate', label: '更新时间' }
                ]
            }
        },
        mounted(){

        },
        watch:{
            searchName(){
                this.$delay(()=>{
                    this.pageHandler(1,this.pageSize);
                },300)
            }
        },
        methods:{
            pageHandler(pageNum, pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                let params = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    name: this.searchName
                }
                this.$api.systemapi.listUsingGET(params).then(res=>{
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
              var reg=/^[\u4E00-\u9FA5]{2,6}$/;
              if(!this.add.departmentName){
                     this.$message.error('部门名称不能为空');
                 }else if(!reg.test(this.add.departmentName)){
                     this.$message.error('部门名称可能存在非法字符或长度不符');
                 }else {
                 if (id) {
                     this.loading = true;
                   this.$api.systemapi.putDepartment({
                     request: {
                       id: this.add.id,
                       marketId: this.add.marketId,
                       departmentName: this.add.departmentName
                     }
                   }).then(res => {
                     if (res.data.status == 200) {
                         this.loading = false;
                         this.dialogVisible = false;
                       this.$message.success(res.data.msg);
                       this.pageHandler(1,this.pageSize);
                     } else {
                         this.loading = false;
                       this.$message.error(res.data.msg);
                     }
                   }).catch(res => {
                       this.loading = false;
                     this.$message.error(res.data.msg);
                   })
                 } else {
                     this.loading = true;
                   this.$api.systemapi.saveUsingPOST({
                     request: {
                       marketId: this.add.marketId,
                       departmentName: this.add.departmentName
                     }
                   }).then(res => {
                     if (res.data.status == 200) {
                         this.loading = false;
                         this.dialogVisible = false;
                       this.$message.success(res.data.msg);
                       this.pageHandler(1,this.pageSize);
                     } else {
                         this.loading = false;
                       this.$message.error(res.data.msg);
                     }
                   }).catch(res => {
                       this.loading = false;
                     this.$message.error(res.data.msg);
                   })
                 }
               }
            },
            dialogData(id, data){
                this.listid = id;
                this.dialogVisible = true;
                if(id) {
                    this.add = {
                        id: data.id,
                        marketId: data.marketId,
                        departmentName: data.departmentName,
                        marketName: data.marketName
                    }
                }else{
                    this.add = {};
                }
                /*this.$api.systemapi.listUsingGET_1().then(res=>{
                    this.options = res.data.data.list;
                }).catch(res=>{
                    this.$message.error(res.data.msg);
                })*/
            },
            deleteList(id){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.systemapi.deleteUsingDELETE({id: id}).then(res =>{
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
