<template>
    <div>
        <con-head title="用户详情"></con-head>
        <con-head>
            <div class="userinfobox">
                <div class="userinfo">
                    <span class="userinfoL">用户名</span>
                    <span class="userinfoR" v-text="addUser.username"></span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">角色</span>
                    <span class="userinfoR" v-for="rolename in addUser.roleSet" v-text="rolename.roleName"></span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">所属部门</span>
                    <span class="userinfoR" v-text="addUser.department.departmentName"></span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">职位</span>
                    <span class="userinfoR" v-text="addUser.position.positionName"></span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">员工姓名</span>
                    <span class="userinfoR" v-text="addUser.realname"></span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">性别</span>
                    <span class="userinfoR" v-text="addUser.sex==1?'男':'女'"></span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">手机号</span>
                    <span class="userinfoR" v-text="addUser.mobile"></span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">邮箱</span>
                    <span class="userinfoR" v-text="addUser.email"></span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">备注</span>
                    <span class="userinfoR" v-text="addUser.remark==''?'无':addUser.remark"></span>
                </div>
            </div>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    export default {
        name: "userinfo",
        data() {
            return {
                addUser:{}
            }
        },
        mounted(){
            this.getUserInfo();
        },
        methods:{
            async getUserInfo(){
                await this.$api.systemapi.getByIdUsingGET({
                    userId:this.$route.params.userid
                }).then(res=>{
                    this.addUser = res.data.data;
                    console.log(123,this.addUser)
                })
            }
        },
        components:{
            ConHead
        }
    }
</script>

<style scoped>
    .userinfobox{
        padding: 20px 60px;
    }
    .userinfo{
        width: 100%;
        margin-bottom: 30px;
    }
    .userinfo .userinfoL{
        width: 80px;
        display: inline-block;
        color: #999;
        font-size: 14px;
    }
    .userinfo .userinfoR{
        color: #666;
        font-size: 16px;
    }
</style>