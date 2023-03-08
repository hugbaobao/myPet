<template>
	<view class="mytabs">
		<u-tabs :list="list1" :activeStyle="{
			color:'#ff8810'
		}">
		        <view
		                slot="right"
		                style="padding-left: 4px;"
		                @tap="show = true"
						class="shaixuan"
		        >
				<text>筛选</text>
		            <u-icon
		                    name="list"
		                    size="18"
		                    bold
		            ></u-icon>
		        </view>
		    </u-tabs>
			
			<!-- 抽屉 -->
			<view>
					<u-popup 
					:show="show" 
					@close="close" 
					mode="right"
					:duration='300'
					>
			            <view class="mypop" style="width: 500rpx;">
							<view class="tabform">
								<form>
									<view class="formitem">
											<text  style="float: left;">年龄</text>
										<view class="btncontent">
											<button 
											size="mini" 
											:class="form.age == 0 ? 'activebtn' : ''" 
											@tap="form.age = 0"
											>全部
											</button>
											
											<button 
											size="mini"
											:class="form.age == 1 ? 'activebtn' : ''"
											@tap="form.age = 1"
											>0-1岁</button>
											<button size="mini" :class="form.age == 2 ? 'activebtn' : ''"
											@tap="form.age = 2">2-4岁</button>
											<button size="mini" :class="form.age == 3 ? 'activebtn' : ''"
											@tap="form.age = 3">5岁以上</button>
										</view>
									</view>
									<view class="formitem">
											<text  style="float: left;">性别</text>
										<view class="btncontent">
											<button size="mini" :class="form.sex == 2 ? 'activebtn' : ''" @tap="form.sex = 2">全部</button>
											<button size="mini" :class="form.sex == 1 ? 'activebtn' : ''" @tap="form.sex = 1">男孩</button>
											<button size="mini" :class="form.sex == 0 ? 'activebtn' : ''" @tap="form.sex = 0">女孩</button>
										</view>
									</view>
									<view class="formitem">
											<text  style="float: left;">身体状况</text>
										<view class="btncontent">
											<button size="mini" :class="form.body == 0 ? 'activebtn' : ''" @tap="form.body = 0">已绝育</button>
											<button size="mini" :class="form.body == 1 ? 'activebtn' : ''" @tap="form.body = 1">已免疫</button>
											<button size="mini" :class="form.body == 2 ? 'activebtn' : ''" @tap="form.body = 2">已驱虫</button>
										</view>
									</view>
									
									<view class="submit activebtn" @tap="screenslc">确定</view>
								</form>
							</view>
			            </view>
					</u-popup>
				</view>
	</view>
</template>

<script>
	export default {
	        data() {
	            return {
	                list1: [{
	                    name: '全部',
	                }, {
	                    name: '狗狗',
	                }, {
	                    name: '猫猫'
	                }, {
	                    name: '其他'
	                }],
					show:false,
					form: {
						age:0,
						sex:2,
						body:0
					}
	            }
	        },
			methods: {
				screenslc(){
					this.show = false
				},
			    close() {
			      this.show = false
			    }
			  }
	    }
</script>

<style lang="scss">
	.shaixuan {
		display: flex;
		align-items: center;
		text {
			margin-right: 5px;
			font-size: 12px
		}
	}
	
	.mypop {
		padding-top: 200upx;
		.tabform {
				
			.formitem {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				padding: 0 20rpx;
				margin-bottom: 20px;
				text {
					margin-bottom: 10px;
					font-size: 15px;
				}
				.btncontent {
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					justify-content: flex-start;
					align-content: flex-start;
					button {
						border-radius: 15px;
						margin:0 10px 8px 0;
					}
				}
			}
			.submit {
				margin:40px 20px 0;
				height: 40px;
				line-height: 40px;
				border-radius: 20px;
			}
		}
	}
	
	.activebtn {
				background-color: $activefont;
				color: #fff;
	}
</style>