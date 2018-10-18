const getters = {
  // loading是否显示--计算属性
  loading(state) {
    return state.isShow;
  },
  // 过滤已经存在于购物车的商品 --调用方法
  // findCart: (state) => (id) => {
  //   return state.carts.filter(cart => cart.id === id);
  // },
  // 判断商品是否已收藏
  findCollect: (state) => (id) => {
    return state.collectGoods.filter(cart => cart.id === id);
  }
};

export default getters;
