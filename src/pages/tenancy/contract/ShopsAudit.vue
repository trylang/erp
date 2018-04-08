<template>
    <div>
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu" v-if="this.$route.params.prototypeId==0">
                <router-link :to="'/inner/shops/'+this.$route.params.prototypeId">合同管理</router-link>
                <router-link :to="'/inner/shopsaudit/'+this.$route.params.prototypeId">合同确认</router-link>
            </div>
            <div slot="appendtab" class="tabmenu" v-if="this.$route.params.prototypeId==2">
                <router-link :to="'/inner/field/'+this.$route.params.prototypeId">合同管理</router-link>
                <router-link :to="'/inner/fidleaudit/'+this.$route.params.prototypeId">合同确认</router-link>
            </div>
            <div slot="appendtab" class="tabmenu" v-if="this.$route.params.prototypeId==3">
                <router-link :to="'/inner/adposition/'+this.$route.params.prototypeId">合同管理</router-link>
                <router-link :to="'/inner/adaudit/'+this.$route.params.prototypeId">合同确认</router-link>
            </div>
            <div slot="appendtab" class="tabmenu" v-if="this.$route.params.prototypeId==1">
                <router-link :to="'/inner/coffice/'+this.$route.params.prototypeId">合同管理</router-link>
                <router-link :to="'/inner/cofficeaudit/'+this.$route.params.prototypeId">合同确认</router-link>
            </div>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入合同号" v-model.trim="searchText" @keyup.enter="getDataList(1)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">商户</span>
                            <el-select v-model="merchantValue" placeholder="请选择" class="dialogselect" @change="merchantSelect()">
                                <el-option
                                        v-for="item in merchantOptions"
                                        :key="item.id"
                                        :label="item.merchantName+'（'+item.merchantCode+'）'"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="9">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">店铺</span>
                            <el-select v-model="shopValue" placeholder="请选择" class="dialogselect" @change="shopSelect()">
                                <el-option
                                        v-for="item in shopOptions"
                                        :key="item.id"
                                        :label="item.shopName+'（'+item.shopCode+'）'"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">状态</span>
                            <el-select v-model="statusValue" placeholder="请选择" class="dialogselect" @change="statusSelect()">
                                <el-option
                                        v-for="item in statusOptions"
                                        :key="item.id"
                                        :label="item.statusName"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </con-head>
        <con-head>
            <div class="btn"><button @click="auditbtn">确定</button></div>
            <div class="mainbox">
                <data-table :tableData="dataList" :colConfigs="columnData" @listSelected="childData">
                </data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getDataList" style="margin-bottom:30px"></rt-page>
        </con-head>
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
                dataList:[],
                searchText:'',
                shopValue:'',
                merchantValue:'',
                statusValue:'',
                pageNum: Number(this.$route.params.pageId)||1,
                total: 0,
                shopOptions:[],
                merchantOptions:[],
                statusOptions:[{
                    statusName:"全部",
                    isStatus:true,
                    id:''
                },{
                    statusName:"审核（新增）",
                    isStatus:false,
                    id:10
                },{
                    statusName:"审核（延期）",
                    isStatus:false,
                    id:60
                },{
                    statusName:"审核（变更）",
                    isStatus:false,
                    id:50
                },{
                    statusName:"审核（终止）",
                    isStatus:false,
                    id:61
                },{
                    statusName:"取消",
                    isStatus:false,
                    id:20
                },{
                    statusName:"退租",
                    isStatus:false,
                    id:70
                }],
                columnData:[
                    { type: 'selection', width:'50'},
                    { prop: 'contractCode', label: '合同号'},
                    { prop: 'version', label: '版本号' },
                    { prop: 'merchantName', label: '商户名称' },
                    { prop: 'shopName', label: '店铺名称' },
                    { prop: 'brandName', label: '经营品牌' },
                    { prop: 'signDate', label: '签约日期' },
                    { prop: 'validStartDate', label: '合同有效期' },
                    { prop: 'statusText', label: '状态' }
                ],
                multipleSelection:[]
            }
        },
        mounted(){
            this.getShopList();
            this.getMerchantList();
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getDataList(1);
                },300)
            }
        },
        methods:{
            async getDataList(pageNum,pageSize){
                await this.$api.rentapi.getListForPageUsingGET({
                    pageNum:pageNum,
                    pageSize:this.$refs.page.pageSize,
                    propertyType:this.$route.params.prototypeId,
                    contractCode:this.searchText,
                    shopId:this.shopValue,
                    merchantId:this.merchantValue,
                    status:this.statusValue
                }).then(res=>{
                    this.dataList = res.data.data.list;
                    this.total = Number(res.data.data.total);
                })
            },
            async getShopList(){
                await this.$api.rentapi.listUsingGET_14().then(res=>{
                    this.shopOptions = res.data.data;
                })
            },
            async getMerchantList(){
                await this.$api.rentapi.listUsingGET_12().then(res=>{
                    this.merchantOptions = res.data.data;
                })
            },
            merchantSelect(){
                this.getDataList(1);
            },
            shopSelect(){
                this.getDataList(1);
            },
            statusSelect(){
                this.getDataList(1);
            },
            childData(data){
                this.multipleSelection = data.map(item=>{
                    return item.id
                });
            },
            async auditbtn(){
                console.log(this.multipleSelection)
                await this.$api.rentapi.confirmUsingPUT({
                    contractVoList:this.multipleSelection
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.$message.success(res.data.msg);
                        this.getDataList(1);
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
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
