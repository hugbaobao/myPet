<template>
	<view class="mytop">
		<view class="header">
			<view class="avt">
				<u-avatar :src="myinfo ? myinfo.header : ''" size="55"></u-avatar>
			</view>
			<view class="nick">
				<text>{{ myinfo ? myinfo.nickname : nickname }}</text>
				<view class="allow">
					<view>收藏 {{ collect }}</view>
					<view>关注 {{ follow }}</view>
				</view>
			</view>
		</view>
		
		<view class="edit">
			<view class="way">
				足迹<text>{{ way }}</text>
			</view>
			<view class="editbtn" @tap="eidtself">
				编辑个人资料
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			myinfo:{
				default:null,
				type:Object
			}
		},
		data(){
			return {
				nickname:'猫咪会怪罪你',
				collect:0,
				follow:0,
				way:0
			}
		},
		methods:{
			eidtself(){
				const loginsession = uni.getStorageSync('userinfo')
				if (loginsession) {
					uni.navigateTo({
						url:'/pages/edit/edit'
					})
				} else{
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}
		    }
		}
		}
		
</script>

<style lang="scss" scoped>
	.mytop {
		background: linear-gradient(to right, #fcecef, #fee6fc, #fef0fd);
		.header {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding:$fars3 $fars1 $fars1;
			.avt {
				margin-right: $fars1;
			}
			.nick {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;
				.allow {
					display: flex;
					margin-top: 10rpx;
					view {
						font-size: 10px;
						color: #fff;
						background-color: #faadbf;
						margin-right: 10rpx;
						padding: 5upx 10rpx;
						border-radius: 10rpx;
						&:nth-child(2) {
							background-color: #6eb0f7;
						}
					}
				}
			}
		}
		.edit {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding:0 $fars4 $fars3;
			.way {
				font-size: 14px;
				color: $uni-text-color-grey;
				text {
					color: $uni-text-color;
					font-size: 16px;
					font-weight: 700;
					margin-left: 8rpx;
				}
			}
			.editbtn {
				background: linear-gradient(to right, #f9a6b8, #fc7e93);
				color: #fff;
				font-size: 12px;
				height: 60rpx;
				line-height: 60rpx;
				border-radius: 30rpx;
				padding: 0 24rpx;
			}
		}
	}
</style>