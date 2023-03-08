<template>
	<view class="msgtop">
		<view>
			<image src="../../static/img/pic/pinglun.png" mode="widthFix"></image>
			<text>评论</text>
		</view>
		<view>
			<image src="../../static/img/pic/gaunzhu.png" mode="widthFix"></image>
			<text>关注</text>
		</view>
		<view>
			<image src="../../static/img/pic/shoucang.png" mode="widthFix"></image>
			<text>收藏</text>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.msgtop {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 40upx 0;
		background-color: #fff;
		> view {
			image {
				width: 100%;
			}
		}
	}
</style>