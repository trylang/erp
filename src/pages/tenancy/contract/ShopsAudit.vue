<template>
    <div v-loading.fullscreen="loading">
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link :to="routerUrl+this.$route.params.prototypeId" v-if="shops">合同管理</router-link>
                <router-link :to="routerListUrl+this.$route.params.prototypeId" v-if="shopslist">合同管理</router-link>
                <router-link :to="routerAuditUrl+this.$route.params.prototypeId" v-if="shopsaudit">合同确认</router-link>
                <router-link :to="routerChangeUrl+this.$route.params.prototypeId" v-if="shopschange">合同变更</router-link>
            </div>
            <div slot="preappend">
                <el-row>
                    <el-col :span="9">
                        <div class="searchbox">
                            <input type="text" placeholder="请输入合同号" v-model.trim="searchText" @keyup.enter="getDataList(1,pageSize)"><i class="iconfont icon-sousuo"></i>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">商户</span>
                            <el-select v-model="merchantValue" placeholder="请选择" filterable clearable class="dialogselect" @change="merchantSelect()">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in merchantOptions"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="9" v-if="this.$route.params.prototypeId == 0 || !this.$route.params.prototypeId">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">店铺</span>
                            <el-select v-model="shopValue" placeholder="请选择" filterable clearable class="dialogselect" @change="shopSelect()">
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                        v-for="item in shopOptions"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="this.$route.params.prototypeId >= 1 ? 0:6">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">状态</span>
                            <el-select v-model="statusValue" placeholder="请选择" filterable clearable class="dialogselect" @change="statusSelect()">
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
            <div class="btn"><button :disabled="isDisabled" @click="auditbtn">确定</button></div>
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
                loading: false,
                isDisabled:false,
                dataList:[],
                searchText:'',
                shopValue:'',
                merchantValue:'',
                statusValue:'',
                pageNum: Number(this.$route.params.pageId)||1,
                pageSize: 10,
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
                }],
                multipleSelection:[]
            }
        },
        computed: {
            shops(){
                switch (this.$route.params.prototypeId) {
                    case '0':
                        return this.$root.menus.indexOf('/inner/shops') >= 0;
                        break;
                    case '1':
                        return this.$root.menus.indexOf('/inner/coffice') >= 0;
                        break;
                    case '2':
                        return this.$root.menus.indexOf('/inner/field') >= 0;
                        break;
                    case '3':
                        return this.$root.menus.indexOf('/inner/adposition') >= 0;
                        break;
                }
            },
            shopslist(){
                switch (this.$route.params.prototypeId) {
                    case '0':
                        return this.$root.menus.indexOf('/inner/shopslist') >= 0 && this.$root.menus.indexOf('/inner/shops') < 0;
                        break;
                    case '1':
                        return this.$root.menus.indexOf('/inner/cofficelist') >= 0 && this.$root.menus.indexOf('/inner/coffice') < 0;
                        break;
                    case '2':
                        return this.$root.menus.indexOf('/inner/fidlelist') >= 0 && this.$root.menus.indexOf('/inner/field') < 0;
                        break;
                    case '3':
                        return this.$root.menus.indexOf('/inner/adlist') >= 0 && this.$root.menus.indexOf('/inner/adposition') < 0;
                        break;
                }
            },
            shopsaudit(){
                switch (this.$route.params.prototypeId) {
                    case '0':
                        return this.$root.menus.indexOf('/inner/shopsaudit') >= 0;
                        break;
                    case '1':
                        return this.$root.menus.indexOf('/inner/cofficeaudit') >= 0;
                        break;
                    case '2':
                        return this.$root.menus.indexOf('/inner/fidleaudit') >= 0;
                        break;
                    case '3':
                        return this.$root.menus.indexOf('/inner/adaudit') >= 0;
                        break;
                }
            },
            shopschange(){
                switch (this.$route.params.prototypeId) {
                    case '0':
                        return this.$root.menus.indexOf('/inner/shopschange') >= 0;
                        break;
                    case '1':
                        return this.$root.menus.indexOf('/inner/cofficechange') >= 0;
                        break;
                    case '2':
                        return this.$root.menus.indexOf('/inner/fidlechange') >= 0;
                        break;
                    case '3':
                        return this.$root.menus.indexOf('/inner/adchange') >= 0;
                        break;
                }
            },
            routerUrl(){
                switch (this.$route.params.prototypeId) {
                    case '0':
                        return '/inner/shops/'
                        break;
                    case '1':
                        return '/inner/coffice/'
                        break;
                    case '2':
                        return '/inner/field/'
                        break;
                    case '3':
                        return '/inner/adposition/'
                        break;
                }
            },
            routerListUrl(){
                switch (this.$route.params.prototypeId) {
                    case '0':
                        return '/inner/shopslist/'
                        break;
                    case '1':
                        return '/inner/cofficelist/'
                        break;
                    case '2':
                        return '/inner/fidlelist/'
                        break;
                    case '3':
                        return '/inner/adlist/'
                        break;
                }
            },
            routerAuditUrl(){
                switch (this.$route.params.prototypeId) {
                    case '0':
                        return '/inner/shopsaudit/'
                        break;
                    case '1':
                        return '/inner/cofficeaudit/'
                        break;
                    case '2':
                        return '/inner/fidleaudit/'
                        break;
                    case '3':
                        return '/inner/adaudit/'
                        break;
                }
            },
            routerChangeUrl(){
                switch (this.$route.params.prototypeId) {
                    case '0':
                        return '/inner/shopschange/'
                        break;
                    case '1':
                        return '/inner/cofficechange/'
                        break;
                    case '2':
                        return '/inner/fidlechange/'
                        break;
                    case '3':
                        return '/inner/adchange/'
                        break;
                }
            },
            columnData() {
                switch (this.$route.params.prototypeId) {
                    case '1':
                        return [
                            { type: 'selection', width:'50'},
                            { prop: 'contractCode', label: '合同号',link:'/inner/shopsinfo/1',param:'id'},
                            { prop: 'version', label: '版本号' },
                            { prop: 'merchantName', label: '商户名称' },
                            { prop: 'contractKindName', label: '合同类型' },
                            { prop: 'validDate', label: '合同有效期', width:'100'},
                            { prop: 'statusText', label: '状态' },
                            { prop: 'updateDate', label: '更新时间' }
                        ];
                        break;
                    case '2':
                        return [
                            { type: 'selection', width:'50'},
                            { prop: 'contractCode', label: '合同号',link:'/inner/shopsinfo/2',param:'id'},
                            { prop: 'version', label: '版本号' },
                            { prop: 'merchantName', label: '商户名称' },
                            { prop: 'brandName', label: '经营品牌' },
                            { prop: 'contractKindName', label: '合同类型' },
                            { prop: 'validDate', label: '合同有效期', width:'100'},
                            { prop: 'statusText', label: '状态' },
                            { prop: 'updateDate', label: '更新时间' }
                        ];
                        break;
                    case '3':
                        return [
                            { type: 'selection', width:'50'},
                            { prop: 'contractCode', label: '合同号',link:'/inner/shopsinfo/3',param:'id'},
                            { prop: 'version', label: '版本号' },
                            { prop: 'merchantName', label: '商户名称' },
                            { prop: 'brandName', label: '经营品牌' },
                            { prop: 'contractKindName', label: '合同类型' },
                            { prop: 'validDate', label: '合同有效期', width:'100'},
                            { prop: 'statusText', label: '状态' },
                            { prop: 'updateDate', label: '更新时间' }
                        ];
                        break;
                    default: 
                        return [
                            { type: 'selection', width:'50'},
                            { prop: 'contractCode', label: '合同号',link:'/inner/shopsinfo/0',param:'id'},
                            { prop: 'version', label: '版本号' },
                            { prop: 'merchantName', label: '商户名称' },
                            { prop: 'shopName', label: '店铺名称' },
                            { prop: 'brandName', label: '经营品牌' },
                            { prop: 'contractKindName', label: '合同类型' },
                            { prop: 'validDate', label: '合同有效期', width:'100'},
                            { prop: 'statusText', label: '状态' },
                            { prop: 'updateDate', label: '更新时间' }
                        ]
                }
            }
        },
        mounted(){
            this.getMerchantList();
            this.getShopList();
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getDataList(1,this.pageSize);
                },300)
            }
        },
        methods:{
            async getDataList(pageNum,pageSize){
                this.pageNum = pageNum;
                this.pageSize = pageSize;
                this.loading = true;
                await this.$api.rentapi.getCheckListForPageUsingGET({
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    propertyType:this.$route.params.prototypeId,
                    contractCode:this.searchText,
                    shopId:this.shopValue,
                    merchantId:this.merchantValue,
                    status:this.statusValue
                }).then(res=>{
                    if(res.data.status === 200){
                        res.data.data.list.forEach(item => {
                            item.validDate = item.validStartDate + '~' + item.validEndDate;
                        }); 
                        this.dataList = res.data.data.list;
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
            async getShopList(merchantId){
                await this.$api.rentapi.doweListUsingGETShop({
                    request:{statusList:[3,4,5]}
                }).then(res=>{
                    this.shopOptions = res.data.data;
                })
            },
            async getMerchantList(){
                await this.$api.rentapi.doweListUsingGET({
                    type:this.$route.params.prototypeId
                }).then(res=>{
                    this.merchantOptions = res.data.data;
                })
            },
            merchantSelect(){
                this.getShopList(this.merchantValue);
                this.getDataList(1,this.pageSize);
            },
            shopSelect(){
                this.getDataList(1,this.pageSize);
            },
            statusSelect(){
                this.getDataList(1,this.pageSize);
            },
            childData(data){
                this.multipleSelection = data;
            },
            async auditbtn(){
                this.isDisabled = true;
                this.loading = true;
                await this.$api.rentapi.confirmUsingPUT({
                    contractVoList:this.multipleSelection
                }).then(res=>{
                    if (res.data.status == 200) {
                        this.loading = false;
                        this.isDisabled = false;
                        this.$message.success(res.data.msg);
                        this.getDataList(1,this.pageSize);
                    } else {
                        this.loading = false;
                        this.isDisabled = false;
                        this.$message.error(res.data.msg);
                    }
                }).catch(res=>{
                    this.loading = false;
                    this.isDisabled = false;
                });
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
