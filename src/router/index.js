import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//主页面
const Home = r => require.ensure([], () => r(require('../pages/Home')), 'main');
const Inner = r => require.ensure([], () => r(require('../pages/Web')), 'main');
const BlankPage = r => require.ensure([], () => r(require('../pages/Blank')), 'main');
//租务管理
//1.资产管理
const Building = r => require.ensure([], () => r(require('../pages/tenancy/assets/Index')), 'assets');
const FloorManage = r => require.ensure([], () => r(require('../pages/tenancy/assets/FloorManage')), 'assets');
const Unit = r => require.ensure([], () => r(require('../pages/tenancy/assets/Unit')), 'assets');
const AddUnit = r => require.ensure([], () => r(require('../pages/tenancy/assets/AddUnit')), 'assets');
const Site = r => require.ensure([], () => r(require('../pages/tenancy/assets/Site')), 'assets');
const AdType = r => require.ensure([], () => r(require('../pages/tenancy/assets/AdType')), 'assets');
const AdManage = r => require.ensure([], () => r(require('../pages/tenancy/assets/AdManage')), 'assets');
const Office = r => require.ensure([], () => r(require('../pages/tenancy/assets/Office')), 'assets');
//2.招商投资管理
const Operation = r => require.ensure([], () => r(require('../pages/tenancy/merchants/Index')), 'merchants');
const Brand = r => require.ensure([], () => r(require('../pages/tenancy/merchants/Brand')), 'merchants');
const Merchants = r => require.ensure([], () => r(require('../pages/tenancy/merchants/Merchant')), 'merchants');
const AddMerchant = r => require.ensure([], () => r(require('../pages/tenancy/merchants/AddMerchant')), 'merchants');
const Shop = r => require.ensure([], () => r(require('../pages/tenancy/merchants/Shop')), 'merchants');
const Group = r => require.ensure([], () => r(require('../pages/tenancy/merchants/Group')), 'merchants');
const Goods = r => require.ensure([], () => r(require('../pages/tenancy/merchants/Goods')), 'merchants');
//3.合同管理
const Intention = r => require.ensure([], () => r(require('../pages/tenancy/contract/Index')), 'contract');
const Contract = r => require.ensure([], () => r(require('../pages/tenancy/contract/IndexAdd')), 'contract');
const Shops = r => require.ensure([], () => r(require('../pages/tenancy/contract/Shops')), 'contract');
const AddShops = r => require.ensure([], () => r(require('../pages/tenancy/contract/ShopsAdd')), 'contract');
const Field = r => require.ensure([], () => r(require('../pages/tenancy/contract/Field')), 'contract');
const AddField = r => require.ensure([], () => r(require('../pages/tenancy/contract/FieldAdd')), 'contract');
const AdPosition = r => require.ensure([], () => r(require('../pages/tenancy/contract/AdPosition')), 'contract');
const AddAdPosition = r => require.ensure([], () => r(require('../pages/tenancy/contract/AddAdPosition')), 'contract');
const cOffice = r => require.ensure([], () => r(require('../pages/tenancy/contract/Office')), 'contract');
const AddOffice = r => require.ensure([], () => r(require('../pages/tenancy/contract/AddOffice')), 'contract');
//财务管理
const AccountGroup = r => require.ensure([], () => r(require('../pages/finance/account-group/Index')), 'finance');
const Cost = r => require.ensure([], () => r(require('../pages/finance/cost/Index')), 'finance');
const TakeMargin = r => require.ensure([], () => r(require('../pages/finance/takeMargin/Index')), 'finance');
const CollectEarnest = r => require.ensure([], () => r(require('../pages/finance/collectEarnest/Index')), 'finance');
const CollectDeposit = r => require.ensure([], () => r(require('../pages/finance/collectDeposit/Index')), 'finance');
const PayManagement = r => require.ensure([], () => r(require('../pages/finance/payManagement/Index')), 'finance');
const PayManagementDetail = r => require.ensure([], () => r(require('../pages/finance/payManagement/Detail')), 'finance');
const CollectMoney = r => require.ensure([], () => r(require('../pages/finance/collectMoney/Index')), 'finance');
const TaxRate = r => require.ensure([], () => r(require('../pages/finance/taxRate/Index')), 'finance');
const TaxRate2cost = r => require.ensure([], () => r(require('../pages/finance/taxRate2cost/Index')), 'finance');
const CollectionAccount = r => require.ensure([], () => r(require('../pages/finance/collectionAccount/Index')), 'finance');
const AccountAdjust = r => require.ensure([], () => r(require('../pages/finance/accountAdjust/Index')), 'finance');
const AddAdjustment = r => require.ensure([], () => r(require('../pages/finance/addAdjustment/Index')), 'finance');
const ContractMargin = r => require.ensure([], () => r(require('../pages/finance/contractMargin/Index')), 'finance');
const DealMargin = r => require.ensure([], () => r(require('../pages/finance/dealMargin/Index')), 'finance');
const TakeadvancePay = r => require.ensure([], () => r(require('../pages/finance/TakeadvancePay/Index')), 'finance');
const MerchantAdvancePay = r => require.ensure([], () => r(require('../pages/finance/MerchantAdvancePay/Index')), 'finance');
const DealAdvancePay = r => require.ensure([], () => r(require('../pages/finance/dealAdvancePay/Index')), 'finance');
const Entering = r => require.ensure([], () => r(require('../pages/finance/entering/Index')), 'finance');
const IrregularCost = r => require.ensure([], () => r(require('../pages/finance/IrregularCost/Index')), 'finance');
const CostAdjust = r => require.ensure([], () => r(require('../pages/finance/costAdjust/Index')), 'finance');
const AddCostAdjust = r => require.ensure([], () => r(require('../pages/finance/addCostAdjust/Index')), 'finance');
const RentFree = r => require.ensure([], () => r(require('../pages/finance/rentFree/Index')), 'finance');
const AddRentFree = r => require.ensure([], () => r(require('../pages/finance/addRentFree/Index')), 'finance');
const GenerateAccount = r => require.ensure([], () => r(require('../pages/finance/generateAccount/Index')), 'finance');
const AccountManagement = r => require.ensure([], () => r(require('../pages/finance/accountManagement/Index')), 'finance');
const AccountAdjustType = r => require.ensure([], () => r(require('../pages/finance/accountAdjustType/Index')), 'finance');
const ImportIrregularCost = r => require.ensure([], () => r(require('../pages/finance/importIrregularCost/Index')), 'finance');
const BillGeneration = r => require.ensure([], () => r(require('../pages/finance/billGeneration')), 'finance');

