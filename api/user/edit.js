import request from '@/api/index.js'

// 微信快捷登录
export function mpWxlogApi (val){
	return request({
		url:'/admin/edit',
		type:'POST',
		data:val
	})
}