<template>
	<view>
			<!-- 2.0.19支持autoBack，默认为false -->
	        <u-navbar
	            title="领养中心"
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
			
			<!-- 正文 -->
			<div class="container">
				<!-- 轮播图 -->
				<view class="myswiper">
				<u-swiper
				    :list="list1"
				    previousMargin="30"
				    nextMargin="30"
				    circular
				    :autoplay="true"
					duration="500"
				    radius="5"
				    bgColor="#ffffff"
				>
				</u-swiper>
				</view>	
				
				<!-- 带边距容器 -->
				<view class="content">
					<my-nav></my-nav>
					
					<view>
						<my-tabs></my-tabs>
					</view>
					
					<view class="lists">
						<my-list></my-list>
					</view>
				</view>
			</div>
		</view>
</template>

<script>
	import MyNav from '@/components/forhome/nav.vue'
	import MyTabs from '@/components/forhome/tabs.vue'
	import MyList from '@/components/forhome/list.vue'
export default {
	data() {
		return {
			title: '南京市',
			list1: [
			        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
			        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
			        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
			        ]
		};
	},
	onLoad() {},
	methods:{
	        rightClick() {
	                    console.log('rightClick');
	                },
	                leftClick() {
	                    console.log('leftClick');
	                }
	    },
		components:{
			MyNav,
			MyTabs,
			MyList
		}
};
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
.container {
	text-align: center;
	margin-top: 200upx;
	.myswiper {
	}
	.content {
		margin: 20px 0;
		padding: 0 15px;
	}
	.lists {
		margin-top: 20rpx;
	}
}
</style>
