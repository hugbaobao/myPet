export const setToken = function (val) {
	uni.setStorageSync('Token', val);
}

export const getToken = function () {
	uni.getStorageSync('Token');
}
