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
import Page1 from "./components/Page/Page1.vue"
// import Page2_1 from "./components/Page/Page2_1.vue"
// import Page2_2 from "./components/Page/Page2_2.vue"
// import Page2_2 from "./components/Page/Page2_2.vue"
// import Page2_4_1 from "./components/Page/Page2_4_1.vue"
// import Page4_1 from "./components/Page/Page4_1.vue"


const routes = [
  {path: '/', redirect: '1'},
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/1', component: Page1 },
  { path: '/2-1', component: Bar },
  { path: '/2-2', component: Foo },
  { path: '/2-3', component: Bar },
]

const router = new VueRouter({ routes });




//OTHER IMPORTS
import {Image} from 'element-ui'
// Vue.component(Image.name, Image);





new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
