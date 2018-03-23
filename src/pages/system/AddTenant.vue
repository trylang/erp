<template>
    <div class="savebox">
        <div class="savecont">
            <con-head :title="aId?'编辑通知':'创建通知'">
                <el-form ref="form" label-width="100px" label-position="left" style="margin:30px 0 0 30px;width:50%">
                    <el-form-item label="标题">
                        <el-input v-model="add.noticeName" placeholder="请输入标题"></el-input>
                    </el-form-item>
                    <el-form-item label="选择商户">
                        <el-select v-model="add.merchantId" placeholder="选择商户">
                            <el-option
                                :label="item.label"
                                :value="item.value"
                                :key="item.id"
                                v-for="item of tenantType">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="消息内容">
                        <el-input type="textarea" v-model="add.noticeContent" placeholder="请输入消息内容"></el-input>
                    </el-form-item>
                </el-form>
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
                add:{
                    noticeName: '',
                    merchantId: '',
                    noticeContent: ''
                },
                tenantType:[
                    {label: '商户A', value: 1},
                    {label: '商户B', value: 2},
                    {label: '商户C', value: 3},
                ]
            }
        },
        computed:{
            aId(){
                return this.$route.params.id || null
            }
        },
        mounted(){
            if(this.aId){
                this.$api.systemapi.byIdUsingGET_2({id:this.aId}).then(res=>{
                    this.add = res.data.data;
                }).catch(res=>{
                    this.$message.error(res.data.msg);
                });
            }else{
                this.add = {};
            }
        },
        methods:{
            submitHandler(){
                if(this.aId){
                    this.$api.systemapi.updateUsingPOST_2({
                        noticeName: this.add.noticeName,
                        merchantId: this.add.merchantId,
                        noticeContent: this.add.noticeContent
                    }).then(res=>{
                        this.$message.success(res.data.msg);
                        this.$router.push('/system/tenant')
                    }).catch(res=>{
                        this.$message.error(res.data.msg);
                    });
                }else{
                    this.$api.systemapi.saveUsingPOST_2({
                        noticeName: this.add.noticeName,
                        merchantIds: this.add.merchantId,
                        noticeContent: this.add.noticeContent
                    }).then(res=>{
                        this.$message.success(res.data.msg);
                        this.$router.push('/system/tenant')
                    }).catch(res=>{
                        this.$message.error(res.data.msg);
                    });
                }
            }
        },
        components:{
            ConHead,
        }
    }
</script>

<style scoped>

</style>