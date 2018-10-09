<template>
    <div v-loading.fullscreen="loading">
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/rebates/poundage" v-if="poundage">手续费设置</router-link>
                <router-link to="/rebates/poundageOut" v-if="poundageOut">例外店手续费设置</router-link>
            </div>
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="addHandler">添加</el-button>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入店铺" v-model.trim="searchName" @keyup.enter="pageHandler(1,pageSize)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="2">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">渠道：</span>
                            <el-select v-model="channelId" placeholder="请选择" filterable clearable class="dialogselect" @change="cardTypeList(channelId)">
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
                            <el-select v-model="cardType" placeholder="请选择" filterable clearable class="dialogselect" @change="pageHandler(1,pageSize)">
                                <!-- <el-option label="全部" value=""></el-option> -->
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
            :title="listid?'编辑例外店手续费':'添加例外店手续费'"
            :visible.sync="dialogVisible"
            custom-class="customdialog"
            v-loading="loading">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname" style="width: 70px;">渠道</span>
                    <el-select v-model="add.channel" placeholder="请选择" filterable clearable class="dialogselect" @change="checkCardtypeHandler(add.channel)" :disabled="!!add.id">
                        <el-option
                                v-for="item in channelOptions"
                                :key="item.value"
                                :label="item.text"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname" style="width: 70px;">类型</span>
                    <el-select v-model="add.cardType" placeholder="请选择" filterable clearable class="dialogselect">
                        <el-option
                                v-for="item in cardTypeDialog"
                                :key="item.value"
                                :label="item.text"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname" style="width: 70px;">手续费</span>
                    <input class="inputtext" type="text" placeholder="请输入手续费" v-model="add.feeRate">
                    <span>‰</span>
                </div>
                <div class="dialoginput">
                    <span class="inputname" style="width: 70px;">有效期</span>
                    <el-date-picker
                        class="inputtext"
                        v-model="add.validStartDate"
                        type="date"
                        placeholder="选择日期"
                        value-format="yyyy-MM-dd">
                    </el-date-picker>
                </div>
                <div class="dialoginput">
                    <span class="inputname" style="width: 80px;">选择店铺</span>
                    <div class="inputtext">
                        <div style="float: left;">
                            <el-button type="primary" icon="el-icon-circle-plus" :disabled="addShopBtn" @click="checkShopHandler"></el-button>
                        </div>
                        <div style="">
                            <el-tag
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
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addbuilding(add.id)">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="选择店铺"
            :visible.sync="dialogVisibleT"
            custom-class="customdialog"
            width="60%">
            <div class="dialogbox">
                <div class="searchbox" style="margin-top:-20px;">
                    <input type="text" placeholder="请输入店铺/店铺名称" v-model.trim="searchShopName" @keyup.enter="pageShopHandler"><i class="iconfont icon-sousuo"></i>
                </div>
            </div>
            <erp-table :header="header" :content="shopList" :noLoading="true" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
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
                loading: false,
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
                pageSize: 10,
                page: {pageNum: '', pageSize: ''},
                total: 0,
                addShopBtn: true,
                add:{
                    id: '',
                    type: 1,
                    channel: '',
                    cardType: '',
                    feeRate: '',
                    validStartDate: '',
                    shopIds: [],
                    shopId: ''
                },
                columnData:[
                    { prop: 'channelText', label: '渠道'},
                    { prop: 'shopCode', label: '店铺号' },
                    { prop: 'shopName', label: '店铺' },
                    { prop: 'cardTypeText', label: '类型' },
                    { prop: 'feeRate', label: '手续费率‰' },
                    { prop: 'validDate', label: '有效期' }
                ],
                header:[
                    {
                        label: "",
                        name: "checked",
                        type: "checkbox",
                        click: (status, data, item) => {
                            this.pushTags(status, data, item);
                        }
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
            searchShopName(){
                this.$delay(()=>{
                    this.pageShopHandler(1);
                },300)
            }
        },
        mounted(){
            this.getChannelList();
            // this.cardTypeList();
        },
        computed:{
            poundage(){
                return this.$root.menus.indexOf('/rebates/poundage') >= 0;
            },
            poundageOut(){
                return this.$root.menus.indexOf('/rebates/poundageOut') >= 0;
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
                    type: 1,
                    shopQuery: this.searchName,
                    channel: this.channelId,
                    cardType: this.cardType
                }
                this.$api.refundapi.getListForPageUsingGET_5(params).then(res=>{
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
            pageShopHandler(pageNum, pageSize){
                let params = {
                    pageNum: pageNum || this.page.pageNum,
                    pageSize: pageSize || this.page.pageSize,
                    status: [1,3,4],
                    shopCode: this.searchShopName
                }
                const _this = this;
                this.$api.rentapi.optionpgUsingPOST_7({param: params}).then(res=>{
                    if(res.data.status === 200){
                        res.data.data.list.forEach(item=>{
                            item.checked = false;
                        });
                        if (_this.shopTags.length > 0) {
                            res.data.data.list.forEach(item => {
                                _this.shopTags.forEach(tag => {                                   
                                    if (tag.id == item.id) {
                                        item.checked = true;
                                    }
                                })
                            })                          
                        }
                        this.shopList = res.data.data;
                        // this.totalT = Number(res.data.data.total);
                    }
                }).catch(res=>{
                    this.$message.error(res.data.msg);
                })
            },
            getCurrentPage(pageNum) {
              this.page.pageNum = pageNum;
              this.pageShopHandler();
            },
            getpageSize(pageSize) {
              this.page.pageSize = pageSize;
              this.pageShopHandler();
            },
            pushTags(status, data, item) {
                let _this = this;
                if (status && item) {
                    this.shopTags.push(item);
                } else if (status && !item) {
                    this.shopTags.push(...data);
                }
                if (!status && item) {
                    this.shopTags = this.shopTags.filter(tag => {
                        return tag.id != item.id
                    });
                } else if(!status && !item) {
                    let removeFun = function(arr, obj) {
                        let len = arr.length;
                        while(len--) {
                            if (arr[len].id == obj.id) {
                                arr.splice(len, 1);
                            }
                        }
                    }
                    data.forEach(item1 => {
                        removeFun(_this.shopTags, item1);
                    });                    
                }
            },
            addbuilding(id){
                this.loading = true;
                if(id){
                    if(this.add.feeRate > 0 && this.add.feeRate <= 1000){
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
                                this.dialogVisible = false;
                                this.loading = false;
                                this.pageHandler(1,this.pageSize);
                            }else{
                                this.$message.error(res.data.msg);
                                this.loading = false;
                            }
                        }).catch(res=>{
                            this.$message.error(res.data.msg);
                            this.loading = false;
                        });
                    }else{
                        this.loading = false;
                        this.$message.warning('手续费的值是在0～1000之间！');
                    }
                }else{
                    if(this.add.feeRate > 0 && this.add.feeRate <= 1000){
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
                                this.dialogVisible = false;
                                this.loading = false;
                                this.pageHandler(1,this.pageSize);
                            }else{
                                this.$message.error(res.data.msg);
                                this.loading = false;
                            }
                        }).catch(res=>{
                            this.$message.error(res.data.msg);
                            this.loading = false;
                        });
                    }else{
                        this.loading = false;
                        this.$message.warning('手续费的值是在0～1000之间！');
                    }
                }
            },
            dialogData(id, data){
                if(id) {   //无结束日期可编辑，还有--开始日期必须大于系统日期
                    this.listid = id;
                    this.$api.refundapi.isValidUsingGET({id: data.id}).then(res=>{//可编辑时判断开始日期
                        if(res.data.status === 200){
                            this.dialogVisible = true;
                            this.addShopBtn = true;
                            this.add = {
                                id: data.id,
                                type: 1,
                                channel: data.channel,
                                cardType: data.cardType,
                                feeRate: data.feeRate,
                                validStartDate: data.validStartDate,
                                shopId: data.shopId
                            }
                            this.$api.refundapi.getCardTypeUsingGET({type: this.add.channel}).then(res=>{
                                if(res.data.status === 200){
                                    this.cardTypeDialog = res.data.data;
                                }
                            })
                            this.$api.rentapi.getByIdUsingGET_4({id: this.add.shopId}).then(res=>{
                                if(res.data.status === 200){
                                    this.shopTags = [];
                                    this.shopTags[0] = res.data.data;
                                }
                            })

                        }else{
                            this.$message.warning(res.data.msg);
                        }
                    })
                }else{
                    this.add = {};
                    this.dialogVisible = true;
                    this.addShopBtn = false;
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
                                if(res.data.status === 200){
                                    this.$message.success(res.data.msg);
                                    this.pageHandler(1,this.pageSize);
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
            batchConfirm() {
                this.dialogVisibleT = false;
                this.shopTags.forEach(item =>{
                    this.add.shopIds.push(item.id);
                })
            },
            closeShopHandle(deleteId){
                if(!this.listid){
                    this.add.shopIds.splice(this.shopTags.indexOf(deleteId), 1);
                    this.shopTags.splice(this.shopTags.indexOf(deleteId), 1);
                }else{
                    // this.addShopBtn = true;
                    this.$message.warning('编辑不可选择店铺！');
                }
            },
            getChannelList(){
                this.$api.refundapi.getChannelUsingGET().then(res=>{//渠道
                    this.channelOptions = res.data.data;
                })
            },
            cardTypeList(channelId){
                this.cardType='';
                var param = { type: '' };
                if(channelId >= 0 ){
                    param.type = channelId;
                } else {
                    param.type = '';
                }
                this.$api.refundapi.getCardTypeUsingGET(param).then(res=>{//列表类型
                    if(res.data.status === 200){
                        this.cardTypeOptions = res.data.data;
                        this.pageHandler(1,this.pageSize);
                    }
                })
            },
            checkCardtypeHandler(channelId){
                this.add.cardType = '';
                this.$api.refundapi.getCardTypeUsingGET({type: channelId}).then(res=>{//添加和编辑根据渠道查类型
                    if(res.data.status === 200){
                        this.cardTypeDialog = res.data.data;
                    }
                })
            },
            addHandler(){
                this.listid = '';
                this.dialogVisible = true;
                this.addShopBtn = false;
                this.add = {
                    id: '',
                    type: 1,
                    channel: '',
                    cardType: '',
                    feeRate: '',
                    validStartDate: '',
                    shopIds: [],
                    shopId: ''
                };
                this.shopTags = [];
            }
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
    .el-tag{
        margin: 0 0 5px 45px;
    }
    .el-tag:nth-of-type(1){
        margin: 0 0 5px 5px;
    }
</style>