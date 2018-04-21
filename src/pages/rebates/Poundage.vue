<template>
    <div>
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link to="/rebates/poundage">手续费设置</router-link>
                <router-link to="/rebates/poundageOut">例外店手续费设置</router-link>
            </div>
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="addHandler">添加</el-button>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">渠道：</span>
                            <el-select v-model="channelId" placeholder="请选择" class="dialogselect" @change="cardTypeList(channelId)">
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
                    <el-col :span="9" :offset="2">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">类型：</span>
                            <el-select v-model="cardType" placeholder="请选择" class="dialogselect" @change="pageHandler(1)">
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
                        <template slot-scope="scope"><!-- 编辑和删除得根据状态判断是否显示 -->
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
                    <input class="inputtext" type="number" min="0" max="100" placeholder="请输入手续费" v-model="add.feeRate">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameauto">有效期截止</span>
                    <el-date-picker
                        class="inputtext"
                        v-model="add.validStartDate"
                        type="date"
                        placeholder="选择日期"
                        value-format="yyyy-MM-dd">
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
    import { $message } from "../../utils/notice";
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
                cardType: '',
                channelId: '',
                channelOptions: [],
                cardTypeOptions: [],
                cardTypeDialog: [],
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                add:{
                    id: '',
                    type: 0,
                    channel: '',
                    cardType: '',
                    feeRate: '',
                    validStartDate: ''
                },
                columnData:[
                    { prop: 'channelText', label: '渠道'},
                    { prop: 'feeRate', label: '手续费率' },
                    { prop: 'cardTypeText', label: '类型' },
                    { prop: 'validDate', label: '有效期' },
                    { prop: 'updateDate', label: '更新时间' },
                ]
            }
        },
        mounted(){
            this.getChannelList();
            // this.cardTypeList();
        },
        methods:{
            pageHandler(pageNum, pageSize){
                let params = {
                    pageNum: pageNum,
                    pageSize: this.$refs.page.pageSize,
                    type: 0,
                    channel: this.channelId,
                    cardType: this.cardType
                }
                this.$api.refundapi.getListForPageUsingGET_4(params).then(res=>{
                    if(res.data.status === 200){
                        this.datalist = res.data.data.list;
                        this.total = Number(res.data.data.total);
                    }
                }).catch(res=>{
                    this.$message.error(res.data.msg);
                })
            },
            addbuilding(id){
                if(id){
                    this.$api.refundapi.updateUsingPUT({request:{
                        id: this.add.id,
                        type: 0,
                        channel: this.add.channel,
                        cardType: this.add.cardType,
                        feeRate: this.add.feeRate,
                        validStartDate: this.add.validStartDate
                    }}).then(res=>{
                        if(res.data.status === 200){
                            this.$message.success(res.data.msg);
                            this.pageHandler(1);
                        }else{
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.$message.error(res.data.msg);
                    });
                }else{
                    this.$api.refundapi.addUsingPOST({request:{
                        type: 0,
                        channel: this.add.channel,
                        cardType: this.add.cardType,
                        feeRate: this.add.feeRate,
                        validStartDate: this.add.validStartDate
                    }}).then(res=>{
                        if(res.data.status === 200){
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
                                type: 0,
                                channel: data.channel,
                                cardType: data.cardType,
                                feeRate: data.feeRate,
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
            },
            deleteList(id){
                this.$api.refundapi.isValidUsingGET({id: id}).then(res=>{//可删除时判断开始日期
                    if(res.data.status === 200){
                        this.$confirm('是否删除该条数据?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.$api.refundapi.deleteUsingDELETE({id: id}).then(res =>{
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
            getChannelList(){
                this.$api.refundapi.getChannelUsingGET().then(res=>{//渠道
                    this.channelOptions = res.data.data;
                })
            },
            cardTypeList(channelId){
                this.$api.refundapi.getCardTypeUsingGET({type: channelId}).then(res=>{//列表类型
                    if(res.data.status === 200){
                        this.cardTypeOptions = res.data.data;
                        this.pageHandler(1);
                    }
                })
            },
            checkCardtypeHandler(channelId){
                this.$api.refundapi.getCardTypeUsingGET({type: channelId}).then(res=>{//添加和编辑根据渠道查类型
                    if(res.data.status === 200){
                        this.cardTypeDialog = res.data.data;
                    }
                })
            },
            addHandler(){
                this.dialogVisible = true;
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