<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="item in images">
		    	<img :src="'https://gw.alicdn.com/tfs/' + item.smallPicUrl"></img>
		    </div>
	    </div>
	    <div class="swiper-pagination">
	    	
	    </div>
	</div>
</template>
<script>
	import '../../assets/css/swiper.min.css'
	import Swiper from '../../assets/js/swiper.min.js'
	export default{
		data (){
			return {
			}
		},
		props:{
			images:{
				type:Array,
				default:()=>[]
			}
		},
		watch:{
			images(){
				this.$nextTick(() =>{
					var mySwiper = new Swiper ('.swiper-container', {
						loop: true,
				    pagination: '.swiper-pagination',
				    paginationClickable: true,
				    autoplay : 2000,
						autoplayDisableOnInteraction : false,
				  })   
				});
			}
		}
	}
</script>
<style>
	img {
		width: 100%;
		height: auto;
	}
	#swiper .swiper-pagination-bullet {
		background: #e5e8e8;
		opacity: 1; 
	}
	#swiper .swiper-pagination-bullet-active {
		background: #ff5733;
	}
</style>