import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(ElementUI)



const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// const Foo = { template: '<p>Foo</p>' }
// const Bar = { template: '<p>Bar</p>' }

// const routes = [
//   { path: '/1', component: Foo },
//   { path: '/2-1', component: Bar }
// ]

import Bar from "./components/Bar.vue"
import Foo from "./components/Foo.vue"
import Page1 from "./components/Page1.vue"

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/1', component: Page1 },
  { path: '/2-1', component: Bar },
  { path: '/2-2', component: Foo },
  { path: '/2-3', component: Bar },
]

const router = new VueRouter({ routes });


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
