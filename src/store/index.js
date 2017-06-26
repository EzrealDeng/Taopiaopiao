import Vue from 'vue'
import Vuex from 'vuex'
import cityMutations from './city/mutations'
import cityAcions from './city/actions'
import loadingMutations from './loading/mutations'
Vue.use(Vuex);


const cityGetters = {
	movies: state => state.data,
	cityName: state => state.name
}
const city = {
	state: {
		name: '北京',
		show: false,
		rN: 'bj',
		data: []
	},
	actions: cityAcions,
	mutations: cityMutations,
	getters: cityGetters
}
const loading = {
	state: {
		stack: []
	},
	mutations: loadingMutations
}

const videoStore = {
	state:{
		coverUrl:'',
		videoUrl:'',
		isShowVideo:false
	},
	mutations:{
		chanegVideo(state,video ){
			state.coverUrl = video.coverUrl;
			state.videoUrl = video.videoUrl;
			state.isShowVideo = video.isShowVideo;
		}
	},
	getters:{
		coverUrl: state =>state.coverUrl,
		videoUrl: state =>state.videoUrl,
		isShowVideo: state => state.isShowVideo,
	}
}

const testStore = {
	state:{
		author:'Devin',
		isChange:false
	},
	actions:{
		
	},
	mutations:{
		changeAuthor (state,newAuthor) {
			state.author = newAuthor;
			state.isChange = true;
		}
	}
}

export default new Vuex.Store({
 	modules: {
 		city,
 		loading,
 		testStore,
 		videoStore
 	},
})