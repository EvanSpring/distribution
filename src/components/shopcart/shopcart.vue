<template>
  <div class="shopcart">
    <div class="content-wrapper">
      <div class="left-wrapper">
        <div class="left-content">
          <div class="store" @click.stop.prevent="collectShop">
            <span class="iconfont icon-dianpu"></span>
            <span class="shop">店铺</span>
          </div>
          <div class="collect" @click.stop.prevent="collectGood">
            <span class="iconfont icon-shoucangxuanzhong" v-if="collectFlag" :class="{'active': collectFlag}"></span>
            <span class="iconfont icon-shoucang" v-else></span>
            <span class="collect-text">收藏</span>
          </div>
          <div class="cart" @click.stop.prevent="showCart">
            <span class="iconfont icon-gouwu"></span>
            <span class="num" v-show="cartLen">{{cartLen}}</span>
            <span class="cart-text">购物车</span>
          </div>
        </div>
      </div>
      <div class="right-wrapper">
        <div class="right-content">
          <div class="addcart" @click.stop.prevent="addCart">加入购物车</div>
          <div class="order" @click.stop.prevent="commitOrder">立即购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Toast } from 'mint-ui';

  export default {
    computed: {
      collectFlag() {
        return this.$store.state.collectFlag;
      },
      cartLen() {
        return this.$store.state.carts.length;
      }
    },
    methods: {
      collectShop(event) {
        if (!event._constructed) {
          return;
        }
        Toast({
          message: "功能暂未开放,敬请期待",
          duration: 950,
          iconClass: "iconfont icon-bangzhuguanyuwomen"
        });
      },
      collectGood(event) {
        if (!event._constructed) {
          return;
        }
        this.$emit('collectGood');
      },
      showCart(event) {
        if (!event._constructed) {
          return;
        }
        this.$router.push({name: 'cart'});
      },
      addCart(event) {
        if (!event._constructed) {
          return;
        }
        this.$emit('addCart');
      },
      commitOrder(event) {
        if (!event._constructed) {
          return;
        }
        this.$emit('commitOrder');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .shopcart
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    height: 48px
    z-index: 60
    font-size: 0
    background: #fff
    .content-wrapper
      display: flex
      .left-wrapper
        flex: 1
        .left-content
          display: flex
          height: 48px
          text-align: center
          .store, .collect, .cart
            flex: 1
            .icon-dianpu, .icon-shoucang, .icon-shoucangxuanzhong, .icon-gouwu
              display: block
              margin: 3px 0
              font-size: 24px
              color: rgb(7, 17, 27)
              &.active
                color: #179dfe
            .shop, .collect-text, .cart-text
              font-size: 12px
              color: rgb(7, 17, 27)
          .cart
            position: relative
            .num
              position: absolute
              top: 0
              right: 6px
              width: 16px
              padding: 3px 2px
              text-align: center
              border-radius: 16px
              font-size: 9px
              font-weight: 700
              color: #ffffff
              background: rgb(240, 20, 20)
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
      .right-wrapper
        flex: 0 0 200px
        width: 200px
        @media only screen and (max-width: 320px)
          flex: 0 0 160px
          width: 160px
        .right-content
          display: flex
          .addcart, .order
            flex: 1
            height: 48px
            line-height: 48px
            text-align: center
            font-size: 0.37rem
            color: #fff
          .addcart
            background: #ff9800
          .order
            background: #e3211e
</style>
