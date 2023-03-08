<template>
	<view class="mynav">
		<view class="navitem">
			<view class="texts">
				<text>我的领养</text>
				<view><text style="margin-right: 5rpx;">{{ get }}</text>个领养</view>
			</view>
			<image src="../../static/img/pic/aichong02.png" mode="widthFix"></image>
		</view>
		<view class="navitem">
			<view class="texts">
				<text>我的送养</text>
				<view>
					<text style="margin-right: 5rpx;">{{ get }}</text>个领养</view>
			</view>
			<image src="../../static/img/pic/aichong28.png" mode="widthFix"></image>
		</view>
		<view class="navitem">
			<view class="texts">
				<text>我的云宠</text>
				<view>
					<text style="margin-right: 5rpx;">{{ get }}</text>个领养</view>
			</view>
			<image src="../../static/img/pic/aichong07.png" mode="widthFix"></image>
		</view>
		<view class="navitem">
			<view class="texts">
				<text>我的寻宠</text>
				<view>
					<text style="margin-right: 5rpx;">{{ get }}</text>个领养
				</view>
			</view>
			<image src="../../static/img/pic/chongwujiyang.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				get:0,
				post:0,
				clouds:0,
				find:0
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mynav{
		padding: $space1;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: flex-start;
		.navitem {
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-radius: 20rpx;
			width: 48%;
			background-color: #333;
			margin-bottom: $fars1;
			padding: $space1;
			background: linear-gradient(to right, #fff8ee, #fef8dc);
				
			&:nth-child(2) {
				background: linear-gradient(to right, #fff5f6, #fcedf0);
			}
			&:nth-child(3) {
				background: linear-gradient(to right, #fdf6fe, #fdecfb);
			}
			&:nth-child(4) {
				background: linear-gradient(to right, #f2f8ff, #e6f2fe);
			}
			.texts {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				font-size: 12px;
				color: $uni-text-color-grey;
				text {
					font-size: 14px;
					color: $uni-text-color;
					margin-bottom: 5upx;
				}
			}
			image {
				width: 60rpx;
				margin-right: 10rpx;
			}
		}
	}
</style>