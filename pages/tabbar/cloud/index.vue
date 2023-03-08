<template>
	<view id="cloud">
			<!-- 2.0.19支持autoBack，默认为false -->
	        <u-navbar
	            title="云养宠物"
	            @rightClick="rightClick"
	            :autoBack="true"
				:titleStyle="{
					'font-size':'13px'
				}"
	        >
			<view slot="left" class="adress">
			    <u-icon
			        name="map-fill"
			        size="14"
			    ></u-icon>
				<text class="navtext">{{title}}</text>
			    <u-icon
			        name="arrow-down-fill"
			        size="12"
			    ></u-icon>           
			</view>
	        </u-navbar>
			
			<view class="container">
				<view class="ctsearch">
					<u--input
						    placeholder="输入基地名称"
						    suffixIcon="search"
						    suffixIconStyle="color: #909399"
							shape="circle"
					></u--input>
				</view>
				
				<view class="images">
					<image :src="picture" mode="widthFix"></image>
				</view>
				
				<view class="ctsearch">
					<my-tabs></my-tabs>
				</view>
				
				<view class="ctsearch"></view>
			</view>
			
		</view>
</template>

<script>
	import MyTabs from '@/components/forcloud/tabs.vue'
	export default {
		data() {
			return {
				title: '南京市',
				picture:'https://cdn.uviewui.com/uview/swiper/swiper1.png'
			}
		},
		onLoad() {

		},
		components:{
			MyTabs
		},
		methods:{
		        rightClick() {
		                    console.log('rightClick');
		                },
		                leftClick() {
		                    console.log('leftClick');
		                }
		    }
	}
</script>

<style lang="scss">
.adress {
	display: flex;
	align-items: center;
	font-size: 12px;
	.navtext {
		margin: 0 3px;
	}
}

#cloud {
	padding-top: 200upx;
	.container {
		padding: 0 15px;
		
		.images {
			width: 90%;
			margin: 15px auto;
			border-radius: 20px;
			overflow: hidden;
			image {
				width: 100%;
				display: block;
			}
		}
	}
}
</style>
