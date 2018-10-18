<template>
  <div class="pcenter">
    <pcheader :title="pctitle"></pcheader>
    <div class="pc-wrapper">
      <div class="pctop">
        <div class="userimg border-1px">
          <span class="title">头像</span>
          <img class="user-img" src="https://gd1.alicdn.com/imgextra/i1/0/TB1jU_0of6H8KJjSspmXXb2WXXa_!!0-item_pic.jpg">
        </div>
        <div class="account border-1px">
          <span class="title">账号</span>
          <span class="text">15156054294</span>
        </div>
      </div>
      <div class="pcbottom">
        <div class="account border-1px">
          <span class="title">姓名</span>
          <span class="text">张伟</span>
        </div>
        <div class="account border-1px">
          <span class="title">联系方式</span>
          <span class="text">15156054294</span>
        </div>
        <div class="account receive-address border-1px" @click="skipAddress">
          <span class="title">收货地址</span>
          <span class="text"><span class="iconfont icon-youjiantou"></span></span>
        </div>
      </div>
      <div class="pc-exit" @click="exitUser">退出登录</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import pcheader from 'components/header/header';
  import { Toast } from 'mint-ui';

  export default {
    data() {
      return {
        pctitle: '我的账户'
      };
    },
    methods: {
      skipAddress() {
        this.$router.push({
          path: '/editAddress'
        });
      },
      exitUser() {
        Toast({
          message: "用户已退出"
        });
      }
    },
    components: {
      pcheader
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl";

  .pcenter
    .pc-wrapper
      position: absolute
      top: 40px
      bottom: 0
      width: 100%
      font-size: 0.37rem
      color: rgb(7, 17, 27)
      background: #F4F4F4
      .pctop
        padding: 0 18px
        margin-top: 12px
        background: #ffffff
        .userimg
          height: 66px
          line-height: 66px
          border-1px(rgba(7, 17, 27, 0.1))
          .title
            float: left
          .user-img
            float: right
            width: 46px
            height: 46px
            margin-top: 12px
            border-radius: 50%
        .account
          height: 56px
          line-height: 56px
          .title
            float: left
          .text
            float: right
            color: #B0B0B3
      .pcbottom
        padding: 0 18px
        margin-top: 12px
        background: #ffffff
        .account
          height: 56px
          line-height: 56px
          border-1px(rgba(7, 17, 27, 0.1))
          &.receive-address
            border-none()
          .title
            float: left
          .text
            float: right
            color: #B0B0B3
            .icon-youjiantou
              font-size: 0.37rem
              color: rgb(7, 17, 27)
      .pc-exit
        width: 60%
        height: 36px
        line-height: 36px
        margin: 60px auto
        text-align: center
        border-radius: 16px
        font-size: 0.37rem
        color: #ffffff
        background: linear-gradient(to top right, #F40B04, #FE4A17);
        box-shadow: 0 4px 4px 0px rgba(254, 74, 23, 0.2)
</style>
