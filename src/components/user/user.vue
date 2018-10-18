<template>
  <div class="user">
    <!--better-scroll滑动容器-->
    <div class="better-scroll" ref="userWrapper">
      <div class="total-wrapper">
        <!--上半部内容-->
        <div class="login-wrapper">
          <h1 class="title">我的</h1>
          <span class="iconpng msg" @click="returnMsg"></span>
          <img class="userImg" src="https://gd1.alicdn.com/imgextra/i1/0/TB1jU_0of6H8KJjSspmXXb2WXXa_!!0-item_pic.jpg"
               width="68px" height="68px" v-show="username!==''" @click="getUser">
          <span class="nouser" v-show="username ===''" @click="login"></span>
          <div class="login">
            <span class="text" v-show="username!==''" @click="getUser">{{username}}</span>
            <span class="text" v-show="username === ''" @click="login">登录/注册</span>
            <span class="iconfont icon-youjiantou" v-show="username === ''" @click="login"></span>
          </div>
        </div>
        <!--我的订单-->
        <div class="user-order">
          <!--上部分-->
          <div class="top-wrapper border-1px before-1px" @click="allOrder(0)">
            <span class="owner-order">我的订单</span>
            <span class="watch">查看全部<span class="iconfont icon-youjiantou"></span></span>
          </div>
          <!--下部分-->
          <div class="gnwrapper">
            <div class="item">
              <span class="icon obligation" @click="allOrder(1)"></span>
              <div class="content">待付款</div>
            </div>
            <div class="item">
              <span class="icon receive" @click="allOrder(2)"></span>
              <div class="content">待收货</div>
            </div>
            <div class="item">
              <span class="icon evaluate" @click="allOrder(3)"></span>
              <div class="content">待评价</div>
            </div>
            <div class="item">
              <span class="icon aftersale" @click="allOrder(4)"></span>
              <div class="content">退换/售后</div>
            </div>
          </div>
        </div>
        <!--服务-->
        <div class="service-wrapper">
          <h1 class="title">服务</h1>
          <ul class="list-wrapper">
            <li class="list-item" @click="returnCollect">
              <span class="icon goods"></span>
              <div class="content">商品收藏</div>
            </li>
            <li class="list-item" @click="shopCollect">
              <span class="icon shops"></span>
              <div class="content">店铺收藏</div>
            </li>
            <li class="list-item" @click="viewHistory">
              <span class="icon views"></span>
              <div class="content">浏览记录</div>
            </li>
            <li class="list-item" @click="shopCollect">
              <span class="icon services"></span>
              <div class="content">联系客服</div>
            </li>
            <li class="list-item" @click="shopCollect">
              <span class="icon setting"></span>
              <div class="content">设置</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <userfooter></userfooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import userfooter from 'components/footer/footer';
  import { Toast } from 'mint-ui';

  export default {
    data() {
      return {
        username: '张伟'
      };
    },
    methods: {
      returnMsg() {
        this.$router.push({
          path: '/msg'
        });
      },
      getUser() {
        this.$router.push({
          path: '/pcenter'
        });
      },
      login() {
        this.$router.push({
          path: '/login'
        });
      },
      allOrder(num) {
        switch (num) {
          case 0:
            this.$router.push({
              path: '/totalorder',
              state: 0
            });
            break;
          case 1:
            this.$router.push({
              path: '/totalorder',
              state: 1
            });
            break;
          case 2:
            this.$router.push({
              path: '/totalorder',
              state: 2
            });
            break;
          case 3:
            this.$router.push({
              path: '/totalorder',
              state: 3
            });
            break;
          default:
            this.$router.push({
              path: '/totalorder',
              state: 4
            });
            break;
        }
      },
      returnCollect() {
        this.$router.push({
          path: '/collect'
        });
      },
      viewHistory() {
        this.$router.push({
          path: '/viewhistory'
        });
      },
      shopCollect() {
        Toast({
          message: "功能暂未开放,敬请期待",
          duration: 950,
          iconClass: "iconfont icon-bangzhuguanyuwomen"
        });
      }
    },
    components: {
      userfooter
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl";

  .user
    .better-scroll
      position: fixed
      top: 0
      bottom: 48px
      width: 100%
      background: #F4F4F4
      overflow: hidden
      .total-wrapper
        .login-wrapper
          position: relative
          width: 100%
          height: 5.33rem
          text-align: center
          color: rgb(7, 17, 27)
          background: #fdfdfd
          .title
            padding-top: 16px
            padding-bottom: 32px
            line-height: 16px
            font-size: 0.43rem
          .iconpng
            position: absolute
            top: 12px
            right: 20px
            display: inline-block
            width: 18px
            height: 18px
            cursor: pointer
            background-size: 18px 18px
            background-repeat: no-repeat
            &.msg
              bg-image('msg')
          .userImg
            width: 68px
            height: 68px
            border-radius: 50%
          .nouser
            display: inline-block
            width: 68px
            height: 68px
            border-radius: 50%
            background: #F4F4F4
          .login
            margin-top: 8px
            font-size: 0
            .text
              display: inline-block
              letter-spacing: 2px
              line-height: 14px
              font-size: 0.37rem
            .icon-youjiantou
              display: inline-block
              margin-left: 8px
              line-height: 16px
              font-size: 0.37rem
        .user-order
          color: rgb(7, 17, 27)
          background: #ffffff
          .top-wrapper
            height: 60px
            line-height: 60px
            padding: 0 18px
            font-size: 0.37rem
            before-1px(rgba(7, 17, 27, 0.1))
            border-1px(rgba(7, 17, 27, 0.1))
            @media only screen and (max-width: 320px)
              height: 40px
              line-height: 40px
            .owner-order
              display: inline-block
              float: left
            .watch
              display: inline-block
              float: right
              .icon-youjiantou
                display: inline-block
                margin-left: 10px
                font-size: 0.37rem
          .gnwrapper
            display: flex
            padding: 10px
            font-size: 0.37rem
            .item
              flex: 1
              text-align: center
              .icon
                display: inline-block
                width: 33px
                height: 27px
                margin-bottom: 10px
                background-size: 33px 27px
                background-repeat: no-repeat
                &.obligation
                  bg-image('obligation')
                &.receive
                  bg-image('receive')
                &.evaluate
                  bg-image('evaluate')
                &.aftersale
                  bg-image('aftersale')
        .service-wrapper
          margin-top: 12px
          color: rgb(7, 17, 27)
          background: #ffffff
          .title
            padding: 18px
            font-size: 0.37rem
          .list-wrapper
            width: 100%
            display: flex
            flex-wrap: wrap
            .list-item
              flex: 0 1 25%
              width: 25%
              margin-bottom: 12px
              text-align: center
              .icon
                display: inline-block
                width: 20px
                height: 20px
                margin: 10px 0
                background-size: 20px 20px
                background-repeat: no-repeat
                &.goods
                  bg-image('goods')
                &.shops
                  bg-image('shops')
                &.views
                  bg-image('views')
                &.services
                  bg-image('services')
                &.setting
                  bg-image('setting')
              .content
                font-size: 0.37rem
</style>
