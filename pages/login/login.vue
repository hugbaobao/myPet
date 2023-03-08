<template>
	<view class="logins">
		<view class="wechatapp">
		    <view class="header">
		        <image class="image" :src="storeInfo && storeInfo.image_url ? storeInfo.image_url : '/static/picture/mimi001.png'"></image>
		    </view>
		</view>
		    <view class="auth-title">申请获取以下权限</view>
		    <view class="auth-subtitle">获得你的公开信息（昵称、头像等）</view>
		    <view class="login-btn">
		      <!-- 获取微信用户信息 -->
		      <button class="button btn-normal" @click.stop="getUserProfile">授权登录</button>
		    </view>
		    <view class="no-login-btn">
		      <button class="button btn-normal" @click="handleCancel">暂不登录</button>
		    </view>
	</view>
</template>

<script>
	import { mpWxlog } from '@/api/user/login.js'
	export default {
		data() {
			return {
				storeInfo:undefined
			};
		},
		methods:{
			// 登录接口
			async mpwxlog(value){
				const { data:res } = await mpWxlog(value)
				if(res.code === 200) {
					this.$store.dispatch('save_info',res.data[0])
					uni.setStorageSync('Token',res.data[1])
					uni.switchTab({
						url:'/pages/tabbar/personal/index'
					})
				}
			},
			// 授权登录
			getUserProfile(){
				const app = this;
				uni.login({
				  provider: 'weixin', 
				  success: function (loginRes) {
					app.mpwxlog(loginRes.code)
				  }
				});
			},
			// 暂不登录
			handleCancel(){
				uni.navigateBack({
					fail() {
						uni.switchTab({
							url:'/pages/tabbar/personal/index'
						})
					}
				})
			}
		},
		onLoad(){
			
		}
	}
</script>

<style lang="scss" scoped>
.logins {
	padding: $space1;
	.wechatapp {
	    padding: 80rpx 0 48rpx;
	    border-bottom: 1rpx solid #e3e3e3;
	    margin-bottom: 72rpx;
	    text-align: center;
	
	    .header {
	      width: 190rpx;
	      height: 190rpx;
	      border: 4rpx solid #fff;
	      margin: 0 auto 0;
	      border-radius: 50%;
	      overflow: hidden;
	      box-shadow: 2rpx 0 10rpx rgba(50, 50, 50, 0.3);
	
	      .image {
	        display: block;
	        width: 100%;
	        height: 100%;
	      }
	    }
	  }
	
	  .auth-title {
	    color: #585858;
	    font-size: 34rpx;
	    margin-bottom: 40rpx;
	  }
	
	  .auth-subtitle {
	    color: #888;
	    margin-bottom: 88rpx;
	    font-size: 28rpx;
	  }
	
	  .login-btn {
	    padding: 0 20rpx;
	
	    .button {
	      height: 88rpx;
	      background: #04be01;
	      color: #fff;
	      font-size: 30rpx;
	      border-radius: 999rpx;
	      display: flex;
	      justify-content: center;
	      align-items: center;
	    }
	  }
	
	
	  .no-login-btn {
	    margin-top: 20rpx;
	    padding: 0 20rpx;
	
	    .button {
	      height: 88rpx;
	      background: #dfdfdf;
	      color: #fff;
	      font-size: 30rpx;
	      border-radius: 999rpx;
	      display: flex;
	      justify-content: center;
	      align-items: center;
	    }
	  }
}
</style>
