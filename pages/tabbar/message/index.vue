<template>
	<view class="content">
		<div class="top">
			<my-top></my-top>
		</div>
		
		<view class="container">
		    <view class="tongzhi">
		    	<my-xitong></my-xitong>
		    </view>
		    <view class="chat">
		    	<my-chat></my-chat>
		    </view>
		</view>
	</view>
</template> 

<script>
	import MyTop from '@/components/formessage/top.vue'
	import MyXitong from '@/components/formessage/xitong.vue'
	import MyChat from '@/components/formessage/chat.vue'
export default {
	data() {
		return {
			active: false
		};
	},
	onLoad() {},
	components:{
		MyTop,
		MyXitong,
		MyChat
	}
};
</script>

<style lang="scss" scoped>
	.content {
		text-align: center;
		height: 100vh;
		background-color: $uni-bg-color-grey;
		.container {
			
			.tongzhi {
				padding: $fars1 0;
			}
			.chat {
			}
		}	
	}
</style>
