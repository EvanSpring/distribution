<template>
  <div class="home" ref="homeWrapper">
    <div>
      <homeswipe></homeswipe>
      <homelist></homelist>
      <homecontainer :todos="todos"></homecontainer>
      <homebottom></homebottom>
    </div>
    <homefooter></homefooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import homeswipe from 'components/home/homeswipe';
  import homelist from 'components/home/homelist';
  import homecontainer from 'components/home/homecontainer';
  import homebottom from 'components/bottom/bottom';
  import homefooter from 'components/footer/footer';

  const ERR_OK = 0;
  export default {
    data() {
      return {
        todos: []
      };
    },
    methods: {
      _initScroll() {
        this.homeScroll = new BScroll(this.$refs.homeWrapper, {
          click: true,
          eventPassthrough: 'horizontal'
        });
      }
    },
    created() {
      this.$api.homequery().then(res => {
        if (res.errno === ERR_OK) {
          this.todos = res.data;
          this.$nextTick(() => {
            if (!this.homeScroll) {
              this._initScroll();
            } else {
              this.homeScroll.refresh();
            }
          });
        }
      }).catch(error => {
        console.log(error);
      });
    },
    components: {
      homeswipe,
      homefooter,
      homelist,
      homecontainer,
      homebottom
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    position: absolute
    top: 0
    bottom: 1.47rem
    overflow: hidden

</style>
