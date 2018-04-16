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
const UnitAudit = r => require.ensure([], () => r(require('../pages/tenancy/assets/UnitAudit')), 'assets');
const AddUnit = r => require.ensure([], () => r(require('../pages/tenancy/assets/AddUnit')), 'assets');
const Site = r => require.ensure([], () => r(require('../pages/tenancy/assets/Site')), 'assets');
const SiteAudit = r => require.ensure([], () => r(require('../pages/tenancy/assets/SiteAudit')), 'assets');
const AdType = r => require.ensure([], () => r(require('../pages/tenancy/assets/AdType')), 'assets');
const AdManage = r => require.ensure([], () => r(require('../pages/tenancy/assets/AdManage')), 'assets');
const AdAudit = r => require.ensure([], () => r(require('../pages/tenancy/assets/AdAudit')), 'assets');
const Office = r => require.ensure([], () => r(require('../pages/tenancy/assets/Office')), 'assets');
const OfficeAudit = r => require.ensure([], () => r(require('../pages/tenancy/assets/OfficeAudit')), 'assets');
//2.招商投资管理
const Operation = r => require.ensure([], () => r(require('../pages/tenancy/merchants/Index')), 'merchants');
const Brand = r => require.ensure([], () => r(require('../pages/tenancy/merchants/Brand')), 'merchants');
const BrandAudit = r => require.ensure([], () => r(require('../pages/tenancy/merchants/BrandAudit')), 'merchants');
const Merchants = r => require.ensure([], () => r(require('../pages/tenancy/merchants/Merchant')), 'merchants');
const MerchantDetail = r => require.ensure([], () => r(require('../pages/tenancy/merchants/MerchantDetail')), 'merchants');
const MerchantAudit = r => require.ensure([], () => r(require('../pages/tenancy/merchants/MerchantAudit')), 'merchants');
const AddMerchant = r => require.ensure([], () => r(require('../pages/tenancy/merchants/AddMerchant')), 'merchants');
const Shop = r => require.ensure([], () => r(require('../pages/tenancy/merchants/Shop')), 'merchants');
const ShopAudit = r => require.ensure([], () => r(require('../pages/tenancy/merchants/ShopAudit')), 'merchants');
const AddShop = r => require.ensure([], () => r(require('../pages/tenancy/merchants/AddShop')), 'merchants');
const Group = r => require.ensure([], () => r(require('../pages/tenancy/merchants/Group')), 'merchants');
const Goods = r => require.ensure([], () => r(require('../pages/tenancy/merchants/Goods')), 'merchants');
//3.合同管理
const Intention = r => require.ensure([], () => r(require('../pages/tenancy/contract/Index')), 'contract');
const IntentionAudit = r => require.ensure([], () => r(require('../pages/tenancy/contract/IndexAudit')), 'contract');
const Contract = r => require.ensure([], () => r(require('../pages/tenancy/contract/IndexAdd')), 'contract');
const Shops = r => require.ensure([], () => r(require('../pages/tenancy/contract/Shops')), 'contract');
const ShopsAudit = r => require.ensure([], () => r(require('../pages/tenancy/contract/ShopsAudit')), 'contract');
const AddShops = r => require.ensure([], () => r(require('../pages/tenancy/contract/ShopsAdd')), 'contract');
const ShopsInfo = r => require.ensure([], () => r(require('../pages/tenancy/contract/ShopsInfo')), 'contract');
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
const TakeMarginDetail = r => require.ensure([], () => r(require('../pages/finance/takeMargin/Detail')), 'finance');
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
const AdjustmentDetail = r => require.ensure([], () => r(require('../pages/finance/accountAdjust/Detail')), 'finance');
const ContractMargin = r => require.ensure([], () => r(require('../pages/finance/contractMargin/Index')), 'finance');
const DealMargin = r => require.ensure([], () => r(require('../pages/finance/dealMargin/Index')), 'finance');
const TakeadvancePay = r => require.ensure([], () => r(require('../pages/finance/takeadvancePay/Index')), 'finance');
const MerchantAdvancePay = r => require.ensure([], () => r(require('../pages/finance/merchantAdvancePay/Index')), 'finance');
const DealAdvancePay = r => require.ensure([], () => r(require('../pages/finance/dealAdvancePay/Index')), 'finance');
const Entering = r => require.ensure([], () => r(require('../pages/finance/entering/Index')), 'finance');
const IrregularCost = r => require.ensure([], () => r(require('../pages/finance/IrregularCost/Index')), 'finance');
const IrregularCostDetail = r => require.ensure([], () => r(require('../pages/finance/IrregularCost/Detail')), 'finance');
const CostAdjust = r => require.ensure([], () => r(require('../pages/finance/costAdjust/Index')), 'finance');
const CostAdjustDetail = r => require.ensure([], () => r(require('../pages/finance/costAdjust/Detail')), 'finance');
const AddCostAdjust = r => require.ensure([], () => r(require('../pages/finance/addCostAdjust/Index')), 'finance');
const RentFree = r => require.ensure([], () => r(require('../pages/finance/rentFree/Index')), 'finance');
const RentFreeDetail = r => require.ensure([], () => r(require('../pages/finance/rentFree/Detail')), 'finance');
const AddRentFree = r => require.ensure([], () => r(require('../pages/finance/addRentFree/Index')), 'finance');
const GenerateAccount = r => require.ensure([], () => r(require('../pages/finance/generateAccount/Index')), 'finance');
const AccountManagement = r => require.ensure([], () => r(require('../pages/finance/accountManagement/Index')), 'finance');
const ImportIrregularCost = r => require.ensure([], () => r(require('../pages/finance/importIrregularCost/Index')), 'finance');
const BillGeneration = r => require.ensure([], () => r(require('../pages/finance/billGeneration/Index')), 'finance');
const BillGenerationDetail = r => require.ensure([], () => r(require('../pages/finance/billGeneration/detail')), 'finance');

