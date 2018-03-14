<template>
    <div>
        <con-head title="用户详情"></con-head>
        <con-head>
            <div class="userinfobox">
                <div class="userinfo">
                    <span class="userinfoL">用户名</span>
                    <span class="userinfoR">张三</span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">角色</span>
                    <span class="userinfoR">西单管理员</span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">所属部门</span>
                    <span class="userinfoR">研策部</span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">职位</span>
                    <span class="userinfoR">经理</span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">员工姓名</span>
                    <span class="userinfoR">张三</span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">性别</span>
                    <span class="userinfoR">男</span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">手机号</span>
                    <span class="userinfoR">18000000000</span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">邮箱</span>
                    <span class="userinfoR">123456789@qq.com</span>
                </div>
                <div class="userinfo">
                    <span class="userinfoL">备注</span>
                    <span class="userinfoR">无</span>
                </div>
            </div>
        </con-head>
    </div>
</template>

<script>
    import ConHead from '../../components/ConHead'
    export default {
        name: "userinfo",
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