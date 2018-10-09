<template>
    <div class="savebox" v-loading.fullscreen="loading">
        <div class="savecont">
            <con-head title="创建通知">
                <el-row class="commonbox">
                    <el-col :span="12" class="dialogbox">
                        <div class="dialoginput">
                            <span class="inputname" style="line-height:40px;">标题</span>
                            <input class="inputtext" type="text" style="height:40px;" placeholder="请输入标题" v-model="add.noticeName">
                        </div>
                        <div class="dialoginput">
                            <span class="inputname">选择商户</span>
                            <div class="inputtext">
                                <div style="float: left;">
                                    <el-button type="primary" icon="el-icon-circle-plus" @click="checkMerchantHandler"></el-button>
                                </div>
                                <div style="">
                                    <el-tag
                                        v-for="item in merchantTags"
                                        closable
                                        :key="item.id"
                                        :disable-transitions="false"
                                        @close="closeMerchantHandle(item)">
                                        {{item.merchantName}}({{item.merchantCode}})
                                    </el-tag>
                                </div>
                            </div>
                            <!-- <el-select v-model="add.merchantIds" multiple placeholder="请选择商户" filterable clearable class="dialogselect" @change="checkUserHandler">
                                <el-option label="商户编号" value="0" disabled>
                                    <span style="float: left">商户编号</span>
                                    <span style="float:right;color:#8492a6;font-size:13px;margin-right:15px">商户名称</span>
                                </el-option>
                                <el-option
                                    v-for="item in options"
                                    :key="item.id"
                                    :label="item.merchantName"
                                    :value="item.id">
                                    <span style="float: left">{{ item.merchantCode }}</span>
                                    <span style="float:right;color:#8492a6;font-size:13px;margin-right:15px">{{ item.merchantName }}</span>
                                </el-option>
                            </el-select> -->
                        </div>
                        <div class="dialoginput noline" style="flex-direction: column;">
                            <div>
                                <span class="inputname">消息内容</span>
                            </div>
                            <textarea class="textareabox" maxlength="150" placeholder="" v-model="add.noticeContent"  @input="inputLength" style="height: 200px;"></textarea>
                            <span class="textcount">{{remarkLength}}/150</span>
                        </div>
                    </el-col>
                </el-row>
            </con-head>
        </div>
        <div class="savebtn"><button @click="submitHandler">提交</button></div>
        <el-dialog
            title="选择商户"
            :visible.sync="dialogVisibleT"
            custom-class="customdialog"
            width="60%">
            <div class="dialogbox">
                <div class="searchbox" style="margin-top:-20px;">
                    <input type="text" placeholder="请输入商户名称" v-model.trim="searchMerchantName" @keyup.enter="getMerchents"><i class="iconfont icon-sousuo"></i>
                </div>
            </div>
            <erp-table :header="header" :content="merchantList" :noLoading="true" @currentPage="getCurrentPage" @pageSize="getpageSize"></erp-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibleT = false">取 消</el-button>
                <el-button type="primary" @click="batchConfirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead';
    import erpTable from "../../components/Table";
    export default {
        data(){
            return{
                loading: false,
                dialogVisibleT: false,
                searchMerchantName: '',
                merchantList:[],
                merchantTags: [],
                page: {
                    pageNum: '',
                    pageSize: ''
                },
                add:{
                    noticeName: '',
                    merchantIds: [],
                    noticeContent: ''
                },
		remarkLength: 0,
                header:[
                    {
                        label: "",
                        name: "checked",
                        type: "checkbox",
                        click: (status, data, item) => {
                            this.pushTags(status, data, item);
                        }
                    },
                    {
                      label: "商户编号",
                      type: "text",
                      name: "merchantCode"
                    },
                    {
                      label: "商户名称",
                      type: "text",
                      name: "merchantName"
                    },
                ]
            }
        },
        watch:{
            searchMerchantName(){
                this.$delay(()=>{
                    this.getMerchents(1);
                },300)
            }
        },
        methods:{
            inputLength(){
                this.remarkLength = this.add.noticeContent.length;
            },
            checkUserHandler(val){
                this.add.merchantIds = val;
            },
            submitHandler(){
                if(!this.add.noticeName){
                    this.$message.warning('标题不能为空');
                }else if(this.add.merchantIds.length==0){
                    this.$message.warning('商户不能为空');
                }else{
                    this.loading = true;
                    this.$api.systemapi.saveUsingPOST_2({request:{
                        noticeName: this.add.noticeName,
                        merchantIds: this.add.merchantIds,
                        noticeContent: this.add.noticeContent
                    }}).then(res=>{
                        if(res.data.status === 200){
                            this.loading = false;
                            this.$message.success(res.data.msg);
                            this.$router.push('/system/tenant')
                        }else{
                            this.loading = false;
                            this.$message.error(res.data.msg);
                        }
                    }).catch(res=>{
                        this.loading = false;
                        this.$message.error(res.data.msg);
                    });
                }
            },
            batchConfirm() {
                this.dialogVisibleT = false;
                this.merchantTags.forEach(item =>{
                    this.add.merchantIds.push(item.id);
                })
            },
            closeMerchantHandle(deleteId){
                this.add.merchantIds.splice(this.merchantTags.indexOf(deleteId), 1);
                this.merchantTags.splice(this.merchantTags.indexOf(deleteId), 1);
            },
            checkMerchantHandler() {
                this.dialogVisibleT = true;
                this.getMerchents();
            },
            pushTags(status, data, item) {
                let _this = this;
                if (status && item) {
                    this.merchantTags.push(item);
                } else if (status && !item) {
                    this.merchantTags.push(...data);
                }
                if (!status && item) {
                    this.merchantTags = this.merchantTags.filter(tag => {
                        return tag.id != item.id
                    });
                } else if(!status && !item) {
                    let removeFun = function(arr, obj) {
                        let len = arr.length;
                        while(len--) {
                            if (arr[len].id == obj.id) {
                                arr.splice(len, 1);
                            }
                        }
                    }
                    data.forEach(item1 => {
                        removeFun(_this.merchantTags, item1);
                    });                    
                }
            },
            getCurrentPage(pageNum) {
              this.page.pageNum = pageNum;
              this.getMerchents();
            },
            getpageSize(pageSize) {
              this.page.pageSize = pageSize;
              this.getMerchents();
            },
            async getMerchents() {
                 let params = {
                    pageNum: this.page.pageNum,
                    pageSize: this.page.pageSize,
                    status: 1,
                    merchantName: this.searchMerchantName
                }
                const _this = this;
                await this.$api.rentapi.listpgUsingGET_4(params).then(res => {
                    if (res.data.status === 200) {
                        res.data.data.list.forEach(item=>{
                            item.checked = false;
                        });
                        if (_this.merchantTags.length > 0) {
                            res.data.data.list.forEach(item => {
                                _this.merchantTags.forEach(tag => {                                   
                                    if (tag.id == item.id) {
                                        item.checked = true;
                                    }
                                })
                            })                          
                        }
                        this.merchantList = res.data.data;
                    }
                })
            }
        },
        components:{
            ConHead,
            erpTable
        }
    }
</script>

<style scoped>

</style>
