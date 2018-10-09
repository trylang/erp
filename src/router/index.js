import Vue from 'vue'
import Router from 'vue-router'
import fullMenus from '../utils/menus'

Vue.use(Router)

//主页面
const Home = r => require.ensure([], () => r(require('../pages/Home')), 'main');
const Inner = r => require.ensure([], () => r(require('../pages/Web')), 'main');
const BlankPage = r => require.ensure([], () => r(require('../pages/Blank')), 'main');
const Login = r => require.ensure([], () => r(require('../pages/Login')), 'main');
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
const BrandLibrary = r => require.ensure([], () => r(require('../pages/tenancy/merchants/BrandLibrary')), 'merchants');
const BrandApply = r => require.ensure([], () => r(require('../pages/tenancy/merchants/BrandApply')), 'merchants');
const BrandApplyAudit = r => require.ensure([], () => r(require('../pages/tenancy/merchants/BrandApplyAudit')), 'merchants');
const Brand = r => require.ensure([], () => r(require('../pages/tenancy/merchants/Brand')), 'merchants');
const BrandAudit = r => require.ensure([], () => r(require('../pages/tenancy/merchants/BrandAudit')), 'merchants');
const Merchants = r => require.ensure([], () => r(require('../pages/tenancy/merchants/Merchant')), 'merchants');
const MerchantsList = r => require.ensure([], () => r(require('../pages/tenancy/merchants/MerchantList')), 'merchants');
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
const ShopsList = r => require.ensure([], () => r(require('../pages/tenancy/contract/ShopsList')), 'contract');
const ShopsAudit = r => require.ensure([], () => r(require('../pages/tenancy/contract/ShopsAudit')), 'contract');
const AddShops = r => require.ensure([], () => r(require('../pages/tenancy/contract/ShopsAdd')), 'contract');
const ShopsInfo = r => require.ensure([], () => r(require('../pages/tenancy/contract/ShopsInfo')), 'contract');
const ShopsChange = r => require.ensure([], () => r(require('../pages/tenancy/contract/ShopsChange')), 'contract');
const MainEdit = r => require.ensure([], () => r(require('../pages/tenancy/contract/MainEdit')), 'contract');
const AreaEdit = r => require.ensure([], () => r(require('../pages/tenancy/contract/AreaEdit')), 'contract');
const IndexInfo = r => require.ensure([], () => r(require('../pages/tenancy/contract/IndexInfo')), 'contract');
/*const Field = r => require.ensure([], () => r(require('../pages/tenancy/contract/Field')), 'contract');
const AddField = r => require.ensure([], () => r(require('../pages/tenancy/contract/FieldAdd')), 'contract');
const AdPosition = r => require.ensure([], () => r(require('../pages/tenancy/contract/AdPosition')), 'contract');
const AddAdPosition = r => require.ensure([], () => r(require('../pages/tenancy/contract/AddAdPosition')), 'contract');
const cOffice = r => require.ensure([], () => r(require('../pages/tenancy/contract/Office')), 'contract');
const AddOffice = r => require.ensure([], () => r(require('../pages/tenancy/contract/AddOffice')), 'contract');*/
//财务管理
const AccountGroup = r => require.ensure([], () => r(require('../pages/finance/account-group/Index')), 'finance');
const Cost = r => require.ensure([], () => r(require('../pages/finance/cost/Index')), 'finance');
const TakeMargin = r => require.ensure([], () => r(require('../pages/finance/takeMargin/Index')), 'finance');
const TakeMarginAudit = r => require.ensure([], () => r(require('../pages/finance/takeMargin/Audit')), 'finance');
const TakeMarginDetail = r => require.ensure([], () => r(require('../pages/finance/takeMargin/Detail')), 'finance');
const CollectEarnest = r => require.ensure([], () => r(require('../pages/finance/collectEarnest/Index')), 'finance');
const CollectDeposit = r => require.ensure([], () => r(require('../pages/finance/collectDeposit/Index')), 'finance');
const PayManagement = r => require.ensure([], () => r(require('../pages/finance/payManagement/Index')), 'finance');
const PayManagementAudit = r => require.ensure([], () => r(require('../pages/finance/payManagement/Audit')), 'finance');
const PayManagementDetail = r => require.ensure([], () => r(require('../pages/finance/payManagement/Detail')), 'finance');
const CollectMoney = r => require.ensure([], () => r(require('../pages/finance/collectMoney/Index')), 'finance');
const TaxRate = r => require.ensure([], () => r(require('../pages/finance/taxRate/Index')), 'finance');
const TaxRate2cost = r => require.ensure([], () => r(require('../pages/finance/taxRate2cost/Index')), 'finance');
const CollectionAccount = r => require.ensure([], () => r(require('../pages/finance/collectionAccount/Index')), 'finance');
const AccountAdjust = r => require.ensure([], () => r(require('../pages/finance/accountAdjust/Index')), 'finance');
const AccountAdjustAudit = r => require.ensure([], () => r(require('../pages/finance/accountAdjust/Audit')), 'finance');
const AddAdjustment = r => require.ensure([], () => r(require('../pages/finance/addAdjustment/Index')), 'finance');
const AdjustmentDetail = r => require.ensure([], () => r(require('../pages/finance/accountAdjust/Detail')), 'finance');
const ContractMargin = r => require.ensure([], () => r(require('../pages/finance/contractMargin/Index')), 'finance');
const DealMargin = r => require.ensure([], () => r(require('../pages/finance/dealMargin/Index')), 'finance');
const DealMarginAudit = r => require.ensure([], () => r(require('../pages/finance/dealMargin/Audit')), 'finance');
const TakeadvancePay = r => require.ensure([], () => r(require('../pages/finance/takeadvancePay/Index')), 'finance');
const TakeadvancePayAudit = r => require.ensure([], () => r(require('../pages/finance/takeadvancePay/Audit')), 'finance');
const MerchantAdvancePay = r => require.ensure([], () => r(require('../pages/finance/merchantAdvancePay/Index')), 'finance');
const DealAdvancePay = r => require.ensure([], () => r(require('../pages/finance/dealAdvancePay/Index')), 'finance');
const DealAdvancePayAudit = r => require.ensure([], () => r(require('../pages/finance/dealAdvancePay/Audit')), 'finance');
const Entering = r => require.ensure([], () => r(require('../pages/finance/entering/Index')), 'finance');
const IrregularCost = r => require.ensure([], () => r(require('../pages/finance/IrregularCost/Index')), 'finance');
const IrregularCostAudit = r => require.ensure([], () => r(require('../pages/finance/IrregularCost/Audit')), 'finance');
const IrregularCostDetail = r => require.ensure([], () => r(require('../pages/finance/IrregularCost/Detail')), 'finance');
const CostAdjust = r => require.ensure([], () => r(require('../pages/finance/costAdjust/Index')), 'finance');
const CostAdjustAudit = r => require.ensure([], () => r(require('../pages/finance/costAdjust/Audit.vue')), 'finance');
const CostAdjustDetail = r => require.ensure([], () => r(require('../pages/finance/costAdjust/Detail')), 'finance');
const AddCostAdjust = r => require.ensure([], () => r(require('../pages/finance/addCostAdjust/Index')), 'finance');
const RentFree = r => require.ensure([], () => r(require('../pages/finance/rentFree/Index')), 'finance');
const RentFreeAudit = r => require.ensure([], () => r(require('../pages/finance/rentFree/Audit')), 'finance');
const RentFreeDetail = r => require.ensure([], () => r(require('../pages/finance/rentFree/Detail')), 'finance');
const AddRentFree = r => require.ensure([], () => r(require('../pages/finance/addRentFree/Index2')), 'finance');
const GenerateAccount = r => require.ensure([], () => r(require('../pages/finance/generateAccount/Index')), 'finance');
const AccountManagement = r => require.ensure([], () => r(require('../pages/finance/accountManagement/Index')), 'finance');
const AccountManagementAudit = r => require.ensure([], () => r(require('../pages/finance/accountManagement/Audit')), 'finance');
const AccountManagementPulish = r => require.ensure([], () => r(require('../pages/finance/accountManagement/Publish')), 'finance');
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
const ReAccount = r => require.ensure([], () => r(require('../pages/rebates/ReAccount')), 'rebates');
const TaskCenter = r => require.ensure([], () => r(require('../pages/rebates/TaskCenter')), 'rebates');
const Bank = r => require.ensure([], () => r(require('../pages/rebates/Bank')), 'rebates');
const BankDetailed = r => require.ensure([], () => r(require('../pages/rebates/bankDetailed')), 'rebates');
const Wechat = r => require.ensure([], () => r(require('../pages/rebates/wechat')), 'rebates');
const WechatDetailed = r => require.ensure([], () => r(require('../pages/rebates/wechatDetailed')), 'rebates');
const Paytreasure = r => require.ensure([], () => r(require('../pages/rebates/paytreasure')), 'rebates');
const PaytreasureDetailed = r => require.ensure([], () => r(require('../pages/rebates/paytreasureDetailed')), 'rebates');
const Yzfbill = r => require.ensure([], () => r(require('../pages/rebates/yzfbill')), 'rebates');
const YzfbillDetailed = r => require.ensure([], () => r(require('../pages/rebates/yzfbillDetailed')), 'rebates');
const Zhxbill = r => require.ensure([], () => r(require('../pages/rebates/zhxbill')), 'rebates');
const ZhxbillDetailed = r => require.ensure([], () => r(require('../pages/rebates/zhxbillDetailed')), 'rebates');

