<template>
    <div v-loading.fullscreen="loading">
        <con-head title="银行终端号管理">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="addHandler">添加</el-button>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入店铺号/店铺/终端号" v-model.trim="searchName" @keyup.enter="pageHandler(1,pageSize)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="12" :offset="3">
                        <div class="searchinput searchdatepicker">
                            <span class="inputname inputnameauto">有效期：</span>
                            <el-date-picker
                                    v-model="startDateData"
                                    type="date"
                                    placeholder="选择日期"
                                    @change="dateDataList()"
                                    value-format="yyyy-MM-dd">
                            </el-date-picker>
                            ~
                            <el-date-picker
                                    v-model="endDateData"
                                    type="date"
                                    placeholder="选择日期"
                                    @change="dateDataList()"
                                    value-format="yyyy-MM-dd">
                            </el-date-picker>
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
                custom-class="customdialog"
                v-loading="loading">
            <div class="dialogbox">
                <div class="rentcontent">
                    <span class="inputname inputnameCenter">店铺号</span>
                    <el-select v-model="add.shopId" placeholder="请选择" filterable clearable class="dialogselect" @change="checkShopHandler(add.shopId)" :disabled = "!!listid">
                        <el-option
                                v-for="item in shopOptions"
                                :label="item.shopName+'（'+item.shopCode+'）'"
                                :key="item.id"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="rentcontent">
                    <span class="inputname inputnameCenter">POS机号</span>
                    <el-select v-model="add.posNumber" placeholder="请选择" clearable class="dialogselect" :disabled = "!!listid">
                        <el-option
                            v-for="item in posArr"
                            :key="item"
                            :value="item">
                        </el-option>
                    </el-select>
                </div>
                <div class="rentcontent">
                    <span class="inputname inputnameCenter">终端号</span>
                    <input class="inputtext" type="number" oninput="if(value.length>20)value=value.slice(0,20)" placeholder="请输入终端号" v-model="add.terminalNumber" :readonly = "!!listid">
                </div>
                <div class="dialoginput rentcontent">
                    <span class="inputname inputnameCenter">开始日期</span>
                    <el-date-picker
                            class="inputtext datetext"
                            v-model="add.validStartDate"
                            type="date"
                            placeholder="选择日期"
                            value-format="yyyy-MM-dd">
                    </el-date-picker>
                </div>
                <div class="dialoginput rentcontent">
                    <span class="inputname inputnameCenter">截止日期</span>
                    <el-date-picker
                            class="inputtext datetext"
                            v-model="add.validEndDate"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions"
                            value-format="yyyy-MM-dd">
                    </el-date-picker>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="addbuilding(add.id)">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import { $message } from "../../utils/notice";
    import ConHead from '../../components/ConHead'
    import RtPage from '../../components/Pagination'
    import DataTable from '../../components/DataTable'
    export default {
        name: "index",
        data(){
            return{
                loading: false,
                listid:0,
                dialogVisible:false,
                posArr: [],
                datalist:[],
                searchName: '',
                loading: false,
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
                total: 0,
                add:{
                    type: 0,
                    id: '',
                    shopId: '',
                    posNumber: '',
                    terminalNumber: '',
                    validStartDate: '',
                    validEndDate:''
                },
                value: '',
                shopOptions: [],
                columnData:[
                    { prop: 'shopCode', label: '店铺号'},
                    { prop: 'shopName', label: '店铺' },
                    { prop: 'posNumber', label: 'POS机号' },
                    { prop: 'terminalNumber', label: '终端号' },
                    { prop: 'validDate', label: '有效期' },
                    { prop: 'updateDate', label: '更新时间' }
                ],
                startDateData:'',
                endDateData:'',
                pickerOptions: {
                    disabledDate: (time) => {
                        return time.getTime() < new Date(this.add.validStartDate).getTime() - 24 * 3600 * 1000;
                    }
                }
            }
        },
        watch:{
            searchName(){
                this.$delay(()=>{
                    this.pageHandler(1,this.pageSize);
                },300)
            }
        },
        mounted(){
            this.getShopList();
        },
        methods:{
            pageHandler(pageNum, pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                let params = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    validEndDateFrom:this.startDateData,
                    validEndDateTo:this.endDateData,
                    type: 0,
                    queryParam: this.searchName
                }
                this.$api.refundapi.getListForPageUsingGET_7(params).then(res=>{
                    if(res.data.status === 200){
                        this.datalist = res.data.data.list;
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
            dateDataList(){
                if(this.startDateData && this.endDateData || !this.startDateData && !this.endDateData){
                    this.pageHandler(1,this.pageSize)
                }
            },
            handleClose(){
                this.dialogVisible = false;
            },
            addbuilding(id){
                this.loading = true;
                if(id){
                    this.$api.refundapi.updateUsingPUT_2({request:{//编辑
                        id: this.add.id,
                        type: 0,
                        shopId: this.add.shopId,
                        posNumber: this.add.posNumber,
                        terminalNumber: this.add.terminalNumber,
                        validStartDate: this.add.validStartDate,
                        validEndDate:this.add.validEndDate
                    }}).then(res=>{
                        if(res.data.status === 200){
                            this.$message.success(res.data.msg);
                            this.dialogVisible = false;
                            this.loading = false;
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
                    this.$api.refundapi.addUsingPOST_2({request:{//新增
                        type: 0,
                        shopId: this.add.shopId,
                        posNumber: this.add.posNumber,
                        terminalNumber: this.add.terminalNumber,
                        validStartDate: this.add.validStartDate,
                        validEndDate:this.add.validEndDate
                    }}).then(res=>{
                        if(res.data.status==200){
                            this.$message.success(res.data.msg);
                            this.dialogVisible = false;
                            this.loading = false;
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
            },
            dialogData(id, data){
                this.listid = id;
                if(id) {   //无结束日期可编辑，还有--开始日期必须大于系统日期
                    this.dialogVisible = true;
                    this.add = {
                        id: data.id,
                        type: 0,
                        shopId: data.shopId,
                        posNumber: data.posNumber,
                        terminalNumber: data.terminalNumber,
                        validStartDate: data.validStartDate,
                        validEndDate: data.validEndDate
                    }
                    this.posArr = [];
                    this.$api.refundapi.getPosNumUsingGET({id: this.add.shopId}).then(res =>{//根据店铺id查询
                        if(res.data.status === 200){
                            for(var i=1; i<=res.data.data; i++){
                                this.posArr.push("0"+i);
                            }
                        }
                    })
                }else{
                    this.dialogVisible = true;
                    this.add = {};
                }
            },
            deleteList(id){
                this.$api.refundapi.isValidUsingGET_1({id: id}).then(res=>{//可删除时判断开始日期
                    if(res.data.status === 200){
                        this.$confirm('是否删除该条数据?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.$api.refundapi.deleteUsingDELETE_2({id: id}).then(res =>{
                                if(res.data.status==200){
                                    this.$message.success(res.data.msg);
                                    this.pageHandler(1,this.pageSize);
                                }else{
                                    this.$message.error(res.data.msg);
                                }
                            }).catch(res => {
                                this.$message.error(res.data.msg);
                            });
                        });
                    }else{
                        this.$message.warning(res.data.msg);
                    }
                })
            },
            getShopList(){
                this.$api.rentapi.getByStatusUsingPOST({status: [1, 3, 4]}).then(res=>{//只能是 空置，预定，使用中的状态
                    this.shopOptions = res.data.data;
                })
            },
            checkShopHandler(shopId){
                this.add.posNumber = '';
                this.posArr = [];
                this.$api.refundapi.getPosNumUsingGET({id: shopId}).then(res =>{//根据店铺id查询
                    if(res.data.status === 200){
                        for(var i=1; i<=res.data.data; i++){
                            this.posArr.push("0"+i);
                        }
                    }
                });
                this.$api.rentapi.getContractValidDate({shopId: shopId}).then(res =>{//根据店铺id查询合同日期
                    if(res.data.status === 200){
                        this.add.validStartDate = res.data.data.validStartDate;
                        this.add.validEndDate = res.data.data.validEndDate;
                    }
                });
            },
            addHandler(){
                this.dialogVisible = true;
                this.posArr = [];
                this.add = {
                    shopId: '',
                    posNumber: '',
                    terminalNumber: '',
                    validStartDate: '',
                    validEndDate:''
                };
                this.listid = '';
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