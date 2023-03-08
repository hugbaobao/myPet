<script>
export default {
	onLaunch: function() {
		console.log('App Launch');

		setTimeout(() => {
			uni.setTabBarBadge({
				index: 3,
				text: '31'
			});
			// uni.showTabBarRedDot({
			// 	index: 3
			// });
		}, 1000);
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */ 
@import "@/uni_modules/uview-ui/index.scss";
// iconfont
@import url("@/static/iconfont/iconfont.css");
</style>
