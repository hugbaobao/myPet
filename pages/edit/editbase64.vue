<template>
	<view class="myedit">
		<view class="navgator">
			<my-navgator titles="黑名单公示墙"></my-navgator>
		</view>
		
		<view class="myavator">
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
			chooseimg(){
				const app = this
				uni.chooseImage({
					count: 1, //默认9
					// crop:{
					// 	width:340,
					// 	height:340
					// },
					sizeType:['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function (res) {
						if(res.tempFiles.size > 1*1024*1024) {
							uni.$u.toast('图片不能超过1M')
							return
						}
						app.imgToBase64(res.tempFilePaths[0],app.changeavator)
					}
				});
			},
			imgToBase64(path,callback){
				uni.getFileSystemManager().readFile({
				    filePath: path, //选择图片返回的相对路径
				    encoding: 'base64', //编码格式
				    success: res => { //成功的回调
				      // console.log(res, '返回结果');
				      let base64 = 'data:image/jpeg;base64,' + res.data //不加上这串字符，在页面无法显示
				      callback && callback(base64)
				    },
				    fail: (e) => {
				      console.log("图片转换失败");
				    }
				  })
			},
			changeavator(val){
				this.userInfo.avator = val
			},
			
			// 保存编辑
			async saveedit () {
				const app = this
				console.log(app.userInfo);
				const {data : res} = await mpWxlogApi(app.userInfo)
				console.log(res);
				// if(res.code === 200) {
				// 	this.$store.dispatch('save_info',res.data)
				// 	app.showToast(app.listmsg[1])
				// }else {
				// 	app.showToast(app.listmsg[0])
				// }
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
}
</style>
