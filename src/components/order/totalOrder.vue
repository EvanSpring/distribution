<template>
  <div class="totalOrder">
    <totalheader :title="totalTitle"></totalheader>
    <div class="allorder-wrapper" ref="allOrderWrapper">
      <div class="cart-main" v-show="totalOrderData.length">
        <ul>
          <li v-for="(order,index) in totalOrderData" :key="index" class="cart-list">
            <div class="timeview border-1px">
              <span class="content">订单编号&nbsp;201809130001</span>
              <span class="state">待付款</span>
            </div>
            <div class="viewcontent">
              <div class="cartImage">
                <img :src="order.img">
              </div>
              <div class="cart-desc">
                <h1 class="name">{{order.desc}}</h1>
                <div class="content">
                  <span class="color">{{order.color}}</span>
                  <span class="size">{{order.size}}</span>
                  <span class="count">×{{order.count}}</span>
                </div>
                <div class="content-second">
                  <span class="price">￥{{order.price}}</span>
                </div>
                <div class="total-price">
                  <span class="good-num">共{{order.count}}件商品</span>
                  <span class="total">总价格:￥{{order.price * order.count}}</span>
                </div>
              </div>
            </div>
            <div class="view-state before-1px">
              <span class="state-btn">付款</span>
            </div>
          </li>
        </ul>
        <allorderbottom></allorderbottom>
      </div>
      <div class="view-bottom" v-show="!totalOrderData.length">
        <span class="title">你目前没有订单</span>
        <span class="btn" @click="haveOrder">逛一逛</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import totalheader from 'components/header/header';
  import allorderbottom from 'components/bottom/bottom';

  export default {
    data() {
      return {
        totalTitle: '全部订单',
        totalOrderData: [
          {
            color: "粉红色",
            count: 1,
            desc: "S家原创设计欧洲站女装街头风斗篷立领个性短款棉衣a字蓬蓬棉服女",
            id: 2,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/TB100kJKFXXXXbIXVXXXXXXXXXX_!!0-item_pic.jpg",
            price: 630,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "素缕2015冬装新款文艺百搭羊毛毛呢外套女九分袖短款SL546031栐",
            id: 1,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/2254228937/TB2pqExhpXXXXXkXXXXXXXXXXXX_!!2254228937.jpg",
            price: 212,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "七七之缘诗钎姿锦女装2015秋冬新款代购旗舰店高斯雪岚羽绒服",
            id: 4,
            img: "https://gd3.alicdn.com/bao/uploaded/i3/TB1VKOcKXXXXXXZXXXXXXXXXXXX_!!0-item_pic.jpg",
            price: 685,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "S家原创设计欧洲站女装街头风斗篷立领个性短款棉衣a字蓬蓬棉服女",
            id: 2,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/TB100kJKFXXXXbIXVXXXXXXXXXX_!!0-item_pic.jpg",
            price: 630,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "素缕2015冬装新款文艺百搭羊毛毛呢外套女九分袖短款SL546031栐",
            id: 1,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/2254228937/TB2pqExhpXXXXXkXXXXXXXXXXXX_!!2254228937.jpg",
            price: 212,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "七七之缘诗钎姿锦女装2015秋冬新款代购旗舰店高斯雪岚羽绒服",
            id: 4,
            img: "https://gd3.alicdn.com/bao/uploaded/i3/TB1VKOcKXXXXXXZXXXXXXXXXXXX_!!0-item_pic.jpg",
            price: 685,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "S家原创设计欧洲站女装街头风斗篷立领个性短款棉衣a字蓬蓬棉服女",
            id: 2,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/TB100kJKFXXXXbIXVXXXXXXXXXX_!!0-item_pic.jpg",
            price: 630,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "素缕2015冬装新款文艺百搭羊毛毛呢外套女九分袖短款SL546031栐",
            id: 1,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/2254228937/TB2pqExhpXXXXXkXXXXXXXXXXXX_!!2254228937.jpg",
            price: 212,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "七七之缘诗钎姿锦女装2015秋冬新款代购旗舰店高斯雪岚羽绒服",
            id: 4,
            img: "https://gd3.alicdn.com/bao/uploaded/i3/TB1VKOcKXXXXXXZXXXXXXXXXXXX_!!0-item_pic.jpg",
            price: 685,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "S家原创设计欧洲站女装街头风斗篷立领个性短款棉衣a字蓬蓬棉服女",
            id: 2,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/TB100kJKFXXXXbIXVXXXXXXXXXX_!!0-item_pic.jpg",
            price: 630,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "素缕2015冬装新款文艺百搭羊毛毛呢外套女九分袖短款SL546031栐",
            id: 1,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/2254228937/TB2pqExhpXXXXXkXXXXXXXXXXXX_!!2254228937.jpg",
            price: 212,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "七七之缘诗钎姿锦女装2015秋冬新款代购旗舰店高斯雪岚羽绒服",
            id: 4,
            img: "https://gd3.alicdn.com/bao/uploaded/i3/TB1VKOcKXXXXXXZXXXXXXXXXXXX_!!0-item_pic.jpg",
            price: 685,
            size: "S"
          }
        ]
      };
    },
    methods: {
      haveOrder() {
        this.$router.push({
          path: '/'
        });
      },
      _initScroll() {
        if (!this.orderScroll) {
          this.orderScroll = new BScroll(this.$refs.allOrderWrapper, {
            click: true
          });
        } else {
          this.orderScroll.refresh();
        }
      }
    },
    created() {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    components: {
      totalheader,
      allorderbottom
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .totalOrder
    .allorder-wrapper
      position: absolute
      top: 40px
      bottom: 0
      width: 100%
      overflow: hidden
      color: rgb(7, 17, 27)
      background: #f4f4f4
      .cart-main
        .cart-list
          position: relative
          margin-top: 12px
          background: white
          font-size: 0
          &:last-child
            margin-bottom: 12px
          .timeview
            position: relative
            height: 36px
            line-height: 36px
            padding-left: 18px
            border-1px(rgba(7, 17, 27, 0.1))
            .content
              font-size: 0.37rem
            .state
              position: absolute
              top: 0
              right: 20px
              font-size: 0.37rem
              color: #BB7904
          .viewcontent
            display: flex
            padding: 18px 18px 18px 14px
            .cartImage
              flex: 0 0 57px
              img
                width: 2.2rem
                height: 2.6rem
            .cart-desc
              flex: 1
              color: rgb(7, 17, 27)
              margin-left: 10px
              .name
                position: relative
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 2
                overflow: hidden
                margin: 2px 0 18px 0
                max-height: 0.85rem
                line-height: 0.46rem
                font-size: 0.37rem
              .content
                position: relative
                .color, .size, .count
                  line-height: 12px
                  font-size: 0.34rem
                .color
                  margin-right: 12px
                .count
                  position: absolute
                  top: 0
                  right: 12px
              .content-second
                margin-top: 18px
                .price
                  font-size: 0.37rem
                  color: rgb(240, 20, 20)
              .total-price
                margin-top: 24px
                font-size: 0
                .good-num
                  display: inline-block
                  margin-left: 64px
                  font-size: 0.34rem
                .total
                  display: inline-block
                  margin-left: 32px
                  font-size: 0.37rem
                @media only screen and (max-width: 320px)
                  .good-num
                    display: inline-block
                    margin-left: 40px
                    font-size: 0.34rem
                  .total
                    display: inline-block
                    margin-left: 32px
                    font-size: 0.37rem
          .view-state
            position: relative
            height: 56px
            before-1px(rgba(7, 17, 27, 0.1))
            .state-btn
              position: absolute
              top: 12px
              right: 20px
              display: inline-block
              width: 80px
              height: 32px
              line-height: 32px
              text-align: center
              font-size: 0.37rem
              font-family: "幼圆"
              color: #ffffff
              background: #F17C68
              border-radius: 16px
      .view-bottom
        width: 100%
        color: rgb(7, 17, 27)
        text-align: center
        .title
          display: block
          margin: 36px 0 16px 0
          font-size: 0.43rem
        .btn
          display: block
          width: 60px
          padding: 6px 12px
          margin: 0 auto
          line-height: 16px
          font-size: 0.37rem
          color: #ffffff
          background: #F17C68
          border-radius: 16px
</style>
