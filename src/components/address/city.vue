<template>
  <div>
    <div class="city">
      <cityheader :title="cytitle"></cityheader>
      <!--内容-->
      <div class="scroll-wrapper" ref="provinceWrapper">
        <ul>
          <li v-for="(item, index) in provinceNames" class="province-list border-1px" :key="index"
              @click="getCityList(item,index)" :class="{'highlight':currentIndex === index}">
            <span class="item">{{item}}</span>
            <span class="iconfont icon-youjiantou"></span>
          </li>
        </ul>
      </div>
    </div>
    <citydetail ref="citydetail" :cityList="cityDataFilter"></citydetail>
  </div>
</template>


<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import cityheader from 'components/header/header';
  import citydetail from 'components/address/cityDetail';

  export default {
    data() {
      return {
        cytitle: '选择省份',
        provinceNames: [],
        cityData: [],
        cityDataFilter: [],
        citySearch: '',
        currentIndex: null
      };
    },
    created() {
      this.$http.get('./static/city.json').then(response => {
        let provinceList = response.body.provinces;
        this.cityData = provinceList;
        for (let i in provinceList) {
          this.provinceNames.push(provinceList[i].provinceName);
        }
        this.$nextTick(() => {
          this._provinceScroll();
        });
      });
    },
    methods: {
      _provinceScroll() {
        if (!this.provinceScroll) {
          this.provinceScroll = new BScroll(this.$refs.provinceWrapper, {
            click: true
          });
        } else {
          this.provinceScroll.refresh();
        }
      },
      getCityList(name, index) {
        this.currentIndex = index;
        this.cityDataFilter = this.cityData.filter((city) => city.provinceName === name);
        if (this.cityDataFilter.length) {
          this.$refs.citydetail.show();
        }
      }
    },
    components: {
      cityheader,
      citydetail
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .city
    width: 100%
    color: rgb(7, 17, 27)
    .scroll-wrapper
      position: absolute
      top: 40px
      bottom: 0
      width: 100%
      overflow: hidden
      background: #ffffff
      .province-list
        position: relative
        padding: 18px
        font-size: 0.43rem
        background: #ffffff
        border-1px(rgba(7, 17, 27, 0.1))
        &.highlight
          color: red
        &:last-child
          border-none()
        .icon-youjiantou
          position: absolute
          top: 18px
          right: 20px
          color: rgb(147, 153, 159)
          font-size: 0.4rem
</style>
