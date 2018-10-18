const actions = {
  // 显示loading
  showLoading({commit}) {
    commit('SHOW_LOADING');
  },
  // 隐藏loading
  hideLoading({commit}) {
    commit('HIDE_LOADING');
  },
  // 加入购物车
  setCart({commit}, data) {
    commit('SET_CARTS', data);
  },
  // 商品收藏
  setCollect({commit}, data) {
    commit('SET_COLLECTS', data);
  },
  // 取消收藏
  delCollect({commit}, id) {
    commit('DEL_COLLECTS', id);
  },
  // 收藏状态
  showFlag({commit}) {
    commit('SHOW_FLAG');
  },
  // 取消收藏状态
  hideFlag({commit}) {
    commit('HIDE_FLAG');
  }
};
export default actions;

