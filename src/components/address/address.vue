<template>
  <div class="address">
    <div class="left-address">
      <span class="iconfont icon-shouhuodizhi"></span>
    </div>
    <div class="middle-address">
      <div class="user">
        <span class="username">收货人：{{addressData[0].userName}}</span>
        <span class="phone">{{addressData[0].userPhone}}</span>
      </div>
      <div class="text">收货地址：{{addressData[0].userAddress}}</div>
    </div>
    <div class="right-address" @click.stop.prevent="alertsmg">
      <span class="iconfont icon-youjiantou"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props: {
      addressFlag: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      addressData() {
        return this.$store.state.defaultAddress;
      }
    },
    methods: {
      alertsmg() {
        console.log('跳转到地址组件');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .address
    display: flex
    width: 100%
    padding: 12px 0 12px 12px
    color: rgb(7, 17, 27)
    background: #fff
    .left-address
      flex: 0 0 30px
      .icon-shouhuodizhi
        display: inline-block
        position: relative
        top: 32px
        left: 0
        font-size: 0.6rem
    .middle-address
      flex: 6
      .user
        margin-bottom: 8px
        .username, .phone
          font-size: 0.37rem
        .username
          margin-right: 12px
      .text
        position: relative
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        overflow: hidden
        margin: 2px 0 12px 0
        max-height: 40px
        line-height: 20px
        font-size: 0.37rem
    .right-address
      flex: 0 0 42px
      .icon-youjiantou
        display: inline-block
        position: relative
        top: 24px
        right: 0
        font-size: 0.43rem
</style>