//销售管理
const Salmanage = r => require.ensure([], () => r(require('../pages/sales/Index')), 'sales');
//销售返款
const Terminal = r => require.ensure([], () => r(require('../pages/rebates/Index')), 'rebates');
const Poundage = r => require.ensure([], () => r(require('../pages/rebates/Poundage')), 'rebates');
const PoundageOut = r => require.ensure([], () => r(require('../pages/rebates/PoundageOut')), 'rebates');
const ZhxNumber = r => require.ensure([], () => r(require('../pages/rebates/ZhxNumber')), 'rebates');
const Account = r => require.ensure([], () => r(require('../pages/rebates/Account')), 'rebates');
const Upload = r => require.ensure([], () => r(require('../pages/rebates/Upload')), 'rebates');
const TaskCenter = r => require.ensure([], () => r(require('../pages/rebates/TaskCenter')), 'rebates');
const Bank = r => require.ensure([], () => r(require('../pages/rebates/Bank')), 'rebates');
const Wechat = r => require.ensure([], () => r(require('../pages/rebates/wechat')), 'rebates');
const Paytreasure = r => require.ensure([], () => r(require('../pages/rebates/paytreasure')), 'rebates');
const Yzfbill = r => require.ensure([], () => r(require('../pages/rebates/yzfbill')), 'rebates');
const Zhxbill = r => require.ensure([], () => r(require('../pages/rebates/zhxbill')), 'rebates');

const Visualization = r => require.ensure([], () => r(require('../pages/visual/Index')), 'visual');
const Merchant = r => require.ensure([], () => r(require('../pages/merchant/Index')), 'merchant');

