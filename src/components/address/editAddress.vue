<template>
  <div class="editAddress">
    <editheader :title="addressTitle"></editheader>
    <div class="address-wrapper">
      <div>
        <ul>
          <li class="address-list">
            <div class="left-address">
              <div class="user-tel">
                <span class="name">张伟</span>
                <span class="tel">15156054294</span>
              </div>
              <div class="desc">安徽省合肥市科学大道105号</div>
            </div>
            <div class="right-address" @click="amendAddress">
              <span class="edit">编辑</span>
            </div>
          </li>
        </ul>
        <div class="add-address" @click="addNewAddress">
          <span class="text">添加新地址</span>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import editheader from 'components/header/header';

  export default {
    data() {
      return {
        addressTitle: '收货地址'
      };
    },
    methods: {
      amendAddress() {
        this.$router.push({
          path: '/addAddress'
        });
      },
      addNewAddress() {
        this.$router.push({
          path: '/addAddress'
        });
      }
    },
    components: {
      editheader
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .editAddress
    .address-wrapper
      position: absolute
      top: 40px
      bottom: 0
      width: 100%
      color: rgb(7, 17, 27)
      background: #F4F4F4
      .address-list
        display: flex
        margin-top: 12px
        padding: 18px
        background: #ffffff
        .left-address
          flex: 1
          .user-tel
            margin-bottom: 8px
            line-height: 16px
            .name
              font-size: 0.43rem
            .tel
              color: #B0B0B3
              font-size: 0.37rem
          .desc
            line-height: 14px
            color: #B0B0B3
            font-size: 0.37rem
        .right-address
          flex: 0 0 80px
          text-align: center
          border-left: 1px solid #B0B0B3
          .edit
            display: inline-block
            margin-top: 12px
            font-size: 0.37rem
      .add-address
        margin-top: 10px
        margin-right: 10px
        float: right
        font-size: 0.37rem
        color: #F17C68
        .icon-youjiantou
          font-size: 0.37rem
</style>