//销售管理
const Salmanage = r => require.ensure([], () => r(require('../pages/sales/Index')), 'sales');
//销售返款
const Terminal = r => require.ensure([], () => r(require('../pages/rebates/Index')), 'rebates');
const Poundage = r => require.ensure([], () => r(require('../pages/rebates/Poundage')), 'rebates');
const ZhxNumber = r => require.ensure([], () => r(require('../pages/rebates/ZhxNumber')), 'rebates');
const Account = r => require.ensure([], () => r(require('../pages/rebates/Account')), 'rebates');
const Upload = r => require.ensure([], () => r(require('../pages/rebates/Upload')), 'rebates');
const TaskCenter = r => require.ensure([], () => r(require('../pages/rebates/TaskCenter')), 'rebates');
const Bank = r => require.ensure([], () => r(require('../pages/rebates/Bank')), 'rebates');

const Visualization = r => require.ensure([], () => r(require('../pages/visual/Index')), 'visual');
const Merchant = r => require.ensure([], () => r(require('../pages/merchant/Index')), 'merchant');
const Dataview = r => require.ensure([], () => r(require('../pages/database/Index')), 'database');

//系统管理
const Area = r => require.ensure([], () => r(require('../pages/system/Index')), 'system');
const Shopping = r => require.ensure([], () => r(require('../pages/system/Shopping')), 'system');
const Dept = r => require.ensure([], () => r(require('../pages/system/Dept')), 'system');
const Job = r => require.ensure([], () => r(require('../pages/system/Job')), 'system');
const User = r => require.ensure([], () => r(require('../pages/system/User')), 'system');
const UserInfo = r => require.ensure([], () => r(require('../pages/system/UserInfo')), 'system');
const AddUser = r => require.ensure([], () => r(require('../pages/system/AddUser')), 'system');
const Role = r => require.ensure([], () => r(require('../pages/system/Role')), 'system');
const Dictionary = r => require.ensure([], () => r(require('../pages/system/Dictionary')), 'system');
const Log = r => require.ensure([], () => r(require('../pages/system/Log')), 'system');
const AddRole = r => require.ensure([], () => r(require('../pages/system/AddRole')), 'system');

