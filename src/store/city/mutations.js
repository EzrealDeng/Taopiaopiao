import { UPDATECITY } from './type'
export default{
	// 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
	[UPDATECITY] (state , { city }){
		if(city.name){
			state.name = city.name;
			state.data = city.data;
			state.rN = city.rN;
		}
		state.show = false;
	},
	showCityList (state) {
  	state.show = true
  }
}