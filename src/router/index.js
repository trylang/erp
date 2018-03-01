import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//主页面
const Home = r => require.ensure([], () => r(require('../pages/Home')),'main');
const Inner = r => require.ensure([], () => r(require('../pages/Web')),'main');
const WebInner = r => require.ensure([], () => r(require('../pages/WebInner')),'main');
//租务管理
const Building = r => require.ensure([], () => r(require('../pages/tenancy/Index')),'tenancy');
const Intention = r => require.ensure([], () => r(require('../pages/tenancy/contract/Index')),'tenancy');
//财务管理
const AccountGroup = r => require.ensure([], () => r(require('../pages/finance/account-group/Index')), 'finance');
const Cost = r => require.ensure([], () => r(require('../pages/finance/cost/Index')), 'finance');
const TakeMargin = r => require.ensure([], () => r(require('../pages/finance/takeMargin/Index')), 'finance');
const CollectEarnest = r => require.ensure([], () => r(require('../pages/finance/collectEarnest/Index')), 'finance');
const CollectDeposit = r => require.ensure([], () => r(require('../pages/finance/collectDeposit/Index')), 'finance');
const PayManagement = r => require.ensure([], () => r(require('../pages/finance/payManagement/Index')), 'finance');
const CollectMoney = r => require.ensure([], () => r(require('../pages/finance/collectMoney/Index')), 'finance');
const TaxRate = r => require.ensure([], () => r(require('../pages/finance/taxRate/Index')), 'finance');
const TaxRate2cost = r => require.ensure([], () => r(require('../pages/finance/taxRate2cost/Index')), 'finance');
const CollectionAccount = r => require.ensure([], () => r(require('../pages/finance/collectionAccount/Index')), 'finance');
const AccountAdjust = r => require.ensure([], () => r(require('../pages/finance/accountAdjust/Index')), 'finance');
const AddAdjustment = r => require.ensure([], () => r(require('../pages/finance/addAdjustment/Index')), 'finance');

const Salmanage = r => require.ensure([], () => r(require('../pages/sales/Index')),'sales');
const Terminal = r => require.ensure([], () => r(require('../pages/rebates/Index')),'rebates');
const Visualization = r => require.ensure([], () => r(require('../pages/visual/Index')),'visual');
const Merchant = r => require.ensure([], () => r(require('../pages/merchant/Index')),'merchant');
const Dataview = r => require.ensure([], () => r(require('../pages/database/Index')),'database');

//系统管理
const Area = r => require.ensure([], () => r(require('../pages/system/Index')),'system');
const Shopping = r => require.ensure([], () => r(require('../pages/system/Shopping')),'system');
const Dept = r => require.ensure([], () => r(require('../pages/system/Dept')),'system');
const Job = r => require.ensure([], () => r(require('../pages/system/Job')),'system');
const User = r => require.ensure([], () => r(require('../pages/system/User')),'system');
const AddUser = r => require.ensure([], () => r(require('../pages/system/AddUser')),'system');
const Role = r => require.ensure([], () => r(require('../pages/system/Role')),'system');
const Log = r => require.ensure([], () => r(require('../pages/system/Log')),'system');
const AddRole = r => require.ensure([], () => r(require('../pages/system/AddRole')),'system');

const router = new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path:'/inner',
            component:Inner,
            redirect:'/inner/building',
            children:[
                {
                    path:'building',
                    name:'inner',
                    component:Building
                },
                {
                    path:'intention',
                    name:'inner',
                    component:Intention
                }
            ]
        },
        {
            path:'/finance',
            component:Inner,
            redirect:'/finance/accountGroup',
            children:[
                {
                    path:'accountGroup',
                    name:'finance',
                    component:AccountGroup
                },
                {
                    path:'cost',
                    name:'finance',
                    component:Cost
                },
                {
                    path:'takeMargin',
                    name:'finance',
                    component:TakeMargin
                },
                {
                    path:'collectDeposit',
                    name:'finance',
                    component:CollectDeposit
                },
                {
                    path:'collectEarnest',
                    name:'finance',
                    component:CollectEarnest
                },
                {
                    path:'payManagement',
                    name:'finance',
                    component:PayManagement
                },
                {
                    path:'collectMoney',
                    name:'finance',
                    component:CollectMoney
                },
                {
                    path:'taxRate',
                    name:'finance',
                    component:TaxRate
                },
                {
                    path:'taxRate2cost',
                    name:'finance',
                    component:TaxRate2cost
                },
                {
                    path:'collectionAccount',
                    name:'finance',
                    component:CollectionAccount
                },
                {
                    path:'accountAdjust',
                    name:'finance',
                    component:AccountAdjust
                },
                {
                    path:'addAdjustment',
                    name:'finance',
                    component:AddAdjustment
                }
            ]
        },
        {
            path:'/sales',
            component:Inner,
            children:[
                {
                    path:'salmanage',
                    component:Salmanage
                }
            ]
        },
        {
            path:'/rebates',
            component:Inner,
            children:[
                {
                    path:'terminal',
                    component:Terminal
                }
            ]
        },
        {
            path:'/visual',
            component:Inner,
            children:[
                {
                    path:'visualization',
                    component:Visualization
                }
            ]
        },
        {
            path:'/webinner',
            component:WebInner,
            redirect:'/webinner/merchant',
            children:[
                {
                    path:'merchant',
                    component:Merchant
                }
            ]
        },
        {
            path:'/database',
            component:Inner,
            children:[
                {
                    path:'dataview',
                    component:Dataview
                }
            ]
        },
        {
            path:'/system',
            component:Inner,
            redirect:'/system/area',
            children:[
                {
                    path:'area',
                    name:'system',
                    component:Area
                },
                {
                    path:'shopping',
                    name:'system',
                    component:Shopping
                },
                {
                    path:'dept',
                    name:'system',
                    component:Dept
                },
                {
                    path:'job',
                    name:'system',
                    component:Job
                },
                {
                    path:'user',
                    name:'system',
                    component:User
                },
                {
                    path:'adduser',
                    name:'system',
                    component:AddUser
                },
                {
                    path:'role',
                    name:'system',
                    component:Role
                },
                {
                    path:'addrole',
                    name:'system',
                    component:AddRole
                },
                {
                    path:'log',
                    name:'system',
                    component:Log
                }
            ]
        }
    ]
});
router.beforeEach((toroute, fromroute, next) => {
    let store = router.app.$options.store,
        _path = toroute.path.match(/\/?[^\/]+/g);
        _path = _path||['/'];
    let enterHandler = ()=>{
        store.commit('MENU_ACTIVE',_path[0])
    };
    enterHandler();
    next();
});
export default router;
