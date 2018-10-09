<template>
    <div v-loading.fullscreen="loading">
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/inner/brandlibrary" v-if="brandlibrary">品牌库</router-link>
                <router-link to="/inner/brandapply" v-if="brandapply">品牌申请</router-link>
                <router-link to="/inner/brandapplyaudit" v-if="brandapplyaudit">品牌申请审核</router-link>
            </div>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入编码" v-model.trim="searchText" @keyup.enter="getDataList(1,pageSize)"><i class="iconfont icon-sousuo"></i>
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
                <el-row>
                    <el-col :span="9">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">业态</span>
                            <el-select v-model="formatsValue" placeholder="请选择" filterable clearable class="dialogselect" @change="typeSelect()">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in formatsOptions"
                                        :key="item.value"
                                        :label="item.text"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </con-head>
        <con-head>
            <div class="btn">
                <button @click="auditbtn" :disabled="isDisabled">确定</button>
                <button @click="rebutReasonOpen()" style="background: #ff5400; margin-left: 10px;">驳回</button>
            </div>
            <div class="mainbox">
                <data-table :tableData="dataList" :colConfigs="columnData" @listSelected="childData">
                    <el-table-column
                            width="130"
                            label="申请信息"
                            slot="operation">
                        <template slot-scope="scope">
                            <div>
                                <i class="iconfont icon-renyuan" style="font-size: 12px;"></i>
                                <span>{{scope.row.applyPerson}}</span>
                            </div>
                            <div>
                                <i class="iconfont icon-dianhuahm-copy" style="font-size: 12px;"></i>
                                <span>{{scope.row.applyTel}}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="状态"
                            slot="operation">
                        <template slot-scope="scope">
                            <div v-if="scope.row.status != 2">{{scope.row.statusName}}</div>
                            <div class="btn_text" v-if="scope.row.status == 2" @click="rebutReasonInfo(scope.row.id)" style="">{{scope.row.statusName}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="更新时间"
                            width="150"
                            slot="operation">
                        <template slot-scope="scope">
                            {{scope.row.updateDate | formatDate('yyyy-MM-dd hh:mm:ss')}}
                        </template>
                    </el-table-column>
                </data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getDataList" style="margin-bottom:30px"></rt-page>
        </con-head>
        <el-dialog
                :title="listId?'查看驳回':'审核驳回'"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput noline">
                    <span class="inputname inputnameauto">驳回原因</span>
                    <textarea class="inputtext textareabox" style="border: 1px solid #e5e5e5;height:160px;" placeholder="不超过100字" v-model="rebutReason" :readonly="!!listId"></textarea>
                </div>
            </div>
            <span slot="footer" class="dialog-footer" v-if="listId">
                <el-button @click="rebutReasonClose()">关 闭</el-button>
            </span>
            <span slot="footer" class="dialog-footer" v-else>
                <el-button @click="handleClose()">取 消</el-button>
                <el-button type="primary" @click="rebutbtn()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    import RtPage from '../../../components/Pagination'
    import DataTable from '../../../components/DataTable'
    export default {
        name: "unit",
        data(){
            return{
                loading: false,
                dialogVisible:false,
                isDisabled:false,
                dataList:[],
                searchText:'',
                formatsValue:'',
                statusId:'',
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                columnData:[
                    { type: 'selection', width:'50'},
                    { prop: 'brandName', label: '名称' },
                    { prop: 'busNames', label: '一级业态' },
                    { prop: 'busSecondName', label: '二级业态' },
                    { prop: 'businessIdThreeLevel', label: '三级业态' },
                    { prop: 'country', label: '国别' },
                    { prop: 'marketName', label: '所属商场' }
                ],
                statusData:[{
                    name:"全部",
                    isStatus:true,
                    id:''
                },{
                    name:"新增",
                    isStatus:false,
                    id:0
                },{
                    name:"驳回",
                    isStatus:false,
                    id:2
                }],
                formatsOptions:[],
                countryOptions:[],
                multipleSelection:[],
                rebutReason:'',
                listId:''
            }
        },
        mounted(){
            this.getBusinessList();
            this.getCountryList();
        },
        computed:{
            brandlibrary(){
                return this.$root.menus.indexOf('/inner/brandlibrary') >= 0;
            },
            brandapply(){
                return this.$root.menus.indexOf('/inner/brandapply') >= 0;
            },
            brandapplyaudit(){
                return this.$root.menus.indexOf('/inner/brandapplyaudit') >= 0;
            }
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getDataList(1,this.pageSize);
                },300)
            }
        },
        methods:{
            rebutReasonOpen(){
                this.rebutReason = '';
                this.listId = '';
                if(this.multipleSelection.length != 0) {
                    this.dialogVisible = true;
                }else{
                    this.$message.error('请选择需要审核的数据');
                }
            },
            handleClose(){
                this.rebutReason = '';
                this.dialogVisible = false;
                this.listId = '';
            },
            rebutReasonClose(){
                this.rebutReason = '';
                this.dialogVisible = false;
                this.listId = '';
            },
            async getDataList(pageNum,pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                await this.$api.rentapi.brandApplyAuditList({
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    brandName:this.searchText,
                    status:this.statusId,
                    businessId:this.formatsValue
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
            async getBusinessList(){
                await this.$api.rentapi.getOptionsUsingGET({level: 1}).then(res=>{
                    this.formatsOptions = res.data.data;
                })
            },
            async getCountryList(){
                await this.$api.rentapi.listUsingGET_2().then(res=>{
                    this.countryOptions = res.data.data;
                })
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
            },
            childData(data){
                this.multipleSelection = data.map(item=>{
                    return item.id
                });
            },
            async auditbtn(){
                if(this.multipleSelection.length != 0) {
                    this.isDisabled = true;
                    await this.$api.rentapi.confirmApplyAuditList({
                        ids: this.multipleSelection
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.getDataList(1, this.pageSize);
                        } else {
                            this.$message.error(res.data.msg);
                        }
                        this.isDisabled = false;
                    }).catch(res=>{
                        this.isDisabled = false;
                    })
                }else{
                    this.$message.error('请选择需要审核的数据');
                }
            },
            async rebutbtn(){
                await this.$api.rentapi.rebutBrandApplyList({
                    param:{
                        ids:this.multipleSelection,
                        rebutReason: this.rebutReason
                    }
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.dialogVisible = false;
                        this.rebutReason = '';
                        this.$message.success(res.data.msg);
                        this.getDataList(1,this.pageSize);
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            async rebutReasonInfo(id){
                this.dialogVisible = true;
                this.listId = id;
                this.$api.rentapi.getBrandApplyInfo({
                    id: id
                }).then(res => {
                    this.rebutReason = res.data.data.rebutReason;
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
    .btn{
        padding: 0 20px;
    }
    .btn button{
        background: #457fcf;
        border: none;
        color: #fff;
        padding: 5px 28px;
        border-radius: 15px;
        cursor: pointer;
    }
</style>