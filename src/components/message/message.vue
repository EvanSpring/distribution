<template>
  <div class="message">
    <msgheader :title="title"></msgheader>
    <div class="msg" ref="msg-wrapper">
      <ul>
        <li class="msg-list">
          <div class="left-msg">
            <span class="icon aftersale"></span>
            <span class="num" v-show="num>0">{{num}}</span>
          </div>
          <div class="right-msg">
            <h1 class="title">退货提醒</h1>
            <span class="text">您2017年7月12日的订单已退货</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import msgheader from 'components/header/header';

  export default {
    data() {
      return {
        title: '消息',
        num: 1
      };
    },
    components: {
      msgheader
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl";

  .message
    .msg
      position: absolute
      top: 40px
      bottom: 0
      width: 100%
      overflow: hidden
      color: rgb(7, 17, 27)
      background: #f4f4f4
      .msg-list
        display: flex
        margin-top: 12px
        padding: 18px
        background: #ffffff
        .left-msg
          position: relative
          flex: 0 0 60px
          width: 60px
          .icon
            display: inline-block
            width: 33px
            height: 36px
            background-size: 33px 36px
            background-repeat: no-repeat
            &.aftersale
              bg-image('aftersale')
          .num
            position: absolute
            top: 0
            right: 10px
            width: 20px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color: #ffffff
            background: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
        .right-msg
          flex: 1
          .title
            line-height: 18px
            font-size: 0.43rem
          .text
            display: inline-block
            line-height: 16px
            font-size: 0.37rem
            color: #B0B0B3
</style>
