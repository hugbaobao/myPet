<template>
	<view class="content">
		<view class="cttop">
			<my-top :myinfo="userinfo"></my-top>
		</view>
		
		<view class="ctnav">
			<my-nav></my-nav>
		</view>
		
		<view class="ctphone">
			<my-phone></my-phone>
		</view>
	</view>
</template>

<script>
	import MyTop from '@/components/forpersonal/top.vue'
	import MyNav from '@/components/forpersonal/nav.vue'
	import MyPhone from '@/components/forpersonal/phone.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				userinfo:{}
			}
		},
		created() {
this.userinfo = this.$store.state.userinfo
		},
		methods: {
		},
		components:{
			MyTop,
			MyNav,
			MyPhone
		}
	}
</script>

<style lang="scss" scoped>
	.content {

		.ctphone {
			padding:0 $space1;
		}
	}
</style>
