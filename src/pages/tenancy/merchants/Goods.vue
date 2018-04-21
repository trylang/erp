<template>
    <div>
        <con-head title="货品管理">
            <el-button type="primary" icon="el-icon-plus" slot="append" @click="handleOpen()">添加</el-button>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入编码/名称" v-model.trim="searchText" @keyup.enter="getDataList(1)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="searchselect">
                            <span class="inputname">店铺</span>
                            <el-select v-model="shopValue" placeholder="请选择" class="dialogselect" @change="shopSelect()">
                                <el-option
                                        v-for="item in shopOptions"
                                        :key="item.id"
                                        :label="item.shopName"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="9">
                        <div class="searchselect">
                            <span class="inputname">货品组别</span>
                            <el-select v-model="goodsValue" placeholder="请选择" class="dialogselect" @change="goodsSelect()">
                                <el-option
                                        v-for="item in goodsOptions"
                                        :key="item.id"
                                        :label="item.goodsTypeName"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </con-head>
        <con-head>
            <div class="mainbox">
                <data-table :tableData="dataList" :colConfigs="columnData">
                    <el-table-column
                            label="货品组别"
                            slot="operation">
                        <template slot-scope="scope">{{ scope.row.goodsTypeVo==null?'':scope.row.goodsTypeVo.goodsTypeName}}</template>
                    </el-table-column>
                    <el-table-column
                            label="店铺"
                            slot="operation">
                        <template slot-scope="scope">{{ scope.row.shopVoList.map(item=>{ return item.shopName}).join() }}</template>
                    </el-table-column>
                    <el-table-column
                            label="货品描述"
                            slot="operation">
                        <template slot-scope="scope">{{ scope.row.description }}</template>
                    </el-table-column>
                    <el-table-column
                            label="更新时间"
                            slot="operation">
                    <template slot-scope="scope">{{ scope.row.updateDateStr }}</template>
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="110"
                            slot="operation">
                        <template slot-scope="scope">
                            <button class="btn_text" @click="getInfoData(scope.row.id)">编辑</button>
                            <button class="btn_text" @click="deleteListData(scope.row.id)">删除</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getDataList" style="margin-bottom:30px"></rt-page>
        </con-head>
        <el-dialog
                :title="goodsInfoData.id?'编辑货品':'添加货品'"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">名称</span>
                    <input class="inputtext" type="text" placeholder="请输入区域名称" v-model="goodsInfoData.goodsName">
                </div>
                <div class="dialoginput">
                    <span class="inputname">货品组别</span>
                    <el-select v-model="goodsInfoData.goodsTypeId" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in goodsOptions"
                                :key="item.id"
                                :label="item.goodsTypeName"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">店铺</span>
                    <el-select v-model="goodsInfoData.shopId" multiple placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in shopOptions"
                                :key="item.id"
                                :label="item.shopCode+'('+item.shopName+')'"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput noline">
                    <span class="inputname">货品描述</span>
                    <textarea class="textareabox" placeholder="请输入" v-model="goodsInfoData.description"></textarea>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="submitFormData()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    import RtPage from '../../../components/Pagination'
    import DataTable from '../../../components/DataTable'
    export default {
        name: "index",
        data(){
            return{
                dialogVisible:false,
                dataList:[],
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                searchText:'',
                shopValue:'',
                goodsValue:'',
                shopOptions:[],
                goodsOptions:[],
                goodsInfoData:{
                    description: '',
                    goodsCode: '',
                    goodsName: '',
                    goodsTypeId: '',
                    id: '',
                    shopId: []
                },
                columnData:[
                    { prop: 'goodsCode', label: '编码'},
                    { prop: 'goodsName', label: '名称' },
                    /*{ prop: 'goodsTypeVo', label: '货品组别' },
                    { prop: 'shopVoList', label: '店铺' },
                    { prop: 'description', label: '货品描述' },
                    { prop: 'updateDateStr', label: '更新时间' }*/
                ],
                listId:''
            }
        },
        mounted(){
            this.getShopList();
            this.getGoodsList();
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getDataList(1);
                },300)
            }
        },
        methods:{
            handleOpen() {
                this.dialogVisible = true;
                this.goodsInfoData={
                    description: '',
                    goodsCode: '',
                    goodsName: '',
                    goodsTypeId: '',
                    id: '',
                    shopId: []
                }
            },
            handleClose(){
                this.dialogVisible = false;
            },
            async getDataList(pageNum,pageSize){
                await this.$api.rentapi.listpgUsingGET_2({
                    pageNum:pageNum,
                    pageSize:this.$refs.page.pageSize,
                    goodsCode:this.searchText,
                    goodsName:this.searchText,
                    goodsTypeId:this.goodsValue,
                    shopId:this.shopValue
                }).then(res=>{
                    this.dataList = res.data.data.list;
                    this.total = Number(res.data.data.total);
                })
            },
            async getShopList(){
                await this.$api.rentapi.getByStatusUsingPOST({
                    status: [1,3,4]
                }).then(res=>{
                    this.shopOptions = res.data.data;
                })
            },
            async getGoodsList(){
                await this.$api.rentapi.listUsingGET_10({
                    pageNum:'',
                    pageSize:'',
                    goodsTypeCode:'',
                    goodsTypeName:''
                }).then(res=>{
                    this.goodsOptions = res.data.data;
                })
            },
            async getInfoData(id){
                this.dialogVisible = true;
                this.listId = id;
                this.goodsInfoData={
                    description: '',
                    goodsCode: '',
                    goodsName: '',
                    goodsTypeId: '',
                    id: '',
                    shopId: []
                }
                this.$api.rentapi.getGoodsDetail({
                    id: id
                }).then(res => {
                    this.goodsInfoData = res.data.data;
                })
            },
            async submitFormData(){
                if(this.listId == '') {
                    await this.$api.rentapi.addUsingPOST_5({
                        request: this.goodsInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.getDataList(1);
                            this.dialogVisible = false;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    this.goodsInfoData.id = this.listId;
                    await this.$api.rentapi.updateUsingPUT_6({
                        request: this.goodsInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.getDataList(1);
                            this.dialogVisible = false;
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async deleteListData(id){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.goodsDelete({
                        id:id
                    }).then(res=>{
                        if (res.data.status == 200) {
                            this.getDataList(1);
                            this.$message.success(res.data.msg);
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                })
            },
            shopSelect(){
                this.getDataList(1);
            },
            goodsSelect(){
                this.getDataList(1);
            }
        },
        components:{
            ConHead,
            RtPage,
            DataTable
        }
    }
</script>

<style scoped>
    .textareabox{
        flex:1;
        margin-left: 20px;
    }
</style>