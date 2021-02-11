import 'regenerator-runtime'
import 'intersection-observer'
import Vue from 'vue'
import App from './App'
import store from './store'
import searchData from './plugins/searchData'
import fetchData from './plugins/fetchData'
import lazyLoad from "./plugins/lazyLoad"

Vue.use(searchData)
Vue.use(fetchData)
Vue.use(lazyLoad)

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
