import Vue from 'vue';
import Router from 'vue-router';
import home from 'components/home/home';
import classify from 'components/classify/classify';
import cart from 'components/cart/cart';
import user from 'components/user/user';
import refreshTest from 'components/icon/refreshTest';
import good from 'components/good/good';
import goodDetail from 'components/good/goodDetails';
import order from 'components/order/order';
import totalOrder from 'components/order/totalOrder';
import message from 'components/message/message';
import pcenter from 'components/user/pcenter';
import login from 'components/login/login';
import editAddress from 'components/address/editAddress';
import addAddress from 'components/address/addAddress';
import city from 'components/address/city';
import collect from 'components/collect/collect';
import viewhistory from 'components/viewhistory/viewhistory';

Vue.use(Router);
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/classify',
    name: 'classify',
    component: classify
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/refreshTest',
    name: 'refreshTest',
    component: refreshTest
  },
  {
    path: '/good',
    name: 'good',
    component: good
  },
  {
    path: '/goodDetail',
    name: 'goodDetail',
    component: goodDetail
  },
  {
    path: '/order',
    name: 'order',
    component: order
  },
  {
    path: '/totalorder',
    name: 'totalorder',
    component: totalOrder
  },
  {
    path: '/msg',
    name: 'message',
    component: message
  },
  {
    path: '/pcenter',
    name: 'pcenter',
    component: pcenter
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/editAddress',
    name: 'editAddress',
    component: editAddress
  },
  {
    path: '/addAddress',
    name: 'addAddress',
    component: addAddress
  },
  {
    path: '/city',
    name: 'city',
    component: city
  },
  {
    path: '/collect',
    name: 'collect',
    component: collect
  },
  {
    path: '/viewhistory',
    name: 'viewhistory',
    component: viewhistory
  }
];
export default new Router({
  linkActiveClass: 'active',
  routes
});
