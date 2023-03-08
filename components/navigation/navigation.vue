<template>
	<view class="mynavigator">
		<u-navbar
		    :title="titles"
			:titleStyle="{
				'font-size':'13px'
			}"
		>
		<view slot="left" class="adress">
		    <u-icon
		        name="arrow-left"
		        size="18"
				@tap="backto"
		    ></u-icon>
			<view class="views"></view>
		    <u-icon
		        name="home"
		        size="18"
				@tap="tohome"
		    ></u-icon>           
		</view>
		</u-navbar>
	</view>
</template>

<script>
	export default {
		name:"navigation",
		props:{
			titles:{
				default:'标题',
				type:String
			}
		},
		data() {
			return {
				
			}
		},
		methods:{
			backto(){
				uni.navigateBack({
					fail: () => {
						uni.switchTab({
							url: '/pages/tabbar/home/index'
						});
					},
				})
			},
			tohome(){
				uni.switchTab({
					url: '/pages/tabbar/home/index',
					// success: res => {},
					// fail: (e) => {
					// 	console.log(e);
					// },
					// complete: () => {}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mynavigator {
		margin-bottom: 200upx;
	}
.adress {
		display: flex;
		align-items: center;
		border: 1px solid $uni-border-color;
        height: 44upx;
		border-radius: 22upx;
		padding: 0 10rpx;
		.views {
			height: 30upx;
			margin: 0 10rpx;
			border-right: 1px solid $uni-border-color;
		}
	}
</style>