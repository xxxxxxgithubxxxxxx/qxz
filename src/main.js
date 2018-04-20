// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
/*import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
*/
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);
/* eslint-disable no-new */

//引入mint ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
