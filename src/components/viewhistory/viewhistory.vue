<template>
  <div class="viewhistory">
    <viewheader :title="viewTitle"></viewheader>
    <div class="view-wrapper" ref="viewWrapper">
      <div class="cart-main" v-show="viewGoodsData.length">
        <ul>
          <li v-for="(order,index) in viewGoodsData" :key="index" class="cart-list">
            <div class="timeview border-1px">
              <span class="content">7月11日</span>
            </div>
            <div class="viewcontent">
              <!-- 购物车商品图片-->
              <div class="cartImage">
                <img :src="order.img">
              </div>
              <!--商品详情-->
              <div class="cart-desc">
                <h1 class="name">{{order.desc}}</h1>
                <div class="content-second">
                  <span class="price">￥{{order.price}}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <viewbottom></viewbottom>
      </div>
      <div class="view-bottom" v-show="!viewGoodsData.length">
        <span class="title">你目前没有浏览记录</span>
        <span class="btn" @click="haveView">逛一逛</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import viewheader from 'components/header/header';
  import viewbottom from 'components/bottom/bottom';

  export default {
    data() {
      return {
        viewTitle: '浏览记录',
        viewGoodsData: [
          {
            color: "粉红色",
            count: 1,
            desc: "S家原创设计欧洲站女装街头风斗篷立领个性短款棉衣a字蓬蓬棉服女",
            id: 2,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/TB100kJKFXXXXbIXVXXXXXXXXXX_!!0-item_pic.jpg",
            price: 630,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "素缕2015冬装新款文艺百搭羊毛毛呢外套女九分袖短款SL546031栐",
            id: 1,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/2254228937/TB2pqExhpXXXXXkXXXXXXXXXXXX_!!2254228937.jpg",
            price: 212,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "七七之缘诗钎姿锦女装2015秋冬新款代购旗舰店高斯雪岚羽绒服",
            id: 4,
            img: "https://gd3.alicdn.com/bao/uploaded/i3/TB1VKOcKXXXXXXZXXXXXXXXXXXX_!!0-item_pic.jpg",
            price: 685,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "S家原创设计欧洲站女装街头风斗篷立领个性短款棉衣a字蓬蓬棉服女",
            id: 2,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/TB100kJKFXXXXbIXVXXXXXXXXXX_!!0-item_pic.jpg",
            price: 630,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "素缕2015冬装新款文艺百搭羊毛毛呢外套女九分袖短款SL546031栐",
            id: 1,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/2254228937/TB2pqExhpXXXXXkXXXXXXXXXXXX_!!2254228937.jpg",
            price: 212,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "七七之缘诗钎姿锦女装2015秋冬新款代购旗舰店高斯雪岚羽绒服",
            id: 4,
            img: "https://gd3.alicdn.com/bao/uploaded/i3/TB1VKOcKXXXXXXZXXXXXXXXXXXX_!!0-item_pic.jpg",
            price: 685,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "S家原创设计欧洲站女装街头风斗篷立领个性短款棉衣a字蓬蓬棉服女",
            id: 2,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/TB100kJKFXXXXbIXVXXXXXXXXXX_!!0-item_pic.jpg",
            price: 630,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "素缕2015冬装新款文艺百搭羊毛毛呢外套女九分袖短款SL546031栐",
            id: 1,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/2254228937/TB2pqExhpXXXXXkXXXXXXXXXXXX_!!2254228937.jpg",
            price: 212,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "七七之缘诗钎姿锦女装2015秋冬新款代购旗舰店高斯雪岚羽绒服",
            id: 4,
            img: "https://gd3.alicdn.com/bao/uploaded/i3/TB1VKOcKXXXXXXZXXXXXXXXXXXX_!!0-item_pic.jpg",
            price: 685,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "S家原创设计欧洲站女装街头风斗篷立领个性短款棉衣a字蓬蓬棉服女",
            id: 2,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/TB100kJKFXXXXbIXVXXXXXXXXXX_!!0-item_pic.jpg",
            price: 630,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "素缕2015冬装新款文艺百搭羊毛毛呢外套女九分袖短款SL546031栐",
            id: 1,
            img: "https://gd1.alicdn.com/bao/uploaded/i1/2254228937/TB2pqExhpXXXXXkXXXXXXXXXXXX_!!2254228937.jpg",
            price: 212,
            size: "S"
          },
          {
            color: "粉红色",
            count: 1,
            desc: "七七之缘诗钎姿锦女装2015秋冬新款代购旗舰店高斯雪岚羽绒服",
            id: 4,
            img: "https://gd3.alicdn.com/bao/uploaded/i3/TB1VKOcKXXXXXXZXXXXXXXXXXXX_!!0-item_pic.jpg",
            price: 685,
            size: "S"
          }
        ]
      };
    },
    methods: {
      haveView() {
        this.$router.push({
          path: '/'
        });
      },
      _initScroll() {
        if (!this.viewScroll) {
          this.viewScroll = new BScroll(this.$refs.viewWrapper, {
            click: true
          });
        } else {
          this.viewScroll.refresh();
        }
      }
    },
    created() {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    components: {
      viewheader,
      viewbottom
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .viewhistory
    .view-wrapper
      position: absolute
      top: 40px
      bottom: 0
      width: 100%
      overflow: hidden
      background: #f4f4f4
      .cart-main
        .cart-list
          position: relative
          margin-top: 12px
          background: white
          font-size: 0
          &:last-child
            margin-bottom: 12px
          .timeview
            height: 36px
            line-height: 36px
            padding-left: 18px
            border-1px(rgba(7, 17, 27, 0.1))
            .content
              font-size: 0.37rem
              color: rgb(147, 153, 159)
          .viewcontent
            display: flex
            padding: 18px 18px 18px 14px
            .cartImage
              flex: 0 0 57px
              img
                width: 2.2rem
                height: 2.6rem
            .cart-desc
              flex: 1
              color: rgb(7, 17, 27)
              margin-left: 10px
              .name
                position: relative
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 2
                overflow: hidden
                margin: 2px 0 18px 0
                max-height: 0.85rem
                line-height: 0.46rem
                font-size: 0.37rem
              .content-second
                margin-top: 18px
                .price
                  font-size: 0.37rem
                  color: rgb(240, 20, 20)
      .view-bottom
        width: 100%
        color: rgb(7, 17, 27)
        text-align: center
        .title
          display: block
          margin: 36px 0 16px 0
          font-size: 0.43rem
        .btn
          display: block
          width: 60px
          padding: 6px 12px
          margin: 0 auto
          line-height: 16px
          font-size: 0.37rem
          color: #ffffff
          background: #F17C68
          border-radius: 16px
</style>
