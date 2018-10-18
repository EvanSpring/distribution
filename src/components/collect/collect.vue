<template>
  <div class="collect">
    <collectheader :title="collectTitle"></collectheader>
    <div class="collect-wrapper" ref="collectWrapper">
      <div class="cart-main" v-show="collectGoodsData.length">
        <ul>
          <li v-for="(order,index) in collectGoodsData" :key="index" class="cart-list">
            <!-- 购物车商品图片-->
            <div class="cartImage">
              <img :src="order.img">
            </div>
            <!--商品详情-->
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
          </li>
        </ul>
        <collectbottom></collectbottom>
      </div>
      <div class="collect-bottom" v-show="!collectGoodsData.length">
        <span class="title">你目前没有收藏</span>
        <span class="btn" @click="haveCollect">去收藏</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import collectheader from 'components/header/header';
  import collectbottom from 'components/bottom/bottom';

  export default {
    data() {
      return {
        collectTitle: '商品收藏',
        collectGoodsData: []
      };
    },
    methods: {
      haveCollect() {
        this.$router.push({
          path: '/'
        });
      },
      _initScroll() {
        if (!this.collectScroll) {
          this.collectScroll = new BScroll(this.$refs.collectWrapper, {
            click: true
          });
        } else {
          this.collectScroll.refresh();
        }
      }
    },
    created() {
      this.collectGoodsData = this.$store.state.collectGoods;
      console.log(this.collectGoodsData);
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    components: {
      collectheader,
      collectbottom
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .collect
    .collect-wrapper
      position: absolute
      top: 40px
      bottom: 0
      width: 100%
      overflow: hidden
      background: #f4f4f4
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

      .collect-bottom
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
