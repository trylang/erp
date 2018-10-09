<template>
    <header class="top-nav">
        <div class="navbox" style="margin-bottom:0">
            <el-row :gutter="30">
                <el-col :span="18">
                    <el-menu :default-active="menuActiveIndex" class="el-menu-demo" mode="horizontal" router>
                        <el-menu-item :index="item.path" v-for="(item,$index) in menuList" :key="$index">
                            <router-link :to="item.path" v-text="item.title"></router-link>
                        </el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="6">
                    <div class="message">
                        <span @click="logoutHandler">退出</span>
                    </div>
                    <div class="profile">
                        <!--<img src="../assets/touxiang.png" style="cursor: auto">-->
                        <router-link tag="li" to="/system/password">
                            <img src="../assets/touxiang.png">
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
                    imgLogoUrl:'../assets/logo.png'
                }
            }
        },
        computed:{
            menuList(){
              let menus=this.$root.menus
                let menuData = [/*{
                    path:'/',
                    title:'首页'
                },*/{
                    path:'/inner',
                    title:'租务管理'
                },{
                    path:'/finance',
                    title:'财务管理'
                },/*{
                    path:'/sales',
                    title:'销售管理'
                },*/{
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
                let filterData=menuData.filter(item=>{
                  return menus.indexOf(item.path)>=0
                })
                return filterData
            },
            ...mapGetters(['menuActiveIndex'])
        },
        methods: {
            logoutHandler(){
              this.$api.systemapi.logoutUsingGET().then(
                res=>{
                  if (res.data.status==200) {
                    window.localStorage.removeItem('erp_token');
                    this.$router.push({path: '/login'})
                  } else {
                       this.$message.error(res.data.msg);

                  }
                }
              )
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
        position: fixed;
        top:0;
        right: 0;
        left: 240px;
        z-index: 1500;
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
        /*flex: 1;*/
        text-align: center;
        width: 20%;
        flex-shrink: 1;
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
