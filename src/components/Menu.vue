<template>
    <div class="sub-menu">
        <el-menu :default-active="$route.path"
                 :default-openeds="menuOpeneds"
                 class="el-menu-vertical-demo"
                 router>
            <menu-item v-for="(item,index) in menu" :item="item" :index="index" :key="index"></menu-item>
        </el-menu>
    </div>
</template>

<script>
    import MenuItem from '../components/MenuItem'
    export default {
        name: "erpmenu",
        data(){
            return{
                menuOpeneds:['0'],
            }
        },
        computed:{
            menu(){
                let menuData = {
                    tenancy:[{
                        title:'资产管理',
                        children:[
                            {
                                path:'/inner/building',
                                title:'楼宇类型'
                            },
                            {
                                path:'/inner/floormanage',
                                title:'楼宇管理'
                            },
                            {
                                path:'/inner/unit',
                                title:'单元管理'
                            },
                            {
                                path:'/inner/site',
                                title:'场地管理'
                            },
                            {
                                path:'/inner/adtype',
                                title:'广告位类型'
                            },
                            {
                                path:'/inner/admanage',
                                title:'广告位管理'
                            },
                            {
                                path:'/inner/office',
                                title:'写字楼管理'
                            }
                        ]
                    },
                    {
                        title:'招商资源管理',
                        children:[
                            {
                                path:'/inner/operation',
                                title:'业态管理'
                            },
                            {
                                path:'/inner/brand',
                                title:'品牌管理'
                            },
                            {
                                path:'/inner/merchants',
                                title:'商户管理'
                            },
                            {
                                path:'/inner/shop',
                                title:'店铺管理'
                            },
                            {
                                path:'/inner/group',
                                title:'货品组别管理'
                            },
                            {
                                path:'/inner/goods',
                                title:'货品管理'
                            }
                        ]
                    },
                    {
                        title:'合同管理',
                        children:[
                            {
                                path:'/inner/intention',
                                title:'意向合同管理'
                            }
                        ]
                    }],
                    finance:[{
                        title:'基础设置',
                        children:[
                            {
                                path:'/finance/accountGroup',
                                title:'结算组别'
                            },
                            {
                                path:'/finance/taxRate',
                                title:'税率设置'
                            },
                            {
                                path:'/finance/cost',
                                title:'合同费用项目'
                            },
                            {
                                path:'/finance/taxRate2cost',
                                title:'费用项目税率应用'
                            },
                                                        {
                                path:'/finance/collectionAccount',
                                title:'收款账户'
                            }
                        ]
                    },
                    {
                        title:'履约保证金管理',
                        children:[
                            {
                                path:'/finance/takeMargin',
                                title:'履约保证金收取'
                            },
                            {
                                path:'/finance/contractMargin',
                                title:'合同履约保证金'
                            },
                            {
                                path:'/finance/dealMargin',
                                title:'履约保证金处理'
                            }
                        ]
                    }, {
                        title:'预付款管理',
                        children:[
                            {
                                path:'/finance/takeadvancePay',
                                title:'预付款收取'
                            },
                            {
                                path:'/finance/merchantAdvancePay',
                                title:'商户预付款'
                            },
                            {
                                path:'/finance/dealAdvancePay',
                                title:'预付款处理'
                            }
                        ]
                    }, {
                        title:'不规则费用',
                        children:[
                            {
                path: "/finance/irregularCost",
                                title:'不规则费用管理'
                            },
                            {
                                path:'/finance/importIrregularCost',
                                title:'不规则费用导入'
                            }
                        ]
                    }, {
                        title:'费用调整管理',
                        children:[
                            {
                                path:'/finance/costAdjust',
                                title:'费用调整'
                            }
                        ]
                    }, {
                        title:'免租管理',
                        children:[
                            {
                                path:'/finance/rentFree',
                                title:'免租管理'
                            }
                        ]
                    }, {
            title: "结算单管理",
                        children:[
                            {
                                path:'/finance/generateAccount',
                title: '账单生成'
                            },
                            {
                                path:'/finance/accountManagement',
                title: '结算单管理'
              },
              {
                path: '/finance/billGeneration',
                title: '账单生成任务'
                            }
                        ]
                    }, {
                        title:'结算单调整',
                        children:[
                            {
                                path:'/finance/accountAdjustType',
                                title:'结算单调整类型'
                            },
                            {
                                path:'/finance/accountAdjust',
                                title:'结算单调整'
                            }
                        ]
                    }, {
                        title:'收款管理',
                        children:[
                            {
                                path:'/finance/payManagement',
                                title:'收款管理'
                            }
                        ]
                    }],
                    sales:[{
                        title:'资产管理',
                        children:[
                            {
                                path:'/inner/building',
                                title:'楼宇管理'
                            }
                        ]
                    },
                    {
                        title:'招商资源管理',
                        children:[
                            {
                                path:'/',
                                title:'物业性质'
                            }
                        ]
                    }],
                    rebates:[{
                        title:'资产管理',
                        children:[
                            {
                                path:'/inner/building',
                                title:'楼宇管理'
                            }
                        ]
                    },
                    {
                        title:'招商资源管理',
                        children:[
                            {
                                path:'/',
                                title:'物业性质'
                            }
                        ]
                    }],
                    visual:[{
                        title:'资产管理',
                        children:[
                            {
                                path:'/inner/building',
                                title:'楼宇管理'
                            }
                        ]
                    },
                    {
                        title:'招商资源管理',
                        children:[
                            {
                                path:'/',
                                title:'物业性质'
                            }
                        ]
                    }],
                    merchant:[{
                        title:'资产管理',
                        children:[
                            {
                                path:'/inner/building',
                                title:'楼宇管理'
                            }
                        ]
                    },
                    {
                        title:'招商资源管理',
                        children:[
                            {
                                path:'/',
                                title:'物业性质'
                            }
                        ]
                    }],
                    database:[{
                        title:'资产管理',
                        children:[
                            {
                                path:'/inner/building',
                                title:'楼宇管理'
                            }
                        ]
                    },
                    {
                        title:'招商资源管理',
                        children:[
                            {
                                path:'/',
                                title:'物业性质'
                            }
                        ]
                    },
                    {
                        title:'合同管理',
                        children:[
                            {
                                path:'/',
                                title:'意向合同管理'
                            }
                        ]
                    }],
                    system:[{
                        title:'组织管理',
                        children:[
                            {
                                path:'/system/area',
                                title:'区域管理'
                            },
                            {
                                path:'/system/shopping',
                                title:'购物中心'
                            },
                            {
                                path:'/system/dept',
                                title:'部门管理'
                            },
                            {
                                path:'/system/job',
                                title:'职位管理'
                            }
                        ]
                    },
                    {
                        title:'权限管理',
                        children:[
                            {
                                path:'/system/user',
                                title:'用户管理'
                            },
                            {
                                path:'/system/role',
                                title:'角色管理'
                            }
                        ]
                    },{
                        title:'数据字典管理',
                        children:[
                            {
                                path:'/system/dictionary',
                                title:'数据字典管理'
                            }
                        ]
                    },{
                        title:'操作日志',
                        children:[
                            {
                                path:'/system/log',
                                title:'操作日志'
                            }
                        ]
                    }]

                };
                switch(this.$store.state.common.menuActiveIndex){
                    case '/inner':
                        return  menuData.tenancy;
                        break;
                    case '/finance':
                        return  menuData.finance;
                        break;
                    case '/sales':
                        return  menuData.sales;
                        break;
                    case '/rebates':
                        return  menuData.rebates;
                        break;
                    case '/visual':
                        return  menuData.visual;
                        break;
                    case '/webinner':
                        return  menuData.merchant;
                        break;
                    case '/database':
                        return  menuData.database;
                        break;
                    case '/system':
                        return  menuData.system;
                        break;
                };
            }
        },
        created(){
        },
        methods:{
        },
        components:{
            MenuItem
        },
        watch: {
            '$route': function (to, from){
                let _topath = to.path.match(/\/?[^\/]+/g);
                let _frompath = from.path.match(/\/?[^\/]+/g);
                if(_topath[0] !== _frompath[0]){
                    this.menuOpeneds = ['0']
                }
            }
        }
    }
</script>

<style scoped>
    div.sub-menu{
        overflow: hidden;
    }
    .el-menu .el-menu-item {
        font-size: 1em;
        height: 45px;
        line-height: 45px;
    }
</style>