//数据中心
const Sign = r => require.ensure([], () => r(require('../pages/database/contractModel/Index')), 'database');
const SignTrade = r => require.ensure([], () => r(require('../pages/database/contractModel/signTrade')), 'database');
const SignUnit = r => require.ensure([], () => r(require('../pages/database/contractModel/signUnit')), 'database');
const ShopInfo = r => require.ensure([], () => r(require('../pages/database/contractModel/shopInfo')), 'database');
const ExpiryContract = r => require.ensure([], () => r(require('../pages/database/contractModel/expiryContract')), 'database');
const MonthSaleTotal = r => require.ensure([], () => r(require('../pages/database/saleModel/monthSaleTotal')), 'database');
const SalesData = r => require.ensure([], () => r(require('../pages/database/saleModel/salesData')), 'database');
const FloorSale = r => require.ensure([], () => r(require('../pages/database/saleModel/floorSale')), 'database');
const ShopSale = r => require.ensure([], () => r(require('../pages/database/saleModel/shopSale')), 'database');
const SaleRanking = r => require.ensure([], () => r(require('../pages/database/saleModel/saleRanking')), 'database');
const PaymentTotal = r => require.ensure([], () => r(require('../pages/database/saleModel/paymentTotal')), 'database');
const PaymentDetail = r => require.ensure([], () => r(require('../pages/database/saleModel/paymentDetail')), 'database');
const SaleDetails = r => require.ensure([], () => r(require('../pages/database/saleModel/saleDetails')), 'database');
const ShopWeekSale = r => require.ensure([], () => r(require('../pages/database/saleModel/shopWeekSale')), 'database');
const ShopRanking = r => require.ensure([], () => r(require('../pages/database/saleModel/shopRanking')), 'database');
const ContractReport = r => require.ensure([], () => r(require('../pages/database/settleModel/contractReport')), 'database');
const BusinessAble = r => require.ensure([], () => r(require('../pages/database/settleModel/businessAble')), 'database');
const Businessed = r => require.ensure([], () => r(require('../pages/database/settleModel/businessed')), 'database');
const BusinessArrears = r => require.ensure([], () => r(require('../pages/database/settleModel/businessArrears')), 'database');
const MarketAble = r => require.ensure([], () => r(require('../pages/database/settleModel/marketAble')), 'database');
const Marketed = r => require.ensure([], () => r(require('../pages/database/settleModel/marketed')), 'database');
const FreeRecord = r => require.ensure([], () => r(require('../pages/database/settleModel/freeRecord')), 'database');
const BillRecord = r => require.ensure([], () => r(require('../pages/database/settleModel/billRecord')), 'database');
const DataTaskCenter = r => require.ensure([], () => r(require('../pages/database/taskCenter/Index')), 'database');

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
const Tenant = r => require.ensure([], () => r(require('../pages/system/Tenant')), 'system');
const TenantMsg = r => require.ensure([], () => r(require('../pages/system/TenantMsg')), 'system');
const AddTenant = r => require.ensure([], () => r(require('../pages/system/AddTenant')), 'system');

