<template>
  <div class="order">
    <orderheader :title="title"></orderheader>
    <div class="order-wrapper" ref="orderWrapper">
      <div>
        <v-address></v-address>
        <div class="paymethod">
          <h1 class="pay">支付方式</h1>
          <div class="right-pay" @click="showpayList($event)">
            <span class="iconfont icon-youjiantou" v-show="!selectContent.length"></span>
            <span class="paytext" v-show="selectContent.length">{{selectContent}}</span>
          </div>
        </div>
        <div class="invoice">
          <h1 class="issue-text">开具发票</h1>
          <mt-switch class="issue-switch" v-model="invoiceValue"></mt-switch>
        </div>
        <div class="cart-main">
          <ul>
            <li v-for="(order,index) in orderData" :key="index" class="cart-list">
              <!-- 购物车商品图片-->
              <div class="cartImage">
                <img :src="order.img">
              </div>
              <!--商品详情-->
              <div class="cart-desc">
                <h1 class="name">{{order.desc}}</h1>
                <div class="content">
                  <span class="color">颜色:{{order.color}}</span>
                  <span class="size">尺码:{{order.size}}码</span>
                </div>
                <div class="content-second">
                  <span class="count">所购数量:{{order.count}}</span>
                  <span class="price">价格:￥{{order.price}}</span>
                </div>
                <div class="total-price">总价格:￥{{order.price * order.count}}</div>
              </div>
            </li>
          </ul>
        </div>
        <orderbottom></orderbottom>
      </div>
    </div>
    <!--支付方式详情页-->
    <div class="zhifu">
      <showdetail :fold="fold" :showTitle="showTitle" @hideList="hideList">
        <ul class="invoiceWrapper">
          <li class="invoice-list" @click="selectVal(1)" :class="{'numval':numVal===1}">在线支付</li>
          <li class="invoice-list" @click="selectVal(2)" :class="{'numval':numVal===2}">货到付款</li>
          <li class="invoice-list" @click="selectVal(3)">公司转账</li>
        </ul>
        <div class="content">{{contentVal}}</div>
        <div class="bottom">
          <div class="confirm" @click.stop.prevent="confirmpayVal">确定</div>
        </div>
      </showdetail>
    </div>
    <!--发票详情页-->
    <div class="show-invoice">
      <showdetail :fold="invoiceValue" :showTitle="invoiceTitle" @hideList="hideInvoiceList">
        <div class="invoiceType">发票类型</div>
        <ul class="ulWrapper">
          <li class="list-item" @click="selectInvoiceVal(1)" :class="{'numvals':numInvoiceVal===1}">普通发票</li>
          <li class="list-item" @click="selectInvoiceVal(2)" :class="{'numvals':numInvoiceVal===2}">电子普通发票</li>
          <li class="list-item" @click="selectInvoiceVal(3)" :class="{'numvals':numInvoiceVal===3}">增值税专用发票</li>
        </ul>
        <div class="invoiceHeader">发票抬头</div>
        <ul class="headerWrapper">
          <li class="user-item" @click="selectUserVal(1)" :class="{'numusers':numUserVal===1}">个人</li>
          <li class="user-item" @click="selectUserVal(2)" :class="{'numusers':numUserVal===2}">公司</li>
        </ul>
        <div class="company" v-show="numUserVal===2">
          <input class="username" type="text" v-model="companyName" placeholder="请在此填写发票抬头">
          <input class="companyNumber" type="text" v-model="companyNumber" placeholder="请在此填写纳税人识别号">
        </div>
        <div class="bottom">
          <div class="confirm" @click.stop.prevent="confirmInvoice">确定</div>
        </div>
      </showdetail>
    </div>
    <div class="order-bottom">
      <div class="left-order">
        <span class="allprice">订单总金额:</span>
        <span class="realprice">￥{{totalPrice}}</span>
      </div>
      <div class="right-order" @click.stop.prevent="payGoods">提交订单</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import { Toast } from "mint-ui";
  import orderheader from 'components/header/header';
  import orderbottom from 'components/bottom/bottom';
  import address from 'components/address/address';
  import showdetail from 'components/showdetail/showdetail';

  export default {
    data() {
      return {
        title: '确认订单',
        invoiceValue: false,
        fold: false,
        showTitle: '',
        contentVal: '打白条 0首付 24期随心分期',
        numVal: 1,
        selectContent: '',
        invoiceTitle: '发票内容',
        numInvoiceVal: 1,
        numUserVal: 1,
        companyNumber: '',
        companyName: '',
        orderData: []
      };
    },
    computed: {
      totalPrice() {
        let totalPice = 0;
        this.orderData.forEach((cart) => {
          totalPice += cart.price * cart.count;
        });
        return totalPice;
      }
    },
    methods: {
      _initScroll() {
        if (!this.orderScroll) {
          this.orderScroll = new BScroll(this.$refs.orderWrapper, {
            click: true
          });
        } else {
          this.orderScroll.refresh();
        }
      },
      payGoods() {
        if (this.numVal === 1) {
          Toast({
            message: '在线支付打开支付宝或者微信支付页面，共支付' + this.totalPrice + '元',
            duration: 950,
            iconClass: "iconadd icon-checkmark"
          });
        } else {
          Toast({
            message: '货到付款共支付' + this.totalPrice + '元',
            duration: 950,
            iconClass: "iconadd icon-checkmark"
          });
        }
      },
      showpayList(event) {
        if (!event._constructed) {
          return;
        }
        this.fold = true;
        this.showTitle = '支付方式';
      },
      hideList() {
        this.fold = false;
      },
      selectVal(num) {
        if (num === 1) {
          this.numVal = 1;
          this.contentVal = '打白条 0首付 24期随心分期';
        } else if (num === 2) {
          this.numVal = 2;
          this.contentVal = '收货时扫码支付享随机减，最高减99';
        } else {
          Toast({
            message: '本单不允许公司转账方式'
          });
        }
      },
      confirmpayVal() {
        if (this.numVal === 1) {
          this.selectContent = '在线支付';
        } else {
          this.selectContent = '货到付款';
        }
        this.hideList();
      },
      hideInvoiceList() {
        this.invoiceValue = false;
      },
      selectInvoiceVal(nums) {
        if (nums === 1) {
          this.numInvoiceVal = 1;
        } else if (nums === 2) {
          this.numInvoiceVal = 2;
        } else {
          Toast({
            message: '本单不支持开增值税专用发票'
          });
        }
      },
      selectUserVal(number) {
        if (number === 1) {
          this.numUserVal = 1;
        } else if (number === 2) {
          this.numUserVal = 2;
          this.companyNumber = '';
          this.companyName = '';
        }
      },
      confirmInvoice() {
        if (this.numUserVal === 1) {
          Toast({
            message: '操作成功'
          });
          this.hideInvoiceList();
        } else if (this.companyNumber.length && this.companyName.length) {
          Toast({
            message: '操作成功'
          });
          this.hideInvoiceList();
        } else if (!this.companyName.length) {
          Toast({
            message: '请填写发票抬头'
          });
        } else {
          Toast({
            message: '请填写纳税人识别号'
          });
        }
      }
    },
    created() {
      let data1 = this.$store.state.directCart;
      let tmp = this.$store.state.carts;
      let data2 = [];
      for (let i = 0; i < tmp.length; i++) {
        if (tmp[i].IsSelect) {
          data2.push(tmp[i]);
        }
      }
      if (data2.length && data1.length) {
        let tmpkey = data1[0].key;
        let bool = data2.filter(cart => cart.key === tmpkey);
        if (bool.length) {
          for (let i = 0; i < data2.length; i++) {
            if (data2[i].key === tmpkey) {
              data2[i].count += data1[0].count;
              break;
            }
          }
        } else {
          data2 = data2.concat(data1);
        }
        this.orderData = data2;
      } else if (data2.length && !data1.length) {
        this.orderData = data2;
      } else if (!data2.length && data1.length) {
        this.orderData = data1;
      }
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    components: {
      orderheader,
      orderbottom,
      'v-address': address,
      showdetail
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .order
    .order-wrapper
      position: absolute
      top: 40px
      bottom: 0
      width: 100%
      overflow: hidden
      background: #F4F4F4
      .paymethod
        height: 1.6rem
        line-height: 1.6rem
        margin: 12px 0
        padding: 0 18px
        font-size: 0.37rem
        color: rgb(7, 17, 27)
        background: #ffffff
        .pay
          float: left
        .right-pay
          float: right
          .icon-youjiantou, .paytext
            font-size: 0.37rem
            color: rgb(7, 17, 27)
      .cart-main
        .cart-list
          position: relative
          display: flex
          margin-top: 12px
          padding: 18px 18px 18px 14px
          background: white
          font-size: 0
          &:last-child
            margin-bottom: 12px
          .cartImage
            flex: 0 0 57px
            img
              width: 2.2rem
              height: 2.6rem
          .cart-desc
            flex: 1
            margin-left: 10px
            .name
              position: relative
              display: -webkit-box
              -webkit-box-orient: vertical
              -webkit-line-clamp: 2
              overflow: hidden
              margin: 2px 0 12px 0
              padding-right: 8px
              max-height: 0.85rem
              line-height: 0.46rem
              font-size: 0.37rem
              color: rgb(7, 17, 27)
            .content
              .color, .size
                line-height: 12px
                font-size: 0.32rem
                color: rgb(77, 85, 93)
              .color
                margin-right: 12px
            .content-second
              margin-top: 8px
              .count, .price
                font-size: 0.32rem
                color: rgb(77, 85, 93)
              .count
                margin-right: 12px
            .total-price
              margin-top: 10px
              font-size: 0.34rem
              font-weight: 700
              color: rgb(240, 20, 20)
      .invoice
        height: 1.6rem
        line-height: 1.6rem
        padding: 0 18px
        background: #ffffff
        .issue-text
          float: left
          font-size: 0.37rem
          color: rgb(7, 17, 27)
        .issue-switch
          float: right
          margin-top: 0.37rem
    .zhifu
      position: relative
      .invoiceWrapper
        display: flex
        justify-content: center
        align-items: center
        .invoice-list
          flex: 1
          height: 0.8rem
          line-height: 0.8rem
          margin-right: 6px
          text-align: center
          font-size: 0.37rem
          color: rgb(7, 17, 27)
          border-radius: 16px
          border: 1px solid #f3f5f7
          &.numval
            color: rgb(240, 20, 20)
            border: 1px solid rgb(240, 20, 20)
      .content
        padding: 6px
        line-height: 14px
        font-size: 0.32rem
        color: #666666
      .bottom
        position: absolute
        bottom: 60px
        left: 0
        width: 100%
        text-align: center
        .confirm
          width: 60%
          height: 36px
          line-height: 36px
          margin: 0 auto
          text-align: center
          border-radius: 16px
          font-size: 0.37rem
          color: #ffffff
          background: linear-gradient(to top right, #F40B04, #FE4A17);
          box-shadow: 0 4px 4px 0 rgba(254, 74, 23, 0.2)
    .show-invoice
      .invoiceType
        margin-bottom: 12px
        font-size: 0.4rem
        font-weight: 600
      .ulWrapper
        display: flex
        justify-content: center
        align-items: center
        font-size: 0.37rem
        .list-item
          flex: 1
          height: 0.6rem
          line-height: 0.6rem
          margin-right: 6px
          text-align: center
          border-radius: 16px
          border: 1px solid #f3f5f7
          &.numvals
            color: rgb(240, 20, 20)
            border: 1px solid rgb(240, 20, 20)
      .invoiceHeader
        margin: 12px 0
        font-size: 0.4rem
        font-weight: 600
      .headerWrapper
        display: flex
        font-size: 0.37rem
        .user-item
          flex: 1
          height: 0.6rem
          line-height: 0.6rem
          margin-right: 6px
          text-align: center
          border-radius: 16px
          border: 1px solid #f3f5f7
          &.numusers
            color: rgb(240, 20, 20)
            border: 1px solid rgb(240, 20, 20)
      .company
        margin-top: 12px
        font-size: 0.37rem
        input
          width: 95%
          height: 26px
          line-height: 26px
          padding-left: 16px
          border: 0
          outline: none
          border-radius: 16px
          background: #f5f5f5
          &.username
            margin-bottom: 8px
            color: rgb(7, 17, 27)
          &.companyNumber
            color: rgb(240, 20, 20)
      .bottom
        position: absolute
        bottom: 60px
        left: 0
        width: 100%
        text-align: center
        .confirm
          width: 60%
          height: 36px
          line-height: 36px
          margin: 0 auto
          text-align: center
          border-radius: 16px
          font-size: 0.37rem
          color: #ffffff
          background: linear-gradient(to top right, #F40B04, #FE4A17);
          box-shadow: 0 4px 4px 0px rgba(254, 74, 23, 0.2)
    .order-bottom
      display: flex
      position: fixed
      left: 0
      bottom: 0
      width: 100%
      height: 48px
      z-index: 80
      line-height: 48px
      font-size: 0.37rem
      background: #fafafa
      .left-order
        flex: 1
        padding-left: 18px
        .allprice
          margin-right: 10px
          color: rgb(7, 17, 27)
        .realprice
          color: rgb(240, 20, 20)
          font-weight: 700
      .right-order
        flex: 0 0 3.2rem
        text-align: center
        color: #fff
        background: #e3211e
</style>
