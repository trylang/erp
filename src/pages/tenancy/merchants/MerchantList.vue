<template>
    <div v-loading.fullscreen="loading">
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/inner/merchantlist" v-if="merchants">商户管理</router-link>
                <router-link to="/inner/merchantaudit" v-if="merchantaudit">商户审核</router-link>
            </div>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入编码" v-model.trim="searchText" @keyup.enter="getDataList(1,pageSize)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入名称" v-model.trim="searchName" @keyup.enter="getDataList(1,pageSize)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="9">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">类型</span>
                            <el-select v-model="typeValue" placeholder="请选择" filterable clearable class="dialogselect" @change="typeSelect()">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in typeOptions"
                                        :key="item.id"
                                        :label="item.typeName"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="texttitle">
                            <span class="inputname">状态：</span>
                            <div class="line-nav">
                                <a href="javascript:void(0)" v-for="statuslist in statusData" :class="{active:statuslist.isStatus}" @click="statusHandler(statuslist)">{{statuslist.name}}</a>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </con-head>
        <con-head>
            <div class="mainbox">
                <data-table :tableData="dataList" :colConfigs="columnData"></data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getDataList" style="margin-bottom:30px"></rt-page>
        </con-head>
        <el-dialog
                title="修改密码"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname inputnameWidth">新密码</span>
                    <input class="inputtext" type="password" placeholder="请输入新密码" v-model="newPassword">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameWidth">确认新密码</span>
                    <input class="inputtext" type="password" placeholder="请确认新密码" v-model="password">
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="resetPassword()">确 定</el-button>
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
                searchText:'',
                searchName:'',
                typeValue:'',
                statusId:'',
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                columnData:[
                    { prop: 'merchantCode', label: '编码', link: '/inner/merchants/detail', param: 'id'},
                    { prop: 'merchantName', label: '名称' },
                    { prop: 'merchantEnglishName', label: '英文名称' },
                    { prop: 'enumMerchantType', label: '类型' },
                    { prop: 'enumMerchantNature', label: '商户性质' },
                    { prop: 'responsiblePerson', label: '联系人' },
                    { prop: 'enumInvestSoursStatus', label: '状态'},
                    { prop: 'updateDateStr', label: '更新时间' }
                ],
                typeOptions:[{
                    typeName:'商场',
                    id:0
                },{
                    typeName:'写字楼',
                    id:1
                },{
                    typeName:'广告位',
                    id:3
                },{
                    typeName:'场地',
                    id:2
                }],
                statusData:[{
                    name:"全部",
                    isStatus:true,
                    id:''
                },{
                    name:"新增",
                    isStatus:false,
                    id:0
                },{
                    name:"已确认",
                    isStatus:false,
                    id:1
                },{
                    name:"取消",
                    isStatus:false,
                    id:2
                }],
                newPassword:'',
                password:'',
                merchantid:''
            }
        },
        mounted(){
        },
        computed:{
            merchants(){
                return this.$root.menus.indexOf('/inner/merchantlist') >= 0;
            },
            merchantaudit(){
                return this.$root.menus.indexOf('/inner/merchantaudit') >= 0;
            }
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getDataList(1,this.pageSize);
                },300)
            },
            searchName(){
                this.$delay(()=>{
                    this.getDataList(1,this.pageSize);
                },300)
            }
        },
        methods:{
            handleOpen(id) {
                this.dialogVisible = true;
                this.newPassword='';
                this.password='';
                this.merchantid = id;
            },
            handleClose(){
                this.dialogVisible = false;
            },
            async getDataList(pageNum,pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                await this.$api.rentapi.listpgUsingGET_4({
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    merchantCode:this.searchText,
                    merchantName:this.searchName,
                    merchantEnglishName:'',
                    merchantType:this.typeValue,
                    status:this.statusId
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
            async deleteListData(id){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.deleteUsingDELETE_5({
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
            },
            async cancelMerchant(id,status){
                this.$confirm('您确定继续当前操作？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.updateMerchantStatus({
                        id: id,
                        status: status
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.getDataList(1,this.pageSize);
                            this.$message.success(res.data.msg);
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                });
            },
            async resetPassword(){
                if(this.password != this.newPassword){
                    this.$message.error('密码不一致，请确认');
                    return false;
                }
                if(this.password && this.newPassword){
                    await this.$api.rentapi.resetMerchantPsd({
                        id:this.merchantid,
                        password:this.password
                    }).then(res=>{
                        if (res.data.status == 200) {
                            this.getDataList(1,this.pageSize);
                            this.$message.success(res.data.msg);
                            this.dialogVisible = false;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            statusHandler(status){
                this.statusData.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus;
                this.statusId = status.id;
                this.getDataList(1,this.pageSize);
            },
            typeSelect(){
                this.getDataList(1,this.pageSize);
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