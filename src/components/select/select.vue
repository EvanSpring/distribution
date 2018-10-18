<template>
  <div class="select-common">
    <ul class="select-wrapper">
      <li v-for="(item, index) in selectData" class="select-list" :key="index"
          @click.stop.prevent="selectName(item.name,index,$event)" :class="{'active': num === index}">
        <span class="text">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      selectData: {
        type: Array,
        default() {
          return [];
        }
      },
      num: {
        type: Number,
        default: 0
      }
    },
    methods: {
      selectName(name, index, event) {
        if (!event._constructed) {
          return;
        }
        this.$emit('selectName', name, index);
      }
    },
    watch: {
      'selectData'() {
        this.$emit('selectName', this.selectData[0].name, 0);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .select-common
    .select-wrapper
      display: flex
      flex-wrap: wrap
      font-size: 0
      .select-list
        flex: 0 1 auto
        margin-bottom: 12px
        margin-right: 24px
        width: 90px
        height: 24px
        line-height: 24px
        text-align: center
        border: 1px solid #E3E3E3
        border-radius: 2px
        &.active
          border: 1px solid rgb(241, 126, 105)
          .text
            color: rgb(241, 126, 105)
        .text
          display: inline-block
          font-size: 0.37rem
          color: rgb(7, 17, 27)
</style>
