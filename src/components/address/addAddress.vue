<template>
  <div class="addAddress">
    <addheader :title="addTitle"></addheader>
    <div class="formaddress">
      <div class="consignee-wrapper">
        <div class="consignee">收货人</div>
        <div class="inputWrapper">
          <input class="consignee-input" type="text" placeholder="请输入收货人姓名">
        </div>
      </div>
      <div class="consignee-wrapper">
        <div class="consignee">联系方式</div>
        <div class="inputWrapper">
          <input class="consignee-input" type="text" placeholder="请输入手机号">
        </div>
      </div>
      <div class="consignee-wrapper">
        <div class="consignee">地址</div>
        <div class="inputWrapper" @click="selectAddress">
          <input type="text" v-model="addressDesc">
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
      <div class="consignee-wrapper">
        <div class="consignee">详细地址</div>
        <div class="inputWrapper">
          <input class="consignee-input" type="text" placeholder="请输入详细地址">
        </div>
      </div>
      <div class="confirm" @click.stop.prevent="confirmAddress">提交</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import addheader from 'components/header/header';
  import { Toast } from "mint-ui";

  export default {
    data() {
      return {
        addTitle: '填写收货地址'
      };
    },
    computed: {
      addressDesc() {
        let data = this.$store.state.addressData;
        if (data.length) {
          return data[0].name;
        } else {
          return '';
        }
      }
    },
    methods: {
      selectAddress() {
        this.$router.push({
          path: '/city'
        });
      },
      confirmAddress() {
        Toast({
          message: '操作成功'
        });
      }
    },
    components: {
      addheader
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .addAddress
    .formaddress
      position: absolute
      top: 40px
      bottom: 0
      width: 100%
      background: #F4F4F4
      .consignee-wrapper
        display: flex
        width: 100%
        height: 56px
        line-height: 56px
        font-size: 0.37rem
        color: rgb(7, 17, 27)
        background: #ffffff
        border-1px(rgba(7, 17, 27, 0.1))
        .consignee
          flex: 0 0 80px
          padding-left: 18px
        .inputWrapper
          flex: 1
          .consignee-input
            width: 100%
            border: 0
            outline: none
          .icon-youjiantou
            float: right
            margin-right: 12px
            font-size: 0.37rem
            color: rgb(7, 17, 27)
      .confirm
        width: 60%
        height: 36px
        line-height: 36px
        margin: 60px auto
        text-align: center
        border-radius: 16px
        font-size: 0.37rem
        color: #ffffff
        background: linear-gradient(to top right, #F40B04, #FE4A17);
        box-shadow: 0 4px 4px 0px rgba(254, 74, 23, 0.2)
</style>
