// formatDate函数接收两个参数，date时间日期格式,fmt时间格式化字符串
export function formatDate(date, fmt) {
	// 使用正则表达式匹配年份,(y+)获取匹配到的数据，然后进行替换
	// RegExp.$1表示的就是取到匹配的数据
	// (date.getFullYear() + '').substr(4 - RegExp.$1.length));的作用是
	// 如果格式化字符串是yy，那么(date.getFullYear() + '').substr(4 - RegExp.$1.length)=(date.getFullYear() + '').substr(2);=>2016取后两位16符合要求
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	// 定义一个对象o,构造正则表达式
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};
	for (let k in o) {
		// new RegExp(`(${k})`)构造正则表达式相等于/(M+)/.test(fmt)
		if (new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + '';
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
		}
	}
	return fmt;
};
// 补0
function padLeftZero(str) {
	return ('00' + str).substr(str.length);
}
