<template>
  <div>
    <transition name="move">
      <div class="goodDetail" v-show="showFlag" ref="goodDetail">
        <div class="good-content">
          <div class="image-header" v-show="good.imageData">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="(list, index) in good.imageData" :key="index">
                <img :src="list.swiper">
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="image-headerno" v-show="!good.imageData || !good.imageData.length">
            <img :src="good.img">
          </div>
          <div class="logo-wrapper">
            <div class="back" @click.stop.prevent="hideDetail">
              <i class="iconfont icon-zuojiantou"></i>
            </div>
          </div>
          <div class="content">
            <div class="price">
              <span class="now">￥{{good.newPrice}}</span>
              <span v-show="good.oldPrice" class="old">￥{{good.oldPrice}}</span>
              <span v-show="good.discount" class="discount">{{good.discount}}折</span>
            </div>
            <div class="desc">{{good.desc}}</div>
          </div>
          <split></split>
          <div class="count-wrapper">
            <div class="count">数量</div>
            <div class="position">
              <cartcontrol :good="good"></cartcontrol>
            </div>
          </div>
          <split v-show="good.goodSize"></split>
          <div class="size-wrapper" v-show="good.goodSize">
            <h1 class="title">尺码</h1>
            <div class="size">
              <selectgood @selectName="selectSize" :num="sizeNum" :selectData="good.goodSize"></selectgood>
            </div>
          </div>
          <split v-show="good.goodColor"></split>
          <div class="color-wrapper color-wrapper-hook" v-show="good.goodColor">
            <h1 class="title">颜色</h1>
            <div class="color">
              <selectgood @selectName="selectColor" :num="colorNum" :selectData="good.goodColor"></selectgood>
            </div>
          </div>
          <split></split>
          <v-address></v-address>
          <split v-show="good.ratings"></split>
          <div class="rating">
            <h1 class="title">商品评价</h1>
            <ratingselect @select="selectRating" @toggle="toggleContent" :ratings="good.ratings"
                          :selectType="selectType"
                          :onlyContent="onlyContent"></ratingselect>
            <div class="rating-wrapper">
              <ul v-show="good.ratings && good.ratings.length">
                <li v-show="needShow(rating.rateType,rating.text,index)" v-for="(rating,index) in good.ratings"
                    :key="index"
                    class="rating-item border-1px">
                  <div class="user">
                    <span class="name">{{rating.username}}</span>
                    <img class="avatar" :src="rating.avatar" width="12" height="12">
                  </div>
                  <!--时间格式是时间戳,转化为yyyy-MM-dd hh:mm格式，使用vue中的filter实现-->
                  <div class="time">{{rating.rateTime | formatDate}}</div>
                  <p class="text">
                    <!--对象的方式:{'icon-thumb_up':rating.rateType === 0,'icon-thumb_down': rating.rateType === 1},三元表达式的方式:rating.rateType === 0 ? 'icon-thumb_up': 'icon-thumb_down'-->
                    <span
                        :class="rating.rateType === 0 ? 'iconadd icon-thumb_up': 'iconadd icon-thumb_down'"></span>{{rating.text}}
                  </p>
                </li>
              </ul>
              <div v-show="good.ratings && good.ratings.length>6" class="view-all" @click="viewAllRating">查看全部</div>
              <div v-show="!good.ratings || !good.ratings.length" class="no-rating">暂无评价</div>
            </div>
          </div>
          <split v-show="good.imageData && good.imageData.length"></split>
          <div class="goodDetailBox" v-show="good.imageData && good.imageData.length">
            <div class="desc">图文详情</div>
            <div class="goodDetailImg">
              <p v-for="(Image,index) in good.imageData" :key="index">
                <img v-bind:src="Image.swiper" alt="详情图片">
              </p>
            </div>
          </div>
          <gooddetailbottom></gooddetailbottom>
        </div>
        <shopcart @addCart="addCart" @collectGood="collectGood" @commitOrder="commitOrder"></shopcart>
      </div>
    </transition>
    <ratings :good="good" ref="ratingscomponent"></ratings>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import { Toast, MessageBox } from "mint-ui";
  import split from 'components/split/split';
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import selectgood from 'components/select/select';
  import address from 'components/address/address';
  import ratingselect from 'components/ratingselect/ratingselect';
  import ratings from 'components/ratings/ratings';
  import gooddetailbottom from 'components/bottom/bottom';
  import shopcart from 'components/shopcart/shopcart';
  import { formatDate } from 'common/js/date';

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
        showFlag: false,
        size: '',
        color: '',
        sizeNum: 0,
        colorNum: 0,
        selectType: ALL,
        onlyContent: false,
        ratingData: [],
        selectCart: []
      };
    },
    computed: {
      findCollect() {
        return this.$store.getters.findCollect(this.good.id);
      },
      collectFlag() {
        return this.$store.state.collectFlag;
      }
    },
    methods: {
      show() {
        this.showFlag = true;
        this.selectType = ALL;
        this.onlyContent = false;
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.goodDetail, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      },
      hideDetail(event) {
        if (!event._constructed) {
          return;
        }
        this.showFlag = false;
      },
      selectSize(name, num) {
        this.size = name;
        this.sizeNum = num;
      },
      selectColor(name, num) {
        this.color = name;
        this.colorNum = num;
      },
      selectRating(type) {
        this.selectType = type;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
      toggleContent() {
        this.onlyContent = !this.onlyContent;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
      needShow(type, text, index) {
        if (index > 5) {
          return false;
        }
        if (this.onlyContent && !text) {
          return false;
        }
        if (this.selectType === ALL) {
          return true;
        } else {
          return type === this.selectType;
        }
      },
      viewAllRating(event) {
        if (!event._constructed) {
          return;
        }
        this.$refs.ratingscomponent.show();
      },
      collectGood() {
        if (!this.collectFlag) {
          if (!this.findCollect.length) {
            let data = {
              id: this.good.id,
              img: this.good.img,
              price: this.good.newPrice,
              desc: this.good.desc,
              size: this.size,
              color: this.color,
              count: this.good.count
            };
            this.$store.dispatch('setCollect', data);
            Toast({
              message: "商品收藏成功！",
              duration: 950,
              iconClass: "iconadd icon-checkmark"
            });
          } else {
            MessageBox("提示", "商品已收藏");
          }
        } else {
          this.$store.dispatch('delCollect', this.good.id);
          Toast({
            message: "取消收藏",
            duration: 950,
            iconClass: "iconadd icon-checkmark"
          });
        }
      },
      addCart() {
        if (parseInt(this.good.count) > 0) {
          let data = {
            id: this.good.id,
            img: this.good.img,
            price: this.good.newPrice,
            desc: this.good.desc,
            size: this.size,
            key: this.good.id + this.size + this.color,
            color: this.color,
            count: parseInt(this.good.count)
          };
          if (this.$store.state.carts.length) {
            let tempResult = this.$store.state.carts.filter((item) => item.key === data.key);
            if (tempResult.length) {
              this.$store.state.carts.forEach((cart) => {
                if (cart.key === data.key) {
                  cart.count += data.count;
                }
              });
            } else {
              this.$store.dispatch('setCart', data);
            }
          } else {
            this.$store.dispatch('setCart', data);
          }
          Toast({
            message: "加入购物车成功！",
            duration: 950,
            iconClass: "iconadd icon-checkmark"
          });
        } else {
          MessageBox('提示', '商品数量不能为空!');
        }
      },
      commitOrder() {
        if (parseInt(this.good.count) > 0) {
          // 如果是在商品详情界面直接提交订单，则直接进入订单界面
          let data = {
            id: this.good.id,
            img: this.good.img,
            price: this.good.newPrice,
            desc: this.good.desc,
            size: this.size,
            key: this.good.id + this.size + this.color,
            color: this.color,
            count: parseInt(this.good.count)
          };
          MessageBox.confirm('确定提交订单吗?').then(action => {
            this.$store.commit('directSetCart', data);
            this.$router.push({path: '/order'});
          });
        } else {
          MessageBox('提示', '商品数量不能为空!');
        }
      }
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      }
    },
    watch: {
      'good'() {
        if (!this.findCollect.length) {
          this.$store.dispatch('hideFlag');
        } else {
          this.$store.dispatch('showFlag');
        }
      }
    },
    components: {
      split,
      cartcontrol,
      selectgood,
      'v-address': address,
      ratingselect,
      ratings,
      gooddetailbottom,
      shopcart
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .goodDetail
    position: fixed
    top: 0
    bottom: 0
    z-index: 40
    width: 100%
    background: #fff
    transform: translate3d(0, 0, 0)
    &.move-enter-active, &.move-leave-active
      transition: all 0.2s linear
    &.move-enter, &.move-leave-active
      transform: translate3d(100%, 0, 0)
    .good-content
      position: relative
      .image-header, .image-headerno
        position: relative
        width: 100%
        img
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .image-header
        height: 10rem
      .image-headerno
        height: 100%
        padding-top: 100%
      .logo-wrapper
        position: absolute
        top: 10px
        left: 10px
        width: 46px
        height: 46px
        padding: 6px
        box-sizing: border-box
        .back
          width: 100%
          height: 100%
          text-align: center
          border-radius: 50%
          background: rgba(7, 17, 27, 0.4)
          .icon-zuojiantou
            display: block
            padding-top: 10px
            font-size: 16px
            color: #fff
      .content
        position: relative
        padding: 18px
        .price
          margin-top: 10px
          line-height: 14px
          font-size: 0
          .now
            margin-left: 4px
            margin-right: 8px
            font-size: 0.64rem
            color: rgb(240, 20, 0)
          .old
            margin-right: 16px
            font-size: 0.43rem
            color: rgb(147, 153, 159)
            text-decoration: line-through
          .discount
            font-size: 0.43rem
            color: rgb(147, 153, 159)
        .desc
          padding: 6px 0 6px 8px
          line-height: 20px
          max-height: 30px
          font-size: 0.37rem
          color: rgb(7, 17, 27)
      .count-wrapper
        position: relative
        height: 80px
        line-height: 80px
        .count
          margin-left: 24px
          font-size: 0.4rem
          color: rgb(7, 17, 27)
        .position
          position: absolute
          top: 26px
          right: 26px
      .size-wrapper, .color-wrapper
        padding: 18px 0 18px 24px
        .title
          margin-bottom: 12px
          font-size: 0.43rem
          color: rgb(7, 17, 27)
      .split
        width: 100%
        height: 8px
        z-index: 10
        border-top: 1px solid rgba(7, 17, 27, 0.1)
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        background: #f3f5f7
      .rating
        padding-top: 18px
        .title
          margin-left: 18px
          line-height: 14px
          font-size: 0.43rem
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
          .view-all
            width: 100%
            margin: 12px 0
            text-align: center
            font-size: 0.43rem
            color: rgb(7, 17, 27)
          .no-rating
            padding: 16px 0
            font-size: 12px
            color: rgb(147, 153, 159)
      .goodDetailBox
        .desc
          margin: 12px 0
          text-align: center
          font-size: 0.43rem
          color: rgb(7, 17, 27)
        .goodDetailImg
          margin-top: 4px
          margin-bottom: 6px
          img
            width: 100%
            height: auto
            display: block
</style>
