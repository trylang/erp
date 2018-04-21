<template>
    <div>
        <con-head tab="tab">
            <div slot="appendtab" class="tabmenu">
                <router-link :to="routerUrl+this.$route.params.prototypeId">合同管理</router-link>
                <router-link :to="routerAuditUrl+this.$route.params.prototypeId">合同确认</router-link>
            </div>
            <router-link class="el-button" slot="append" :to="routerAddUrl+'0/'+this.$route.params.prototypeId+'/0'">录入</router-link>
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
                                        :key="item.value"
                                        :label="item.text"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="9" v-if="this.$route.params.prototypeId == 0">
                        <div class="searchselect">
                            <span class="inputname inputnameauto">店铺</span>
                            <el-select v-model="shopValue" placeholder="请选择" class="dialogselect" @change="shopSelect()">
                                <el-option
                                        v-for="item in shopOptions"
                                        :key="item.id"
                                        :label="item.shopName+'('+item.shopCode+')'"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="9" :offset="6" v-if="this.$route.params.prototypeId == 0">
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
                    <el-col :span="9" v-if="this.$route.params.prototypeId != 0">
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
            <div class="mainbox">
                <data-table :tableData="dataList" :colConfigs="columnData">
                    <el-table-column
                            label="操作"
                            width="154"
                            slot="operation">
                        <template slot-scope="scope">
                            <router-link :to="routerAddUrl+scope.row.id+'/'+prototypeId+'/'+0" class="btn_text" v-if="scope.row.status == 10 || scope.row.status == 20">编辑</router-link>
                            <router-link :to="routerAddUrl+scope.row.id+'/'+prototypeId+'/'+1" class="btn_text" v-if="scope.row.status == 60">编辑</router-link>
                            <router-link :to="routerAddUrl+scope.row.id+'/'+prototypeId+'/'+2" class="btn_text" v-if="scope.row.status == 50">编辑</router-link>
                            <button class="btn_text" v-if="scope.row.status == 61" @click="stopInfoBtn(scope.row.id,2)">编辑</button>
                            <button class="btn_text" v-if="scope.row.status == 10 || scope.row.status == 20" @click="deleteContract(scope.row.id)">删除</button>
                            <button class="btn_text" v-if="scope.row.status == 30 || scope.row.status == 40" @click="stopContract(scope.row.id,1)">终止</button>
                            <router-link :to="routerAddUrl+scope.row.id+'/'+prototypeId+'/'+1" class="btn_text" v-if="scope.row.status == 40">延期</router-link>
                            <router-link :to="routerAddUrl+scope.row.id+'/'+prototypeId+'/'+2" class="btn_text" v-if="scope.row.status == 40">变更</router-link>
                            <button class="btn_text" v-if="scope.row.status == 30" @click="cancelContract(scope.row.id)">取消</button>
                        </template>
                    </el-table-column>
                </data-table>
            </div>
            <rt-page ref="page" :cur="pageNum" :total="total" @change="getDataList" style="margin-bottom:30px"></rt-page>
        </con-head>
        <el-dialog
                title="终止合同"
                :visible.sync="dialogVisible"
                custom-class="customdialog">
            <div class="dialogbox">
                <div class="dialoginput">
                    <span class="inputname inputnameauto">退租日期</span>
                    <el-date-picker
                            class="inputtext"
                            v-model="stopContractData.stopDate"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="退租日期">
                    </el-date-picker>
                </div>
                <div class="dialoginput">
                    <span class="inputname">退租性质</span>
                    <el-select v-model="stopContractData.stopType" placeholder="请选择" class="dialogselect">
                        <el-option
                                v-for="item in stopTypeOption"
                                :key="item.value"
                                :label="item.text"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialoginput noline" style="flex-direction: column;">
                    <span class="inputname inputnameauto">原因（选填）</span>
                    <textarea class="textareabox" placeholder="选填" v-model="stopContractData.stopReason"></textarea>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose()">取 消</el-button>
                <el-button type="primary" @click="submitStop()">确 定</el-button>
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
                    statusName:"已确认",
                    isStatus:false,
                    id:30
                },{
                    statusName:"已生成账单",
                    isStatus:false,
                    id:40
                },{
                    statusName:"取消",
                    isStatus:false,
                    id:20
                },{
                    statusName:"退租",
                    isStatus:false,
                    id:70
                }],
                stopContractData:{
                    id:'',
                    stopDate:'',
                    stopType:'',
                    stopReason:'',
                },
                stopTypeOption:[],
                prototypeId:this.$route.params.prototypeId,
                stopNum:''
            }
        },
        mounted(){
            this.getMerchantList();
            this.getShopList();
            this.activeNameSwitch();
            this.getBaseDataOptions();
        },
        watch:{
            searchText(){
                this.$delay(()=>{
                    this.getDataList(1);
                },300)
            },
            '$route'(to,from){
                this.getDataList(1);
                this.getMerchantList();
                this.prototypeId=this.$route.params.prototypeId;
                this.searchText = '';
                this.merchantValue = '';
                this.shopValue = '';
                this.statusValue = '';
            }
        },
        computed:{
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
            routerAddUrl(){
                switch (this.$route.params.prototypeId) {
                    case '0':
                        return '/inner/addshops/'
                        break;
                    case '1':
                        return '/inner/addoffice/'
                        break;
                    case '2':
                        return '/inner/addfidle/'
                        break;
                    case '3':
                        return '/inner/addadposition/'
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
            columnData(){
                switch (this.$route.params.prototypeId){
                    case '0':
                        return [
                            { prop: 'contractCode', label: '合同号',link:'/inner/shopsinfo/0',param:'id'},
                            { prop: 'version', label: '版本号' },
                            { prop: 'merchantName', label: '商户名称' },
                            { prop: 'shopName', label: '店铺名称' },
                            { prop: 'brandName', label: '经营品牌' },
                            { prop: 'validDate', label: '合同有效期' },
                            { prop: 'statusText', label: '状态' },
                            { prop: 'updateDate', label: '更新时间' }
                        ];
                        break;
                    case '1':
                        return [
                            { prop: 'contractCode', label: '合同号',link:'/inner/shopsinfo/1',param:'id'},
                            { prop: 'version', label: '版本号' },
                            { prop: 'merchantName', label: '商户名称' },
                            { prop: 'validDate', label: '合同有效期' },
                            { prop: 'statusText', label: '状态' },
                            { prop: 'updateDate', label: '更新时间' }
                        ];
                        break;
                    case '2':
                        return [
                            { prop: 'contractCode', label: '合同号',link:'/inner/shopsinfo/2',param:'id'},
                            { prop: 'version', label: '版本号' },
                            { prop: 'merchantName', label: '商户名称' },
                            { prop: 'brandName', label: '经营品牌' },
                            { prop: 'validDate', label: '合同有效期' },
                            { prop: 'statusText', label: '状态' },
                            { prop: 'updateDate', label: '更新时间' }
                        ];
                        break;
                    case '3':
                        return [
                            { prop: 'contractCode', label: '合同号',link:'/inner/shopsinfo/3',param:'id'},
                            { prop: 'version', label: '版本号' },
                            { prop: 'merchantName', label: '商户名称' },
                            { prop: 'brandName', label: '经营品牌' },
                            { prop: 'validDate', label: '合同有效期' },
                            { prop: 'statusText', label: '状态' },
                            { prop: 'updateDate', label: '更新时间' }
                        ];
                        break;
                }
            }
        },
        methods:{
            handleClose(){
                this.dialogVisible = false;
            },
            activeNameSwitch(){
                localStorage.setItem('activeName',1);
                localStorage.setItem('step',0)
            },
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
                    res.data.data.list.forEach(item => {
                        item.validDate = item.validStartDate + '~' + item.validEndDate;
                    }); 
                    this.dataList = res.data.data.list;
                    this.total = Number(res.data.data.total);
                })
            },
            async deleteContract(id){
                this.$confirm('是否删除该条数据?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.delUsingPUT({
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
            async getBaseDataOptions(){
                await this.$api.rentapi.baseDataOptionsUsingGET().then(res=>{
                    this.stopTypeOption = res.data.data.stop_type;
                })
            },
            async getShopList(merchantId){
                await this.$api.rentapi.getByStatusUsingPOST({
                    status:[3,4,5]
                }).then(res=>{
                    this.shopOptions = res.data.data;
                })
            },
            async getMerchantList(){
                await this.$api.rentapi.getMerchantOption({
                    type:this.$route.params.prototypeId
                }).then(res=>{
                    this.merchantOptions = res.data.data;
                })
            },
            async stopInfoBtn(id,num){
                this.dialogVisible = true;
                this.stopContractData={
                    id:'',
                    stopDate:'',
                    stopType:'',
                    stopReason:'',
                };
                this.stopNum = num;
                await this.$api.rentapi.getStopInfo({
                    id: id
                }).then(res => {
                    if (res.data.status == 200) {
                        this.stopContractData = res.data.data;
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            async submitStop(){
                await this.$confirm('是否终止该合同?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    if(this.stopNum ==1) {
                        this.$api.rentapi.stopContractPOST({
                            param: this.stopContractData
                        }).then(res => {
                            if (res.data.status == 200) {
                                this.dialogVisible = false;
                                this.getDataList(1);
                                this.$message.success(res.data.msg);
                            } else {
                                this.$message.error(res.data.msg);
                            }
                        })
                    }else{
                        this.$api.rentapi.stopEditContractPOST({
                            param: this.stopContractData
                        }).then(res => {
                            if (res.data.status == 200) {
                                this.dialogVisible = false;
                                this.getDataList(1);
                                this.$message.success(res.data.msg);
                            } else {
                                this.$message.error(res.data.msg);
                            }
                        })
                    }
                });
            },
            async cancelContract(id){
                await this.$confirm('是否取消确认?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$api.rentapi.cancelUsingPUT({
                        id: id
                    }).then(res => {
                        if (res.data.status == 200) {
                            this.getDataList(1);
                            this.$message.success(res.data.msg);
                        } else {
                            this.$message.error(res.data.msg);
                        }
                    })
                });
            },
            merchantSelect(){
                //this.getShopList(this.merchantValue);
                this.getDataList(1);
            },
            shopSelect(){
                this.getDataList(1);
            },
            statusSelect(){
                this.getDataList(1);
            },
            stopContract(id,num){
                this.dialogVisible = true;
                this.stopContractData={                    
                    stopDate:'',
                    stopType:'',
                    stopReason:'',
                };
                this.stopContractData.id = id;
                this.stopNum = num;
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
</style>
