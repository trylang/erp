<template>
    <div class="savebox">
        <div class="savecont">
            <con-head title="查看详情">
                <el-form ref="form" label-width="100px" label-position="left" style="margin:30px 0 0 30px;width:60%">
                    <el-form-item label="标题："><p v-text="dataMsg.noticeName"></p></el-form-item>
                    <el-form-item label="选择商户："><p v-text="dataMsg.merchantId"></p></el-form-item>
                    <el-form-item label="消息内容："><p v-text="dataMsg.noticeContent"></p></el-form-item>
                </el-form>
            </con-head>
        </div>
        <div class="savebtn"><button @click="returnHandler">返回</button></div>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    export default {
        data(){
            return{
                dataMsg:{},
            }
        },
        mounted(){
            this.$api.systemapi.byIdUsingGET_2({id: this.$route.params.id}).then(res=>{
                this.dataMsg = res.data.data;
            }).catch(res=>{
                this.$message.error(res.data.msg);
            })
        },
        methods:{
            returnHandler(){
                this.$router.push('/system/tenant');
            }
        },
        components:{
            ConHead,
        }
    }
</script>

<style scoped>

</style>