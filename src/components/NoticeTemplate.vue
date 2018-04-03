<template>
  <div class="notice">
    <header>
      <h4>商场租户结算通知单</h4>
      <div class="notice_info">
        <aside class="head_part_l">
          <p class="mar_bottom_03"><span>店铺：</span><strong>{{detail.shopName}}</strong></p>
          <p><span>店铺编号：</span><strong>{{detail.shopCode}}</strong></p>
        </aside>
        <aside class="head_part_r">
          <p class="mar_bottom_03"><span>电话：{{detail.shopTelephone}}</span></p>
          <p class="mar_bottom_03"><span>传真：{{detail.shopFox}}</span></p>
          <p><span>结算单号：1234567891243232323</span></p>
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
          <span>页数：400</span>
        </p>
        <strong>上期结余：{{detail.totalOwed}}</strong>
      </div>
      <erp-table class="templete_table" :header="header" :content="content" noPage="true" :oddColor="oddColor">
        <tr class="last_tr" slot="lastTr">
          <td colspan="2"><div class="cell"><span>合计欠款</span></div></td>
          <td><div class="cell"><span>{{detail.remainOwed}}</span></div></td>
        </tr>
      </erp-table>
    </main>
    <footer>
      <small-collection :title="footer.title">
        <ul slot="cash">
          <li>
            <span>1.</span>
            <p>请贵公司在收到固定租金，物业费及推广费结算单时请按照结算中所规定的所属月份的第一个工作日将租金交于我司，如因违约而产生的滞纳金我司将一并收取！</p>
          </li>
          <li class="address">
            <span>2.</span>
            <article>
              <p>收款名称：{{detail.receiptName}}</p>
              <p>开户银行：{{detail.openingBank}}</p>
              <p>银行账号：{{detail.bankAccount}}</p>
              <p>西单大悦城结算中心地址：西单北大街甲131号商场四层结算中心</p>
            </article>
          </li>
        </ul>
      </small-collection>
      <div class="phone">
        <p>如有相关问题请致电以下电话</p>
        <p><span>团购卡及资和信开票：</span> 010-83366528 -- 钱会计</p>
        <p><span>返款情况：</span> 010-83366528 -- 钱会计</p>
        <p><span>结算单事宜联系电话：</span> 010-83366518 -- 周会计</p>
        <p><span>款项查询/发票领取：</span> 010-83366528 -- 钱会计</p>
        <p><span>查询刷卡及退货情况：</span> 010-83366524 -- 王会计</p>
        <p class="mar_bottom_1"><span>销售不符需调账联系：</span> 010-83366520 -- 郭会计</p>
        <p>汇款15个工作日后请贵司尽快领取发票，超过3个月我司将不予保存，感谢您的配合！</p>
      </div>
      <div class="title">
        <h3>西单大悦城</h3>
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
        oddColor: {
          background: '#fafafa'
        },
        footer: {
          title: {
            ifBorder: false,
            label: '特别提示',
            title_style: {
              'font-size': '14px'
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
        margin: 0 -1rem -1.5rem;
        .last_tr {
          font-weight: 600;
          font-size: 14px;
          color: nth($black, 1);
        }
      }
    }
    footer {
      font-size: .8rem;
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
      .title {
        padding-top: 5rem;
        display: flex;
        justify-content: flex-end;
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

