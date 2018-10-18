<template>
  <div>
    <div class="good">
      <v-header :title="title"></v-header>
      <div class="good-wrapper">
        <div>
          <ul class="title-wrapper border-1px">
            <li class="choose-item" v-tap="{methods:testChange,numric:1}" :class="{'active':num===1}">
              <span class="choose-title">综合</span>
              <span class="iconadd" :class="showDetail? 'icon-circle-up':'icon-circle-down'"></span>
            </li>
            <li class="choose-item" @click="btnChange(2)" :class="{'active':num===2}">
              <span class="choose-title">销量</span>
            </li>
            <li class="choose-item" @click="btnChange(3)" :class="{'active':num===3}">
              <span class="choose-title">价格</span>
            </li>
            <li class="choose-item" @click="btnChange(4)" :class="{'active':num===4}">
              <span class="choose-title">热卖</span>
            </li>
          </ul>
          <transition name="fade">
            <div class="choose-detail" v-show="showDetail">
              <ul>
                <li class="pulldown-wrapper" @click="btnChange(5)" :class="{'active':num===5}">
                  <span class="title">综合排序</span>
                  <span class="iconfont icon-icon--" v-show="num===5"></span>
                </li>
                <li class="pulldown-wrapper" @click="btnChange(6)" :class="{'active':num===6}">
                  <span class="title">仅看有货</span>
                  <span class="iconfont icon-icon--" v-show="num===6"></span>
                </li>
                <li class="pulldown-wrapper" @click="btnChange(7)" :class="{'active':num===7}">
                  <span class="title">折扣优先</span>
                  <span class="iconfont icon-icon--" v-show="num===7"></span>
                </li>
                <li class="pulldown-wrapper" @click="btnChange(8)"
                    :class="{'active':num===8}">
                  <span class="title">新品上架</span>
                  <span class="iconfont icon-icon--" v-show="num===8"></span>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
      <div class="good-detailWrapper" ref="detailWrapper">
        <div>
          <ul class="clearfix">
            <li v-for="item in listdata" :key="item.id" class="goodlist" @click="selectGoodBtn(item,$event)">
              <div class="image">
                <img v-lazy="item.img" alt="图片">
              </div>
              <div class="price">
                <span class="now">￥{{item.newPrice}}</span>
                <span v-show="item.oldPrice" class="old">￥{{item.oldPrice}}</span>
                <span v-show="item.discount" class="discount">{{item.discount}}折</span>
              </div>
              <p class="desc">{{item.desc}}</p>
              <span class="iconfont icon-cart"></span>
            </li>
          </ul>
          <goodbottom></goodbottom>
        </div>
      </div>
    </div>
    <gooddetail :good="selectGood" ref="gooddetail"></gooddetail>
    <transition name="mask">
      <div class="list-mask" v-show="showDetail" @click="hideList"></div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import header from 'components/header/header';
  import goodbottom from 'components/bottom/bottom';
  import gooddetail from 'components/good/goodDetails';

  const ERR_OK = 0;
  export default {
    data() {
      return {
        listdata: [],
        title: '',
        num: 0,
        showDetail: false,
        selectGood: {}
      };
    },
    methods: {
      testChange: function (params) {
        this.num = params.numric;
        if (params.numric === 1) {
          this.showDetail = !this.showDetail;
        }
      },
      btnChange(num) {
        this.num = num;
        if (num <= 4 && num > 1) {
          this.showDetail = false;
        }
      },
      _initScroll() {
        this.goodScroll = new BScroll(this.$refs.detailWrapper, {
          click: true
        });
      },
      selectGoodBtn(good, event) {
        if (!event._constructed) {
          return;
        } else {
          this.selectGood = good;
          this.$refs.gooddetail.show();
        }
      },
      hideList() {
        this.showDetail = false;
      }
    },
    components: {
      'v-header': header,
      goodbottom,
      gooddetail
    },
    created() {
      let id = parseInt(this.$route.query.id);
      this.title = this.$route.query.name;
      this.$api.goodquery().then(res => {
        if (res.errno === ERR_OK) {
          let result = res.data;
          for (let i = 0; i < result.length; i++) {
            if (id === result[i].id) {
              this.listdata = result[i].gooddetail;
            }
          }
          this.$nextTick(() => {
            if (!this.goodScroll) {
              this._initScroll();
            } else {
              this.goodScroll.refresh();
            }
          });
        }
      }).catch(error => {
        console.log(error);
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .good
    .good-wrapper
      position: relative
      z-index: 20
      .title-wrapper
        display: flex
        text-align: center
        box-sizing: border-box
        border-1px(rgba(7, 17, 27, 0.1))
        .choose-item
          flex: 1
          display: block
          padding: 12px 0
          font-size: 0
          color: rgb(7, 17, 27)
          &.active
            color: rgb(241, 126, 105)
          .choose-title
            margin-right: 4px
            line-height: 16px
            font-size: 0.37rem
          .iconadd
            font-size: 0.32rem
      .choose-detail
        position: absolute
        top: 40px
        left: 0
        width: 100%
        z-index: 10
        background: #fff
        box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.4)
        transform: translate3d(0, 0, 0)
        opacity: 1
        &.fade-enter-active, &.fade-leave-active
          transition: all 0.5s
        &.fade-enter, &.fade-leave-active
          transform: translate3d(0, -200%, 0)
          opacity: 0
        .pulldown-wrapper
          height: 36px
          line-height: 36px
          padding: 0 24px
          font-size: 0
          &.active
            color: rgb(241, 126, 105)
          .title
            float: left
            font-size: 0.37rem
          .icon-icon--
            float: right
            font-size: 0.48rem
    .good-detailWrapper
      position: absolute
      top: 80px
      bottom: 0
      width: 100%
      overflow: hidden
      .goodlist
        display: inline-block
        float: left
        width: 50%
        box-sizing: border-box
        overflow: hidden
        background: #fff
        .image
          img
            width: 100%
            height: 6rem
        .price
          margin-top: 6px
          line-height: 14px
          font-size: 0
          .now
            margin: 0 8px
            font-size: 0.37rem
            font-weight: 700
            color: rgb(240, 20, 0)
          .old
            margin-right: 8px
            font-size: 0.27rem
            color: rgb(147, 153, 159)
            text-decoration: line-through
          .discount
            font-size: 0.27rem
            color: rgb(147, 153, 159)
        .desc
          margin: 6px 0 6px 8px
          position: relative;
          display: -webkit-box
          -webkit-box-orient: vertical
          -webkit-line-clamp: 2
          overflow: hidden
          line-height: 20px
          max-height: 40px
          font-size: 0.32rem
          color: #4d555d
        .icon-cart
          display: block
          margin-left: 8px
          margin-bottom: 6px
          line-height: 16px
          font-size: 0.43rem
          color: #4d555d

  .list-mask
    position: fixed
    top: 80px
    left: 0
    width: 100%
    height: 100%
    z-index: 10
    backdrop-filter: blur(10px)
    opacity: 1
    background: rgba(7, 17, 27, 0.6)
    &.mask-enter-active, &.mask-leave-active
      transition: all 0.5s
    &.mask-enter, &.mask-leave-active
      opacity: 0

  img[lazy=loading] {
    background-size: 100% 6rem
    background-repeat: no-repeat
    background-image: url("loading.gif")
  }

  img[lazy=error] {
    background: url('err.png');
  }
</style>
