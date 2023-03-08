<template>
	<view class="mychat">
		<view class="mylist" v-for="item in chatlists" :key="item.id">
			
			<view class="listleft">
				<view class="icons">
					<image src="../../static/picture/mimi001.png" mode="widthFix"></image>
				</view>
				
				<view class="tz">
					<text>{{ item.tz }}</text>
					<text>{{ item.ins }}</text>
					<text>{{ item.time }}</text>
				</view>
			</view>
			
			
			<view class="product">
				<image :src="item.src" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				chatlists:[
					{
						id:1,
						tz:'饭团团',
						ins:'你好',
						time:'02-25',
						src:'../../static/picture/mimi001.png'
					},
					{
						id:2,
						tz:'饭团团',
						ins:'你好',
						time:'02-25',
						src:'../../static/picture/mimi001.png'
					},
					{
						id:3,
						tz:'饭团团',
						ins:'你好',
						time:'02-25',
						src:'../../static/picture/mimi001.png'
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mychat {
		background-color: #fff;
		padding: 20rpx;
		.mylist {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: $fars1;
			padding: 10rpx 0;
			.listleft {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.icons {
					background-color: deepskyblue;
					width: 80rpx;
					height: 80rpx;
					border-radius: 40rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-right: 20rpx;
					border-radius: 40rpx;
					overflow: hidden;
					image {
						width: 100%;
					}
				}
				.tz {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: flex-start;
					text {
						color: $uni-text-color-grey;
						font-size: 14px;
						&:nth-child(1) {
							font-weight: 700;
							color: $uni-text-color;
						}
						&:nth-child(3) {
							font-size: 10px;
						}
					}
				}
			}
			
			.product {
				border-radius: 20rpx;
				width: 100rpx;
				height: 100rpx;
				overflow: hidden;
				image {
					width: 100%;
				}
			}
		}
	}
</style>