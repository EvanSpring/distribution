<template>
  <div class="login">
    <div class="login-header">
      <span class="login-icon"></span>
      <span class="iconadd icon-close" @click="exitLogin"></span>
    </div>
    <div class="login-wrapper">
      <div class="formaddress">
        <div class="consignee-wrapper">
          <div class="consignee">登陆账号</div>
          <div class="inputWrapper">
            <input class="consignee-input" type="text" placeholder="账号/邮箱/手机号">
          </div>
        </div>
        <div class="consignee-wrapper">
          <div class="consignee">联系方式</div>
          <div class="inputWrapper">
            <input class="consignee-input" type="text" placeholder="请输入手机号">
          </div>
        </div>
        <div class="consignee-wrapper">
          <div class="consignee">密码</div>
          <div class="inputWrapper">
            <input class="consignee-input" type="password" placeholder="请输入密码">
          </div>
        </div>
        <div class="consignee-wrapper">
          <div class="consignee">确认密码</div>
          <div class="inputWrapper">
            <input class="consignee-input" type="password" placeholder="再次确认密码">
          </div>
        </div>
        <div class="confirm">登录</div>
        <div class="new-user">
          <span class="msg-title">短信验证码登录</span>
          <span class="title">新用户注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      exitLogin() {
        this.$router.push({
          path: '/user'
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl";

  .login
    position: absolute
    top: 0
    bottom: 0
    width: 100%
    background: #ffffff
    .login-header
      position: relative
      width: 100%
      text-align: center
      color: rgb(7, 17, 27)
      .login-icon
        display: inline-block
        width: 68px
        height: 68px
        margin-top: 40px
        border-radius: 50%
        background: red
      .icon-close
        position: absolute
        top: 10px
        left: 10px
        font-size: 0.5rem
    .login-wrapper
      .formaddress
        padding: 18px
        .consignee-wrapper
          display: flex
          width: 100%
          height: 46px
          line-height: 46px
          font-size: 0.37rem
          color: rgb(7, 17, 27)
          background: #ffffff
          border-1px(rgba(7, 17, 27, 0.1))
          .consignee
            flex: 0 0 80px
            padding-left: 18px
          .inputWrapper
            flex: 1
            .consignee-input
              width: 100%
              border: 0
              outline: none
            .icon-youjiantou
              float: right
              margin-right: 12px
              font-size: 0.37rem
              color: rgb(7, 17, 27)
        .confirm
          height: 46px
          line-height: 46px
          margin: 16px auto 0 auto
          text-align: center
          border-radius: 24px
          font-size: 0.43rem
          color: #ffffff
          background: linear-gradient(to top right, #F40B04, #FE4A17);
          box-shadow: 0 4px 4px 0px rgba(254, 74, 23, 0.2)
        .new-user
          position: relative
          .msg-title
            line-height: 14px
            font-size: 0.37rem
          .title
            position: absolute
            top: 10px
            right: 0
            line-height: 14px
            font-size: 0.37rem
</style>
