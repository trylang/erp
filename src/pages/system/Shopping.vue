<template>
    <div>
        <con-head title="购物中心">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialogVisible = true">添加</el-button>
            <el-row slot="preappend">
                <el-col :span="10">
                    <div class="searchbox">
                        <input type="text" placeholder="请输入名称"><i class="iconfont icon-sousuo"></i>
                    </div>
                </el-col>
            </el-row>
        </con-head>
        <con-head>
            <div class="mainbox">
                <data-table :tableData="datalist" :colConfigs="columnData">
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
                title="添加购物中心"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname inputnameWidth">购物中心编码</span>
                    <input class="inputtext" type="text" placeholder="请输入区域编号">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameWidth">购物中心名称</span>
                    <input class="inputtext" type="text" placeholder="请输入区域名称">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameWidth">英文名称</span>
                    <input class="inputtext" type="text" placeholder="请输入英文名称">
                </div>
                <div class="dialoginput">
                    <span class="inputname inputnameWidth">所属区域</span>
                    <el-select v-model="value" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    import PageContent from '../../components/Pagination'
    import DataTable from '../../components/DataTable'
    export default {
        name: "shopping",
        data(){
            return{
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
                columnData:[
                    { prop: 'number', label: '购物中心编码'},
                    { prop: 'name', label: '购物中心名称' },
                    { prop: 'superior1', label: '上级区域' },
                    { prop: 'superior2', label: '购物中心面积' },
                    { prop: 'datetime', label: '更新时间' }
                ]
            }
        },
        mounted(){
            this.getbuilding();
        },
        methods:{
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

</style>