const router = new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/inner',
            component: Inner,
            redirect: '/inner/building',
            children: [
                {
                    path: 'building',
                    component: Building
                },
                {
                    path: 'floormanage',
                    component: FloorManage
                },
                {
                    path: 'unit',
                    component: Unit
                },
                {
                    path: 'addunit',
                    component: AddUnit
                },
                {
                    path: 'site',
                    component: Site
                },
                {
                    path: 'adtype',
                    component: AdType
                },
                {
                    path: 'admanage',
                    component: AdManage
                },
                {
                    path: 'office',
                    component: Office
                },
                {
                    path: 'operation',
                    component: Operation
                },
                {
                    path: 'brand',
                    component: Brand
                },
                {
                    path: 'merchants',
                    component: Merchants
                },
                {
                    path: 'addmerchant',
                    component: AddMerchant
                },
                {
                    path: 'shop',
                    component: Shop
                }, {
                    path: 'group',
                    component: Group
                },
                {
                    path: 'goods',
                    component: Goods
                },
                {
                    path: 'intention',
                    component: Intention
                },
                {
                    path: 'addcontract',
                    component: Contract
                },
                {
                    path: 'shops',
                    component: Shops
                },
                {
                    path: 'addshops',
                    component: AddShops
                },
                {
                    path: 'field',
                    component: Field
                },
                {
                    path: 'addfidle',
                    component: AddField
                },
                {
                    path: 'adposition',
                    component: AdPosition
                },
                {
                    path: 'addadposition',
                    component: AddAdPosition
                },
                {
                    path: 'coffice',
                    component: cOffice
                },
                {
                    path: 'addoffice',
                    component: AddOffice
                }
            ]
        },
        {
            path: '/finance',
            component: Inner,
            redirect: '/finance/accountGroup',
            children: [
                {
                    path: 'accountGroup',
                    component: AccountGroup
                },
                {
                    path: 'cost',
                    component: Cost
                },
                {
                    path: 'takeMargin',
                    component: TakeMargin
                },
                {
                    path: 'takeMargin/collectDeposit',
                    component: CollectDeposit
                },
                {
                    path: 'takeMargin/collectEarnest',
                    component: CollectEarnest
                },
                {
                    path: 'payManagement',
                    component: PayManagement
                },
                {
                    path: 'payManagement/id/:payManagement_id',
                    component: PayManagementDetail
                },
                {
                    path: 'payManagement/collectMoney',
                    component: CollectMoney
                },
                {
                    path: 'taxRate',
                    component: TaxRate
                },
                {
                    path: 'taxRate2cost',
                    component: TaxRate2cost
                },
                {
                    path: 'collectionAccount',
                    component: CollectionAccount
                },
                {
                    path: 'accountAdjust',
                    component: AccountAdjust
                },
                {
                    path: 'accountAdjust/addAdjustment',
                    component: AddAdjustment
                },
                {
                    path: 'contractMargin',
                    component: ContractMargin
                },
                {
                    path: 'dealMargin',
                    component: DealMargin
                },
                {
                    path: 'takeadvancePay',
                    component: TakeadvancePay
                },
                {
                    path: 'merchantAdvancePay',
                    component: MerchantAdvancePay
                },
                {
                    path: 'dealAdvancePay',
                    component: DealAdvancePay
                },
                {
                    path: 'irregularCost',
                    component: IrregularCost
                },
                {
                    path: 'irregularCost/entering',
                    component: Entering
                }, {
                    path: 'costAdjust',
                    component: CostAdjust
                }, {
                    path: 'costAdjust/addCostAdjust',
                    component: AddCostAdjust
                }, {
                    path: 'rentFree',
                    component: RentFree
                }, {
                    path: 'rentFree/addRentFree',
                    component: AddRentFree
                }, {
                    path: 'generateAccount',
                    component: GenerateAccount
                }, {
                    path: 'accountManagement',
                    component: AccountManagement
                }, {
                    path: 'billGeneration',
                    component: BillGeneration
                }, {
                    path: 'accountAdjustType',
                    component: AccountAdjustType
                }, {
                    path: 'importIrregularCost',
                    component: ImportIrregularCost
                },{
                    path: 'billGeneration ',
                    component: BillGeneration 
                }
            ]
        },
        {
            path: '/sales',
            component: Inner,
            children: [
                {
                    path: 'salmanage',
                    component: Salmanage
                }
            ]
        },
        {
            path: '/rebates',
            component: Inner,
            redirect: '/rebates/terminal',
            children: [
                {
                    path: 'terminal',
                    component: Terminal
                },
                {
                    path: 'poundage',
                    component: Poundage
                },
                {
                    path: 'zhxnumber',
                    component: ZhxNumber
                },
                {
                    path: 'account',
                    component: Account
                },
                {
                    path: 'upload',
                    component: Upload
                },
                {
                    path: 'bank',
                    component: Bank
                },
                {
                    path: 'taskcenter',
                    component: TaskCenter
                }
            ]
        },
        {
            path: '/visual',
            component: Inner,
            children: [
                {
                    path: 'visualization',
                    component: Visualization
                }
            ]
        },
        {
            path: '/webinner',
            component: BlankPage,
            redirect: '/webinner/merchant',
            children: [
                {
                    path: 'merchant',
                    component: Merchant
                }
            ]
        },
        {
            path: '/database',
            component: Inner,
            children: [
                {
                    path: 'dataview',
                    component: Dataview
                }
            ]
        },
        {
            path: '/system',
            component: Inner,
            redirect: '/system/area',
            children: [
                {
                    path: 'area',
                    component: Area
                },
                {
                    path: 'shopping',
                    component: Shopping
                },
                {
                    path: 'dept',
                    component: Dept
                },
                {
                    path: 'job',
                    component: Job
                },
                {
                    path: 'user',
                    component: User
                },
                {
                    path: 'userinfo/:userid',
                    component: UserInfo
                },
                {
                    path: 'adduser',
                    component: AddUser
                },
                {
                    path: 'role',
                    component: Role
                },
                {
                    path: 'addrole',
                    component: AddRole
                },
                {
                    path: 'dictionary',
                    component: Dictionary
                },
                {
                    path: 'log',
                    component: Log
                }
            ]
        }
    ]
});
router.beforeEach((toroute, fromroute, next) => {
    let store = router.app.$options.store,
        _path = toroute.path.match(/\/?[^\/]+/g);
    _path = _path || ['/'];
    let enterHandler = () => {
        store.commit('MENU_ACTIVE', _path[0])
    };
    enterHandler();
    next();
});
export default router;
