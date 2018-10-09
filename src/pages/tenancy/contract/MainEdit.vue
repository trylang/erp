<template>
    <div class="savebox" v-loading.fullscreen="loading">
        <template>
            <div class="changecontent">
                <blank-head title="合同信息"></blank-head>
                <div class="commonbox">
                    <el-row class="dialogbox">
                        <el-col :span="10">
                            <div class="dialoginput htinfoinput">
                                <span class="inputname inputnameauto">版本号：{{mainData.version}}</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 0 || this.$route.params.prototypeId == 1">
                        <el-col :span="10">
                            <div class="dialoginput">
                                <span class="inputname inputnameWidth">意向合同</span>
                                <span class="dialogtext rightcompany">{{mainData.intentionContractCode ? mainData.intentionContractCode : ''}}{{mainData.intentionContractMerchantName ? '（'+mainData.intentionContractMerchantName+'）' : ''}}</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="dialogbox">
                        <el-col :span="10">
                            <div class="dialoginput">
                                <span class="inputname inputnameWidth">合同分类</span>
                                <span class="dialogtext rightcompany">{{mainData.contractTypeName}}</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="dialogbox">
                        <el-col :span="10">
                            <div class="dialoginput">
                                <span class="inputname inputnameWidth">合同类型</span>
                                <span class="dialogtext rightcompany">{{mainData.contractKindName}}</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 0">
                        <el-col :span="10">
                            <div class="dialoginput">
                                <span class="inputname inputnameWidth">销售计税类型</span>
                                <span class="dialogtext rightcompany">{{mainData.rateTypeName}}</span>
                            </div>
                        </el-col>
                        <el-col :span="5">
                            <div class="dialoginput dialogtext">
                                <span class="inputname">税率</span>
                                <span class="middleinput">{{mainData.rate}}</span>
                                <span class="rightcompany">%</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="dialogbox">
                        <el-col :span="15">
                            <div class="dialoginput">
                                <span class="inputname inputnameWidth">合同说明</span>
                                <span class="dialogtext rightcompany">{{mainData.description}}</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <blank-head title="商户信息"></blank-head>
                <div class="commonbox">
                    <el-row class="dialogbox">
                        <el-col :span="10">
                            <div class="dialoginput">
                                <span class="inputname">商户</span>
                                <el-select filterable clearable v-model="mainData.merchantId" placeholder="请选择" class="dialogselect">
                                    <el-option
                                            v-for="item in merchantOptions"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                <span class="inputname">店铺</span>
                                <span class="dialogtext">{{mainData.shopCode+'('+mainData.shopName+')'}}</span>
                            </div>
                            <div class="dialoginput" v-if="this.$route.params.prototypeId == 0 || this.$route.params.prototypeId == 2 || this.$route.params.prototypeId == 3">
                                <span class="inputname">品牌</span>
                                <span class="dialogtext">{{mainData.brandName}}</span>
                            </div>
                            <div class="dialoginput">
                                <span class="inputname">经营方式</span>
                                <span class="dialogtext">{{mainData.operationModeName}}</span>
                            </div>
                            <div class="dialoginput" v-if="this.$route.params.prototypeId == 1">
                                <span class="inputname">店铺号</span>
                                <span class="dialogtext">{{mainData.siteCode}}</span>
                            </div>
                            <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                <span class="inputname">结算等级</span>
                                <span class="dialogtext">{{mainData.settleLevelName}}</span>
                            </div>
                            <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                <span class="inputname">收银模式</span>
                                <span class="dialogtext">{{mainData.cashierModeName}}</span>
                            </div>
                            <div class="dialoginput" v-if="this.$route.params.prototypeId == 0">
                                <span class="inputname">免租期</span>
                                <span class="dialogtext">{{mainData.rentFreeNumber}}</span>
                                <span class="dialogtext">天</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <blank-head title="时间条款"></blank-head>
                <div class="commonbox">
                    <el-row class="dialogbox">
                        <el-col :span="10">
                            <div class="dialoginput">
                                <span class="inputname inputnameWidth">合同有效期</span>
                                <span class="dialogtext">{{mainData.validStartDate}}</span>
                                <span class="rightcompany">~</span>
                                <span class="dialogtext rightcompany">{{mainData.validEndDate}}</span>
                            </div>
                        </el-col>
                        <el-col :span="14">
                            <div class="dialogtext">合同租期：{{mainData.validCycle}}</div>
                        </el-col>
                    </el-row>
                    <el-row class="dialogbox">
                        <el-col :span="10">
                            <div class="dialoginput">
                                <span class="inputname inputnameWidth">交铺日期</span>
                                <span class="dialogtext">{{mainData.pavingDate}}</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 0">
                        <el-col :span="10">
                            <div class="dialoginput">
                                <span class="inputname inputnameWidth">开业日期</span>
                                <span class="dialogtext">{{mainData.openingDate}}</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 1">
                        <el-col :span="10">
                            <div class="dialoginput">
                                <span class="inputname inputnameWidth">入住日期</span>
                                <span class="dialogtext">{{mainData.enterDate}}</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="dialogbox" v-if="this.$route.params.prototypeId == 0 || this.$route.params.prototypeId == 1 || this.$route.params.prototypeId == 2">
                        <el-col :span="10">
                            <div class="dialoginput">
                                <span class="inputname inputnameWidth">装修周期</span>
                                <span class="dialogtext">{{mainData.decorationStartDate}}</span>
                                <span class="rightcompany">~</span>
                                <span class="dialogtext rightcompany">{{mainData.decorationEndDate}}</span>
                            </div>
                        </el-col>
                        <el-col :span="14">
                            <div class="dialogtext">周期：{{mainData.decorationCycle}}</div>
                        </el-col>
                    </el-row>
                    <el-row class="dialogbox">
                        <el-col :span="10">
                            <div class="dialoginput">
                                <span class="inputname inputnameWidth">起租日期</span>
                                <span class="dialogtext">{{mainData.rentStartDate}}</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="dialogbox">
                        <el-col :span="10">
                            <div class="dialoginput">
                                <span class="inputname inputnameWidth">签约日期</span>
                                <span class="dialogtext">{{mainData.signDate}}</span>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="dialogbox">
                        <el-col :span="15">
                            <div class="dialoginput">
                                <span class="inputname inputnameWidth">备注</span>
                                <span class="dialogtext">{{mainData.remark}}</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </template>
        <div class="savebtn">
            <button @click="submitChange()">提交</button>
        </div>
    </div>
