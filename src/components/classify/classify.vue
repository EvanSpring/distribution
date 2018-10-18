<template>
  <div class="classify">
    <classifysearch></classifysearch>
    <!--商品分类-->
    <div class="good-classify">
      <!--左侧布局-->
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li class="menu-item" v-for="(item,index) in classifyData" :key="index"
              :class="{'current':currentIndex === index}" @click="selectMenu(index,$event)" ref="menuList">
            <span class="borderclass" v-show="currentIndex === index"></span>
            <span class="text border-1px">{{item.name}}</span>
          </li>
        </ul>
      </div>
      <!--右侧布局-->
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li class="food-list" v-for="(item,index) in classifyData" ref="foodList" :key="index">
            <ul>
              <li v-for="(test,index) in item.seconds" :key="index" class="test-list">
                <h1 class="title">{{test.name}}</h1>
                <ul class="testWrapper">
                  <li class="food-item border-1px" v-for="(food,index) in test.third" :key="index">
                    <div class="image">
                      <img v-lazy="food.img" alt="图片">
                    </div>
                    <p class="name">{{food.title}}</p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <classifyfooter></classifyfooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import classifysearch from 'components/search/search';
  import classifyfooter from 'components/footer/footer';

  export default {
    data() {
      return {
        classifyData: [
          {
            name: "推荐",
            seconds: [
              {
                name: "男星推荐",
                third: [
                  {
                    title: '王力宏',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '林俊杰',
                    img: 'https://gd3.alicdn.com/imgextra/i4/TB1vgKbppmWBuNjSspdYXHugXXa_M2.SS2?spm=2013.1.20140017.3.6cb795e4jWDRfG&file=TB1vgKbppmWBuNjSspdYXHugXXa_M2.SS2'
                  },
                  {
                    title: '张杰',
                    img: 'https://gd3.alicdn.com/imgextra/i4/TB1vgKbppmWBuNjSspdYXHugXXa_M2.SS2?spm=2013.1.20140017.3.6cb795e4jWDRfG&file=TB1vgKbppmWBuNjSspdYXHugXXa_M2.SS2'
                  },
                  {
                    title: '黄家驹',
                    img: 'https://gd3.alicdn.com/imgextra/i4/TB1vgKbppmWBuNjSspdYXHugXXa_M2.SS2?spm=2013.1.20140017.3.6cb795e4jWDRfG&file=TB1vgKbppmWBuNjSspdYXHugXXa_M2.SS2'
                  },
                  {
                    title: '汪苏泷',
                    img: 'https://gd3.alicdn.com/imgextra/i4/TB1vgKbppmWBuNjSspdYXHugXXa_M2.SS2?spm=2013.1.20140017.3.6cb795e4jWDRfG&file=TB1vgKbppmWBuNjSspdYXHugXXa_M2.SS2'
                  },
                  {
                    title: '胡彦斌',
                    img: 'https://gd3.alicdn.com/imgextra/i4/TB1vgKbppmWBuNjSspdYXHugXXa_M2.SS2?spm=2013.1.20140017.3.6cb795e4jWDRfG&file=TB1vgKbppmWBuNjSspdYXHugXXa_M2.SS2'
                  }
                ]
              },
              {
                name: "女星推荐",
                third: [
                  {
                    title: '张靓颖',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '韩红',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '吴忆莲',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '范冰冰',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '李冰冰',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '菅纫姿',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "影星推荐",
                third: [
                  {
                    title: '成龙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '李连杰',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '吴京',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '张国立',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '张铁林',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '王刚',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "男装",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: 'T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '牛仔裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '短裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '自营男装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '衬衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "男士外套",
                third: [
                  {
                    title: '新品夹克',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '牛仔外套',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '风衣',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '卫衣',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '棒球服',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '西服',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "休闲裤",
                third: [
                  {
                    title: '修身版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '免烫版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '束脚裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '直筒版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '迷彩裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "T恤",
                third: [
                  {
                    title: '新品T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '长袖体恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '短袖T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '纯棉T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '白色T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '条纹T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "牛仔裤",
                third: [
                  {
                    title: '破洞牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '修身牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '直筒牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '束脚牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '弹力牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '黑色牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "衬衫",
                third: [
                  {
                    title: '新品衬衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '免烫版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '束脚裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '直筒版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '迷彩裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "女装",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: '夏季新品',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: 'T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '妈妈装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '衬衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "上装",
                third: [
                  {
                    title: '长袖T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '针织开衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '宽松毛衣',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '中长款T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '宽松T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '卫衣',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "下装",
                third: [
                  {
                    title: '小脚裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '破洞牛仔裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '哈伦裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '西装裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '阔腿裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "裙装",
                third: [
                  {
                    title: '秋季连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '套装裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '性感连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '蕾丝连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '长袖连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '真丝连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "特色类目",
                third: [
                  {
                    title: '大码女装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '妈妈装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '旗袍',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '礼服',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '设计师',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '婚纱',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "童装",
                third: [
                  {
                    title: '品质童装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '套装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '裙子',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: 'T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '衬衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '裤子',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "男鞋",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: '新品推荐',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '男鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲皮鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '板鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "流行男鞋",
                third: [
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '正装鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '凉鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '豆豆鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "女鞋",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: '新品推荐',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '单鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '女鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '高跟鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "时尚女鞋",
                third: [
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '正装鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '凉鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '豆豆鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "内衣配饰",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: '新品推荐',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '单鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '女鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '高跟鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "时尚女鞋",
                third: [
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '正装鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '凉鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '豆豆鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "箱包手袋",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: 'T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '牛仔裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '短裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '自营男装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '衬衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "男士外套",
                third: [
                  {
                    title: '新品夹克',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '牛仔外套',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '风衣',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '卫衣',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '棒球服',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '西服',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "休闲裤",
                third: [
                  {
                    title: '修身版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '免烫版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '束脚裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '直筒版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '迷彩裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "T恤",
                third: [
                  {
                    title: '新品T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '长袖体恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '短袖T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '纯棉T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '白色T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '条纹T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "牛仔裤",
                third: [
                  {
                    title: '破洞牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '修身牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '直筒牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '束脚牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '弹力牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '黑色牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "衬衫",
                third: [
                  {
                    title: '新品衬衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '免烫版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '束脚裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '直筒版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '迷彩裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "美妆护肤",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: '夏季新品',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: 'T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '妈妈装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '衬衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "上装",
                third: [
                  {
                    title: '长袖T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '针织开衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '宽松毛衣',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '中长款T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '宽松T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '卫衣',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "下装",
                third: [
                  {
                    title: '小脚裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '破洞牛仔裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '哈伦裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '西装裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '阔腿裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "裙装",
                third: [
                  {
                    title: '秋季连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '套装裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '性感连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '蕾丝连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '长袖连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '真丝连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "特色类目",
                third: [
                  {
                    title: '大码女装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '妈妈装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '旗袍',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '礼服',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '设计师',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '婚纱',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "童装",
                third: [
                  {
                    title: '品质童装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '套装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '裙子',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: 'T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '衬衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '裤子',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "个护清洁",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: '新品推荐',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '男鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲皮鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '板鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "流行男鞋",
                third: [
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '正装鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '凉鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '豆豆鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "钟表珠宝",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: '新品推荐',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '单鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '女鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '高跟鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "时尚女鞋",
                third: [
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '正装鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '凉鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '豆豆鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "手机数码",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: '新品推荐',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '单鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '女鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '高跟鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "时尚女鞋",
                third: [
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '正装鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '凉鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '豆豆鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "电脑办公",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: 'T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '牛仔裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '短裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '自营男装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '衬衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "男士外套",
                third: [
                  {
                    title: '新品夹克',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '牛仔外套',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '风衣',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '卫衣',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '棒球服',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '西服',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "休闲裤",
                third: [
                  {
                    title: '修身版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '免烫版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '束脚裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '直筒版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '迷彩裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "T恤",
                third: [
                  {
                    title: '新品T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '长袖体恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '短袖T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '纯棉T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '白色T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '条纹T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "牛仔裤",
                third: [
                  {
                    title: '破洞牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '修身牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '直筒牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '束脚牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '弹力牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '黑色牛仔',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "衬衫",
                third: [
                  {
                    title: '新品衬衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '免烫版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '束脚裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '直筒版型',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '迷彩裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "家用电器",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: '夏季新品',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: 'T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '妈妈装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '衬衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "上装",
                third: [
                  {
                    title: '长袖T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '针织开衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '宽松毛衣',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '中长款T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '宽松T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '卫衣',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "下装",
                third: [
                  {
                    title: '小脚裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '破洞牛仔裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '哈伦裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '西装裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '阔腿裤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "裙装",
                third: [
                  {
                    title: '秋季连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '套装裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '性感连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '蕾丝连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '长袖连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '真丝连衣裙',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "特色类目",
                third: [
                  {
                    title: '大码女装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '妈妈装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '旗袍',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '礼服',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '设计师',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '婚纱',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "童装",
                third: [
                  {
                    title: '品质童装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '套装',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '裙子',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: 'T恤',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '衬衫',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '裤子',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "食品生鲜",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: '新品推荐',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '男鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲皮鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '板鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "流行男鞋",
                third: [
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '正装鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '凉鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '豆豆鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "酒水饮料",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: '新品推荐',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '单鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '女鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '高跟鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "时尚女鞋",
                third: [
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '正装鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '凉鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '豆豆鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "母婴童装",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: '新品推荐',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '单鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '女鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '高跟鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "时尚女鞋",
                third: [
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '正装鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '凉鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '豆豆鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          },
          {
            name: "二手服务",
            seconds: [
              {
                name: "热门分类",
                third: [
                  {
                    title: '新品推荐',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '单鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '女鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '高跟鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              },
              {
                name: "时尚女鞋",
                third: [
                  {
                    title: '休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '商务休闲鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '正装鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '凉鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '帆布鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  },
                  {
                    title: '豆豆鞋',
                    img: 'https://gd2.alicdn.com/imgextra/i2/2103587316/TB2c2YlhmtYBeNjSspaXXaOOFXa_!!2103587316.jpg'
                  }
                ]
              }
            ]
          }
        ],
        listHeight: [], // 每个li元素对应的高度数组
        scrollY: 0 // 实时获得滚动所在地方的高度值
      };
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1]; // 如果是最后一个li高度,i+1就超出数组索引
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            // 说明实时滚动的dom高度在这个区间,返回当前i去映射左侧菜单索引
            this.rightSelect(i);
            return i;
          }
        }
        return 0;
      }
    },
    methods: {
      _initScroll() {
        this.meunScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          probeType: 3 // probeType属性实际上起到探针探测dom实时滚动的高度
        });
        this.foodsScroll.on('scroll', (pos) => {
          if (pos.y <= 0) {
            this.scrollY = Math.abs(Math.round(pos.y)); // 获得实时滚动的dom高度
          }
        });
      },
      _calculateHeight() {
        let foodList = this.$refs.foodList; // foodList是一个li标签数组dom
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      rightSelect(index) {
        let menuList = this.$refs.menuList;
        let el = menuList[index];
        this.meunScroll.scrollToElement(el, 300);
      },
      selectMenu(index, event) {
        if (!event._constructed) {
          return;
        }
        let foodList = this.$refs.foodList;
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300);
      }
    },
    created() {
      this.$nextTick(() => {
        this._initScroll();
        this._calculateHeight();
      });
    },
    components: {
      classifysearch,
      classifyfooter
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .good-classify
    display: flex
    position: absolute
    top: 52px
    bottom: 60px
    z-index: -1
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #F4F4F4
      .menu-item
        position: relative
        display: table // 固定宽高内折行并排父元素使用display:table,子元素使用display:table-cell
        width: 56px
        height: 54px
        padding: 0 14px // 不能使用margin:0 auto,白色背景填充不满
        line-height: 14px
        &:last-child
          .text
            border-none()
        &.current
          position: relative
          margin-top: -1px
          z-index: 10
          background: #fff
          .text
            font-weight: 700
            border-none()
        .borderclass
          display: inline-block
          position: absolute
          top: 16px
          left: 0
          width: 4px
          height: 45%
          background: #F17C68
        .text
          display: table-cell
          width: 56px
          vertical-align: middle // 在display:table-cell中使用该属性middle表示垂直居中
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 0.37rem
    .foods-wrapper
      flex: 1
      .food-list
        .test-list
          .title
            width: 100%
            height: 26px
            padding-left: 14px
            line-height: 26px
            font-size: 0.32rem
            color: rgb(7, 17, 27)
            font-weight: 600
            border-left: 2px solid #d9dde1
            background: #F4F4F4
          .testWrapper
            display: flex
            flex-wrap: wrap
            padding: 24px
            .food-item
              flex: 1
              width: 33.33%
              margin-bottom: 8px
              text-align: center
              box-sizing: border-box
              .image
                img
                  width: 2rem
                  height: 2.2rem
              .name
                margin-bottom: 16px
                line-height: 0.48rem
                font-size: 0.32rem
</style>
