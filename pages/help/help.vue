<template>
	<view class="help">
		<view class="navgator">
			<my-navgator titles="助力活动"></my-navgator>
		</view>
		
		<view class="helpcontainer">
			<u-empty
			        mode="news"
			        icon="http://cdn.uviewui.com/uview/empty/car.png"
			>
			</u-empty>

		</view>
	</view>
</template>

<script>
	import MyNavgator from '@/components/navigation/navigation.vue'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			MyNavgator
		}
	}
</script>

<style lang="scss">

</style>
