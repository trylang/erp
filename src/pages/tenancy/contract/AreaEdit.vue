<template>
    <div class="savebox" v-loading.fullscreen="loading">
        <template>
            <div class="changecontent">
                <blank-head title="面积变更"></blank-head>
                <div class="commonbox">
                    <el-row class="dialogbox">
                        <el-col :span="24" v-if="this.$route.params.prototypeId != 3">
                            <div class="listbox contracthead" style="margin: 0;">
                                <div class="listcont contractcont">
                                    <div class="listcolum contractlist" v-if="this.$route.params.prototypeId == 0">
                                        <span>店铺</span>
                                        <p style="max-width: 240px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{shopName}}</p>
                                    </div>
                                    <div class="listcolum contractlist" v-if="this.$route.params.prototypeId != 0">
                                        <span>{{stepName}}</span>
                                    </div>
                                    <div class="listcolum contractlist">
                                            <span>
                                                建筑面积
                                                <template>
                                                    <el-radio v-model="unitData.rentWay" :disabled="unitData.rentWay == '1'" label="0">计租</el-radio>
                                                </template>
                                            </span>
                                        <p>{{unitData.area.toFixed(2)}}</p>
                                    </div>
                                    <div class="listcolum contractlist">
                                            <span>
                                                使用面积
                                                <template>
                                                    <el-radio v-model="unitData.rentWay" :disabled="unitData.rentWay == '0'" label="1">计租</el-radio>
                                                </template>
                                            </span>
                                        <p>{{unitData.useArea.toFixed(2)}}</p>
                                    </div>
                                    <div class="listcolum contractlist">
                                        <span>计租面积</span>
                                        <p>{{unitData.rentArea.toFixed(2)}}</p>
                                    </div>
                                    <div class="deletebtn"></div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="24" v-if="this.$route.params.prototypeId != 3">
                            <div class="listbox" style="margin: 0;">
                                <div class="listcont contractcont" v-for="(UnitItem,index) in unitListPush">
                                    <div class="listcolum contractlist">
                                        <span>{{stepName}}号</span>
                                        <p>{{UnitItem.unitCode}}</p>
                                    </div>
                                    <div class="listcolum contractlist">
                                        <span>建筑面积</span>
                                        <p v-show="UnitItem.isEditShow == false">{{UnitItem.area}}</p>
                                        <input v-show="UnitItem.isEditShow == true" type="text" v-model="UnitItem.area" v-limitNum>
                                    </div>
                                    <div class="listcolum contractlist">
                                        <span>使用面积</span>
                                        <p v-show="UnitItem.isEditShow == false">{{UnitItem.useArea}}</p>
                                        <input v-show="UnitItem.isEditShow == true" type="text" v-model="UnitItem.useArea" v-limitNum>
                                    </div>
                                    <div class="listcolum contractlist">
                                        <span>楼层</span>
                                        <p>{{UnitItem.floorName}}</p>
                                    </div>
                                    <div style="width: 88px;">
                                        <button class="btn_text" v-show="UnitItem.isEditShow == false" @click="editDataInfo(index,UnitItem)">编辑</button>
                                        <button class="btn_text" v-show="UnitItem.isEditShow == true" @click="updateDataInfo(UnitItem)">保存</button>
                                        <button class="btn_text" v-show="UnitItem.isEditShow == true" @click="cancelDataInfo(UnitItem)">取消</button>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="24" v-if="this.$route.params.prototypeId == 3">
                            <div class="listbox" style="margin: 0;">
                                <div class="listcont contractcont" v-for="(UnitItem,index) in unitListPush">
                                    <div class="listcolum contractlist">
                                        <span>{{stepName}}号</span>
                                        <p>{{UnitItem.unitCode}}</p>
                                    </div>
                                    <div class="listcolum contractlist">
                                        <span>规格</span>
                                        <p v-show="UnitItem.isEditShow == false">{{UnitItem.advertisingStandard}}</p>
                                        <input v-show="UnitItem.isEditShow == true" type="text" v-model="UnitItem.advertisingStandard">
                                    </div>
                                    <div class="listcolum contractlist">
                                        <span>楼层</span>
                                        <p>{{UnitItem.floorName}}</p>
                                    </div>
                                    <div style="width: 88px;">
                                        <button class="btn_text" v-show="UnitItem.isEditShow == false" @click="editDataInfo(index,UnitItem)">编辑</button>
                                        <button class="btn_text" v-show="UnitItem.isEditShow == true" @click="updateDataInfo(UnitItem)">保存</button>
                                        <button class="btn_text" v-show="UnitItem.isEditShow == true" @click="cancelDataInfo(UnitItem)">取消</button>
                                    </div>
                                </div>
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
                unitData:{
                    area: 0,
                    contractCode:'',
                    contractId: '',
                    propertyType: this.$route.params.prototypeId,
                    rentArea: 0,
                    rentWay: '',
                    shopId: '',
                    siteId:'',
                    swingArea: 0,
                    unitIds: [],
                    useArea: 0
                },
                shopName:'',
                unitListPush:[],
                unitAreaChange:{
                    contractId: '',
                    rentUnitVoList:[],
                    sumBuildArea: '',
                    sumUseArea: ''
                },
                isChangeNum:0,
                deepCloneUnitList:[]
            }
        },
        watch:{
            '$route' (to, from) {
                this.getContractInfoData();
            }
        },
        computed:{
            stepName(){
                switch (this.$route.params.prototypeId){
                    case '0':
                        return '单元'
                        break;
                    case '1':
                        return '写字楼'
                        break;
                    case '2':
                        return '场地'
                        break;
                    case '3':
                        return '广告位'
                        break;
                }
            }
        },
        mounted(){
            this.getContractInfoData();
        },
        methods: {
            deepClone(obj){
                let str,newObj = obj instanceof Array? [] : {};
                if(typeof obj !== 'object'){
                    return;
                }else if(window.json){
                    str = JSON.stringify(obj);
                    newObj = JSON.parse(str);
                }else{
                    for(let i in obj){
                        newObj[i]=typeof obj[i]==='object'?this.deepClone(obj[i]):obj[i]
                    }
                }
                return newObj;
            },
            //获取详细信息
            async getContractInfoData() {
                this.unitAreaChange.rentUnitVoList = [];
                await this.$api.rentapi.getContractMainBodyUsingGET({
                    contractId: this.$route.params.contractId
                }).then(res => {
                    if (res.data.status == 200) {
                        this.shopName =  res.data.data.shopName;
                        this.contractCode = res.data.data.contractCode;
                    } else {
                        this.$message.error(res.data.msg);
                    }
                });
                await this.$api.rentapi.getContractUnitInformationUsingGET({
                    contractCode: this.contractCode
                }).then(res => {
                    if (res.data.status == 200) {
                        if (this.$route.params.prototypeId == 0) {
                            if (res.data.data.rentShop != null) {
                                this.unitData = res.data.data.rentShop;
                                this.unitData.rentWay = res.data.data.rentShop.rentWay + '';
                                this.unitData.shopId = res.data.data.rentShop.id;
                            }
                        } else {
                            if (res.data.data.rentSite != null) {
                                this.unitData = res.data.data.rentSite;
                                this.unitData.rentWay = res.data.data.rentSite.rentWay + '';
                                this.unitData.siteId = res.data.data.rentSite.id;
                            }
                        }
                        if (res.data.data.rentUnitList != null) {
                            res.data.data.rentUnitList.forEach(item=>{
                                item.isEditShow = false
                            });
                            //this.unitListPush = res.data.data.rentUnitList;
                            this.deepCloneUnitList = this.deepClone(res.data.data.rentUnitList);
                            this.unitListPush = res.data.data.rentUnitList.map((item) => {
                                return {...item}
                            })
                        }
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            editDataInfo(index,itemlist){
                this.isChangeNum = 1;
                itemlist.isEditShow = true;
            },
            updateDataInfo(itemlist){
                this.isChangeNum = 0;
                itemlist.isEditShow = false;
                this.unitData.area = Number(this.unitListPush.reduce(function(prev, cur){
                    return  Number(prev) +  Number(cur.area);
                },0));
                this.unitData.useArea = Number(this.unitListPush.reduce(function(prev, cur){
                    return Number(prev) + Number(cur.useArea);
                },0));
                if(this.unitData.rentWay == '0'){
                    this.unitData.rentArea = this.unitData.area;
                }else if(this.unitData.rentWay == '1'){
                    this.unitData.rentArea = this.unitData.useArea;
                }
                itemlist.area = Number(itemlist.area).toFixed(2);
                itemlist.useArea = Number(itemlist.useArea).toFixed(2);
                let result = this.deepCloneUnitList.find(item => item.id === itemlist.id)
                if (result.area !== itemlist.area || result.useArea !== itemlist.useArea || result.advertisingStandard !== itemlist.advertisingStandard) {
                    this.unitAreaChange.rentUnitVoList.push(itemlist)
                }else{
                    let index = this.unitAreaChange.rentUnitVoList.indexOf(itemlist)
                    if (index !== -1) {
                        this.unitAreaChange.rentUnitVoList.splice(index,1);
                    }
                }
            },
            cancelDataInfo(itemlist){
                this.isChangeNum = 0;
                itemlist.isEditShow = false;
                let result = this.deepCloneUnitList.find(item => item.id === itemlist.id)
                itemlist.area = result.area;
                itemlist.useArea = result.useArea;
                itemlist.advertisingStandard = result.advertisingStandard;
            },
            async submitChange(){
                if(this.unitAreaChange.rentUnitVoList.length <= 0){
                    if(this.isChangeNum == 0) {
                        this.$message.error('单元未变更！');
                    }else{
                        this.$message.error('单元未保存，请先保存！');
                    }
                    return;
                }
                this.unitAreaChange.contractId = this.$route.params.contractId;
                this.unitAreaChange.sumBuildArea = this.unitData.area;
                this.unitAreaChange.sumUseArea = this.unitData.useArea;
                this.loading = true;
                await this.$api.rentapi.unitAreaChangeList({
                    param: this.unitAreaChange
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
            },
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
    .contractlist input{
        line-height: 24px;
        border: 1px solid #e5e5e5;
    }
</style>