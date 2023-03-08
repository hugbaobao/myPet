<template>
	<view class="xitong">
		<view class="icons">
			<u-icon name="bell" color="#fff" size="20px" bold></u-icon>
		</view>
		<view class="tz">
			<text>系统通知</text>
			<text>{{ xttz }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				xttz:'暂无'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.xitong {
		background-color: #fff;
		border-radius: 20rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 20rpx;
		.icons {
			background-color: deepskyblue;
			width: 80rpx;
			height: 80rpx;
			border-radius: 40rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 20rpx;
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
				font-size: 14px;
				&:nth-child(1) {
					font-weight: 700;
				}
			}
		}
	}
</style>