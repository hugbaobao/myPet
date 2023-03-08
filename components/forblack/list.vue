<template>
	<view class="blacklist">
		<view class="listhead">
			<view @tap="activeview = true" :class="activeview ? 'activeview' : ''">领养人</view>
			<view @tap="activeview = false" :class="!activeview ? 'activeview' : ''">送养人</view>
		</view>
		
		<view class="listtitle">
			<view class="listitem">
				<view class="iteminner">昵称</view>
				<view class="iteminner" style="border: 0;text-align: center;line-height: 70upx;padding-left:0">举报说明</view>
				<view class="iteminner" style="color: #999">详情</view>
			</view>
			<view class="listitem" v-for="item in getlist" :key="item.id">
				<view class="iteminner">{{ item.nickname }}</view>
				<view class="iteminner">{{ item.explain }}</view>
				<view class="iteminner" @tap="toins(item.id)">更多 ></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data (){
			return {
				activeview:true,
				getlist:[
					{
						id:1,
						nickname:'狗子',
						explain:'举报说明举报说明举报说明举报说明举报说明举报说明举报说明举报说明举报说明举报说明举报说明举报说明举报说明举报说明举报说明举报说明举报说明举报说明'
					},
					{
						id:2,
						nickname:'猫子',
						explain:'举报说明'
					},
					{
						id:3,
						nickname:'兔子',
						explain:'举报说明'
					}
				]
			}
		},
		methods:{
			toins(val) {
				uni.navigateTo({
					url: `/pages/black/more?id=${val}`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.blacklist {
		.listhead {
			display: flex;
			view {
				flex: 1;
				height: 70upx;
				line-height: 70upx;
				text-align: center;
				background-color: $uni-bg-color-grey;
				font-size: 14px;
			}
			.activeview {
				color: $activefont;
				background-color: #fff;
			}
		}
		
		.listtitle {
			.listitem {
				border-bottom: 1px solid $uni-border-color;
				display: flex;
				align-items: center;
				height: 70upx;
				&:last-child {
					border-bottom:0;
				}
				.iteminner {
					box-sizing: border-box;
					flex: 1;
					text-align: center;
					font-size: 12px;
					color: $uni-text-color-grey;
					padding: 4upx 0;
					&:nth-child(2) {
						flex: 3;
						border-left: 1px solid $uni-border-color;
						border-right: 1px solid $uni-border-color;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						line-clamp: 2;
						-webkit-box-orient: vertical;
						height: 70upx;
						line-height: 1.4;
						text-align: left;
						padding-left: 10rpx;
					}
					&:nth-child(3) {
						color: $uni-color-warning;
					}
				}
			}
		}
	}
</style>