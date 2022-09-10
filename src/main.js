import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'animate.css';
Vue.config.productionTip = false
function throttling(fn, time = 1000,stats){
  return function () {
    if (fn.timer) return;
    fn.timer = setTimeout(() => {
      fn(stats);
      fn.timer = null;
    }, time);
  };
}
Vue.prototype.throttling = throttling

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