const router = new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/inner',
            component: Inner,
            redirect: '/inner/floormanage',
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
                    path: 'unitaudit',
                    component: UnitAudit
                },
                {
                    path: 'addunit/:unitId',
                    component: AddUnit
                },
                {
                    path: 'site',
                    component: Site
                },
                {
                    path: 'siteaudit',
                    component: SiteAudit
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
                    path: 'adaudit',
                    component: AdAudit
                },
                {
                    path: 'office',
                    component: Office
                },
                {
                    path: 'officeaudit',
                    component: OfficeAudit
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
                    path: 'brandaudit',
                    component: BrandAudit
                },
                {
                    path: 'merchants',
                    component: Merchants
                },
                {
                    path: 'merchants/detail/:id',
                    component: MerchantDetail
                },
                {
                    path: 'merchantaudit',
                    component: MerchantAudit
                },
                {
                    path: 'addmerchant/:merchantId',
                    component: AddMerchant
                },
                {
                    path: 'shop',
                    component: Shop
                },
                {
                    path: 'shopaudit',
                    component: ShopAudit
                },
                {
                    path: 'addshop/:shopId',
                    component: AddShop
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
                    path: 'intentionaudit',
                    component: IntentionAudit
                },
                {
                    path: 'addcontract/:contractId',
                    component: Contract
                },
                {
                    path: 'shops/:prototypeId',
                    component: Shops
                },
                {
                    path: 'shopsaudit/:prototypeId',
                    component: ShopsAudit
                },
                {
                    path: 'addshops/:contractId/:prototypeId/:delayChange',
                    component: AddShops
                },
                {
                    path:'shopsinfo/:prototypeId/:contractId',
                    component: ShopsInfo
                },
                {
                    path: 'field/:prototypeId',
                    component: Shops
                },
                {
                    path: 'fidleaudit/:prototypeId',
                    component: ShopsAudit
                },
                {
                    path: 'addfidle/:contractId/:prototypeId/:delayChange',
                    component: AddShops
                },
                {
                    path: 'adposition/:prototypeId',
                    component: Shops
                },
                {
                    path: 'adaudit/:prototypeId',
                    component: ShopsAudit
                },
                {
                    path: 'addadposition/:contractId/:prototypeId/:delayChange',
                    component: AddShops
                },
                {
                    path: 'coffice/:prototypeId',
                    component: Shops
                },
                {
                    path: 'cofficeaudit/:prototypeId',
                    component: ShopsAudit
                },
                {
                    path: 'addoffice/:contractId/:prototypeId/:delayChange',
                    component: AddShops
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
                    path: 'takeMargin/detail/:id',
                    component: TakeMarginDetail
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
                    path: 'accountAdjust/detail/:id',
                    component: AdjustmentDetail
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
                    path: 'irregularCost/detail/:id',
                    component: IrregularCostDetail
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
                },{
                    path: 'costAdjust/detail/:id',
                    component: CostAdjustDetail
                }, {
                    path: 'rentFree',
                    component: RentFree
                },{
                    path: 'rentFree/detail/:id',
                    component: RentFreeDetail
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
                    path: 'billGeneration/:id',
                    component: BillGenerationDetail
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
                    path: 'poundageOut',
                    component: PoundageOut
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
                    path: 'wechat',
                    component: Wechat
                },
                {
                    path: 'paytreasure',
                    component: Paytreasure
                },
                {
                    path: 'yzfbill',
                    component: Yzfbill
                },
                {
                    path: 'zhxbill',
                    component: Zhxbill
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
            redirect: '/database/sign',
            children: [
                {
                    path: 'sign',
                    component: Sign
                },
                {
                    path: 'signTrade',
                    component: SignTrade
                },
                {
                    path: 'signUnit',
                    component: SignUnit
                },
                {
                    path: 'shopInfo',
                    component: ShopInfo
                },
                {
                    path: 'expiryContract',
                    component: ExpiryContract
                },
                {
                    path: 'monthSaleTotal',
                    component: MonthSaleTotal
                },
                {
                    path: 'salesData',
                    component: SalesData
                },
                {
                    path: 'floorSale',
                    component: FloorSale
                },
                {
                    path: 'shopSale',
                    component: ShopSale
                },
                {
                    path: 'saleRanking',
                    component: SaleRanking
                },
                {
                    path: 'paymentTotal',
                    component: PaymentTotal
                },
                {
                    path: 'paymentDetail',
                    component: PaymentDetail
                },
                {
                    path: 'saleDetails',
                    component: SaleDetails
                },
                {
                    path: 'shopWeekSale',
                    component: ShopWeekSale
                },
                {
                    path: 'shopRanking',
                    component: ShopRanking
                },
                {
                    path: 'contractReport',
                    component: ContractReport
                },
                {
                    path: 'businessAble',
                    component: BusinessAble
                },
                {
                    path: 'businessed',
                    component: Businessed
                },
                {
                    path: 'businessArrears',
                    component: BusinessArrears
                },
                {
                    path: 'marketAble',
                    component: MarketAble
                },
                {
                    path: 'marketed',
                    component: Marketed
                },
                {
                    path: 'freeRecord',
                    component: FreeRecord
                },
                {
                    path: 'billRecord',
                    component: BillRecord
                },
                {
                    path: 'taskCenter',
                    component: DataTaskCenter
                },
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
                    path: 'adduser/:userid',
                    component: AddUser
                },
                {
                    path: 'role',
                    component: Role
                },
                {
                    path: 'addrole/:roleid',
                    component: AddRole
                },
                {
                    path: 'dictionary',
                    component: Dictionary
                },
                {
                    path: 'log',
                    component: Log
                },
                {
                    path: 'tenant',
                    component: Tenant
                },
                {
                    path: 'tenantmsg/:id',
                    component: TenantMsg
                },
                {
                    path: 'addtenant',
                    component: AddTenant,
                    name: 'addtenant'
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
