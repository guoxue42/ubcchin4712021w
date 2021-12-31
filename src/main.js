import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App.vue'

import VueRouter from 'vue-router'

import VueTouchRipple from 'vue-touch-ripple'

// import styles
import 'vue-touch-ripple/dist/vue-touch-ripple.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueTouchRipple, /* {
  // default global options
  color: '#fff',
  opacity: 0.3,
  speed: 1,
  transition: 'ease'
} */)



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
import GuHanYu from "./components/Page/GuHanYu.vue"
import LangSong from "./components/Page/LangSong.vue"
import XinJie from "./components/Page/XinJie.vue"

const routes = [
  {path: '*', redirect: 'guHanYu'},
  { path: '/guHanYu', component: GuHanYu },
  { path: '/langSong', component: LangSong },
  { path: '/xinJie', component: XinJie },
  
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
