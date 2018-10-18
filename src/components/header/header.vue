<template>
  <div class="header border-1px">
    <span class="iconfont icon-zuojiantou" v-tap="{methods:returnPath}"></span>
    <div class="title-wrapper"><span class="title">{{title}}</span></div>
    <div class="edit-btn" v-show="editFlag" @click.stop.prevent="editMsg">
      <span class="iconfont icon-bianji" :class="{'active':active}"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '商品详情'
      },
      editFlag: {
        type: Boolean,
        default: false
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      returnPath() {
        this.$router.go(-1);
      },
      editMsg() {
        this.$emit('editMsg');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .header
    position: relative
    width: 100%
    height: 40px
    line-height: 40px
    font-size: 0
    box-sizing: border-box
    border-1px(rgba(7, 17, 27, 0.1))
    .icon-zuojiantou
      display: block
      position: absolute
      top: -10px
      left: 10px
      padding: 10px
      font-size: 0.48rem
      color: rgb(147, 153, 159)
    .title-wrapper
      text-align: center
      .title
        font-size: 0.43rem
        color: rgb(7, 17, 27)
    .edit-btn
      position: absolute
      top: 0;
      right: 12px;
      .icon-bianji
        font-size: 0.46rem
        color: rgb(7, 17, 27)
        &.active
          color: #e0524b
</style>
