<template>
    <div class="savebox">
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
                            <el-select v-model="add.merchantIds" multiple placeholder="请选择商户" class="dialogselect" @change="checkUserHandler">
                                <el-option label="商户编号" value="0" disabled>
                                    <span style="float: left">商户编号</span>
                                    <span style="float:right;color:#8492a6;font-size:13px;margin-right:15px">商户名称</span>
                                </el-option>
                                <el-option
                                    v-for="item in options"
                                    :key="item.id"
                                    :label="item.merchantName"
                                    :value="item.merchantCode">
                                    <span style="float: left">{{ item.merchantCode }}</span>
                                    <span style="float:right;color:#8492a6;font-size:13px;margin-right:15px">{{ item.merchantName }}</span>
                                </el-option>
                            </el-select>
                        </div>
                        <div class="dialoginput">
                            <span class="inputname" style="line-height:40px;">消息内容</span>
                            <input class="inputtext" type="text" style="height:40px;" placeholder="请输入消息内容" v-model="add.noticeContent">
                        </div>
                    </el-col>
                </el-row>
            </con-head>
        </div>
        <div class="savebtn"><button @click="submitHandler">提交</button></div>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    export default {
        data(){
            return{
                options:[],
                add:{
                    noticeName: '',
                    merchantIds: [],
                    noticeContent: ''
                }
            }
        },
        mounted(){
            this.$api.rentapi.listUsingGET_11({status:4}).then(res=>{
                this.options = res.data.data;
            }).catch(res=>{
                this.$message.error(res.data.msg);
            });
        },
        methods:{
            checkUserHandler(val){
                this.add.merchantIds = val;
            },
            submitHandler(){
                if(!this.add.noticeName){
                    this.$message.warning('标题不能为空');
                }else if(this.add.merchantIds.length==0){
                    this.$message.warning('商户不能为空');
                }else{
                    this.$api.systemapi.saveUsingPOST_2({
                        noticeName: this.add.noticeName,
                        merchantIds: this.add.merchantIds,
                        noticeContent: this.add.noticeContent
                    }).then(res=>{
                        this.$message.success(res.data.msg);
                        this.$router.push('/system/tenant')
                    }).catch(res=>{
                        this.$message.error(res.data.msg);
                    });
                }
            },
        },
        components:{
            ConHead,
        }
    }
</script>

<style scoped>

</style>