const Visualization = r => require.ensure([], () => r(require('../pages/visual/Index')), 'visual');
const Merchant = r => require.ensure([], () => r(require('../pages/merchant/Index')), 'merchant');

//数据中心
const Sign = r => require.ensure([], () => r(require('../pages/database/contractModel/Index')), 'database');
const SignTrade = r => require.ensure([], () => r(require('../pages/database/contractModel/signTrade')), 'database');
const SignUnit = r => require.ensure([], () => r(require('../pages/database/contractModel/signUnit')), 'database');
const ShopInfo = r => require.ensure([], () => r(require('../pages/database/contractModel/shopInfo')), 'database');
const ExpiryContract = r => require.ensure([], () => r(require('../pages/database/contractModel/expiryContract')), 'database');
const ContractArea = r => require.ensure([], () => r(require('../pages/database/contractModel/contractArea')), 'database');

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
const ContractReceive = r => require.ensure([], () => r(require('../pages/database/settleModel/contractReceive')), 'database');
const FreeRecord = r => require.ensure([], () => r(require('../pages/database/settleModel/freeRecord')), 'database');
const BillRecord = r => require.ensure([], () => r(require('../pages/database/settleModel/billRecord')), 'database');
const DataTaskCenter = r => require.ensure([], () => r(require('../pages/database/taskCenter/Index')), 'database');
const ShopSync = r => require.ensure([], () => r(require('../pages/database/dataSyncList/ShopSync')), 'database');

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
const Password = r => require.ensure([], () => r(require('../pages/system/Password')), 'system');

