<template>
  <div class="homelist">
    <div class="header-wrapper">
      <div class="left-wrapper">
        <div class="content">
          <img src="https://gd2.alicdn.com/imgextra/i2/1128179151/TB21yrTEr1YBuNjSszeXXablFXa_!!1128179151.jpg">
          <h1 class="title">男装</h1>
        </div>
      </div>
      <div class="right-wrapper">
        <div class="content">
          <img src="https://img.alicdn.com/imgextra/i2/73861778/TB2Jsv8oFuWBuNjSspnXXX1NVXa_!!73861778.jpg">
          <h1 class="title">女装</h1>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <ul>
        <li v-for="item in listdata" :key="item.id" class="list-wrapper" @click="returnUrl(item.id,item.name,$event)">
          <div class="image">
            <img :src="item.img">
          </div>
          <h2 class="title" v-show="item.name">{{item.name}}</h2>
          <div class="more" v-show="item.text" @click.stop.prevent="chooseicon($event)">
            <span class="text">{{item.text}}</span>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        listdata: [
          {
            id: 1,
            img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg',
            name: 'T恤'
          },
          {
            id: 2,
            img: 'https://img.alicdn.com/imgextra/i1/674634432/TB2u607z25TBuNjSspcXXbnGFXa_!!674634432.jpg',
            name: '衬衫'
          },
          {
            id: 3,
            img: 'https://gd3.alicdn.com/imgextra/i4/TB1vgKbppmWBuNjSspdYXHugXXa_M2.SS2?spm=2013.1.20140017.3.6cb795e4jWDRfG&file=TB1vgKbppmWBuNjSspdYXHugXXa_M2.SS2',
            name: '半身裙'
          },
          {
            id: 4,
            img: 'https://gd2.alicdn.com/imgextra/i4/108727117/TB2YDh6d_qWBKNjSZFxXXcpLpXa_!!108727117.jpg',
            name: '短裤'
          },
          {
            id: 5,
            img: 'https://gd2.alicdn.com/imgextra/i3/35199816/TB2vcNPrGSWBuNjSsrbXXa0mVXa_!!35199816.jpg',
            name: '休闲裤'
          },
          {
            id: 6,
            img: 'https://gd4.alicdn.com/imgextra/i3/356524858/TB2375XnuuSBuNjSsziXXbq8pXa_!!356524858.jpg',
            name: '牛仔裤'
          },
          {
            id: 7,
            img: 'https://gd1.alicdn.com/imgextra/i3/2606073792/TB2TA4xtIyYBuNkSnfoXXcWgVXa_!!2606073792.jpg',
            name: '内衣'
          },
          {
            id: 8,
            img: 'https://img.alicdn.com/imgextra/i2/704298669/TB2AGj3e.R1BeNjy0FmXXb0wVXa_!!704298669.jpg',
            text: '更多'
          }
        ]
      };
    },
    methods: {
      returnUrl(id, name, event) {
        if (!event._constructed || id === 8) {
          return;
        } else {
          this.$router.push({name: 'good', query: {id: id, name: name}});
        }
      },
      chooseicon(event) {
        if (!event._constructed) {
          return;
        } else {
          this.$router.push('refreshTest');
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .homelist
    margin: 0 0.43rem
    border: 1px solid rgb(253, 241, 239)
    .header-wrapper
      display: flex
      width: 100%
      .left-wrapper, .right-wrapper
        flex: 1
        padding: 4px
        border-right: 1px solid rgb(253, 241, 239)
        .content
          position: relative
          font-size: 0
          img
            width: 2rem
            height: 2.4rem
          .title
            position: absolute
            bottom: 0.27rem
            right: 0.6rem
            display: inline-block
            font-size: 0.43rem
      .left-wrapper
        .content
          background: rgb(218, 247, 251)
      .right-wrapper
        .content
          background: rgb(252, 224, 220)
    .content-wrapper
      display: flex
      position: relative
      .list-wrapper
        display: inline-block
        flex: 1
        width: 25%
        text-align: center
        box-sizing: border-box
        border-top: 1px solid rgb(253, 241, 239)
        border-right: 1px solid rgb(253, 241, 239)
        .image
          img
            width: 1.2rem
            height: 2rem
            margin-top: 0.48rem
            margin-bottom 0.16rem
        .title
          margin-bottom: 0.16rem
          line-height: 0.48rem
          font-size: 0.37rem
        .more
          font-size: 0
          text-align: center
          .text, .icon-youjiantou
            line-height: 0.48rem
            font-size: 0.37rem
            color: rgb(241, 126, 105)

</style>
