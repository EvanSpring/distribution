<template>
  <div class="cartcontrol">
    <div class="cartcontrol-wrapper">
      <div class="cart-decrease" @click.stop.prevent="decreaseCart">
        <span class="decrease">-</span>
      </div>
      <div class="cart-count">
        <input class="cart-num" type="text" v-model="good.count"  onkeyup="value=value.replace(/[^\d]/g,'')">
      </div>
      <div class="cart-add">
        <span class="add" @click.stop.prevent="addCart">+</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    props: {
      good: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods: {
      addCart(event) {
        if (!event._constructed) {
          return;
        }
        this.good.count++;
      },
      decreaseCart(event) {
        if (!event._constructed) {
          return;
        }
        if (this.good.count) {
          this.good.count--;
        }
      }
    },
    watch: {
      'good'() {
        Vue.set(this.good, 'count', 1);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .cartcontrol
    .cartcontrol-wrapper
      display: flex
      width: 3.2rem
      height: 28px
      line-height: 28px
      text-align: center
      font-size: 0
      border: 1px solid #E3E3E3
      border-radius: 6px
      .cart-decrease
        flex: 1
        border-right: 1px solid #E3E3E3
        .decrease
          padding: 0.26rem
          font-size: 0.48rem
          color: rgb(7, 17, 27)
      .cart-count
        flex: 1
        border-right: 1px solid #E3E3E3
        font-size: 0.37rem
        color: rgb(7, 17, 27)
        .cart-num
          width: 1.6rem;
          text-align: center
      .cart-add
        flex: 1
        .add
          padding: 0.26rem
          font-size: 0.48rem
          color: rgb(7, 17, 27)
</style>
