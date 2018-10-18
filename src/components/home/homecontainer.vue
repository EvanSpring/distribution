<template>
  <div class="homecontainer">
    <h2 class="title">爆款产品</h2>
    <div class="main_box clearfix">
      <ul>
        <li v-for="todo in todos" :key="todo.id" class="list">
          <div class="image">
            <img v-lazy="todo.homeImg" alt="图片">
          </div>
          <p class="name">{{todo.homeName}}</p>
          <p class="msg">{{todo.homeNametwo}}</p>
          <p class="price">￥{{todo.homePrice}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "HomeContainer",
    props: {
      todos: Array
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .homecontainer
    .title
      display: block
      height: 1.07rem
      font-size: 0.37rem
      line-height: 1.07rem
      padding-left: 0.37rem
    .main_box
      .list
        display: inline-block
        float: left
        width: 50%
        height: 4.69rem
        text-align: center
        box-sizing: border-box
        border-top: 1px solid #f4f4f4
        border-right: 1px solid #f4f4f4
        .image
          img
            width: 2.5rem
            height: 2.3rem
            margin-top: 0.48rem
            margin-bottom 0.16rem
        .name
          line-height: 0.48rem
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
          font-size: 0.32rem
          font-weight: 700
        .msg
          margin-bottom: 4px
          line-height: 0.32rem
          font-size: 0.27rem
          color rgb(7, 17, 27)
        .price
          line-height: 0.32rem
          font-size: 0.37rem
          color: rgb(240, 20, 0)

  img[lazy=loading] {
    background-size: 2.5rem 2.3rem
    background-repeat: no-repeat
    background-image: url("loading.gif")
  }

  img[lazy=error] {
    background: url('err.png');
  }
</style>
