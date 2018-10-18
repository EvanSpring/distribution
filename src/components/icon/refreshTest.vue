<template>
  <div>
    <v-header :title="title"></v-header>
    <scroll class="wrapper" ref="scrollContent"
            :data="lastdata"
            :freshMsg="freshMsg"
            :pulldown="pulldown"
            :pullup="pullup"
            :flag="flag"
            :listenScroll="listenScroll"
            @pulldown="loadData"
            @scroll="refreshTip"
            @getData="getData"
            @scrollToEnd="shanglajiazai">
      <ul class="icon-wrapper">
        <li class="icon-list border-1px" v-for="(item ,index) in lastdata" :key="index"
            @click="testclick(index,$event)">
          <i :class="item.icon"></i>
          <span class="title">{{item.name}}</span>
          <span class="del" @click.stop.prevent="delMsg(index,$event)">删除</span>
          <!--<span class="del" @click.stop.prevent="testMsg">测试</span>-->
        </li>
      </ul>
    </scroll>
    <refreshfooter></refreshfooter>
  </div>
</template>

<script type="text/ecmascript-6">
  /*
  * @click.stop.prevent="testMsg"
  * v-tap="{methods: testMsg}"
  * */
  import header from 'components/header/header';
  import scroll from 'components/scroll/scroll';
  import refreshfooter from 'components/footer/footer';
  import { mockTableData } from 'common/js/page';

  export default {
    data() {
      return {
        title: '上拉加载下拉刷新',
        lastdata: this._initData(),
        flag: false,
        count: 1, // 页码
        pagesize: 20, // 每页笔数
        freshMsg: true,
        listenScroll: true,
        pulldown: true,
        pullup: true
      };
    },
    created() {
      this.refreshData();
    },
    methods: {
      testclick(index, event) {
        if (!event._constructed) {
          console.log("原生的点击事件");
        } else {
          console.log("better-scroll派发的点击事件", index);
        }
      },
      loadData() {
        this.refreshData();
        this.$refs.scrollContent.loadData();
      },
      refreshTip(pos) {
        if (pos.y > 40) {
          this.$refs.scrollContent.refreshTip();
        }
      },
      shanglajiazai() {
        this.$refs.scrollContent.shanglajiazai();
      },
      getData() {
        this.count = this.count + 1;
        let tempData = this._initData();
        if (!tempData.length) {
          this.flag = true;
        } else {
          this.lastdata = this.lastdata.concat(this._initData());
        }
      },
      refreshData() {
        this.count = 1;
        this.lastdata = this._initData();
        this.flag = false;
      },
      _initData() {
        let icondata = [
          {
            icon: 'iconfont icon-sousuo',
            name: 'icon-sousuo'
          },
          {
            icon: 'iconfont icon-dianpu',
            name: 'icon-dianpu'
          },
          {
            icon: 'iconfont icon-huiyuanqia',
            name: 'icon-huiyuanqia'
          },
          {
            icon: 'iconfont icon-xiugaioryijian',
            name: 'icon-xiugaioryijian'
          },
          {
            icon: 'iconfont icon-shoucangxuanzhong',
            name: 'icon-shoucangxuanzhong'
          },
          {
            icon: 'iconfont icon-shoucang',
            name: 'icon-shoucang'
          },
          {
            icon: 'iconfont icon-quanbudingdan',
            name: 'icon-quanbudingdan'
          },
          {
            icon: 'iconfont icon-dianzan',
            name: 'icon-dianzan'
          },
          {
            icon: 'iconfont icon-app',
            name: 'icon-app'
          },
          {
            icon: 'iconfont icon-browser',
            name: 'icon-browser'
          },
          {
            icon: 'iconfont icon-form',
            name: 'icon-form'
          },
          {
            icon: 'iconfont icon-cart',
            name: 'icon-cart'
          },
          {
            icon: 'iconfont icon-home',
            name: 'icon-home'
          },
          {
            icon: 'iconfont icon-mine',
            name: 'icon-mine'
          },
          {
            icon: 'iconfont icon-31daifahuo',
            name: 'icon-31daifahuo'
          },
          {
            icon: 'iconfont icon-31daifukuan',
            name: 'icon-31daifukuan'
          },
          {
            icon: 'iconfont icon-31daishouhuo',
            name: 'icon-31daishouhuo'
          },
          {
            icon: 'iconfont icon-31daipingjia',
            name: 'icon-31daipingjia'
          },
          {
            icon: 'iconfont icon-tuikuantuihuo',
            name: 'icon-tuikuantuihuo'
          },
          {
            icon: 'iconfont icon-zhongtumoshi',
            name: 'icon-zhongtumoshi'
          },
          {
            icon: 'iconfont icon-xuanzekuangmoren',
            name: 'icon-xuanzekuangmoren'
          },
          {
            icon: 'iconfont icon-shanchu',
            name: 'icon-shanchu'
          },
          {
            icon: 'iconfont icon-gouwuchetianjia',
            name: 'icon-gouwuchetianjia'
          },
          {
            icon: 'iconfont icon-shouhuodizhi',
            name: 'icon-shouhuodizhi'
          },
          {
            icon: 'iconfont icon-wodefankui',
            name: 'icon-wodefankui'
          },
          {
            icon: 'iconfont icon-yijianfankui',
            name: 'icon-yijianfankui'
          },
          {
            icon: 'iconfont icon-shanchu3',
            name: 'icon-shanchu3'
          },
          {
            icon: 'iconfont icon-bianji',
            name: 'icon-bianji'
          },
          {
            icon: 'iconfont icon-huishouzhan7',
            name: 'icon-huishouzhan7'
          },
          {
            icon: 'iconfont icon-fenlei-copy',
            name: 'icon-fenlei-copy'
          },
          {
            icon: 'iconfont icon-chenggong',
            name: 'icon-chenggong'
          },
          {
            icon: 'iconfont icon-xuanzekuangxuanzhong',
            name: 'icon-xuanzekuangxuanzhong'
          },
          {
            icon: 'iconfont icon-bangzhuguanyuwomen',
            name: 'icon-bangzhuguanyuwomen'
          },
          {
            icon: 'iconfont icon-cancel-1-copy',
            name: 'icon-cancel-1-copy'
          },
          {
            icon: 'iconfont icon-chenggong1',
            name: 'icon-chenggong1'
          },
          {
            icon: 'iconfont icon-wodedaifahuo3dtouchshangpinxiangqing',
            name: 'icon-wodedaifahuo3dtouchshangpin....'
          },
          {
            icon: 'iconfont icon-lajitong',
            name: 'icon-lajitong'
          },
          {
            icon: 'iconfont icon-shangpin',
            name: 'icon-shangpin'
          },
          {
            icon: 'iconfont icon-zhifu',
            name: 'icon-zhifu'
          },
          {
            icon: 'iconfont icon-gouwu',
            name: 'icon-gouwu'
          },
          {
            icon: 'iconfont icon-faxian',
            name: 'icon-faxian'
          },
          {
            icon: 'iconfont icon-vivo',
            name: 'icon-vivo'
          },
          {
            icon: 'iconfont icon-discover',
            name: 'icon-discover'
          },
          {
            icon: 'iconfont icon-shouye1',
            name: 'icon-shouye1'
          },
          {
            icon: 'iconfont icon-yunshuzhongwuliu-xianxing',
            name: 'icon-yunshuzhongwuliu-xianxing'
          },
          {
            icon: 'iconfont icon-baoguofahuo-xianxing',
            name: 'icon-baoguofahuo-xianxing'
          },
          {
            icon: 'iconfont icon-shezhi-xianxing',
            name: 'icon-shezhi-xianxing'
          },
          {
            icon: 'iconfont icon-shouquan',
            name: 'icon-shouquan'
          },
          {
            icon: 'iconfont icon-dianzan1',
            name: 'icon-dianzan1'
          },
          {
            icon: 'iconfont icon-share_icon',
            name: 'icon-share_icon'
          },
          {
            icon: 'iconfont icon-dongtaixuanzhong',
            name: 'icon-dongtaixuanzhong'
          },
          {
            icon: 'iconfont icon-tijiao',
            name: 'icon-tijiao'
          },
          {
            icon: 'iconfont icon-VIVO',
            name: 'icon-VIVO'
          },
          {
            icon: 'iconfont icon-youjiantou',
            name: 'icon-youjiantou'
          },
          {
            icon: 'iconfont icon-zuojiantou',
            name: 'icon-zuojiantou'
          },
          {
            icon: 'iconfont icon-gouwuche',
            name: 'icon-gouwuche'
          },
          {
            icon: 'iconfont icon-dingdan',
            name: 'icon-dingdan'
          },
          {
            icon: 'iconfont icon-wode',
            name: 'icon-wode'
          },
          {
            icon: 'iconfont icon-shanchu1',
            name: 'icon-shanchu1'
          },
          {
            icon: 'iconfont icon-qijiandian',
            name: 'icon-qijiandian'
          },
          {
            icon: 'iconfont icon-shanchu2',
            name: 'icon-shanchu2'
          },
          {
            icon: 'iconfont icon-shouye2',
            name: 'icon-shouye2'
          },
          {
            icon: 'iconfont icon-shouye',
            name: 'icon-shouye'
          },
          {
            icon: 'iconfont icon-wo',
            name: 'icon-wo'
          },
          {
            icon: 'iconfont icon-shangchao',
            name: 'icon-shangchao'
          },
          {
            icon: 'iconfont icon-changyonggoupiaorenshanchu',
            name: 'icon-changyonggoupiaorenshanchu'
          },
          {
            icon: 'iconfont icon-praise',
            name: 'icon-praise'
          },
          {
            icon: 'iconfont icon-dongtai',
            name: 'icon-dongtai'
          },
          {
            icon: 'iconfont icon-shouye_xuanzhong',
            name: 'icon-shouye_xuanzhong'
          },
          {
            icon: 'iconfont icon-wode-',
            name: 'icon-wode-'
          },
          {
            icon: 'iconfont icon-gouwuche-xuanzhong',
            name: 'icon-gouwuche-xuanzhong'
          },
          {
            icon: 'iconfont icon-icon--',
            name: 'icon-icon--'
          },
          {
            icon: 'iconfont icon-fenleixuanzhong',
            name: 'icon-fenleixuanzhong'
          },
          {
            icon: 'iconfont icon-tubiaolunkuo-',
            name: 'icon-tubiaolunkuo-'
          },
          {
            icon: 'iconfont icon-tubiaolunkuo-1',
            name: 'icon-tubiaolunkuo-1'
          },
          {
            icon: 'iconfont icon-fenlei3',
            name: 'icon-fenlei3'
          },
          {
            icon: 'iconfont icon-dingdanquxiao',
            name: 'icon-dingdanquxiao'
          },
          {
            icon: 'iconfont icon-shoucangxuanzhong1',
            name: 'icon-shoucangxuanzhong1'
          },
          {
            icon: 'iconfont icon-zy_peisong',
            name: 'icon-zy_peisong'
          },
          {
            icon: 'iconadd icon-add_circle',
            name: 'icon-add_circle'
          },
          {
            icon: 'iconadd icon-arrow_lift',
            name: 'icon-arrow_lift'
          },
          {
            icon: 'iconadd icon-check_circle',
            name: 'icon-check_circle'
          },
          {
            icon: 'iconadd icon-close',
            name: 'icon-close'
          },
          {
            icon: 'iconadd icon-favorite',
            name: 'icon-favorite'
          },
          {
            icon: 'iconadd icon-keyboard_arrow_right',
            name: 'icon-keyboard_arrow_right'
          },
          {
            icon: 'iconadd icon-remove_circle_outline',
            name: 'icon-remove_circle_outline'
          },
          {
            icon: 'iconadd icon-shopping_cart',
            name: 'icon-shopping_cart'
          },
          {
            icon: 'iconadd icon-thumb_down',
            name: 'icon-thumb_down'
          },
          {
            icon: 'iconadd icon-thumb_up',
            name: 'icon-thumb_up'
          },
          {
            icon: 'iconadd icon-cog',
            name: 'iconadd'
          },
          {
            icon: 'iconadd icon-mic',
            name: 'icon-mic'
          },
          {
            icon: 'iconadd icon-coin-yen',
            name: 'icon-coin-yen'
          },
          {
            icon: 'iconadd icon-clock',
            name: 'icon-clock'
          }, {
            icon: 'iconadd icon-clock2',
            name: 'icon-clock2'
          },
          {
            icon: 'iconadd icon-spinner3',
            name: 'icon-spinner3'
          },
          {
            icon: 'iconadd icon-spinner6',
            name: 'icon-spinner6'
          },
          {
            icon: 'iconadd icon-cog',
            name: 'icon-cog'
          },
          {
            icon: 'iconadd icon-bin',
            name: 'icon-bin'
          },
          {
            icon: 'iconadd icon-eye',
            name: 'icon-eye'
          },
          {
            icon: 'iconadd icon-eye-blocked',
            name: 'icon-eye-blocked'
          },
          {
            icon: 'iconadd icon-smile',
            name: 'icon-smile'
          },
          {
            icon: 'iconadd icon-smile2',
            name: 'icon-smile2'
          },
          {
            icon: 'iconadd icon-sad',
            name: 'icon-sad'
          },
          {
            icon: 'iconadd icon-sad2',
            name: 'icon-sad2'
          },
          {
            icon: 'iconadd icon-grin',
            name: 'icon-grin'
          },
          {
            icon: 'iconadd icon-grin2',
            name: 'icon-grin2'
          },
          {
            icon: 'iconadd icon-plus',
            name: 'icon-plus'
          },
          {
            icon: 'iconadd icon-minus',
            name: 'icon-minus'
          },
          {
            icon: 'iconadd icon-cross',
            name: 'icon-cross'
          },
          {
            icon: 'iconadd icon-checkmark',
            name: 'icon-checkmark'
          },
          {
            icon: 'iconadd icon-checkmark2',
            name: 'icon-checkmark2'
          },
          {
            icon: 'iconadd icon-arrow-right2',
            name: 'icon-arrow-right2'
          },
          {
            icon: 'iconadd icon-arrow-left2',
            name: 'icon-arrow-left2'
          },
          {
            icon: 'iconadd icon-circle-up',
            name: 'icon-circle-up'
          },
          {
            icon: 'iconadd icon-circle-right',
            name: 'icon-circle-right'
          },
          {
            icon: 'iconadd icon-circle-down',
            name: 'icon-circle-down'
          },
          {
            icon: 'iconadd icon-circle-left',
            name: 'icon-circle-left'
          }
        ];
        return mockTableData(this.count, this.pagesize, icondata);
      },
      delMsg(index, event) {
        if (!event._constructed) {
          return;
        }
        this.lastdata.splice(index, 1);
      }
    },
    components: {
      'v-header': header,
      scroll,
      refreshfooter
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl";

  .wrapper
    position: absolute
    top: 1.07rem
    bottom: 1.47rem
    width: 100%
    overflow: hidden
    .icon-wrapper
      .icon-list
        position: relative
        width: 100%
        padding: 16px 0
        font-size: 0
        border-1px(rgba(7, 17, 27, 0.1))
        .iconfont, .title, .iconadd
          display: inline-block
          vertical-align: top
          line-height: 0.24rem
        .iconfont
          margin-left: 16px
          font-size: 0.64rem
          color: #c71585
        .iconadd
          margin-left: 16px
          font-size: 0.48rem
          color: #c71585
        .title
          margin-left: 0.64rem
          font-size: 0.43rem
          color: #1e90ff
        .del
          display: inline-block
          position: absolute
          top: 10px
          right: 14px
          padding: 4px 12px
          font-size: 0.32rem
          color: dodgerblue
          border: 1px solid rgba(7, 17, 27, 0.1)
</style>
