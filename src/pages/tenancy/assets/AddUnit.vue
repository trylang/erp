<template>
    <div class="savebox">
        <div class="savecont">
            <con-head title="添加单元"></con-head>
            <el-row class="commonbox">
                <el-col :span="12" class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname">单元号</span>
                    <input class="inputtext" type="text" placeholder="请输入单元号" v-model="unitInfoData.unitCode">
                </div>
                <div class="dialoginput">
                    <span class="inputname">购物中心</span>
                    <el-select v-model="unitInfoData.marketId" placeholder="请选择" class="dialogselect" disabled>
                        <el-option
                                v-for="item in marketOptions"
                                :key="item.id"
                                :label="item.marketName"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">楼宇</span>
                    <el-select v-model="unitInfoData.buildId" placeholder="请选择" class="dialogselect" disabled>
                        <el-option
                                v-for="item in buildOptions"
                                :key="item.id"
                                :label="item.buildName"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">楼层</span>
                    <el-select v-model="unitInfoData.floorId" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in floorOptions"
                                :key="item.id"
                                :label="item.floorName"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput">
                    <span class="inputname">建筑面积</span>
                    <input class="inputtext" type="text" placeholder="请输入建筑面积" v-model="unitInfoData.area">
                    <span class="dialogtext">㎡</span>
                </div>
                <div class="dialoginput">
                    <span class="inputname">使用面积</span>
                    <input class="inputtext" type="text" placeholder="请输入使用面积" v-model="unitInfoData.useArea">
                    <span class="dialogtext">㎡</span>
                </div>
                <div class="dialoginput noline" style="flex-direction: column;">
                    <div>
                        <span class="inputname">备注</span>
                    </div>
                    <textarea class="textareabox" placeholder="选填" v-model="unitInfoData.remark"></textarea>
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
                unitInfoData:{
                    advertisingStandard: '',
                    area: '',
                    buildId: 1,
                    floorId: '',
                    marketId: 1,
                    remark: '',
                    rentAdvertisingTypeId: '',
                    type: 0,
                    unitCode: '',
                    useArea: ''
                },
                marketOptions:[{
                    marketName:'朝阳大悦城',
                    id:1
                }],
                buildOptions:[{
                    buildName:'商场',
                    id:1
                }],
                floorOptions:[]
            }
        },
        mounted(){
            this.getFloorList();
            this.getUnitInfo();
        },
        methods:{
            async submitFormData(){
                if(this.$route.params.unitId == 0) {
                    await this.$api.rentapi.addUsingPOST_10({
                        param: this.unitInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.$router.push('/inner/unit');
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }else{
                    await this.$api.rentapi.updateUsingPUT_12({
                        id:this.$route.params.unitId,
                        param: this.unitInfoData
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.$message.success(res.data.msg);
                            this.$router.push('/inner/unit');
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                }
            },
            async getUnitInfo(){
                if(this.$route.params.unitId != 0) {
                    this.$api.rentapi.selectByIdUsingGET_3({
                        id: this.$route.params.unitId
                    }).then(res => {
                        this.unitInfoData = res.data.data;
                    })
                }
            },
            /*async getMarketList(){
                this.$api.rentapi.listUsingGET_1().then(res=>{
                    this.marketOptions = res.data.data.list;
                })
            },
            async getBuildList(){
                this.$api.rentapi.selectByIdUsingGET({
                    id:this.unitInfoData.marketId
                }).then(res=>{
                    this.buildOptions = res.data.data.list;
                })
            },*/
            async getFloorList(){
                this.$api.rentapi.selectByBuildIdUsingGET({
                    buildId:1
                }).then(res=>{
                    this.floorOptions = res.data.data;
                })
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