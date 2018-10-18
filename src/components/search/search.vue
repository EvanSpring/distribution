<template>
  <div class="search">
    <!--搜索头部-->
    <div class="search-input border-1px">
      <span class="iconfont icon-sousuo"></span>
      <input class="input-class" type="text" @focus="focus" v-model.lazy="searchVal"
             placeholder="请输入商品名称">
      <span class="input-cancel" @click.stop.prevent="InputCancel">取消</span>
    </div>
    <!--搜索历史-->
    <transition name="history">
      <div class="search-content" v-show="focusShow" ref="historyWrapper">
        <div>
          <!--搜索推荐-->
          <div class="secondary">热门搜索</div>
          <ul class="search-recommend border-1px">
            <li v-for="(item,index) in recommendData" :key="index" @click.stop.prevent="hotSearch(item.name,$event)"
                class="search-item">
              <span class="title">{{item.name}}</span><span class="iconadd icon-close"></span>
            </li>
          </ul>
          <!--搜索历史列表-->
          <div class="hisheader border-1px">
            <h1 class="his-title">搜索历史</h1>
            <span class="cancel" @click.stop.prevent="delAll">清除历史</span>
          </div>
          <div class="history-wrapper">
            <ul>
              <li v-for="(item,index) in historyData" class="history-list" :key="index">
                <span class="text" @click.stop.prevent="historyClick(item.name,$event)">{{item.name}}</span>
                <span class="iconadd icon-close" @click.stop.prevent="delHistory($event,index)"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';

  export default {
    data() {
      return {
        focusShow: false,
        searchVal: '',
        recommendData: [
          {
            name: '时尚男装'
          },
          {
            name: '时尚女装'
          },
          {
            name: '可爱童装'
          },
          {
            name: '新款时尚裙装'
          },
          {
            name: '古典旗袍'
          },
          {
            name: '真皮男鞋'
          }
        ],
        historyData: []
      };
    },
    methods: {
      focus() {
        this.focusShow = true;
        this._initScroll();
      },
      InputCancel() {
        this.searchVal = '';
        this.focusShow = false;
      },
      hotSearch(name, event) {
        if (!event._constructed) {
          return;
        }
        console.log(name);
        this.focusShow = false;
      },
      historyClick(name, event) {
        if (!event._constructed) {
          return;
        }
        console.log(name);
        this.focusShow = false;
      },
      _initScroll() {
        this.$nextTick(() => {
          if (!this.searchScroll) {
            this.searchScroll = new BScroll(this.$refs.historyWrapper, {
              click: true
            });
          } else {
            this.searchScroll.refresh();
          }
        });
      },
      delAll(event) {
        if (!event._constructed) {
          return;
        }
        let len = this.historyData.length;
        this.historyData.splice(0, len);
      },
      delHistory(event, index) {
        if (!event._constructed) {
          return;
        }
        this.historyData.splice(index, 1);
        this._initScroll();
      }
    },
    watch: {
      'searchVal'() {
        if (this.searchVal !== '') {
          this.historyData.push(
            {
              name: this.searchVal
            }
          );
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .search
    width: 100%
    color: rgb(7, 17, 27)
    .search-input
      display: flex
      justify-content: center
      align-items: center
      position: relative
      padding: 10px 18px
      font-size: 0
      border-1px(rgba(7, 17, 27, 0.1))
      .input-class
        width: 70%
        height: 32px
        padding-left: 40px
        font-size: 0.37rem
        border: 0
        outline: none
        border-radius: 16px
        background: #F4F4F4
      .icon-sousuo
        display: inline-block
        position: absolute
        top: 50%
        left: 50px
        width: 20px
        height: 20px
        font-size: 0.5rem
        transform: translate(-50%, -50%)
      .input-cancel
        display: inline-block
        margin-left: 12px
        font-size: 0.37rem
    .search-content
      position: absolute
      top: 52px
      bottom: 48px
      width: 100%
      z-index: 60
      overflow: hidden
      box-sizing: border-box
      background: #ffffff
      font-size: 0.37rem
      transform: translate3d(0, 0, 0)
      &.history-enter-active, &.history-leave-active
        transition: all 0.2s linear
      &.history-enter, &.history-leave-active
        transform: translate3d(100%, 0, 0)
      .secondary
        padding: 12px 18px
        font-size: 0.37rem
        color: rgb(147, 153, 159)
      .search-recommend
        display: flex
        flex-wrap: wrap
        padding-left: 8px
        padding-bottom: 8px
        border-1px(rgba(7, 17, 27, 0.1))
        .search-item
          flex: 0 1 auto
          margin-bottom: 12px
          margin-right: 24px
          padding: 4px 12px
          text-align: center
          border: 1px solid #E3E3E3
          border-radius: 16px
          background: #FAF8F8
      .hisheader
        padding: 0 18px
        height: 40px
        line-height: 40px
        border-1px(rgba(7, 17, 27, 0.1))
        .his-title, .cancel
          font-size: 0.37rem
          color: rgb(147, 153, 159)
        .his-title
          float: left
        .cancel
          float: right
      .history-wrapper
        width: 100%
        background: #ffffff
        .history-list
          position: relative
          padding: 12px 18px
          line-height: 14px
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          border-1px(rgba(7, 17, 27, 0.1))
          .icon-close
            display: inline-block
            position: absolute
            top: 14px
            right: 20px
            font-size: 0.43rem
            color: rgb(143, 157, 159)
          &:last-child
            border-none()
</style>
