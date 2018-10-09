<template>
  <div class="notice">
    <header>
      <h4>商场租户结算通知单</h4>
      <div class="notice_info">
        <aside class="head_part_l">
          <p class="mar_bottom_03"><span>店铺：</span>{{detail.shopName}}</p>
          <p><span>店铺编号：</span>{{detail.shopCode}}</p>
        </aside>
        <aside class="head_part_r">
          <p class="mar_bottom_03"><span>电话：{{detail.mallTelephone}}</span></p>
          <p class="mar_bottom_03"><span>传真：{{detail.mallFox}}</span></p>
          <p><span>结算单号：{{detail.billNo}}</span></p>
        </aside>
      </div>
    </header>
    <main>
      <div class="notice_info">
        <p class="company_name mar_bottom_3">致：{{detail.merchantName}}</p>
        <p class="company_info mar_bottom_3">
          <span>电话：{{detail.merChantTelephone}}</span>
          <span>传真：{{detail.merchantFox}}</span>
        </p>
        <p class="company_info mar_bottom_03">
          <span>发单日期：{{detail.releaseDate}}</span>
          <!-- <span>页数：400</span> -->
        </p>
        <strong>上期结余：{{detail.remainOwed | fmoney}}</strong>
      </div>
      <erp-table class="templete_table" :header="header" :content="detail" noPage="true" :oddColor="oddColor" :noLoading="true">
        <tr class="last_tr" slot="lastTr">
          <td colspan="2"><div class="cell font12"><span>本期应收</span></div></td>
          <td><div class="cell font12"><span>{{detail.amountReceivable | fmoney}}</span></div></td>
          <td><div class="cell font12"><span></span></div></td>
          <td><div class="cell font12"><span></span></div></td>
        </tr>
        <tr class="last_tr" slot="lastTr">
          <td colspan="2"><div class="cell font12" ><span>合计欠款</span></div></td>
          <td><div class="cell font12"><span>{{detail.totalOwed | fmoney}}</span></div></td>
          <td><div class="cell font12"><span></span></div></td>
          <td><div class="cell font12"><span></span></div></td>
        </tr>
      </erp-table>
    </main>
    <footer>
      <small-collection :title="footer.title">
        <ul slot="cash">
          <li>
            <span>1.</span>
            <article>
              <p>请贵公司在收到固定租金，物业费及推广费结算单时请按照结算中所规定的所属月份的第一个工作日将租金交于我司，如因违约而产生的滞纳金我司将一并收取！</p>
            </article>
          </li>
          <li class="address" :style="$userInfo.marketId == 1?'':'display: none;'">
            <span>2.</span>
            <article>
              <p>收款名称：{{detail.receiptName}}</p>
              <p>开户银行：{{detail.openingBank}}</p>
              <p>银行账号：{{detail.bankAccount}}</p>
              <p>西单大悦城结算中心地址：西单北大街甲131号商场四层结算中心</p>
            </article>
          </li>
            <li class="address" :style="$userInfo.marketId == 3?'':'display: none;'">
                <span>2.</span>
                <article>
                    <p>收款名称：北京昆庭资产管理有限公司</p>
                    <p>开户银行：中国建设银行股份有限公司北京建国支行</p>
                    <p>银行账号：11050176360000000080-0002</p>
                    <p>中粮置地广场结算中心地址：安定门外大街208号写字楼B1层物业服务中心</p>
                </article>
            </li>
        </ul>
      </small-collection>
      <div class="phone" :style="$userInfo.marketId == 1?'':'display: none;'">
        <p>如有相关问题请致电以下电话</p>
        <p><span>团购卡及资和信开票：</span> 010-83366526 -- 钱会计</p>
        <p><span>返款情况：</span> 010-83366526 -- 钱会计</p>
        <p><span>结算单事宜联系电话：</span> 010-83366518 -- 周会计</p>
        <p><span>查询刷卡及退货情况：</span> 010-83366524 -- 王会计</p>
        <!-- <p>汇款15个工作日后请贵司尽快领取发票，超过3个月我司将不予保存，感谢您的配合！</p> -->
      </div>
        <div class="phone" :style="$userInfo.marketId == 3?'':'display: none;'">
            <p>如有相关问题请致电以下电话</p>
            <p><span>结算单事宜联系电话：</span> 010-64269703 -- 魏会计</p>
        </div>
      <div class="title" :style="$userInfo.marketId == 1?'background: url('+img+') center right no-repeat;':''">
          <h4 v-if="$userInfo.marketId != 3">{{$userInfo.marketName}}</h4>
          <h4 v-if="$userInfo.marketId == 3">北京昆庭资产管理有限公司</h4>
      </div>     
    </footer>
  </div>
