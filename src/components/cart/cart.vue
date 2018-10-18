<template>
  <div class="cart">
    <cartheader :title="title" :editFlag="changeEditFlag" :active="active" @editMsg="editCart"></cartheader>
    <div class="cart-content" ref="cartWrapper">
      <div class="cart-main">
        <ul>
          <li v-for="(cart,index) in cartData" :key="index" class="cart-list">
            <!-- 购物车单选 -->
            <div class="cart-select" @click="danxuan(cart,$event)">
              <i class="iconfont icon-xuanzekuangmoren" v-show="!cart.IsSelect"></i>
              <i class="iconfont icon-xuanzekuangxuanzhong" v-show="cart.IsSelect"></i>
            </div>
            <!-- 购物车商品图片-->
            <div class="cartImage">
              <img :src="cart.img">
            </div>
            <!--商品详情-->
            <div class="cart-desc">
              <h1 class="name">{{cart.desc}}</h1>
              <div class="content">
                <span class="color">{{cart.color}}</span>
                <span class="size">{{cart.size}}码</span>
              </div>
              <div class="price">￥{{cart.price}}</div>
            </div>
            <div class="control">
              <cartcontrol :good="cart"></cartcontrol>
            </div>
          </li>
        </ul>
        <cartbottom></cartbottom>
      </div>
    </div>
    <!--去结算-->
    <div class="commit">
      <div class="selectall" @click="quanxuan">
        <i class="iconfont icon-xuanzekuangmoren" v-show="!boolSelect"></i>
        <i class="iconfont icon-xuanzekuangxuanzhong" v-show="boolSelect"></i>
        <span class="name">全选</span>
      </div>
      <div class="price-wrapper">
        <span class="title">总价格:</span>
        <span class="totalPrice">￥{{totalPrice}}</span>
      </div>
      <div class="delcart" v-if="delFlag" @click.stop.prevent="delCarts">删除</div>
      <div class="order" @click.stop.prevent="commitOrders" v-else>结算({{count}})</div>
    </div>
    <!--购物车为空-->
    <div class="hideDetail" v-show="!cartData.length">
      <img src="./gouwuche.png" alt="购物车图片">
      <h1 class="text">购物车是空的哦，快去购物吧</h1>
      <router-link :to="{name:'home'}">逛一逛</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  import BScroll from 'better-scroll';
  import { MessageBox } from "mint-ui";
  import cartheader from 'components/header/header';
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import cartbottom from 'components/bottom/bottom';

  export default {
    data() {
      return {
        title: '购物车',
        active: false,
        boolSelect: false,
        delFlag: false
      };
    },
    computed: {
      cartData() {
        return this.$store.state.carts;
      },
      totalPrice() {
        let totalPice = 0;
        this.cartData.forEach((cart) => {
          if (cart.IsSelect) {
            totalPice += cart.price * cart.count;
          }
        });
        return totalPice;
      },
      changeEditFlag() {
        let boolEdit = false;
        this.cartData.forEach((item) => {
          if (item.IsSelect) {
            boolEdit = true;
            return boolEdit;
          }
        });
        return boolEdit;
      },
      count() {
        let count = 0;
        this.cartData.forEach((cart) => {
          if (cart.IsSelect) {
            count++;
          }
        });
        return count;
      }
    },
    methods: {
      editCart() {
        this.delFlag = !this.delFlag;
        this.active = !this.active;
      },
      _initScroll() {
        if (!this.cartScroll) {
          this.cartScroll = new BScroll(this.$refs.cartWrapper, {
            click: true
          });
        } else {
          this.cartScroll.refresh();
        }
      },
      danxuan(cart, event) {
        if (!event._constructed) {
          return;
        }
        cart.IsSelect = !cart.IsSelect;
        if (!cart.IsSelect) {
          this.boolSelect = false;
        }
      },
      quanxuan() {
        this.boolSelect = !this.boolSelect;
        if (this.boolSelect) {
          this.$store.state.carts.forEach(cart => {
            cart.IsSelect = true;
          });
        } else {
          this.$store.state.carts.forEach(cart => {
            cart.IsSelect = false;
          });
        }
      },
      delCarts() {
        let data = this.$store.state.carts;
        let relSz = [];
        if (this.changeEditFlag) {
          if (this.boolSelect) {
            this.$store.commit('delAllCarts');
          } else {
            for (let i = 0; i < data.length; i++) {
              if (data[i].IsSelect) {
                relSz.push(data[i]);
              }
            }
            this.$store.commit('delCart', relSz);
          }
        } else {
          MessageBox('提示', '没有选中的商品');
        }
        this.$nextTick(() => {
          this._initScroll();
        });
      },
      commitOrders() {
        if (this.changeEditFlag) {
          this.$router.push({path: '/order'});
        } else {
          MessageBox('提示', '没有选中的商品,不能提交订单');
        }
      }
    },
    created() {
      this.cartData.forEach((cart) => {
        if (!cart.IsSelect) {
          Vue.set(cart, 'IsSelect', false);
        } else {
          cart.IsSelect = false;
        }
      });
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    components: {
      cartheader,
      cartcontrol,
      cartbottom
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cart
    .cart-content
      position: absolute
      top: 40px
      bottom: 0
      width: 100%
      overflow: hidden
      background: #F4F4F4
      .cart-main
        .cart-list
          position: relative
          display: flex
          margin-top: 12px
          padding: 18px 18px 18px 14px
          background: #ffffff
          font-size: 0
          .cart-select
            flex: 0 0 45px
            .iconfont
              display: inline-block
              margin-top: 1.2rem
              font-size: 0.48rem
              color: rgb(7, 17, 27)
            .icon-xuanzekuangxuanzhong
              color: #25b5fe
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
              font-size: 0
              .color, .size
                line-height: 12px
                font-size: 0.32rem
                color: rgb(77, 85, 93)
              .color
                margin-right: 12px
            .price
              margin-top: 0.4rem
              line-height: 24px
              font-size: 0.37rem
              color: rgb(240, 20, 20)
              font-weight: 700
          .control
            position: absolute
            bottom: 15px
            right: 20px
    .commit
      display: flex
      position: fixed
      left: 0
      bottom: 0
      width: 100%
      height: 48px
      line-height: 48px
      font-size: 0
      background: white
      .selectall
        flex: 0 0 80px
        color: rgb(7, 17, 27)
        .iconfont
          display: inline-block
          margin-left: 14px
          margin-right: 10px
          font-size: 0.48rem
        .icon-xuanzekuangxuanzhong
          color: #25b5fe
        .name
          display: inline-block
          vertical-align: top
          font-size: 0.37rem
      .price-wrapper
        flex: 0 0 4.8rem
        .title
          display: inline-block
          margin-right: 10px
          font-size: 0.37rem
          color: rgb(7, 17, 27)
        .totalPrice
          font-size: 0.43rem
          font-weight: 700
          color: rgb(240, 20, 20)
      .order, .delcart
        flex: 1
        text-align: center
        font-size: 0.37rem
        color: #fff
      .order
        background: #e3211e
      .delcart
        font-weight: 700
        background: #F55B43
    .hideDetail
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: 100
      background: #F4F4F4
      img
        width: 4.4rem
        height: 5.2rem
        display: block
        margin: auto
        padding-top: 1.5rem
      .text
        margin-top: 0.5rem
        text-align: center
        color: #959595
        font-size: 0.43rem
      a
        display: block
        margin: 0.8rem auto
        width: 110px
        height: 37px
        line-height: 37px
        border-radius: 4px
        text-align: center
        background: #e0524b
        color: #fff
        font-weight: 700
        font-size: 0.46rem
</style>
