<template>
  <div class="bottom-wrapper">
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/home">
          <div class="icon-wrapper">
            <i class="iconfont icon-shouye_xuanzhong" v-if="showActive ==='home'"></i>
            <i class="iconfont icon-shouye2" v-else></i>
          </div>
          <span class="title">首页</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/classify">
          <div class="icon-wrapper">
            <i class="iconfont icon-fenleixuanzhong" v-if="showActive==='classify'"></i>
            <i class="iconfont icon-fenlei-copy" v-else></i>
          </div>
          <span class="title">分类</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/cart">
          <div class="icon-wrapper">
            <i class="iconfont icon-dongtaixuanzhong" v-if="showActive ==='cart'"></i>
            <i class="iconfont icon-dongtai" v-else></i>
          </div>
          <span class="title">购物车</span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/user">
          <div class="icon-wrapper">
            <i class="iconfont icon-wode-" v-if="showActive ==='user'"></i>
            <i class="iconfont icon-wode" v-else></i>
          </div>
          <span class="title">我的</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        active: 'home'
      };
    },
    computed: {
      showActive() {
        this.active = this.$route.path.substr(1);
        return this.active;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .bottom-wrapper
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    background: #fff
    .tab
      display: flex
      width: 100%
      padding: 10px 0 3px 0
      border-top: 1px solid rgba(7, 17, 27, 0.1)
      .tab-item
        flex: 1
        text-align: center
        font-size: 0
        .icon-wrapper
          display: block
          margin-bottom: 3px
          .iconfont
            font-size: 0.64rem
        .title
          line-height: 0.32rem
          font-size: 0.32rem
        & > a
          display: block
          font-size: 0.37rem
          color: rgb(77, 85, 93)
          &.active
            color: #F17C68
</style>
