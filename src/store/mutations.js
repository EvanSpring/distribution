import * as type from './type';
import { MessageBox } from 'mint-ui';

const mutations = {
  // 显示loading
  [type.SHOW_LOADING](state) {
    state.isShow = true;
  },
  // 隐藏loading
  [type.HIDE_LOADING](state) {
    state.isShow = false;
  },
  // 加入购物车
  [type.SET_CARTS](state, data) {
    state.carts.push(data);
  },
  // 删除购物车
  delCart(state, arr) {
    MessageBox.confirm('确定删除商品吗？').then(action => {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < state.carts.length; j++) {
          if (state.carts[j].key === arr[i].key) {
            state.carts.splice(j, 1);
          }
        }
      }
    });
  },
  // 清空购物车
  delAllCarts(state) {
    MessageBox.confirm('确定清空购物车吗?').then(action => {
      state.carts = [];
    });
  },
  // 由商品详情直接提交订单存储
  directSetCart(state, data) {
    state.directCart = [];
    state.directCart.push(data);
  },
  // 增加用户选择地址
  addAddress(state, name) {
    state.addressData.splice(0, state.addressData.length);
    state.addressData.push({
      name: name
    });
  },
  // 收藏物品
  [type.SET_COLLECTS](state, data) {
    state.collectGoods.push(data);
    state.collectFlag = true;
  },
  // 取消收藏
  [type.DEL_COLLECTS](state, id) {
    let collects = state.collectGoods;
    for (let i = 0; i < collects.length; i++) {
      let temp = collects[i];
      if (temp.id === id) {
        collects.splice(i, 1);
        state.collectFlag = false;
        return;
      }
    }
  },
  // 收藏
  [type.SHOW_FLAG](state) {
    state.collectFlag = true;
  },
  // 取消收藏
  [type.HIDE_FLAG](state) {
    state.collectFlag = false;
  }
};

export default mutations;
