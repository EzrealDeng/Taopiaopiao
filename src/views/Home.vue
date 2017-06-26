<template>
	<div>
		<header class="home-header border-bottom">
			<city></city>
			<section>
				<div class="top-section">
					<div class="" @click="showCityList">
						{{ $store.state.city.name }}
						<i class="icon-arrow"></i>
					</div>
					<div hot="sel" :class="{selected:isHotNav}" @click="changeTab">
						正在热映
					</div>
					<div :class="{selected:!isHotNav}" @click="changeTab">
						即将热映
					</div>
				</div>
			</section>
			<section v-if="isHotNav">
				<swiper :images="images"></swiper>
				<hotMovie></hotMovie>
			</section>
			<section v-else='!isHotNav'>
				<coming></coming>
			</section>
			<section>
				<div class="video-section" v-if="isShowVideo" @click="chanegVideo({'isShowVideo':false})">
					<videoPlay></videoPlay>
				</div>
			</section>
	  </header>
	</div>
</template>
<script>
	//import { footerNav , city } from '../components/'
	import city from '../components/home/city.vue'
	import swiper from '../components/home/swiper.vue'
	import hotMovie from '../components/home/hotMovie.vue'
	import coming from '../components/home/coming.vue'
	import videoPlay from '../components/home/video.vue'
	import { mapMutations } from 'vuex'
	import { mapGetters } from 'vuex'
	export default{
		data(){
			return {
				city:"北京",
				isHotNav:true,
				hotList:[],
				comingList:[],
				images:[],
				posterUrl:'',
				vedioUrl:''
			}
		},
		computed:{
			...mapGetters(['isShowVideo'])
		} ,
		methods:{
			...mapMutations([
		    'showCityList',
		    'changeAuthor',
		    'chanegVideo'
		  ]),
		  changeTab (ev){
		  	this.isHotNav = ev.target.getAttribute('hot') ? true : false;
		  },
		  showVideo (posterUrl,vedioUrl){
		  	this.posterUrl = posterUrl;
		  	this.vedioUrl = vedioUrl;
		  	this.isShowVideo = true;
		  }
		},
		components:{
			city,
			swiper,
			hotMovie,
			videoPlay,
			coming
		},
		created(){
			this.$http.get('/movie/swiper').then(function(res){
				console.log(res);
				this.images = res.body.data.data.returnValue;
				console.log(this.images);
			})
		}
	}
</script>
<style>
	section{
		width: 100%;
		height: 100%;
	}
	.top-section{
		height: 40px;
		text-align: center;
		line-height: 40px;
		display: flex;
		justify-content: space-around;
		font-size: 14px;
	}
	.icon-arrow{
		height: 12px;
		display: inline-block;
	}
	.icon-arrow:after{
		content: "";
    display: block;
    width: 6px;
    height: 6px;
    border: 1px solid #50505a;
    border-top: 0 none;
    border-left: 0 none;
    margin-left: 2px;
    transform: rotate(45deg);
	}
	.selected{
		border-bottom: 2px solid #ff4d64;
	}
	.video-section{
		position: fixed;
		width: 90%;
		left: 5%;
		top: 20%;
		z-index: 99;
		height: 100%;
	}
</style>