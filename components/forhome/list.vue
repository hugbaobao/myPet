<template>
	<view class="mylist">
				<view class="petitem" v-for="(item,index) in urls" :key="index">
					<u-avatar 
					slot="icon" 
					shape="square" 
					size="120" 
					:src="item"
					customStyle="margin: -3px 5px -3px 0"
					>
					</u-avatar>
					<view class="introduction">
						<view class="uname">
							<text>猪咪</text>
						</view>
						<view class="uage">
							<text>0-1岁</text>
						</view>
						<view class="jianjie">
							<u--text type="info" text="非常粘人非常粘人非常粘人非常粘人非常粘人非常粘人非常粘人非常粘人" :lines="2"></u--text>
						</view>
						<view class="ubody">
							<view class="mianyi">
								<text>未免疫</text>
								<!-- <text>已免疫</text> -->
							</view>
							<view class="mianyi">
								<text>已绝育</text>
								<!-- <text>已免疫</text> -->
							</view>
							<view class="mianyi">
								<text>未驱虫</text>
								<!-- <text>已免疫</text> -->
							</view>
						</view>
					</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				urls: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/7.jpg',
					'https://cdn.uviewui.com/uview/album/8.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',
					'https://cdn.uviewui.com/uview/album/10.jpg',
				]
			}
		},
		// onLoad() {
		// 	this.loadmore()
		// },
		methods: {
			scrolltolower() {
				this.loadmore()	
			},
			loadmore() {
				console.log('load');
				// for (let i = 0; i < 30; i++) {
				// 	this.indexList.push({
				// 		url: this.urls[uni.$u.random(0, this.urls.length - 1)]
				// 	})
				// }
			}
		},
	}
</script>

<style lang="scss" scoped>
	.mylist {
		.petitem {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			margin:5px 0 25rpx;
			.introduction {
				margin-left: 20rpx;
				text-align: left;
				.uname {
					font-weight: 700;
				}
				.uage {
					font-size: 12px;
					margin: 4px 0;
					text {
						background-color: #eeeeee;
						padding: 1px 4rpx;
						border-radius: 3px;
					}
				}
				.jianjie {
					font-size: 12px;
					margin-bottom: 4px;
				}
				.ubody {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.mianyi {
						font-size: 10px;
						border: 1px solid $uni-color-success;
						padding: 3px 5px;
						margin-right: 16rpx;
						border-radius: 6px;
						color: $uni-color-success;
					}
				}
			}
		}
	}
</style>