const router = new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
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
                    path: 'examine',
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
                    path: 'brandlibrary',
                    component: BrandLibrary
                },
                {
                    path: 'brandapply',
                    component: BrandApply
                },
                {
                    path: 'brandapplyaudit',
                    component: BrandApplyAudit
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
                    path: 'merchantlist',
                    component: MerchantsList
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
                    path: 'shopslist/:prototypeId',
                    component: ShopsList
                },
                {
                    path: 'shopsaudit/:prototypeId',
                    component: ShopsAudit
                },
                {
                    path:'shopschange/:prototypeId',
                    component: ShopsChange
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
                    path:'mainedit/:prototypeId/:contractId',
                    component: MainEdit
                },
                {
                    path:'areaedit/:prototypeId/:contractId',
                    component: AreaEdit
                },
                {
                    path:'indexinfo/:prototypeId/:contractId',
                    component: IndexInfo
                },
                {
                    path: 'field/:prototypeId',
                    component: Shops
                },
                {
                    path: 'fidlelist/:prototypeId',
                    component: ShopsList
                },
                {
                    path: 'fidleaudit/:prototypeId',
                    component: ShopsAudit
                },
                {
                    path:'fidlechange/:prototypeId',
                    component: ShopsChange
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
                    path: 'adlist/:prototypeId',
                    component: ShopsList
                },
                {
                    path: 'adaudit/:prototypeId',
                    component: ShopsAudit
                },
                {
                    path:'adchange/:prototypeId',
                    component: ShopsChange
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
                    path: 'cofficelist/:prototypeId',
                    component: ShopsList
                },
                {
                    path: 'cofficeaudit/:prototypeId',
                    component: ShopsAudit
                },
                {
                    path:'cofficechange/:prototypeId',
                    component: ShopsChange
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
                    path: 'takeMarginAudit',
                    component: TakeMarginAudit
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
                    path: 'payManagementAudit',
                    component: PayManagementAudit
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
                    path: 'accountAdjustAudit',
                    component: AccountAdjustAudit
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
                    path: 'dealMarginAudit',
                    component: DealMarginAudit
                },
                {
                    path: 'takeadvancePay',
                    component: TakeadvancePay
                },
                {
                    path: 'takeadvancePayAudit',
                    component: TakeadvancePayAudit
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
                    path: 'dealAdvancePayAudit',
                    component: DealAdvancePayAudit
                },
                {
                    path: 'irregularCost',
                    component: IrregularCost
                },
                {
                    path: 'irregularCostAudit',
                    component: IrregularCostAudit
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
                },
                {
                    path: 'costAdjustAudit',
                    component: CostAdjustAudit
                },
                 {
                    path: 'costAdjust/addCostAdjust',
                    component: AddCostAdjust
                },{
                    path: 'costAdjust/detail/:id',
                    component: CostAdjustDetail
                }, {
                    path: 'rentFree',
                    component: RentFree
                }, {
                    path: 'rentFreeAudit',
                    component: RentFreeAudit
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
                },
                {
                    path: 'accountManagementAudit',
                    component: AccountManagementAudit
                },
                {
                    path: 'accountManagementPublish',
                    component: AccountManagementPulish
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
                    path: 'reAccount',
                    component: ReAccount
                },
                {
                    path: 'bank',
                    component: Bank
                },
                {
                    path: 'bankdetailed',
                    component: BankDetailed
                },
                {
                    path: 'wechat',
                    component: Wechat
                },
                {
                    path: 'wechatDetailed',
                    component: WechatDetailed
                },
                {
                    path: 'paytreasure',
                    component: Paytreasure
                },
                {
                    path: 'paytreasureDetailed',
                    component: PaytreasureDetailed
                },
                {
                    path: 'yzfbill',
                    component: Yzfbill
                },
                {
                    path: 'yzfbillDetailed',
                    component: YzfbillDetailed
                },
                {
                    path: 'zhxbill',
                    component: Zhxbill
                },
                {
                    path: 'zhxbillDetailed',
                    component: ZhxbillDetailed
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
                    path: 'contractarea',
                    component: ContractArea
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
                    path: 'contractreceive',
                    component: ContractReceive
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
                {
                    path: 'shopsync',
                    component: ShopSync
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
                    component: AddTenant
                },
                {
                    path: 'password',
                    component: Password
                }
            ]
        }
    ]
});
let menus=[]
if (localStorage.getItem('erp_userinfo')) {
  if (JSON.parse(localStorage.getItem('erp_userinfo')).menus.length>0) {
    menus = JSON.parse(localStorage.getItem('erp_userinfo')).menus.map(item=>{
          return item.url
        })
  }
}
    menus.push('/')
    function sliceStr(str){
      let arr=str.split('/')
      arr.splice(3)
      return arr.join('/')
    }
