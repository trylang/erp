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
                        <div class="searchbox">
                            <input type="text" placeholder="请输入店铺" v-model.trim="searchName" @keyup.enter="pageHandler(1)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="2">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">渠道：</span>
                            <el-select v-model="channelId" placeholder="请选择" class="dialogselect" @change="pageHandler(1)">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in channelOptions"
                                        :key="item.value"
                                        :label="item.text"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="9">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">类型：</span>
                            <el-select v-model="cardType" placeholder="请选择" class="dialogselect" @change="pageHandler(1)">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in cardTypeOptions"
                                        :key="item.valeue"
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
                <div class="dialoginput">
                    <span class="inputname inputnameauto">渠道</span>
                    <el-select v-model="add.channel" placeholder="请选择" class="dialogselect" @change="checkCardtypeHandler(add.channel)" :disabled="!!add.id">
                        <el-option
                                v-for="item in channelOptions"
                                :key="item.value"
                                :label="item.text"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameauto">类型</span>
                    <el-select v-model="add.cardType" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in cardTypeDialog"
                                :key="item.value"
                                :label="item.text"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">手续费</span>
                    <input class="inputtext" type="text" placeholder="请输入手续费" v-model="add.feeRate">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameauto">有效期截止</span>
                    <el-date-picker
                        class="inputtext"
                        v-model="add.validStartDate"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd">
                    </el-date-picker>
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameauto">选择店铺</span>
                    <div style="float: left;">
                        <el-button type="primary" icon="el-icon-circle-plus" @click="checkShopHandler"></el-button>
                    </div>
                    <div style="float: left;">
                        <el-tag
                            style="margin: 0 0 8px 5px"
                            v-for="item in shopTags"
                            closable
                            :key="item.id"
                            :disable-transitions="false"
                            @close="closeShopHandle(item)">
                            {{item.shopName}}({{item.shopCode}})
                        </el-tag>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addbuilding(add.id)">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="选择店铺"
            :visible.sync="dialogVisibleT"
            custom-class="customdialog">
            <div class="dialogbox">
                <div class="searchbox" style="margin-top:-20px;">
                    <input type="text" placeholder="请输入店铺/店铺名称" v-model.trim="searchShopName" @keyup.enter="pageShopHandler"><i class="iconfont icon-sousuo"></i>
                </div>
            </div>
            <erp-table :header="header" :content="shopList" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibleT = false">取 消</el-button>
                <el-button type="primary" @click="batchConfirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    import RtPage from '../../components/Pagination'
    import DataTable from '../../components/DataTable'
    import erpTable from "../../components/Table";
    export default {
        name: "index",
        data(){
            return{
                dialogVisible:false,
                dialogVisibleT:false,
                datalist:[],
                shopList: {list:[]},
                listid:'',
                searchName: '',
                channelId: '',
                cardType: '',
                channelOptions: [],
                cardTypeOptions: [],
                cardTypeDialog: [],
                shopTags: [],
                searchShopName: '',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                totalT: 0,
                add:{
                    id: '',
                    type: 1,
                    channel: '',
                    cardType: '',
                    feeRate: '',
                    validStartDate: '',
                    shopIds: []
                },
                columnData:[
                    { prop: 'channelText', label: '渠道'},
                    { prop: 'shopCode', label: '店铺号' },
                    { prop: 'shopName', label: '店铺' },
                    { prop: 'cardTypeText', label: '类型' },
                    { prop: 'feeRate', label: '手续费率' },
                    { prop: 'validDate', label: '有效期' }
                ],
                header:[
                    {
                        label: "",
                        name: "checked",
                        type: "checkbox"
                    },
                    {
                      label: "店铺号",
                      type: "text",
                      name: "shopCode"
                    },
                    {
                      label: "店铺名称",
                      type: "text",
                      name: "shopName"
                    },
                    {
                      label: "所属商户",
                      type: "text",
                      name: "merchantName"
                    },
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
            this.getChannelList();
            this.cardTypeList();
        },
        methods:{
            pageHandler(pageNum, pageSize){
                let params = {
                    pageNum: pageNum,
                    pageSize: this.$refs.page.pageSize,
                    type: 1,
                    shopQuery: this.searchName,
                    channel: this.channelId,
                    cardType: this.cardType
                }
                this.$api.refundapi.getListForPageUsingGET_5(params).then(res=>{
                    if(res.data.status === 200){
                        this.datalist = res.data.data.list;
                        this.total = Number(res.data.data.total);
                    }
                }).catch(res=>{
                    this.$message.error(res.data.msg);
                })
            },
            pageShopHandler(page={}, callback){
                let params = {
                    pageNum: page.pageNum,
                    pageSize: 5,
                    shopName: this.searchShopName
                }
                this.$api.rentapi.listpgUsingGET_5(params).then(res=>{
                    if(res.data.status === 200){
                        res.data.data.list.forEach(item=>{
                            item.checked = false;
                        })
                        this.shopList = res.data.data;
                    }
                }).catch(res=>{
                    this.$message.error(res.data.msg);
                })
            },
            getCurrentPage(pageNum) {
              this.pageShopHandler({pageNum});
            },
            getpageSize(pageSize) {
              this.pageShopHandler({pageSize});
            },
            addbuilding(id){
                if(id){
                    this.$api.refundapi.updateUsingPUT_1({request:{
                        id: this.add.id,
                        type: 1,
                        channel: this.add.channel,
                        feeRate: this.add.feeRate,
                        cardType: this.add.cardType,
                        validStartDate: this.add.validStartDate,
                        shopId: this.add.shopId
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
                    let params = {
                        type: 1,
                        channel: this.add.channel,
                        feeRate: this.add.feeRate,
                        cardType: this.add.cardType,
                        validStartDate: this.add.validStartDate,
                        shopIds: this.add.shopIds
                    }
                    this.$api.refundapi.addUsingPOST_1({request:params}).then(res=>{
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
                if(id) {   //无结束日期可编辑，还有--开始日期必须大于系统日期
                    this.$api.refundapi.isValidUsingGET({id: data.id}).then(res=>{//可编辑时判断开始日期
                        if(res.data.status === 200){
                            this.dialogVisible = true;
                            this.add = {
                                id: data.id,
                                type: 1,
                                channel: data.channel,
                                feeRate: data.feeRate,
                                validStartDate: data.validStartDate,
                                shopId: data.shopId
                            }
                        }else{
                            this.$message.warning(res.data.msg);
                        }
                    })
                }else{
                    this.add = {};
                    this.dialogVisible = true;
                }
            },
            deleteList(id){
                this.$api.refundapi.isValidUsingGET({id: id}).then(res=>{//可删除时判断开始日期
                    if(res.data.status === 200){
                        this.$confirm('是否删除该条数据?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.$api.refundapi.deleteUsingDELETE_1({id: id}).then(res =>{
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
                    }else{
                        this.$message.warning(res.data.msg);
                    }
                })
            },
            checkShopHandler(){
                this.dialogVisibleT = true;
                this.pageShopHandler();
            },
            filterIds() {
              const param = this.shopList.list.filter(item => {
                return item.checked === true;
              });
              return param;
            },
            batchConfirm() {
                this.dialogVisibleT = false;
                this.shopTags = this.filterIds();
                this.shopTags.forEach(item =>{
                    this.add.shopIds.push(item.id);
                })
            },
            closeShopHandle(deleteId){
                this.add.shopIds.splice(this.shopTags.indexOf(deleteId), 1);
                this.shopTags.splice(this.shopTags.indexOf(deleteId), 1);
            },
            getChannelList(){
                this.$api.refundapi.getChannelUsingGET().then(res=>{//渠道
                    this.channelOptions = res.data.data;
                })
            },
            cardTypeList(){
                this.$api.refundapi.getCardTypeUsingGET().then(res=>{//列表搜索类型
                    this.cardTypeOptions = res.data.data;
                })
            },
            checkCardtypeHandler(channelId){
                this.$api.refundapi.getCardTypeUsingGET().then(res=>{//添加和编辑根据渠道查类型 待调用
                    this.cardTypeDialog = res.data.data;
                })
            },
        },
        components:{
            ConHead,
            RtPage,
            DataTable,
            erpTable,
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