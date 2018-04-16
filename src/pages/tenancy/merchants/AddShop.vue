<template>
    <div class="savebox">
        <div class="savecont">
            <con-head title="添加店铺"></con-head>
            <el-row class="commonbox">
                <el-col :span="12" class="dialogbox">
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">店铺名称</span>
                        <input class="inputtext" type="text" placeholder="请输入店铺名称" v-model="shopInfoData.shopName">
                    </div>
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth">所属商户</span>
                        <el-select v-model="shopInfoData.merchantId" placeholder="请选择" class="dialogselect">
                            <el-option
                                    v-for="item in merchantOptions"
                                    :key="item.id"
                                    :label="item.merchantName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="dialoginput">
                        <span class="inputname inputnameWidth" style="line-height: 40px;">经营品牌</span>
                        <el-select v-model="shopBrand" value-key="id" multiple placeholder="请选择" class="dialogselect" 
                            @change="selectshopBrand()" @remove-tag="deleteTag">
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
                        <el-select v-model="shopInfoData.shopMainBrandId" placeholder="请选择" class="dialogselect">
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
                        <el-select v-model="shopInfoData.floorId" placeholder="请选择" class="dialogselect">
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
                        <el-select v-model="shopInfoData.shopType" placeholder="请选择" class="dialogselect">
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
                        <el-select v-model="shopInfoData.mainStoreOrNot" placeholder="请选择" class="dialogselect">
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
                        <el-select v-model="shopInfoData.centerCollectingOrNot" placeholder="请选择" class="dialogselect">
                            <el-option
                                    v-for="item in centerCollectingOptions"
                                    :key="item.value"
                                    :label="item.centerCollectingName"
                                    :value="item.value">
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
                shopInfoData:{
                    centerCollectingOrNot: '',
                    floorId: '',
                    id: 0,
                    mainStoreOrNot: '',
                    merchantId: '',
                    posNum:'',
                    shopBrandId: [],
                    // shopCode: '',
                    shopMainBrandId: '',
                    shopName: '',
                    shopType: ''
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
                floorOptions:[],
                shopBrandData:{
                    id:'',
                    brandName:''
                }
            }
        },
        mounted(){
            this.getMerchantList();
            this.getShopBrandList();
            this.getFloorList();
            this.getUnitInfo();
        },
        methods:{
            async submitFormData(){
                if(this.$route.params.shopId == 0) {
                    await this.$api.rentapi.addUsingPOST_9({
                        request: this.shopInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.$router.push('/inner/shop');
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    this.shopInfoData.id = this.$route.params.shopId;
                    await this.$api.rentapi.updateUsingPUT_11({
                        request: this.shopInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.$router.push('/inner/shop');
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async getUnitInfo(){
                if(this.$route.params.shopId != 0) {
                    this.$api.rentapi.detailUsingGET_7({
                        id: this.$route.params.shopId
                    }).then(res => {
                        this.shopInfoData = res.data.data;
                        res.data.data.shopBrandId.map(item => {
                            let brand = this.shopBrandOptions.find(item1 => {
                                return item == item1.id;
                            });
                            this.shopBrand.push(brand);
                        });
                        this.shopMainBrandOptions = this.shopBrand;
                    })
                }
            },
            async getMerchantList(){
                this.$api.rentapi.listUsingGET_12({merchantType: 0, status: 1}).then(res=>{
                    this.merchantOptions = res.data.data;
                })
            },
            async getShopBrandList(){
                this.$api.rentapi.listUsingGET_3({status: 1}).then(res=>{//已确认状态
                    this.shopBrandOptions = res.data.data;
                })
            },
            async getFloorList(){
                this.$api.rentapi.selectByBuildIdUsingGET({
                    buildId:1
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