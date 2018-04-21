<template>
    <header class="top-nav">
        <div class="" style="margin-bottom:0">
            <el-row :gutter="30">
                <el-col :span="4">
                    <router-link tag="li" to="/" class="logobox">企业ERPLOGO</router-link>
                </el-col>
                <el-col :span="16">
                    <el-menu :default-active="menuActiveIndex" class="el-menu-demo" mode="horizontal">
                        <el-menu-item :index="item.path" v-for="(item,$index) in menuList" :key="$index">
                            <router-link :to="item.path" v-text="item.title"></router-link>
                        </el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="4">
                    <div class="message">
                        <span @click="logoutHandler">退出</span>
                    </div>
                    <div class="profile">
                        <router-link tag="li" to="/">
                            <img :src="user.imgLogoUrl">
                            <!--<el-badge value="12">
                                <img :src="user.imgLogoUrl">
                            </el-badge>-->
                        </router-link>
                        <!--<li style="text-align:center;color:#2E3E51;margin-top:-2px;">erp</li>-->
                    </div>
                </el-col>
            </el-row>
        </div>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "erpheader",
        data(){
            return {
                user:{
                    imgLogoUrl:'http://res.rtmap.com/sences/images/20170811/1502434441299.jpg'
                }
            }
        },
        computed:{
            menuList(){
                let menuData = [/*{
                    path:'/',
                    title:'首页'
                },*/{
                    path:'/inner',
                    title:'租务管理'
                },{
                    path:'/finance',
                    title:'财务管理'
                },
                {
                    path:'/rebates',
                    title:'销售返款'
                },{
                    path:'/visual',
                    title:'可视化管理'
                },/*{
                    path:'/webinner',
                    title:'商户价值'
                },*/{
                    path:'/database',
                    title:'数据中心'
                },{
                    path:'/system',
                    title:'系统管理'
                }];
                return menuData
            },
            ...mapGetters({
                menuActiveIndex:'menuActiveIndex'
            })
        },
        methods: {
            logoutHandler(){
                console.log('退出登录');
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .top-nav{
        background: #fff;
        box-shadow: #e2e2e2 0 4px 8px;
        -webkit-box-shadow: #e2e2e2 0 4px 8px;
        margin-bottom: 20px;
        overflow: hidden;
    }
    .logobox{
        margin-left: 30px;
        line-height: 90px;
        text-align: center;
    }
    .loginStep .el-menu .el-menu-item{
        color: #818181;
        font-size: 8px;
        padding: 0 10px;
        margin: 0 5px;
        pointer-events: none;
    }
    .loginStep .el-menu .el-menu-item.is-active{
        color: #000;
    }
    .el-menu{
        background: #fff;
    }
    .el-menu .el-menu-item{
        font-size: 14px;
        height: 90px;
        line-height: 90px;
        padding: 0;
        flex: 1;
        text-align: center;
    }
    .el-menu .el-menu-item.is-active{
        border-bottom: #fff;
    }
    .el-menu .el-menu-item.is-active:after {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: calc(50% - 12px);
        width: 24px;
        height: 2px;
        background: #fe5722;
    }
    .el-menu .el-menu-item a{
        text-decoration: none;
        display: block;
    }
    .el-menu.el-menu-demo{
        display: flex;
    }
    /*.profile,
    .message{
        padding-top: 15px;
        float: right;
        margin-right: 30px;
    }*/
    .profile,
    .message{
        float: right;
        margin-right: 30px;
    }
    .profile{
        width: 48px;
        padding-top: 21px;
    }
    .profile img{
        width: 48px;
        height: 48px;
        border-radius: 50px;
        border: #f2f2f2 solid 2px;
        overflow: hidden;
        max-height: 48px;
        transition: all .15s;
        cursor: pointer;
    }
    .profile img:hover{
        transform: scale(1.2);
    }
    .message{
        text-align: right;
        line-height: 60px;
        font-size: 12px;
        padding-top: 15px;
    }
    .message span{
        cursor: pointer;
        padding: 0 5px;
    }
</style>
