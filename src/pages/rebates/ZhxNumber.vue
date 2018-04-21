<template>
    <div>
        <con-head title="资和信终端号管理">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="addHandler">添加</el-button>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入店铺号/店铺/终端号" v-model.trim="searchName" @keyup.enter="pageHandler(1)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="2">
                        <div class="texttitle">
                            <span class="inputname">卡类型：</span>
                            <div class="line-nav">
                                <a href="javascript:void(0)" 
                                    v-for="status in selects.status" 
                                    :key="status.value" 
                                    :class="{active:status.isStatus}" 
                                    @click="statusHandler(status)">{{status.text}}
                                </a>
                            </div>
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
                            <button class="btn_text" v-if="!scope.row.validEndDate" @click="dialogData(scope.row.id,scope.row)">编辑</button>
                            <button class="btn_text" v-if="!scope.row.validEndDate" @click="deleteList(scope.row.id)">删除</button>
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
                <div class="rentcontent">
                    <span class="inputname inputnameCenter">店铺号</span>
                    <el-select v-model="add.shopId" placeholder="请选择" class="dialogselect" @change="checkShopHandler(add.shopId)">
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
                    <el-select v-model="add.posNumber" placeholder="请选择" class="dialogselect">
                        <el-option
                            v-for="item in posArr"
                            :key="item"
                            :value="item">
                        </el-option>
                    </el-select>
                </div>
                <div class="rentcontent">
                    <span class="inputname inputnameCenter">终端号</span>
                    <input class="inputtext" type="text" placeholder="请输入终端号" v-model="add.terminalNumber">
                </div>
                <div class="rentcontent">
                    <span class="inputname inputnameCenter">卡类型</span>
                    <el-select v-model="add.cardType" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in selects.cardType"
                                :key="item.id"
                                :label="item.text"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput rentcontent">
                    <span class="inputname inputnameCenter">有效期</span>
                    <el-date-picker
                        class="inputtext datetext"
                        v-model="add.validStartDate"
                        type="date"
                        placeholder="选择日期"
                        value-format="yyyy-MM-dd">
                    </el-date-picker>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="addbuilding(add.id)" :disabled="dataAll">确 定</el-button>
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
        data(){
            return{
                listid:0,
                dialogVisible:false,
                searchName: '',
                datalist:[],
                shopOptions: [],
                posArr: [],
                dataAll: false,
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                add:{
                    id: '',
                    type: 1,
                    shopId: '',
                    posNumber: '',
                    terminalNumber: '',
                    cardType: '',
                    validStartDate: ''
                },
                value: '',
                options: [{
                    value: '中粮集团'
                }, {
                    value: '中粮中粮'
                }, {
                    value: '中粮公司'
                }],
                selects: {
                    status:[
                        // {
                        //     name:"全部",
                        //     isStatus:true,
                        //     id: ''
                        // },{
                        //     name:"资和信商通卡",
                        //     isStatus:false,
                        //     id: 0
                        // },{
                        //     name:"大悦城资和信卡",
                        //     isStatus:false,
                        //     id: 1
                        // }
                    ],
                    cardType: [
                        // {
                        //     name:"资和信商通卡",
                        //     id: 0
                        // },{
                        //     name:"大悦城资和信卡",
                        //     id: 1
                        // }
                    ]
                },
                columnData:[
                    { prop: 'shopCode', label: '店铺号'},
                    { prop: 'shopName', label: '店铺' },
                    { prop: 'posNumber', label: 'POS机号' },
                    { prop: 'terminalNumber', label: '终端号' },
                    { prop: 'cardTypeText', label: '卡类型' },
                    { prop: 'validDate', label: '有效期' },
                    { prop: 'updateDate', label: '更新时间' }
                ]
            }
        },
        watch:{
            searchName(){
                this.$delay(()=>{
                    this.pageHandler(1);
                },300)
            }
        },
        mounted(){
            this.getShopList();
            this.getCardType();
        },
        methods:{
            pageHandler(pageNum, pageSize){
                let params = {
                    pageNum: pageNum,
                    pageSize: this.$refs.page.pageSize,
                    type: 1,
                    queryParam: this.searchName,
                    cardType: this.status
                }
                this.$api.refundapi.getListForPageUsingGET_10(params).then(res=>{
                    if(res.data.status === 200){
                        this.datalist = res.data.data.list;
                        this.total = Number(res.data.data.total);
                    }
                }).catch(res=>{
                    this.$message.error(res.data.msg);
                })
            },
            statusHandler(status){
                this.selects.status.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus
                this.status = status.value;
                this.pageHandler(1);
            },
            handleClose(){
                this.dialogVisible = false;
            },
            addbuilding(id){
                if(id){
                    this.$api.refundapi.updateUsingPUT_3({request:{//编辑
                        id: this.add.id,
                        type: 1,
                        shopId: this.add.shopId,
                        posNumber: this.add.posNumber,
                        terminalNumber: this.add.terminalNumber,
                        cardType: this.add.cardType,
                        validStartDate: this.add.validStartDate
                    }}).then(res=>{
                        if(res.data.status==200){
                            this.$message.success(res.data.msg);
                            this.pageHandler(1);
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.$message.error(res.data.msg);
                    });
                }else{
                    this.$api.refundapi.addUsingPOST_3({request:{//新增
                        id: '',
                        type: 1,
                        shopId: this.add.shopId,
                        posNumber: this.add.posNumber,
                        terminalNumber: this.add.terminalNumber,
                        cardType: this.add.cardType,
                        validStartDate: this.add.validStartDate
                    }}).then(res=>{
                        if(res.data.status==200){
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
                this.getSelectCardType();
                if(id) {   //无结束日期可编辑，还有--开始日期必须大于系统日期
                    this.$api.refundapi.isValidUsingGET_1({id: data.id}).then(res=>{//可编辑时判断开始日期
                        if(res.data.status === 200){
                            this.dialogVisible = true;
                            this.add = {
                                id: data.id,
                                type: 1,
                                shopId: data.shopId,
                                posNumber: data.posNumber,
                                terminalNumber: data.terminalNumber,
                                cardType: data.cardType,
                                validStartDate: data.validStartDate
                            }
                        }else{
                            this.$message.warning(res.data.msg);
                        }
                    })
                }else{
                    this.add = {};
                    this.dialogVisible = true;
                }
                // this.getCardType();
            },
            deleteList(id){
                this.$api.refundapi.isValidUsingGET_1({id: id}).then(res=>{//可删除时判断开始日期
                    if(res.data.status === 200){
                        this.$confirm('是否删除该条数据?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.$api.refundapi.deleteUsingDELETE_3({id: id}).then(res =>{
                                if(res.data.status==200){
                                    this.$message.success(res.data.msg);
                                    this.pageHandler(1);
                                }else{
                                    this.$message.error(res.data.msg);
                                }
                            }).catch(res => {
                                this.$message.error(res.data.msg);
                            });
                        }).catch(() => {
                            $message("info", "已取消删除!");
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
                this.posArr = [];
                this.$api.refundapi.getPosNumUsingGET({id: shopId}).then(res =>{//根据店铺id查询
                    if(res.data.status === 200){
                        for(var i=1; i<=res.data.data; i++){
                            this.posArr.push("0"+i);
                        }
                    }
                })
            },
            getCardType(){
                this.$api.refundapi.getZHXCardTypeUsingGET({type: 1}).then(res=>{ //卡类型
                    if(res.data.status === 200){
                        this.selects.status = res.data.data;//这个需要一个全部选项
                        this.selects.status = res.data.data.map(item=>{
                            return {
                                text: item.text,
                                value: item.value,
                                isStatus: false
                            }
                        });
                        this.selects.status[0].isStatus = true;
                    }
                })
            },
            getSelectCardType(){
                this.$api.refundapi.getZHXCardTypeUsingGET({type: 0}).then(res=>{ //卡类型
                    if(res.data.status === 200){
                        this.selects.cardType = res.data.data;
                    }
                })
            },
            addHandler(){
                this.dialogVisible = true;
                this.getSelectCardType();
                this.add = {};
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