let pathArr=['/inner/floormanage','/finance/accountGroup','/rebates/terminal','/database/sign','/system/area']
let mapPath={
  inner:'tenancy',
  finance:'finance',
  rebates:'rebates',
  database:'database',
  system:'system'
}
router.beforeEach((toroute, fromroute, next) => {
    let Menus= router.app.menus|| menus
    let token = window.localStorage.getItem('erp_token');
    let store = router.app.$options.store,
        _path = toroute.path.match(/\/?[^\/]+/g);
    _path = _path || ['/'];
    let enterHandler = () => {
        store.commit('MENU_ACTIVE', _path[0])
    };
    enterHandler();
    if (toroute.path!=='/login') {
      if (token) {
        if (pathArr.indexOf(toroute.fullPath)>=0) {
          if (Menus.indexOf(toroute.fullPath)>=0) {
            next();
          } else {
            let path=toroute.fullPath.split('/')[1];
            let pathOne=fullMenus[mapPath[path]]
            for (var i = 0; i < pathOne.length; i++) {
              fullMenus[i]
              if (Menus.indexOf(sliceStr(pathOne[i]))>=0) {
                next(pathOne[i])
                return
              }
            }
            // let path=toroute.fullPath.split('/')[1];
            // let pathOne=fullMenus[mapPath[path]]
            //   for (var i = 0; i < pathOne.length; i++) {
            //     for (var j = 0; j < pathOne[i].children.length; j++) {
            //       if (Menus.indexOf(sliceStr(pathOne[i].children[j].path))>=0) {
            //         next(pathOne[i].children[j].path)
            //         return
            //       }
            //     }
            //   }
          }
        }else {
          next();
        }
      }else {
        router.app.$message.error('未登录');
        next('/login');
      }
    }else {
      next();
    }
});
export default router;