</template>

<script>
    import BlankHead from '../../../components/BlankHead'
    export default {
        data() {
            return {
                loading: false,
                mainData:{
                    cashierMode: '',
                    contractType: '',
                    decorationEndDate: '',
                    decorationStartDate: '',
                    description: '',
                    enterDate: '',
                    id: null,
                    intentionContractId: '',
                    brandId: '',
                    merchantId: '',
                    openingDate: '',
                    operationMode: '',
                    pavingDate: '',
                    propertyType: this.$route.params.prototypeId,
                    rate: '',
                    rateType: '',
                    remark: '',
                    rentFreeNumber: '',
                    rentStartDate: '',
                    settleLevel: '',
                    shopId: '',
                    signDate: '',
                    validEndDate: '',
                    validStartDate: '',
                    version: 1
                },
                merchantOptions:[],
                merchantData:{
                    contractId: 0,
                    merchantId: 0
                }
            }
        },
        watch:{
            '$route' (to, from) {
                this.getContractInfoData();
            }
        },
        mounted(){
            this.getMerchantList();
            this.getContractInfoData();
        },
        methods: {
            async getMerchantList(){
                await this.$api.rentapi.doweListUsingGET({
                    type:this.$route.params.prototypeId
                }).then(res=>{
                    this.merchantOptions = res.data.data;
                })
            },
            //获取详细信息
            async getContractInfoData() {
                await this.$api.rentapi.getContractMainBodyUsingGET({
                    contractId: this.$route.params.contractId
                }).then(res => {
                    if (res.data.status == 200) {
                        this.mainData = res.data.data;
                    } else {
                        this.$message.error(res.data.msg);
                    }
                });
            },
            async submitChange(){
                this.merchantData.contractId = this.$route.params.contractId;
                this.merchantData.merchantId = this.mainData.merchantId;
                this.loading = true;
                await this.$api.rentapi.postMerchantChange({
                    param: this.merchantData
                }).then(res => {
                    if (res.data.status == 200) {
                        this.loading = false;
                        this.$message.success(res.data.msg);
                        switch (this.$route.params.prototypeId){
                            case '0':
                                return this.$router.push('/inner/shopschange/0');
                                break;
                            case '1':
                                return this.$router.push('/inner/cofficechange/1');
                                break;
                            case '2':
                                return this.$router.push('/inner/fidlechange/2');
                                break;
                            case '3':
                                return this.$router.push('/inner/adchange/3');
                                break;
                        }
                    } else {
                        this.loading = false;
                        this.$message.error(res.data.msg);
                    }
                }).catch(res=>{
                    this.loading = false;
                });
            }
        },
        components: {
            BlankHead
        }
    }
</script>

<style scoped>
    .changecontent{
        border-radius: 10px;
        background: #fff;
        min-height: 300px;
        padding: 20px 0;
    }
</style>