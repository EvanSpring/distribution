<template>
  <div>
    <div class="shopcart">
      <!--购物展开详情页-->
      <transition name="fold">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header border-1px">
            <h1 class="title">{{showTitle}}</h1>
            <div class="empty" @click="empty"><span class="iconadd icon-close"></span></div>
          </div>
          <div class="list-content">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" v-show="listShow" @click="hideList"></div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props: {
      fold: {
        type: Boolean,
        default: false
      },
      showTitle: {
        type: String,
        default: ''
      }
    },
    data() {
      return {};
    },
    computed: {
      listShow() {
        return this.fold;
      }
    },
    methods: {
      empty() {
        this.$emit('hideList');
      },
      hideList() {
        this.$emit('hideList');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl";

  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 60
    width: 100%
    .shopcart-list
      position: absolute
      top: 0
      left: 0
      z-index: -1
      width: 100%
      transform: translate3d(0, -100%, 0)
      &.fold-enter-active, &.fold-leave-active
        transition: all 0.5s
      &.fold-enter, &.fold-leave-active
        transform: translate3d(0, 0, 0)
      .list-header
        height: 48px
        line-height: 48px
        padding: 0 18px
        border-1px(rgba(7, 17, 27, 0.1))
        background: #ffffff
        .title
          float: left
          font-size: 0.43rem
          font-weight: 700
          color: rgb(7, 17, 27)
        .empty
          float: right
          .icon-close
            font-size: 0.6rem
            color: rgb(0, 160, 220)
      .list-content
        height: 8rem
        padding: 18px
        color: rgb(7, 17, 27)
        background: #fff
  .list-mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 10
    backdrop-filter: blur(10px)
    opacity: 1
    background: rgba(7, 17, 27, 0.6)
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.5s
    &.fade-enter, &.fade-leave-active
      opacity: 0
</style>
