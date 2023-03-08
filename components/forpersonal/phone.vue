<template>
	<view class="myphone">
		<view class="commontext">
			<text>微信咨询： <text class="innertext">BaoBao_lifechat</text></text>
			<text>电话咨询： <text class="innertext">17742009692</text></text>
			<text>工作时间： 09:00 - 24:00</text>
		</view>
		<view class="bottom">
			<u-line length="40"></u-line>
			<text>让每一个毛孩子都有家</text>
			<u-line length="40"></u-line>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.myphone {
		margin-top: 20upx;
		>view {
			display: flex;
			text {
				font-size: 12px;
				color: $uni-text-color-grey;
				margin-bottom: 15upx;
			}
		}
		.commontext {
			flex-direction: column;
			align-items: center;
			.innertext {
				color: #f9a7b5;
			}
		}
		.bottom {
			margin-top: 40upx;
			justify-content: center;
			align-items: center;
			text {
				margin: 0 40rpx;
			}
		}
	}
</style>