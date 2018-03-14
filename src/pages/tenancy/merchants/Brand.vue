<template>
    <div>
        <con-head title="品牌管理">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="dialogData()">添加</el-button>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入编码"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入名称"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="9">
                        <div class="searchselect">
                            <span class="inputname">业态</span>
                            <el-select v-model="add.superior2" placeholder="请选择" class="dialogselect">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
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
                            <button class="btn_text" @click="dialogData(scope.row.id)">编辑</button>
                            <button class="btn_text" @click="deleteList(scope.row.id)">删除</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
        </con-head>
        <el-dialog
                :title="listid?'编辑品牌':'添加品牌'"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">编码</span>
                    <input class="inputtext" type="text" placeholder="请输入区域编号" v-model="add.number">
                </div>
                <div class="dialoginput">
                    <span class="inputname">名称</span>
                    <input class="inputtext" type="text" placeholder="请输入区域名称" v-model="add.name">
                </div>
                <div class="dialoginput">
                    <span class="inputname">业态</span>
                    <el-select v-model="add.superior2" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">国别</span>
                    <el-select v-model="add.superior2" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
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
        name: "index",
        data(){
            return{
                dialogVisible:false,
                datalist:[],
                add:{
                    number: '',
                    name: '',
                    englishname:'',
                    value: ''
                },
                options: [{
                    value: '中粮集团'
                }, {
                    value: '中粮中粮'
                }, {
                    value: '中粮公司'
                }],
                columnData:[
                    { prop: 'number', label: '编码'},
                    { prop: 'name', label: '名称' },
                    { prop: 'superior2', label: '业态' },
                    { prop: 'superior2', label: '国别' },
                    { prop: 'datetime', label: '更新时间' }
                ],
                oneData:{},
                listid:''
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
            async addbuilding(id){
                if(id){
                    let params = {
                        id:id,
                        number:this.add.number,
                        name:this.add.name,
                        superior1:this.add.superior1,
                        superior2:this.add.superior2,
                        datetime:'2017-12-03 16:05:09'
                    };
                    await this.$api.updateData(id,params);
                }else{
                    let params = {
                        number:this.add.number,
                        name:this.add.name,
                        superior1:this.add.superior1,
                        superior2:this.add.superior2,
                        datetime:'2017-12-03 16:05:09'
                    };
                    await this.$api.addBuilding(params);
                }
                this.dialogVisible = false;
                this.getbuilding();
            },
            async deleteList(id){
                let params = {
                    id:id
                };
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.deleteData(params);
                    this.datalist = this.datalist.filter(item=>item.id!==id);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {});
            },
            async dialogData(id){
                this.listid = id;
                this.dialogVisible = true;
                if(id) {
                    this.add = await this.$api.getOneData(id);
                }else{
                    this.add = {};
                }
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