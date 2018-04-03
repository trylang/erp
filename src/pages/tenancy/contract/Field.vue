<template>
    <div>
        <con-head title="场地合同管理">
            <router-link class="el-button" slot="append" to="/inner/addfidle">录入</router-link>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入合同号"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">商户</span>
                            <el-select v-model="value" placeholder="请选择" class="dialogselect">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="9">
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
                <data-table :tableData="datalist" :colConfigs="columnData">
                    <el-table-column
                            label="操作"
                            width="154"
                            slot="operation">
                        <template slot-scope="scope">
                            <button class="btn_text">编辑</button>
                            <button class="btn_text">删除</button>
                            <button class="btn_text">变更</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    import PageContent from '../../../components/Pagination'
    import DataTable from '../../../components/DataTable'
    export default {
        name: "index",
        data(){
            return{
                activeName: 'first',
                dialogVisible:false,
                datalist:[],
                add:{
                    number:"",
                    name:""
                },
                value: '',
                options: [{
                    value: '中粮集团'
                }, {
                    value: '中粮中粮'
                }, {
                    value: '中粮公司'
                }],
                statusData:[{
                    name:"全部",
                    isStatus:true
                },{
                    name:"新增",
                    isStatus:false
                },{
                    name:"已确认",
                    isStatus:false
                },{
                    name:"取消",
                    isStatus:false
                },{
                    name:"退租",
                    isStatus:false
                }],
                columnData:[
                    { prop: 'contractCode', label: '合同号'},
                    { prop: 'version', label: '版本号' },
                    { prop: 'merchantName', label: '商户名称' },
                    { prop: 'brandName', label: '经营品牌' },
                    { prop: 'propertyType', label: '物业性质' },
                    { prop: 'signDate', label: '签约日期' },
                    { prop: 'validStartDate', label: '合同有效期' },
                    { prop: 'status', label: '状态' }
                ]
            }
        },
        mounted(){
            this.getbuilding();
        },
        methods:{
            statusHandler(status){
                this.statusData.forEach(function(obj){
                    obj.isStatus = false;
                });
                status.isStatus = !status.isStatus
            },
            handleClose(){
                this.dialogVisible = false;
            },
            async getbuilding(){
                let list = await this.$api.getBuiding();
                this.datalist = list;
            },
            async addbuilding(){
                let params = {
                    number:this.add.number,
                    name:this.add.name,
                    datetime:'2017-12-03 16:05:09'
                };
                await this.$api.addBuilding(params);
                this.getbuilding();
            }
        },
        components:{
            ConHead,
            PageContent,
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
