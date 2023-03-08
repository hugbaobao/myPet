<template>
	<view class="mynav">
		<view class="navtop">
			<view class="navitem">
				<navigator url="/pages/black/black">
				<image src="../../static/img/pic/heimingdan.png" mode="widthFix"></image>
				<text>黑名单</text>
				</navigator>
			</view>
			<view class="navitem">
				<navigator url="/pages/help/help">
				<image src="../../static/img/pic/shoucangaixin.png" mode="widthFix"></image>
				<text>助力</text>
				</navigator>
			</view>
			<view class="navitem" @tap="showtoast">
				<navigator url="">
				<image src="../../static/img/pic/bushu.png" mode="widthFix"></image>
				<text>互助捐步</text>
				</navigator>
				<u-toast ref="uToast"></u-toast>
			</view>
		</view>
		
		<view class="navbot">
			<view class="navbot-l" style="margin-right: 30rpx;">
				<text>寻宠</text>
				<text class="u-line-1">自你离开，我好想你...</text>
			</view>
			<view class="navbot-r">
				<text>发声墙</text>
				<text class="u-line-1">共同努力，为爱发声...</text>
			</view>
		</view>
		
		<view class="navimg">
			<image src="../../static/img/pic/320.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			showtoast(){
				this.$refs.uToast.show({
					message:'暂未开放',
					type:'warning'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mynav{
		.navtop {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30px;
			.navitem {
				navigator {
					display: flex;
					flex-direction: column;
					align-items: center;
					image {
						width: 100rpx;
						margin-bottom: 5px;
					}
				}
					
			}
		}
		.navbot {
			margin-top: 15px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #fff;
			>view {
				flex: 1;
				background-color: deeppink;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				border-radius: 10px;
				padding: 10px;
				text {
					font-size: 12px;
					&:nth-child(1) {
						font-weight: 700;
						font-size: 14px;
						margin-bottom: 5px;
					}
				}
			}
		}
		.navimg {
			margin-top: 15px;
			img {
				width: 100%;
			}
		}
	}
</style>