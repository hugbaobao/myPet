import App from './App.vue'
import uView from '@/uni_modules/uview-ui'
import request from '@/api/index.js'
import store from '@/store/index.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.use(uView)
//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.prototype.$request = request
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
Vue.use(uView)
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
