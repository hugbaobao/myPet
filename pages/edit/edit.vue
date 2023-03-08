<template>
	<view class="myedit">
		<view class="navgator">
			<my-navgator titles="黑名单公示墙"></my-navgator>
		</view>
		
		<view class="myavator">
			<!-- <view class="example-body custom-image-box">
				<uni-file-picker 
				limit="1" 
				:del-icon="false" 
				disable-preview 
				:imageStyles="imageStyles"
				file-mediatype="image"
				@select="handleSelect"
			    @success="success" 
			    @fail="fail" 
				>选择
				</uni-file-picker>
		</view> -->
		<u-avatar :src="userInfo.avator" size="80" @tap="chooseimg"></u-avatar>
		</view>
		
		<view class="editcontainer">
			<u--form
				labelPosition="left"
				:model="userInfo"
				:rules="rules"
				ref="form1"
				labelWidth="80"
				:labelStyle="{
					fontSize:'14px'
				}"
			>
			    <u-form-item
			    		label="姓名"
			    		prop="name"
			    		borderBottom
			    		ref="item1"
			    >
			    	<u--input
			    			v-model="userInfo.name"
			    			border="none"
			    	></u--input>
			    </u-form-item>
			    
			    <u-form-item
			    		label="性别"
			    		borderBottom
			    		@click="showSex = true"
			    		ref="item1"
			    >
			    	<u--input
			    			v-model="userInfo.sex"
			    			disabled
			    			disabledColor="#ffffff"
			    			placeholder="请选择性别"
			    			border="none"
			    	></u--input>
			    	<u-icon
			    			slot="right"
			    			name="arrow-right"
			    	></u-icon>
			    </u-form-item>
				
			    <u-form-item
			    		label="手机号码"
			    		prop="phone"
			    		borderBottom
			    		ref="item1"
			    >
			    	<u--input
			    			v-model="userInfo.phone"
			    			border="none"
			    	></u--input>
			    </u-form-item>
			    
			    <u-form-item
			    		label="简介"
			    		borderBottom
			    		ref="item1"
			    >
			    <textarea 
			    name="introduce"
				class="tarea"
				placeholder="请简单介绍一下自己吧"
			    v-model="userInfo.introduce"
			    ></textarea>
			    </u-form-item>
			</u--form>
			<u-action-sheet
				:show="showSex"
				:actions="actions"
				title="请选择性别"
				@close="showSex = false"
				@select="sexSelect"
			>
			</u-action-sheet>
		</view>
		
		<view class="mybtn">
			<u-button type="success" text="保存" :plain="true" @click="submitform"></u-button>
		</view>
		<!-- 通知消息 -->
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import MyNavgator from '@/components/navigation/navigation.vue'
	import { mpWxlogApi } from '@/api/user/edit.js'
	export default {
		data() {
			return {
				imageStyles: {
					width: 100,
					height: 100,
					border: {
						radius: '50%'
					}
				},
				showSex: false,
				userInfo: {
					id:0,
					name: '',
					sex: 2,
					phone:'',
					introduce:'',
					avator:''
				},
				actions: [
					{
					    name: '男',
					    val:1
					},
					{
						name: '女',
						val:0
					},
					{
						name: '保密',
						val:2
					},
				],
				rules: {
					'name': [
						{
							type: 'string',
							required: true,
							message: '请填写姓名',
							trigger: ['blur', 'change']
						},
						{
							max: 8,
							message: '名称不长于8个字',
							trigger: ['blur', 'change']
						}
					],
					'phone': [
	                	{
	                		required: false
	                	},
	                	{
	                		// 自定义验证函数
	                		validator: (rule, value, callback) => {
	                			if (value == "") {
	                				return true;
	                			} else {
	                				// 上面有说，返回true表示校验通过，返回false表示不通过
	                				// this.$u.test.mobile()就是返回true或者false的
	                				return this.$u.test.mobile(value);
	                			}
	                		},
	                		message: '手机号码不正确',
	                		trigger: ['blur'],
	                	}
	                ]
				},
				// 通知消息
				listmsg: [
					{
						type: 'error',
						message: "保存失败"
					},
					{
						type: 'success',
						message: "保存成功",
						url:'/pages/tabbar/personal/index'
					}
				],
			};
		},
		methods:{
			sexSelect(e) {
				this.userInfo.sex = e.val
			},
				
			submitform(){
				const app = this
				this.$refs.form1.validate().then(res => {
					// console.log(app.userInfo);
					app.saveedit()
				}).catch(errors => {
					uni.$u.toast('校验失败')
				})
			},
			
			// 保存编辑
			async saveedit () {
				const app = this
				console.log(app.userInfo);
				const {data : res} = await mpWxlogApi(app.userInfo)
				console.log(res);
				if(res.code === 200) {
					this.$store.dispatch('save_info',res.data)
					app.showToast(app.listmsg[1])
				}else {
					app.showToast(app.listmsg[0])
				}
			},
			showToast(params) {
							this.$refs.uToast.show({
								...params,
								complete() {
									params.url && uni.switchTab({
										url: params.url
									})
								}
							})
						},
			
			// 选择文件
			chooseimg(){
				const app = this
				uni.chooseImage({
					success: (chooseImageRes) => {
							const tempFilePaths = chooseImageRes.tempFilePaths[0];
							// console.log(tempFilePaths);
							uniCloud.uploadFile({
							        filePath: tempFilePaths,
							        cloudPath: 'test1.jpg',
									success(e) {
										// console.log(e.fileID);
										app.userInfo.avator = e.fileID
									},
									fail(err) {
										// console.log(err);
										  	app.$refs.uToast.show({
															type: 'error',
															message: "上传头像失败"
														})
									},
							      });
						},
				});
			}

		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
		    this.$refs.form1.setRules(this.rules)
		},
		created(){
			const myinfo = this.$store.state.userinfo;
			if(myinfo) {
				this.userInfo.id = myinfo.id
				this.userInfo.name = myinfo.nickname
				this.userInfo.sex = myinfo.sex
				this.userInfo.phone = myinfo.phone
				this.userInfo.introduce = myinfo.introduce
				this.userInfo.avator = myinfo.header
			}
		},
		components:{
			MyNavgator
		}
	}
</script>

<style lang="scss" scoped>
.myedit{
	.myavator {
		display: flex;
		justify-content: center;
		padding: 30upx 0;
	}
	
	.editcontainer{
		padding: $space1;
		.tarea {
			box-sizing: border-box;
			width: 100%;
			background-color: $uni-bg-color-grey;
			border-radius: 20rpx;
			padding: 20rpx;
		}
	}
	.mybtn {
		padding: $space1;
		margin-top: 30upx;
	}
	
	// 上传文件插件样式
	.example-body {
			padding: 10px;
			padding-top: 0;
		}
	
		.custom-image-box {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	
		.text {
			font-size: 14px;
			color: #333;
		}
}
</style>
