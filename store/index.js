import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

//decodeURIComponent解码
// const infos = decodeURIComponent(uni.getStorageSync('userinfo'))

export default new Vuex.Store({
  state: {
    userinfo: JSON.parse(uni.getStorageSync('userinfo') || null) || null
  },
  mutations: {
	// 保存用户id
	SAVE_INFO(state, value){
		state.userinfo = value
		//encodeURIComponent转码
		const jsoninfo = JSON.stringify(value)
		// const jsoninfo2 = encodeURIComponent(jsoninfo)
		uni.setStorageSync('userinfo',jsoninfo)
	},
	// 移除用户id
	REMOVE_INFO(state){
		state.userinfo = {}
	}
  },
  actions: {
	// 保存用户id
	save_info(context,val){
		context.commit('SAVE_INFO', val)
	},
	// 移除用户id
	remove_info({ commit }){
		commit('REMOVE_INFO')
	}
  },
  getters: {
	  
  }
})