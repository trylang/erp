<template>
    <div class="savebox" v-loading.fullscreen="loading">
        <div class="savecont">
            <con-head title="编辑密码"></con-head>
            <el-row class="commonbox" style="min-height: 500px;">
                <el-col :span="12" class="dialogbox" style="margin-top: 30px;">
                    <div class="dialoginput">
                        <span class="inputname" style="width: 90px;">新密码</span>
                        <input class="inputtext" type="password" maxlength="10" placeholder="请输入新密码" v-model="newPassword">
                    </div>
                    <div class="dialoginput">
                        <span class="inputname" style="width: 90px;">确认新密码</span>
                        <input class="inputtext" type="password" maxlength="10" placeholder="请输入新密码" v-model="confirmNewPassword">
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="savebtn"><button @click="resetPassword()">提交</button></div>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    export default {
        name: "add-role",
        data() {
            return {
                loading: false,
                newPassword:'',
                confirmNewPassword:'',
            };
        },
        mounted(){
        },
        methods:{
            async resetPassword(){
                if(this.newPassword=='' && this.confirmNewPassword=='') {
                    this.$message.error('密码不能为空！');
                    return false;
                }
                if(this.newPassword != this.confirmNewPassword) {
                    this.$message.error('两次密码不一致！');
                    return false;
                }
                this.loading = true;
                await this.$api.systemapi.adminResetPasswordUsingPUT({
                    newPassword: this.newPassword,
                    repeatNewPassword: this.confirmNewPassword,
                    validationCode: '123456',
                    userId: this.$userInfo.userId
                }).then(res=>{
                    if(res.data.status == 200){
                        this.loading = false;
                        this.$message.success(res.data.msg);
                        window.localStorage.removeItem('erp_token');
                        this.$router.push({path: '/login'})
                    }else{
                        this.loading = false;
                        this.$message.error(res.data.msg);
                    }
                }).catch(res=>{
                    this.loading = false;
                });

            }
        },
        components:{
            ConHead
        }
    }
</script>

<style scoped>
    .treetitle{
        padding: 5px 10px;
    }
    .treecontent{
        border: 1px solid #e5e5e5;
        padding: 10px;
    }
</style>