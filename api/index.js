const baseURL = 'http://localhost:8000'

const request = (params) => {
  return new Promise((resolve,reject)=>{

    // 请求前加载状态
    uni.showLoading({
      title:'加载中！'
    })

    uni.request({
      url: baseURL + params.url, //仅为示例，并非真实接口地址。
      method:params.type || 'GET',
      data: params.data,
      header: {
        "Authorization": uni.getStorageSync('Token') || '' //自定义请求头信息
      },
      success: (res) => {
          resolve(res)
      },
      fail:(err)=>{
        reject(err)
      },
      complete:()=>{
		  // 关闭加载状态
        uni.hideLoading()
      }
    });
  })
}

export default request