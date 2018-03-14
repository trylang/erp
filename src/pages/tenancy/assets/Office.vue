<template>
    <div>
        <con-head title="写字楼管理">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialogVisible = true">添加</el-button>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入单元号"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="searchselect">
                            <span class="inputname">楼层</span>
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
            <div class="btn"><button @click="auditbtn">确定</button></div>
            <div class="mainbox">
                <data-table :tableData="datalist" :colConfigs="columnData" @listSelected="childData">
                    <el-table-column
                            label="操作"
                            width="110"
                            slot="operation">
                        <template slot-scope="scope">
                            <button class="btn_text">编辑</button>
                            <button class="btn_text">删除</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
        </con-head>
        <el-dialog
                title="添加写字楼"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">编码</span>
                    <input class="inputtext" type="text" placeholder="请输入编号" v-model="add.number">
                </div>
                <div class="dialoginput">
                    <span class="inputname">名称</span>
                    <input class="inputtext" type="text" placeholder="请输入名称" v-model="add.name">
                </div>
                <div class="dialoginput">
                    <span class="inputname">楼宇</span>
                    <el-select v-model="add.superior2" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">建筑面积</span>
                    <input class="inputtext" type="text" placeholder="请输入" v-model="add.number">
                </div>
                <div class="dialoginput">
                    <span class="inputname">使用面积</span>
                    <input class="inputtext" type="text" placeholder="请输入" v-model="add.name">
                </div>
                <div class="dialoginput noline" style="flex-direction: column;">
                    <div>
                        <span class="inputname">备注</span>
                    </div>
                    <textarea class="textareabox" placeholder="请输入"></textarea>
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
    import ConHead from '../../../components/ConHead'
    import PageContent from '../../../components/Pagination'
    import DataTable from '../../../components/DataTable'
    export default {
        name: "unit",
        data(){
            return{
                dialogVisible:false,
                datalist:[],
                add:{
                    number:"",
                    name:""
                },
                columnData:[
                    { type: 'selection', width:'50'},
                    { prop: 'number', label: '单元号'},
                    { prop: 'name', label: '楼宇' },
                    { prop: 'number', label: '楼层'},
                    { prop: 'number', label: '建筑面积'},
                    { prop: 'name', label: '使用面积' },
                    { prop: 'number', label: '备注'},
                    { prop: 'name', label: '状态' },
                    { prop: 'datetime', label: '更新时间', width:'180'}
                ],
                statusData:[{
                    name:"全部",
                    isStatus:true
                },{
                    name:"新增",
                    isStatus:false
                },{
                    name:"空置",
                    isStatus:false
                },{
                    name:"预定",
                    isStatus:false
                },{
                    name:"使用中",
                    isStatus:false
                },{
                    name:"失效",
                    isStatus:false
                }],
                value: '',
                options: [{
                    value: 'F1'
                }, {
                    value: 'F2'
                }, {
                    value: 'F3'
                }],
                multipleSelection:[]
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
            },
            childData(data){
                this.multipleSelection = data;
            },
            auditbtn(){
                console.log(this.multipleSelection)
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