<template>
	<view class="mytabs">
		<u-tabs :list="list1" :activeStyle="{
			color:'#ff8810'
		}">
		        <view
		                slot="right"
		                style="padding-left: 4px;"
						class="shaixuan"
						@tap="showstyle = !showstyle"
		        >
		            <u-icon
					v-if="showstyle"
		            name="grid"
		            size="20"
		            bold
		            ></u-icon>
					<u-icon
					v-else
					name="list-dot"
					size="20"
					bold
					></u-icon>
		        </view>
		    </u-tabs>

	</view>
</template>

<script>
	export default {
	        data() {
	            return {
	                list1: [{
	                    name: '全部',
	                }, {
	                    name: '关注',
	                }],
					showstyle:false
	            }
	        },
			methods: {
			  }
	    }
</script>

<style lang="scss">
	.shaixuan {
		text {
			margin-right: 5px;
			font-size: 12px
		}
	}

</style>