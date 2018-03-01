<template>
    <div>
        <footer>
            <a href="http://www.rtmap.com/" target="_blank">关于智慧图</a>
            <router-link :to="item.path" v-for="(item,index) in menuData" v-text="item.name" :key="index"></router-link>
            <p style="margin-bottom:0;">
                2013 北京智慧图科技有限责任公司 | 京ICP：13002694号-1 | 京公安网安备：11010802013753号
                <br>
                北京智慧图科技有限责任公司
            </p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "erpfooter",
        data(){
            return{
                menuData: [{
                    path: '/protocol',
                    name: '用户协议',
                },
                {
                    path: '/contact',
                    name: '联系我们',
                }],
            }
        }
    }
</script>

<style scoped>
    .fixed{
        width: 100%;
        min-width: 1190px;
        position: fixed;
        bottom: 0;
        left: 0;
    }
    footer{
        color: #666;
        background: #fff;
        border-top: #ccc solid 1px;
        line-height: 14px;
        padding: 5px 0;
        margin-top: 20px;
        text-align: center;
    }
    footer a{
        line-height: 40px;
        margin: 0 5px;
        color: #20a0ff;
        text-decoration: none;
    }
    footer p{
        line-height: 20px;
    }
</style>