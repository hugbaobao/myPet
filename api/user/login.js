import request from '@/api/index.js'

// 微信快捷登录
export function mpWxlog (val){
	return request({
		url:'/mpwx/wxlg',
		data:{
			code:val
		}
	})
}