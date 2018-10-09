let menu= {
    tenancy: [{
        title: '资产管理',
        iconClass:'icon-rentIcon',
        children: [
            /*{
                path: '/inner/building',
                title: '楼宇类型'
            },*/
            {
                path: '/inner/floormanage',
                title: '楼宇管理'
            },
            {
                path: '/inner/unit',
                title: '单元管理',
                tabs:[
                  {
                    path:'/inner/unit',
                    title:'单元管理'
                  },
                  {
                    path:'/inner/unitaudit',
                    title:'单元审核'
                  }
                ]
            },
            {
                path: '/inner/site',
                title: '场地管理',
                tabs:[
                  {
                    path: '/inner/site',
                    title: '场地管理',
                  },
                  {
                    path:'/inner/siteaudit',
                    title:'场地审核'
                  },
                ]
            },
            {
                path: '/inner/adtype',
                title: '广告位类型'
            },
            {
                path: '/inner/admanage',
                title: '广告位管理',
                tabs:[
                  {
                    path: '/inner/admanage',
                    title: '广告位管理'
                  },
                  {
                    path: '/inner/examine',
                    title: '广告位审核'
                  }
                ]
            },
            {
                path: '/inner/office',
                title: '写字楼管理',
                tabs:[
                  {
                    path: '/inner/office',
                    title: '写字楼管理'
                  },
                  {
                    path: '/inner/officeaudit',
                    title: '写字楼审核'
                  }
                ]
            }
        ]
    },
    {
        title: '招商资源管理',
        iconClass:'icon-rentIcon',
        children: [
            {
                path: '/inner/operation',
                title: '业态管理'
            },
            {
                path: '/inner/brandapply',
                title: '品牌申请',
                tabs:[
                    {
                        path: '/inner/brandlibrary',
                        title: '品牌库',
                    },
                    {
                        path: '/inner/brandapply',
                        title: '品牌申请',
                    },
                    {
                        path: '/inner/brandapplyaudit',
                        title: '品牌申请审核',
                    }
                ]
            },
            {
                path: '/inner/brand',
                title: '品牌管理',
                tabs:[
                  {
                    path: '/inner/brand',
                    title: '品牌管理',
                  },
                  {
                    path: '/inner/brandaudit',
                    title: '品牌审核',
                  }
                ]
            },
            {
                path: '/inner/merchants',
                title: '商户管理',
                tabs:[
                  {
                    path: '/inner/merchants',
                    title: '商户管理'
                  },{
                    path: '/inner/merchantlist',
                    title: '商户管理'
                  },{
                    path: '/inner/merchantaudit',
                    title: '商户审核'
                  }
                ]
            },
            {
                path: '/inner/shop',
                title: '店铺管理',
                tabs:[
                  {
                    path: '/inner/shop',
                    title: '店铺管理'
                  },
                  {
                    path: '/inner/shopaudit',
                    title: '店铺审核'
                  }
                ]
            },
            {
                path: '/inner/group',
                title: '货品组别管理'
            },
            {
                path: '/inner/goods',
                title: '货品管理'
            }
        ]
    },
    {
        title: '合同管理',
        iconClass:'icon-rentIcon',
        children: [
            {
                path: '/inner/intention',
                title: '意向合同管理',
                tabs:[
                  {
                    path: '/inner/intention',
                    title: '意向合同管理'
                  },
                  {
                    path: '/inner/intentionaudit',
                    title: '意向合同确认'
                  }
                ]
            },
            {
                path: '/inner/shops/0',
                title: '商铺合同管理',
                tabs:[
                  {
                    path: '/inner/shops/0',
                    title: '商铺合同管理'
                  },
                  {
                    path: '/inner/shopslist/0',
                    title: '商铺合同管理'
                  },
                  {
                    path: '/inner/shopsaudit/0',
                    title: '商铺合同确认'
                  },
                  {
                    path: '/inner/shopschange/0',
                    title: '商铺合同变更'
                  }
                ]
            },
            {
                path: '/inner/field/2',
                title: '场地合同管理',
                tabs: [
                  {
                    path: '/inner/field/2',
                    title: '场地合同管理'
                  },
                  {
                    path: '/inner/fidlelist/2',
                    title: '场地合同管理'
                  },
                  {
                    path: '/inner/fidleaudit/2',
                    title: '场地合同确认'
                  },
                  {
                    path: '/inner/fidlechange/2',
                    title: '场地合同变更'
                  }
                ]
            },
            {
                path: '/inner/adposition/3',
                title: '广告位合同管理',
                tabs: [
                  {
                    path: '/inner/adposition/3',
                    title: '广告位合同管理'
                  },
                  {
                    path: '/inner/adlist/3',
                    title: '广告位合同管理'
                  },
                  {
                    path: '/inner/adaudit/3',
                    title: '广告位合同确认'
                  },
                  {
                    path: '/inner/adchange/3',
                    title: '广告位合同变更'
                  }
                ]
            },
            {
                path: '/inner/coffice/1',
                title: '写字楼合同管理',
                tabs: [
                  {
                    path: '/inner/coffice/1',
                    title: '写字楼合同管理',
                  },
                  {
                    path: '/inner/cofficelist/1',
                    title: '写字楼合同管理',
                  },
                  {
                    path: '/inner/cofficeaudit/1',
                    title: '写字楼合同确认',
                  },
                  {
                    path: '/inner/cofficechange/1',
                    title: '写字楼合同变更'
                  }
                ]
            }
        ]
    }],
    finance: [{
        title: '基础设置',
        iconClass:'icon-financeIcon',
        children: [
            {
                path: '/finance/accountGroup',
                title: '结算组别'
            },
            {
                path: '/finance/taxRate',
                title: '税率设置'
            },
            {
                path: '/finance/cost',
                title: '合同费用项目'
            },
            {
                path: '/finance/taxRate2cost',
                title: '项目税率应用'
            },
            {
                path: '/finance/collectionAccount',
                title: '收款账户'
            }
        ]
    },
    {
        title: '保证金管理',
        iconClass:'icon-financeIcon',
        children: [
            {
                path: '/finance/takeMargin',
                title: '保证金收取',
                tabs: [
                  {
                    path: '/finance/takeMargin',
                    title: '保证金收取'
                  },
                  {
                    path: '/finance/takeMarginAudit',
                    title: '保证金收取审核'
                  },
                ]
            },
            {
                path: '/finance/contractMargin',
                title: '合同保证金'
            },
            {
                path: '/finance/dealMargin',
                title: '保证金处理',
                tabs: [
                  {
                    path: '/finance/dealMargin',
                    title: '保证金处理',
                  },
                  {
                    path: '/finance/dealMarginAudit',
                    title: '保证金处理审核',
                  }
                ]
            }
        ]
    }, {
        title: '预付款管理',
        iconClass:'icon-financeIcon',
        children: [
            {
                path: '/finance/takeadvancePay',
                title: '预付款收取',
                tabs:[
                  {
                    path: '/finance/takeadvancePay',
                    title: '预付款收取'
                  },
                  {
                    path: '/finance/takeadvancePayAudit',
                    title: '预付款审核'
                  }
                ]
            },
            {
                path: '/finance/merchantAdvancePay',
                title: '商户预付款'
            },
            {
                path: '/finance/dealAdvancePay',
                title: '预付款处理',
                tabs: [
                  {
                    path: '/finance/dealAdvancePay',
                    title: '预付款处理'
                  },
                  {
                    path: '/finance/dealAdvancePayAudit',
                    title: '预付款处理审核'
                  }
                ]
            }
        ]
    }, {
        title: '不规则费用',
        iconClass:'icon-financeIcon',
        children: [
            {
                path: "/finance/irregularCost",
                title: '不规则费用管理',
                tabs: [
                  {
                    path: "/finance/irregularCost",
                    title: '不规则费用管理'
                  },
                  {
                    path: "/finance/irregularCostAudit",
                    title: '不规则费用审核'
                  }
                ]
            },
            {
                path: '/finance/importIrregularCost',
                title: '不规则费用导入'
            }
        ]
    }, {
        title: '费用调整管理',
        iconClass:'icon-financeIcon',
        children: [
            {
                path: '/finance/costAdjust',
                title: '费用调整',
                tabs: [
                  {
                    path: '/finance/costAdjust',
                    title: '费用调整'
                  },
                  {
                    path: '/finance/costAdjustAudit',
                    title: '费用调整审核'
                  }
                ]
            }
        ]
    }, {
        title: '免租管理',
        iconClass:'icon-financeIcon',
        children: [
            {
                path: '/finance/rentFree',
                title: '免租管理',
                tabs: [
                  {
                    path: '/finance/rentFree',
                    title: '免租管理'
                  },
                  {
                    path: '/finance/rentFreeAudit',
                    title: '免租审核'
                  }
                ]
            }
        ]
    }, {
        title: "结算单管理",
        iconClass:'icon-financeIcon',
        children: [
            {
                path: '/finance/generateAccount',
                title: '账单生成'
            },
            {
                path: '/finance/accountManagement',
                title: '结算单管理',
                tabs: [
                  {
                    path: '/finance/accountManagement',
                    title: '结算单管理'
                  },
                  {
                    path: '/finance/accountManagementAudit',
                    title: '结算单审核'
                  },
                  {
                    path: '/finance/accountManagementPublish',
                    title: '结算单发布'
                  }
                ]
            },
            {
                path: '/finance/billGeneration',
                title: '账单生成任务'
            }
        ]
    }, {
        title: '结算单调整',
        iconClass:'icon-financeIcon',
        children: [
            {
                path: '/finance/accountAdjust',
                title: '结算单调整',
                tabs: [
                  {
                    path: '/finance/accountAdjust',
                    title: '结算单调整'
                  },
                  {
                    path: '/finance/accountAdjustAudit',
                    title: '结算单调整审核'
                  }
                ]
            }
        ]
    }, {
        title: '收款管理',
        iconClass:'icon-financeIcon',
        children: [
            {
                path: '/finance/payManagement',
                title: '收款管理',
                tabs: [
                  {
                    path: '/finance/payManagement',
                    title: '收款管理'
                  },
                  {
                    path: '/finance/payManagementAudit',
                    title: '收款审核'
                  }
                ]
            }
        ]
    }],
    sales: [{
        title: '销售管理',
        children: [
            {
                path: '/inner/building',
                title: '销售管理'
            }
        ]
    }],
    rebates: [{
        title: '参数设置',
        iconClass:'icon-rebatesIcon',
        children: [
            {
                path: '/rebates/terminal',
                title: '终端号管理'
            },
            {
                path: '/rebates/zhxnumber',
                title: '资和信终端'
            },
            {
                path: '/rebates/poundage',
                title: '手续费设置',
                tabs: [
                  {
                    path: '/rebates/poundage',
                    title: '手续费设置'
                  },
                  {
                    path: '/rebates/poundageOut',
                    title: '例外店手续费设置'
                  }
                ]
            }
        ]
    },
    {
        title: '对账文件管理',
        iconClass:'icon-rebatesIcon',
        children: [
            {
                path: '/rebates/account',
                title: '对账文件管理'
            },
            {
                path: '/rebates/upload',
                title: '对账文件上传'
            }
        ]
    },
    {
        title: '对账报表',
        iconClass:'icon-rebatesIcon',
        children: [
            {
                path: '/rebates/bank',
                title: '银行账单',
                tabs:[
                  {
                    path: '/rebates/bank',
                    title: '银行账单'
                  },
                  {
                    path: '/rebates/bankDetailed',
                    title: '银行账单明细'
                  }
                ]
            },
            {
                path: '/rebates/wechat',
                title: '微信账单',
                tabs: [
                  {
                    path: '/rebates/wechat',
                    title: '微信账单'
                  },
                  {
                    path: '/rebates/wechatDetailed',
                    title: '微信账单明细'
                  }
                ]
            },
            {
                path: '/rebates/paytreasure',
                title: '支付宝账单',
                tabs: [
                  {
                    path: '/rebates/paytreasure',
                    title: '支付宝账单'
                  },
                  {
                    path: '/rebates/paytreasureDetailed',
                    title: '支付宝账单明细'
                  }
                ]
            },
            {
                path: '/rebates/yzfbill',
                title: '翼支付账单',
                tabs: [
                  {
                    path: '/rebates/yzfbill',
                    title: '翼支付账单'
                  },
                  {
                    path: '/rebates/yzfbillDetailed',
                    title: '翼支付账单明细'
                  }
                ]
            },
            {
                path: '/rebates/zhxbill',
                title: '资和信账单',
                tabs: [
                  {
                    path: '/rebates/zhxbill',
                    title: '资和信账单'
                  },
                  {
                    path: '/rebates/zhxbillDetailed',
                    title: '资和信账单明细'
                  }
                ]
            }
        ]
    },
    {
        title: '任务中心',
        iconClass:'icon-rebatesIcon',
        children: [
            {
                path: '/rebates/taskcenter',
                title: '任务中心'
            }
        ]
    }],
    visual: [{
        title: '可视化管理',
        children: [
            {
                path: '/visual/visualization',
                title: '可视化管理'
            }
        ]
    }],
    merchant: [{
        title: '商户价值',
        children: [
            {
                path: '/inner/building',
                title: '商户价值'
            }
        ]
    }],
    database: [{
        title: '合同统计',
        iconClass:'icon-databaseIcon',
        children: [
            {
                path: '/database/sign',
                title: '合同统计'
            },
            {
                path: '/database/signTrade',
                title: '签约统计（商铺业态）'
            },
            // {
            //     path: '/database/signUnit',
            //     title: '签约统计（单元）'
            // },
            {
                path: '/database/shopInfo',
                title: '店铺租约信息'
            },
            {
                path: '/database/expiryContract',
                title: '到期合同'
            },
            {
                path: '/database/contractarea',
                title: '合同面积变更记录'
            },
        ]
    },{
        title: '销售统计',
        iconClass:'icon-databaseIcon',
        children: [
            {
                path: '/database/monthSaleTotal',
                title: '月销售汇总'
            },
            {
                path: '/database/salesData',
                title: '销售数据'
            },
            {
                path: '/database/floorSale',
                title: '楼层销售报表'
            },
            {
                path: '/database/shopSale',
                title: '店铺销售报表'
            },
            {
                path: '/database/saleRanking',
                title: '店铺业态销售汇总表'
            },
            {
                path: '/database/paymentTotal',
                title: '付款方式汇总'
            },
            {
                path: '/database/paymentDetail',
                title: '店铺付款方式明细表'
            },


        ]
    },
    {
        title: '结算统计',
        iconClass:'icon-databaseIcon',
        children: [
            {
                path: '/database/contractReport',
                title: '合同结算统计报表'
            },
            {
                path: '/database/businessAble',
                title: '商户结算(确认收入)'
            },
            {
                path: '/database/businessed',
                title: '商户结算(已收)'
            },
            {
                path: '/database/businessArrears',
                title: '商户结算(欠款)'
            },
            {
                path: '/database/marketAble',
                title: '商场及写字楼（应收）'
            },
            {
                path: '/database/marketed',
                title: '商场及写字楼（已收）'
            },
            {
                path: '/database/contractreceive',
                title: '合同预收记录'
            },
            {
                path: '/database/freeRecord',
                title: '免租维护记录'
            },
            {
                path: '/database/billRecord',
                title: '账单调整维护记录'
            }
        ]
    },
    {
        title: '任务中心',
        iconClass:'icon-databaseIcon',
        children: [
            {
                path: '/database/taskcenter',
                title: '任务中心'
            },
        ]
    },{
        title: '数据同步',
        iconClass:'icon-databaseIcon',
        children: [
            {
                path: '/database/shopsync',
                title: '店铺同步报告'
            },
            /*{
                path: '/database/taskcenter',
                title: '交易对账报告'
            }*/
        ]
    }],
    system: [{
        title: '组织管理',
        iconClass:'icon-systemIcon',
        children: [
            {
                path: '/system/area',
                title: '区域管理'
            },
            {
                path: '/system/shopping',
                title: '购物中心'
            },
            {
                path: '/system/dept',
                title: '部门管理'
            },
            {
                path: '/system/job',
                title: '职位管理'
            }
        ]
    },
    {
        title: '权限管理',
        iconClass:'icon-systemIcon',
        children: [
            {
                path: '/system/user',
                title: '用户管理'
            },
            {
                path: '/system/role',
                title: '角色管理'
            }
        ]
    }, {
        title: '数据字典管理',
        iconClass:'icon-systemIcon',
        children: [
            {
                path: '/system/dictionary',
                title: '数据字典管理'
            }
        ]
    }, {
        title: '操作日志',
        iconClass:'icon-systemIcon',
        children: [
            {
                path: '/system/log',
                title: '操作日志'
            }
        ]
    },  {
        title: '租户通知管理',
        iconClass:'icon-systemIcon',
        children: [
            {
                path: '/system/tenant',
                title: '通知管理'
            }
        ]
    }]

};

let obj = {}
for (var variable in menu) {
  if (menu.hasOwnProperty(variable)) {
    let arr=[]
    menu[variable].forEach(item=>{
      item.children.forEach(i=>{
        if (i.tabs) {
          i.tabs.forEach(j=>{
            arr.push(j.path)
          })
        } else {
          arr.push(i.path)
        }
      })
    })
    obj[variable]=arr
  }
}
export default obj
