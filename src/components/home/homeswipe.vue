<template>
  <div class="home-swiper">
    <div class="scroll-wrapper">
      <div class="lunbo-wrapper">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(list, index) in swiper" :key="index">
            <img :src="list.img">
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: "homeswipe",
    data() {
      return {
        swiper: [
          {
            img: "https://shopstatic.vivo.com.cn/vivoshop/commodity/20180418/20180418104131830678_original.jpg"
          },
          {
            img: "https://shopstatic.vivo.com.cn/vivoshop/commodity/20180430/20180430232146894398_original.jpg"
          },
          {
            img: "https://shopstatic.vivo.com.cn/vivoshop/commodity/71/4171_1482112378797_530x530.png"
          }
        ]
      };
    }
  };
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home-swiper
    .lunbo-wrapper
      height: 6.5rem
      img
        width: 100%
        height: 6.5rem
</style>
