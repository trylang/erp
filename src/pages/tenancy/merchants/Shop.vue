<template>
    <div>
        <con-head title="店铺管理">
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
                            <span class="inputname inputnameauto">业态</span>
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
                    { prop: 'number', label: '经营品牌'},
                    { prop: 'name', label: '主品牌' },
                    { prop: 'superior1', label: '商户名称' },
                    { prop: 'name', label: '店铺类型' },
                    { prop: 'superior2', label: '中央收银' },
                    { prop: 'superior2', label: '主力店' },
                    { prop: 'number', label: '状态'},
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