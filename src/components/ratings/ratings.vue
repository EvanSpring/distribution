<template>
  <transition name="rating">
    <scroll v-show="ratingFlag" class="wrapper" ref="scrollContent"
            :data="lastdata"
            :freshMsg="freshMsg"
            :pulldown="pulldown"
            :pullup="pullup"
            :flag="flag"
            :listenScroll="listenScroll"
            @getData="getData"
            @scrollToEnd="shanglajiazai">
      <div class="scroll-ratings">
        <div class="ratings">
          <div class="iconfont icon-zuojiantou" @click.stop.prevent="hideFlag"></div>
          <h1 class="title">商品评价</h1>
          <ratingselect @select="selectRating" @toggle="toggleContent" :ratings="good.ratings" :selectType="selectType"
                        :onlyContent="onlyContent"></ratingselect>
          <div class="rating-wrapper">
            <ul v-show="good.ratings && good.ratings.length">
              <li v-show="needShow(rating.rateType,rating.text)" v-for="(rating,index) in lastdata"
                  :key="index"
                  class="rating-item border-1px">
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img class="avatar" :src="rating.avatar" width="12" height="12">
                </div>
                <!--时间格式是时间戳,转化为yyyy-MM-dd hh:mm格式，使用vue中的filter实现-->
                <div class="time">{{rating.rateTime | formatDate}}</div>
                <p class="text">
                  <span
                      :class="rating.rateType === 0 ? 'iconadd icon-thumb_up': 'iconadd icon-thumb_down'"></span>{{rating.text}}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </scroll>
  </transition>
</template>

<script type="text/ecmascript-6">
  import ratingselect from 'components/ratingselect/ratingselect';
  import { formatDate } from 'common/js/date';
  import { mockTableData } from 'common/js/page';
  import scroll from 'components/scroll/scroll';

  const ALL = 2;
  export default {
    props: {
      good: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        lastdata: this._initData(),
        flag: false,
        count: 1, // 页码
        pagesize: 5, // 每页笔数
        freshMsg: false,
        listenScroll: true,
        pulldown: false,
        pullup: true,
        selectType: ALL,
        onlyContent: false,
        ratingFlag: false
      };
    },
    methods: {
      show() {
        this.ratingFlag = true;
        this.selectType = ALL;
        this.onlyContent = false;
      },
      hideFlag(event) {
        if (!event._constructed) {
          return;
        }
        this.ratingFlag = false;
      },
      shanglajiazai() {
        this.$refs.scrollContent.shanglajiazai();
      },
      getData() {
        this.count = this.count + 1;
        let tempData = this._initData();
        if (!tempData.length) {
          this.flag = true;
        } else {
          this.lastdata = this.lastdata.concat(this._initData());
        }
      },
      refreshData() {
        this.count = 1;
        this.lastdata = this._initData();
        this.flag = false;
      },
      _initData() {
        if (!this.good.ratings) {
          return;
        }
        let icondata = this.good.ratings;
        return mockTableData(this.count, this.pagesize, icondata);
      },
      selectRating(type) {
        this.selectType = type;
      },
      toggleContent(event) {
        this.onlyContent = !this.onlyContent;
      },
      needShow(type, text) {
        if (this.onlyContent && !text) {
          return false;
        }
        if (this.selectType === ALL) {
          return true;
        } else {
          return type === this.selectType;
        }
      }
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      }
    },
    created() {
      this.refreshData();
    },
    watch: {
      'good.ratings': function () {
        this.refreshData();
      }
    },
    components: {
      ratingselect,
      scroll
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl";

  .wrapper
    position: fixed
    top: 0
    bottom: 0
    width: 100%
    overflow: hidden
    z-index: 50
    background: #fff
    transform: translate3d(0, 0, 0)
    &.rating-enter-active, &.rating-leave-active
      transition: all 0.2s linear
    &.rating-enter, &.rating-leave-active
      transform: translate3d(100%, 0, 0)
    .scroll-ratings
      padding-top: 18px
      .ratings
        position: relative
        .icon-zuojiantou
          position: absolute
          top: -10px
          left: 6px
          padding: 10px
          font-size: 14px
        .title
          margin-top: 6px
          text-align: center
          line-height: 14px
          font-size: 14px
          color: rgb(7, 17, 27)
        .rating-wrapper
          padding: 0 18px
          .rating-item
            position: relative
            padding: 16px 0
            border-1px(rgba(7, 17, 27, 0.1))
            .user
              position: absolute
              right: 0
              top: 16px
              line-height: 12px
              font-size: 0
              .name
                display: inline-block
                vertical-align: top
                margin-right: 6px
                font-size: 10px
                color: rgb(147, 153, 159)
              .avatar
                border-radius: 50%
            .time
              margin-bottom: 6px
              line-height: 12px
              font-size: 10px
              color: rgb(147, 153, 159)
            .text
              line-height: 16px
              font-size: 12px
              color: rgb(7, 17, 27)
              .icon-thumb_up, .icon-thumb_down
                margin-right: 4px
                line-height: 16px
                font-size: 12px
              .icon-thumb_up
                color: rgb(0, 160, 220)
              .icon-thumb_down
                color: rgb(147, 153, 159)
</style>
