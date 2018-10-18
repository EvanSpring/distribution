<template>
  <transition name="city">
    <div class="city-detail" v-show="cityShow">
      <div class="city-header border-1px">
        <span class="title">选择城市</span>
        <span class="iconfont icon-zuojiantou" @click="hideShowCity"></span>
      </div>
      <div class="detail-wrapper" ref="detailwrapper">
        <ul>
          <li v-for="(item, index) in cityListData" class="city-list border-1px" :key="index"
              @click="getCityName(item.citysName,index)" :class="{'highlight':currentIndex === index}">
            <span class="item">{{item.citysName}}</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';

  export default {
    props: {
      cityList: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        cityShow: false,
        currentIndex: null,
        province: ''
      };
    },
    computed: {
      cityListData() {
        let cityArray = [];
        if (this.cityList.length) {
          cityArray = this.cityList[0].citys;
          this.province = this.cityList[0].provinceName;
        }
        return cityArray;
      }
    },
    methods: {
      show() {
        this.cityShow = true;
        this.$nextTick(() => {
          this._cityScroll();
        });
      },
      hideShowCity() {
        this.cityShow = false;
      },
      getCityName(name, index) {
        this.currentIndex = index;
        let addressSelect = this.province + name;
        this.$store.commit('addAddress', addressSelect);
        this.cityShow = false;
      },
      _cityScroll() {
        if (!this.cityScroll) {
          this.cityScroll = new BScroll(this.$refs.detailwrapper, {
            click: true
          });
        } else {
          this.cityScroll.refresh();
        }
      }
    },
    watch: {
      'cityListData'() {
        this.currentIndex = null;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .city-detail
    position: fixed
    top: 0
    bottom: 0
    z-index: 40
    width: 100%
    background: #ffffff
    transform: translate3d(0, 0, 0)
    &.city-enter-active, &.city-leave-active
      transition: all 0.2s linear
    &.city-enter, &.city-leave-active
      transform: translate3d(100%, 0, 0)
    .city-header
      position: relative
      width: 100%
      height: 40px
      line-height: 40px
      text-align: center
      font-size: 0.37rem
      color: rgb(7, 17, 27)
      border-1px(rgba(7, 17, 27, 0.1))
      .icon-zuojiantou
        position: absolute
        top: 0
        left: 20px
        display: inline-block
        width: 24px
        height: 24px
        font-size: 0.48rem
        color: #93999f
    .detail-wrapper
      position: absolute
      top: 40px
      bottom: 0
      width: 100%
      overflow: hidden
      background: #ffffff
      .city-list
        position: relative
        padding: 18px
        font-size: 0.43rem
        background: #ffffff
        border-1px(rgba(7, 17, 27, 0.1))
        &.highlight
          color: red
        &:last-child
          border-none()

</style>
