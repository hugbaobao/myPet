<template>
	<view>
		<view class="navgator">
			<my-navgator titles="黑名单公示墙"></my-navgator>
		</view>
		
		<view class="notice">
			<u-notice-bar :text="notices"></u-notice-bar>
			
			<div class="container">
				
			<div class="report">
				<view class="reportitem">
					<u-icon name="error-circle" color="#fff" size="28"></u-icon>
					<text>我要举报</text>
				</view>
				<view class="reportitem">
					<u-icon name="search" color="#fff" size="28"></u-icon>
					<text>查询</text>
				</view>
				<view class="reportitem">
					<u-icon name="share-square" color="#fff" size="28"></u-icon>
					<text>转发</text>
				</view>
			</div>
			
			<view class="thelist">
				<my-black></my-black>
			</view>
			
			</div>
		</view>
	</view>
</template>

<script>
	import MyNavgator from '@/components/navigation/navigation.vue'
	import MyBlack from '@/components/forblack/list.vue'
	export default {
		data() {
			return {
				notices:'以下信息由网友在各平台收集发布，资料不仅来自领养人和送养人，也包括媒体曝光。请大家诚信交流，共创一个互信质优的领养平台'
			};
		},
		components:{
			MyNavgator,
			MyBlack
		}
	}
</script>

<style lang="scss" scoped>

.notice {
	.container {
		padding: 0 $space1;
		.report {
			margin: $fars4 0;
			display: flex;
			justify-content: space-between;
			.reportitem {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				background-color: #f88194;
				border-radius: 20rpx;
				padding: 20rpx 0;
				color: #fff;
				font-size: 14px;
				&:nth-child(2) {
					margin:0 $fars4;
					background-color: #3cf8c9;
				}
				&:nth-child(3) {
					background-color: #5da4f6;
				}
			}
		}
		.thelist {
			box-shadow: 0 0 12px 0 #5da4f6;
			border-radius: 20rpx;
			overflow: hidden;
		}
	}
	
}
</style>
