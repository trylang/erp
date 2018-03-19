<template>
    <div>
        <con-head title="对账文件管理">
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入店铺号"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="texttitle">
                            <span class="inputname">类型：</span>
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
                </data-table>
            </div>
        </con-head>
        <el-dialog
                :title="listid?'编辑终端号':'添加终端号'"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="rentcontent">
                    <span class="inputname inputnameCenter">店铺号</span>
                    <el-select v-model="add.superior2" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="rentcontent">
                    <span class="inputname inputnameCenter">POS机号</span>
                    <el-select v-model="add.superior2" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="rentcontent">
                    <span class="inputname inputnameCenter">终端号</span>
                    <input class="inputtext" type="text" placeholder="请输入终端号" v-model="add.superior1">
                </div>
                <div class="dialoginput rentcontent">
                    <span class="inputname inputnameCenter">有效期</span>
                    <el-date-picker
                            class="inputtext datetext"
                            v-model="datevalue"
                            type="daterange"
                            range-separator="-"
                            start-placeholder="选择日期"
                            end-placeholder="选择日期">
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
    import ConHead from '../../components/ConHead'
    import PageContent from '../../components/Pagination'
    import DataTable from '../../components/DataTable'
    export default {
        name: "index",
        data(){
            return{
                listid:0,
                datevalue:'',
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
                    name:"银行",
                    isStatus:false
                },{
                    name:"资和信",
                    isStatus:false
                }],
                columnData:[
                    { prop: 'number', label: '文件名称'},
                    { prop: 'name', label: '类型' },
                    { prop: 'superior1', label: '上传人' },
                    { prop: 'datetime', label: '上传时间' }
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