</template>

<script>
  import erpTable from "@/components/Table";
  import SmallCollection from "@/components/SmallCollection";
  export default {
    name: 'notice-template',
    props: ["header", "content", "detail"],
    components: {
      erpTable,
      SmallCollection
    },
    data() {
      return {
          img:require('../assets/red.png'),
        oddColor: {
          background: '#fafafa'
        },
        footer: {
          title: {
            ifBorder: false,
            label: '特别提示',
            title_style: {
              'margin-top': '20px',
              'font-size': '12px'
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $black: (
    #666,
    #8a8a8a,
    #333,
    #e6e6e6,
    #fafafa,
    #808080
  );
  .notice {
    margin-bottom: 3rem;
    page-break-after:always;
    font-size: 12px;
    line-height: 20px;
    header {
      h4 {
        margin: auto;
        width: 8rem;
        color: nth($black, 3);
      }
      .notice_info {
        display: flex;
        margin: 1.5rem 0;
        .head_part_l {
          flex: 1;
          border: 1px solid #eee;
          border-radius: 5px;
          margin-right: 1rem;
          padding: .6rem;
          span {
            color: nth($black, 2);
          }
          strong {
            color: nth($black, 1);
          }
        }
        .head_part_r {
          flex: 1;
          span, strong {
            color: nth($black, 3);
          }
        }
      }
    }
    main {
      .notice_info {
        padding: .6rem;
        background: nth($black, 5);
        color: nth($black, 2);
        .company_info {
          display: flex;
          span {
            flex: 1;
          }
        }
        strong {
          color: nth($black, 1);
        }
      }
      .templete_table {
        margin: 0 0 -1rem -1.2rem;
        width: 107.5%;
        .last_tr {
          font-weight: 600;
          font-size: 12px;
          color: nth($black, 1);
          .cell {
            padding: 5px 8px !important;
          }
        }
      }
    }
    footer {
      font-size: 12px;
      li, .phone {
        display: flex;
        margin-bottom: 1rem;
        color: nth($black, 6);
        span {
          margin-right: .3rem;
        }
      }
      .address, .phone {
        display: flex;
        flex-wrap: wrap;
      }
      .phone {
        display: block;
      }
      .title {
        padding-top: 7rem;
        padding-left: 23rem;
        display: flex;
        // justify-content: flex-end;
        /*background: url(../assets/red.png) center right no-repeat;*/
        h4 {
          margin-top: -1rem;
          font-weight: 500;
          color: nth($black, 1);
        }
      }
    }
  }
  @media print {
    .notice {
      padding: 0 10pt;
      header {
        .notice_info {
          margin-bottom: 3pt;
          .head_part_l {
            border: 1px solid #ccc;           
          }
        }
      }
    }
    .templete_table {
      .cell {
        padding: 0;
      }
    }
      
    .title {
      background: transparent !important;
      h4 {
        padding-left: 150pt; 
      }  
    }
  }
  .mar_bottom_03 {
    margin-bottom: .3rem;
  }
  .mar_bottom_1 {
    margin-bottom: 1rem;
  }

</style>

