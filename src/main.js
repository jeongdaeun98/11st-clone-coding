import 'regenerator-runtime'
import Vue from 'vue'
import App from './App'
import store from './store'
import searchData from './plugins/searchData'
import fetchData from './plugins/fetchData'

Vue.use(searchData)
Vue.use(fetchData)

new Vue({
  el: '#app',
  render: h => h(App),
  store,
})