<template>
    <div class="savebox" v-loading.fullscreen="loading">
        <div class="savecont">
            <con-head title="添加店铺"></con-head>
            <el-row class="commonbox">
                <el-col :span="12" class="dialogbox">
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">店铺号</span>
                        <input class="inputtext" type="text" placeholder="请输入店铺号" v-model="shopInfoData.shopCode" :readonly="this.$route.params.shopId != 0">
                    </div>
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">店铺名称</span>
                        <input class="inputtext" type="text" placeholder="请输入店铺名称" v-model="shopInfoData.shopName" :readonly="isdisabled">
                    </div>
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">所属商户</span>
                        <el-select v-model="shopInfoData.merchantId" placeholder="请选择" filterable clearable class="dialogselect" :disabled="isdisabled">
                            <el-option
                                    v-for="item in merchantOptions"
                                    :key="item.id"
                                    :label="item.merchantCode+'('+item.merchantName+')'"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth" style="line-height: 40px;">经营品牌</span>
                        <el-select v-model="shopBrand" value-key="id" multiple placeholder="请选择" filterable clearable class="dialogselect" 
                            @change="selectshopBrand()" @remove-tag="deleteTag" :disabled="isdisabled">
                            <el-option
                                    v-for="item in shopBrandOptions"
                                    :key="item.id"
                                    :label="item.brandName"
                                    :value="item">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">主品牌</span>
                        <el-select v-model="shopInfoData.shopMainBrandId" placeholder="请选择" filterable clearable class="dialogselect" :disabled="isdisabled">
                            <el-option
                                    v-for="item in shopMainBrandOptions"
                                    :key="item.id"
                                    :label="item.brandName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">选择楼层</span>
                        <el-select v-model="shopInfoData.floorId" placeholder="请选择" filterable clearable class="dialogselect" :disabled="isdisabled">
                            <el-option
                                    v-for="item in floorOptions"
                                    :key="item.id"
                                    :label="item.floorName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">数据类型</span>
                        <el-select v-model="shopInfoData.shopType" placeholder="请选择" filterable clearable class="dialogselect" :disabled="isdisabled">
                            <el-option
                                    v-for="item in shopTypeOptions"
                                    :key="item.id"
                                    :label="item.shopTypeName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                        <div class="dialoginput" style="position: absolute; left: 100%; margin-left: 20px;" v-if="shopInfoData.shopType == '0'">
                            <span class="inputname" style="width: 50px;">数量</span>
                            <input class="inputtext" type="text" placeholder="POS机数量" v-model="shopInfoData.posNum">
                        </div>
                    </div>
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">是否主力店</span>
                        <el-select v-model="shopInfoData.mainStoreOrNot" placeholder="请选择" filterable clearable class="dialogselect">
                            <el-option
                                    v-for="item in mainStoreOptions"
                                    :key="item.value"
                                    :label="item.mainStoreName"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">是否中央收银</span>
                        <el-select v-model="shopInfoData.centerCollectingOrNot" placeholder="请选择" filterable clearable class="dialogselect">
                            <el-option
                                    v-for="item in centerCollectingOptions"
                                    :key="item.value"
                                    :label="item.centerCollectingName"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">店铺区域</span>
                        <el-select v-model="shopInfoData.shopRegionId" placeholder="选填" filterable clearable class="dialogselect">
                            <el-option
                                    v-for="item in shopAreaOptions"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="savebtn"><button @click="submitFormData()">提交</button></div>
    </div>
</template>

