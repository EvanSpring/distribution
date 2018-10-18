<template>
  <div>
    <div class="header">测试上拉刷新下拉加载组件</div>
    <div class="icon" ref="iconWrapper">
      <div>
        <!-- 顶部提示信息 -->
        <div class="top-tip">
          <div class="refresh-top"><span v-show="IsRefresh" class="icon-jiazai"></span><span
              class="refresh-hook">下拉刷新</span></div>
        </div>
        <ul class="icon-wrapper">
          <li class="icon-list border-1px" v-for="(item ,index) in lastdata" :key="index">
            <i class="iconfont" :class="item.icon"></i>
            <span class="title">{{item.name}}</span>
          </li>
        </ul>
        <div class="bottom-tip">
          <span v-show="IsLoading" class="icon-jiazai"></span><span class="loading-hook">查看更多</span>
        </div>
      </div>
    </div>
    <div class="refresh-success alert-hook">刷新成功</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import { mockTableData } from 'common/js/page';

  export default {
    data() {
      return {
        lastdata: this._initData(),
        count: 1, // 页码
        pagesize: 20, // 每页笔数
        flag: false,
        IsRefresh: false,
        IsLoading: false
      };
    },
    methods: {
      _initScroll() {
        let topTip = document.querySelector('.refresh-hook');
        let bottomTip = document.querySelector('.loading-hook');
        this.scroll = new BScroll(this.$refs.iconWrapper, {
          click: true,
          probeType: 1
        });
        // 滑动中
        this.scroll.on('scroll', (pos) => {
          if (pos.y > 40) {
            topTip.innerText = '释放立即刷新';
            this.IsRefresh = true;
          }
        });
        // 滑动结束
        this.scroll.on('touchEnd', (pos) => {
          if (pos.y > 40) {
            this.refreshData();
            topTip.innerText = '下拉刷新';
            this.IsRefresh = false;
            this.refreshAlert('刷新成功');
          } else if (pos.y < (this.scroll.maxScrollY - 40)) {
            bottomTip.innerText = '加载中...';
            this.IsLoading = true;
            setTimeout(() => {
              if (!this.flag) {
                bottomTip.innerText = '查看更多';
                this.getData();
              } else {
                bottomTip.innerText = '没有更多数据';
              }
              this.IsLoading = false;
            }, 1000);
          }
        });
      },
      getData() {
        this.count = this.count + 1;
        console.log("count==", this.count);
        let tempData = this._initData();
        if (!tempData.length) {
          this.flag = true;
        } else {
          this.lastdata = this.lastdata.concat(this._initData());
        }
        this.$nextTick(() => {
          if (!this.scroll) {
            this._initScroll();
          } else {
            this.scroll.refresh();
          }
        });
      },
      refreshData() {
        this.count = 1;
        this.lastdata = this._initData();
        this.flag = false;
        this.$nextTick(() => {
          if (!this.scroll) {
            this._initScroll();
          } else {
            this.scroll.refresh();
          }
        });
      },
      _initData() {
        let icondata = [
          {
            icon: 'icon-sousuo',
            name: 'icon-sousuo'
          },
          {
            icon: 'icon-dianpu',
            name: 'icon-dianpu'
          },
          {
            icon: 'icon-huiyuanqia',
            name: 'icon-huiyuanqia'
          },
          {
            icon: 'icon-xiugaioryijian',
            name: 'icon-xiugaioryijian'
          },
          {
            icon: 'icon-shoucangxuanzhong',
            name: 'icon-shoucangxuanzhong'
          },
          {
            icon: 'icon-shoucang',
            name: 'icon-shoucang'
          },
          {
            icon: 'icon-quanbudingdan',
            name: 'icon-quanbudingdan'
          },
          {
            icon: 'icon-dianzan',
            name: 'icon-dianzan'
          },
          {
            icon: 'icon-app',
            name: 'icon-app'
          },
          {
            icon: 'icon-browser',
            name: 'icon-browser'
          },
          {
            icon: 'icon-form',
            name: 'icon-form'
          },
          {
            icon: 'icon-cart',
            name: 'icon-cart'
          },
          {
            icon: 'icon-home',
            name: 'icon-home'
          },
          {
            icon: 'icon-mine',
            name: 'icon-mine'
          },
          {
            icon: 'icon-31daifahuo',
            name: 'icon-31daifahuo'
          },
          {
            icon: 'icon-31daifukuan',
            name: 'icon-31daifukuan'
          },
          {
            icon: 'icon-31daishouhuo',
            name: 'icon-31daishouhuo'
          },
          {
            icon: 'icon-31daipingjia',
            name: 'icon-31daipingjia'
          },
          {
            icon: 'icon-tuikuantuihuo',
            name: 'icon-tuikuantuihuo'
          },
          {
            icon: 'icon-zhongtumoshi',
            name: 'icon-zhongtumoshi'
          },
          {
            icon: 'icon-xuanzekuangmoren',
            name: 'icon-xuanzekuangmoren'
          },
          {
            icon: 'icon-shanchu',
            name: 'icon-shanchu'
          },
          {
            icon: 'icon-gouwuchetianjia',
            name: 'icon-gouwuchetianjia'
          },
          {
            icon: 'icon-shouhuodizhi',
            name: 'icon-shouhuodizhi'
          },
          {
            icon: 'icon-wodefankui',
            name: 'icon-wodefankui'
          },
          {
            icon: 'icon-yijianfankui',
            name: 'icon-yijianfankui'
          },
          {
            icon: 'icon-shanchu3',
            name: 'icon-shanchu3'
          },
          {
            icon: 'icon-bianji',
            name: 'icon-bianji'
          },
          {
            icon: 'icon-huishouzhan7',
            name: 'icon-huishouzhan7'
          },
          {
            icon: 'icon-fenlei-copy',
            name: 'icon-fenlei-copy'
          },
          {
            icon: 'icon-chenggong',
            name: 'icon-chenggong'
          },
          {
            icon: 'icon-xuanzekuangxuanzhong',
            name: 'icon-xuanzekuangxuanzhong'
          },
          {
            icon: 'icon-bangzhuguanyuwomen',
            name: 'icon-bangzhuguanyuwomen'
          },
          {
            icon: 'icon-cancel-1-copy',
            name: 'icon-cancel-1-copy'
          },
          {
            icon: 'icon-chenggong1',
            name: 'icon-chenggong1'
          },
          {
            icon: 'icon-wodedaifahuo3dtouchshangpinxiangqing',
            name: 'icon-wodedaifahuo3dtouchshangpinxiangqing'
          },
          {
            icon: 'icon-lajitong',
            name: 'icon-lajitong'
          },
          {
            icon: 'icon-shangpin',
            name: 'icon-shangpin'
          },
          {
            icon: 'icon-zhifu',
            name: 'icon-zhifu'
          },
          {
            icon: 'icon-gouwu',
            name: 'icon-gouwu'
          },
          {
            icon: 'icon-faxian',
            name: 'icon-faxian'
          },
          {
            icon: 'icon-vivo',
            name: 'icon-vivo'
          },
          {
            icon: 'icon-discover',
            name: 'icon-discover'
          },
          {
            icon: 'icon-shouye1',
            name: 'icon-shouye1'
          },
          {
            icon: 'icon-yunshuzhongwuliu-xianxing',
            name: 'icon-yunshuzhongwuliu-xianxing'
          },
          {
            icon: 'icon-baoguofahuo-xianxing',
            name: 'icon-baoguofahuo-xianxing'
          },
          {
            icon: 'icon-shezhi-xianxing',
            name: 'icon-shezhi-xianxing'
          },
          {
            icon: 'icon-shouquan',
            name: 'icon-shouquan'
          },
          {
            icon: 'icon-dianzan1',
            name: 'icon-dianzan1'
          },
          {
            icon: 'icon-share_icon',
            name: 'icon-share_icon'
          },
          {
            icon: 'icon-dongtaixuanzhong',
            name: 'icon-dongtaixuanzhong'
          },
          {
            icon: 'icon-tijiao',
            name: 'icon-tijiao'
          },
          {
            icon: 'icon-VIVO',
            name: 'icon-VIVO'
          },
          {
            icon: 'icon-youjiantou',
            name: 'icon-youjiantou'
          },
          {
            icon: 'icon-zuojiantou',
            name: 'icon-zuojiantou'
          },
          {
            icon: 'icon-gouwuche',
            name: 'icon-gouwuche'
          },
          {
            icon: 'icon-dingdan',
            name: 'icon-dingdan'
          },
          {
            icon: 'icon-wode',
            name: 'icon-wode'
          },
          {
            icon: 'icon-shanchu1',
            name: 'icon-shanchu1'
          },
          {
            icon: 'icon-qijiandian',
            name: 'icon-qijiandian'
          },
          {
            icon: 'icon-shanchu2',
            name: 'icon-shanchu2'
          },
          {
            icon: 'icon-shouye2',
            name: 'icon-shouye2'
          },
          {
            icon: 'icon-shouye',
            name: 'icon-shouye'
          },
          {
            icon: 'icon-wo',
            name: 'icon-wo'
          },
          {
            icon: 'icon-shangchao',
            name: 'icon-shangchao'
          },
          {
            icon: 'icon-changyonggoupiaorenshanchu',
            name: 'icon-changyonggoupiaorenshanchu'
          },
          {
            icon: 'icon-praise',
            name: 'icon-praise'
          },
          {
            icon: 'icon-dongtai',
            name: 'icon-dongtai'
          },
          {
            icon: 'icon-shouye_xuanzhong',
            name: 'icon-shouye_xuanzhong'
          },
          {
            icon: 'icon-wode-',
            name: 'icon-wode-'
          },
          {
            icon: 'icon-gouwuche-xuanzhong',
            name: 'icon-gouwuche-xuanzhong'
          },
          {
            icon: 'icon-icon--',
            name: 'icon-icon--'
          },
          {
            icon: 'icon-fenleixuanzhong',
            name: 'icon-fenleixuanzhong'
          },
          {
            icon: 'icon-tubiaolunkuo-',
            name: 'icon-tubiaolunkuo-'
          },
          {
            icon: 'icon-tubiaolunkuo-1',
            name: 'icon-tubiaolunkuo-1'
          },
          {
            icon: 'icon-fenlei3',
            name: 'icon-fenlei3'
          },
          {
            icon: 'icon-dingdanquxiao',
            name: 'icon-dingdanquxiao'
          },
          {
            icon: 'icon-shoucangxuanzhong1',
            name: 'icon-shoucangxuanzhong1'
          },
          {
            icon: 'icon-zy_peisong',
            name: 'icon-zy_peisong'
          }
        ];
        return mockTableData(this.count, this.pagesize, icondata);
      },
      refreshAlert(text) {
        let alert = document.querySelector('.alert-hook');
        text = text || '操作成功';
        alert.innerHtml = text;
        alert.style.display = 'block';
        setTimeout(function () {
          alert.style.display = 'none';
        }, 1000);
      }
    },
    created() {
      this.refreshData();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl";

  .header
    width: 100%
    height: 40px
    line-height: 40px
    text-align: center
    font-size: 14px
    color: rgb(147, 153, 159)

  .icon
    position: absolute
    top: 40px
    bottom: 55px
    width: 100%
    overflow: hidden
    .top-tip
      .refresh-top
        position: absolute
        top: -40px
        left: 0
        refreshstyle(40px)
        .refresh-hook
          vertical-align: middle
    .icon-wrapper
      .icon-list
        width: 100%
        padding: 12px 6px
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        font-size: 0
        border-1px(rgba(7, 17, 27, 0.1))
        .iconfont, .title
          display: inline-block
          vertical-align: top
          line-height: 24px
        .iconfont
          font-size: 24px
          color: mediumvioletred
        .title
          margin-left: 24px
          font-size: 16px
          color: dodgerblue
    .bottom-tip
      refreshstyle(40px)
      .loading-hook
        vertical-align: middle

  .refresh-success
    display: none
    position: fixed
    top: 0
    left: 0
    z-index: 2
    width: 100%
    height: 40px
    line-height: 40px
    text-align: center
    color: #fff
    font-size: 12px
    background: rgba(7, 17, 27, 0.5)
</style>
