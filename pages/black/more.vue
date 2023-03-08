<template>
	<view>
<view class="navgator">
	<my-navgator titles="举报详情"></my-navgator>
</view>

<view class="more_container">
	<view class="more_title">
		失信人信息
	</view>
	
	<view class="tips">
		<u-icon name="error-circle" color="$activefont" size="14"></u-icon>
		<text class="tiptext">温馨提示：以下信息真实性由发布者个人承担。如侵犯您的权益，请联系我们。</text>
	</view>
	
	<view class="info">
		<view class="infoline">
			<view class="lineleft">
				真实姓名
			</view>
			<view class="lineright">{{ info.name }}</view>
		</view>
		<view class="infoline">
			<view class="lineleft">
				性别
			</view>
			<view class="lineright">{{ info.sex }}</view>
		</view>
		<view class="infoline">
			<view class="lineleft">
				身份
			</view>
			<view class="lineright">{{ info.who }}</view>
		</view>
		<view class="infoline">
			<view class="lineleft">
				所在地
			</view>
			<view class="lineright">{{ info.where }}</view>
		</view>
		<view class="infoline">
			<view class="lineleft">
				手机号
			</view>
			<view class="lineright">{{ info.phone }}</view>
		</view>
		<view class="infoline">
			<view class="lineleft">
				微信号
			</view>
			<view class="lineright">{{ info.wx }}</view>
		</view>
		<view class="infoline">
			<view class="lineleft">
				微信昵称
			</view>
			<view class="lineright">{{ info.nickname }}</view>
		</view>
	</view>
	
	<view class="more_title">
			举报理由
		</view>
	<view class="reason">
		<text>{{ info.reson }}</text>
	</view>	
		
	<view class="more_title">
			图片证据
		</view>
	<view class="rspic">
		<u-grid
		        :border="false"
		>
		    <u-grid-item
		            v-for="(baseListItem,baseListIndex) in baseList"
	                :key="baseListIndex"
	        >
			<text>{{baseListItem.title}}</text>
		    </u-grid-item>
		</u-grid>
	</view>
		
</view>

	</view>
</template>

<script>
	import MyNavgator from '@/components/navigation/navigation.vue'
	export default {
		data() {
			return {
				ids:0,
				info:{
					name:'狗子',
					sex:'男',
					who:'领养人',
					where:'南京市',
					phone:'17740000000',
					wx:'qwert',
					nickname:'trewq',
					reson:'坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人坏人'
				},
				baseList: [
					{
					name: 'photo',
				    title: '图片'
				    },
				    {
					name: 'lock',
				    title: '锁头'
				    }]
			};
		},
		onLoad(option){
			console.log(option.id);
		},
		components:{
			MyNavgator
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.more_container {
		padding: 0 $space1;
		.more_title {
			font-size: 15px;
			font-weight: 700;
		}
		
		.tips {
			margin: $uni-spacing-col-base 0;
			font-size: 12px;
			color: $activefont;
			display: flex;
			align-items: flex-start;
			.tiptext {
				margin-left: 10rpx;
			}
		}
		
		.info {
			border: 1px solid $uni-border-color;
			margin-bottom: $uni-spacing-row-base;
			.infoline {
				border-bottom: 1px solid $uni-border-color;
				height: $lineitemhight6;
				line-height: $lineitemhight6;
				display: flex;
				text-align: center;
				font-size: 14px;
				&:last-child {
					border-bottom:0;
				}
				.lineleft {
					border-right: 1px solid $uni-border-color;
					width: 33%;
				}
				.lineright {
					flex: 1;
				}
			}
		}
		
		.reason {
			font-size: 13px;
			text-indent: 2em;
			color: #383838;
			padding: $uni-spacing-row-base 0 40upx;
		}
		.rspic {
			padding: $uni-spacing-row-base 0;
		}
	}
</style>