<script>
    import ConHead from '../../../components/ConHead'
    import BlankHead from '../../../components/BlankHead'
    export default {
        name: "add-user",
        data(){
            return{
                loading: false,
                shopInfoData:{
                    centerCollectingOrNot: '',
                    floorId: '',
                    id: 0,
                    mainStoreOrNot: '',
                    merchantId: '',
                    posNum:'',
                    shopBrandId: [],
                    shopCode: '',
                    shopMainBrandId: '',
                    shopName: '',
                    shopType: '',
                    shopRegionId:''
                },
                shopBrand:[],
                centerCollectingOptions:[{
                    centerCollectingName:'否',
                    value:false
                },{
                    centerCollectingName:'是',
                    value:true
                }],
                mainStoreOptions:[{
                    mainStoreName:'否',
                    value:false
                },{
                    mainStoreName:'是',
                    value:true
                }],
                shopTypeOptions:[{
                    shopTypeName:'租用POS机',
                    id:0
                },{
                    shopTypeName:'报表',
                    id:1
                },{
                    shopTypeName:'接口',
                    id:2
                }],
                merchantOptions:[],
                shopBrandOptions:[],
                shopMainBrandOptions:[],
                shopAreaOptions:[],
                floorOptions:[],
                shopBrandData:{
                    id:'',
                    brandName:''
                },
                buildId:''
            }
        },
        mounted(){
            this.getBaseDataOptions();
            this.getMerchantList();
            this.getShopBrandList();
            this.getBuildList();
        },
        computed:{
            isdisabled(){
                if(localStorage.getItem('shopStatusNum') != 0 && localStorage.getItem('shopStatusNum') != 2) {
                    return true
                }else{
                    return false
                }
            }
        },
        methods:{
            async submitFormData(){
                this.loading = true;
                if(this.$route.params.shopId == 0) {
                    await this.$api.rentapi.addUsingPOST_9({
                        request: this.shopInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.$router.push('/inner/shop');
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }else{
                    this.shopInfoData.id = this.$route.params.shopId;
                    this.shopInfoData.posNum = this.shopInfoData.shopType != 0?0:this.shopInfoData.posNum;
                    await this.$api.rentapi.updateUsingPUT_11({
                        request: this.shopInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.$router.push('/inner/shop');
                        } else {
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                    })
                }
            },
            async getUnitInfo(){
                if(this.$route.params.shopId != 0) {
                    this.$api.rentapi.detailUsingGET_7({
                        id: this.$route.params.shopId
                    }).then(res => {
                        this.shopInfoData = res.data.data;
                        res.data.data.shopBrandId.forEach(item => {
                            let brand = this.shopBrandOptions.find(item1 => {
                                return item == item1.id;
                            });
                            this.shopBrand.push(brand);
                        });
                        this.shopMainBrandOptions = this.shopBrand;
                    })
                }
            },
            async getBaseDataOptions(){
                await this.$api.systemapi.availItemListUsingGET({
                    code:'0020'
                }).then(res=>{
                    this.shopAreaOptions = res.data.data;
                })
            },
            async getMerchantList(){
                this.$api.rentapi.listUsingGET_12({merchantType: 0, status: 1}).then(res=>{
                    this.merchantOptions = res.data.data;
                })
            },
            async getShopBrandList(){
                this.$api.rentapi.listUsingGET_3({status: 1}).then(res=>{//已确认状态
                    this.shopBrandOptions = res.data.data;
                    this.getUnitInfo();
                })
            },
            async getBuildList(){
                await this.$api.rentapi.listUsingGET_4().then(res=>{
                    this.buildOptions = res.data.data;
                    res.data.data.forEach(item => {
                        if (item.buildName == '商场') {
                            this.buildId = item.id;
                        }
                    })
                    this.getFloorList();
                })
            },
            async getFloorList(){
                this.$api.rentapi.selectByBuildIdUsingGET({
                    buildId:this.buildId
                }).then(res=>{
                    this.floorOptions = res.data.data;
                })
            },
            selectshopBrand(){
                this.shopMainBrandOptions = this.shopBrand;
                this.shopInfoData.shopBrandId = this.shopBrand.map(item=>{
                    return item.id;
                });
            },
            deleteTag(tag) {
                if (this.shopInfoData.shopMainBrandId === tag.id) this.shopInfoData.shopMainBrandId = '';
            }
        },
        components:{
            ConHead,
            BlankHead
        }
    }
</script>

<style scoped>

</style>