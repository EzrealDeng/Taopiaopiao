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
			<section v-show="isHotNav">
				<swiper :images="images"></swiper>
				<hotMovie></hotMovie>
			</section>
	  </header>
	</div>
</template>
<script>
	//import { footerNav , city } from '../components/'
	import city from '../components/home/city.vue'
	import swiper from '../components/home/swiper.vue'
	import hotMovie from '../components/home/hotMovie.vue'
	import { mapMutations } from 'vuex'
	export default{
		data(){
			return {
				city:"北京",
				isHotNav:true,
				hotList:[],
				comingList:[],
				images:[],
			}
		},
		methods:{
			...mapMutations([
		    'showCityList',
		    'changeAuthor'
		  ]),
		  changeTab (ev){
		  	this.isHotNav = ev.target.getAttribute('hot') ? true : false;
		  }
		},
		components:{
			city,
			swiper,
			hotMovie
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
</style>