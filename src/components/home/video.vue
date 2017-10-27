<template>
	<div class="video-container" v-show="isShowVideo">
		<video :src="videoUrl" :poster="coverUrl" >
			
		</video>
		<div class="v-icon" @click.stop="playVideo">
			
		</div>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default{
		data(){
			return {
			}
		},
		created(){

		},
		computed:{
		...mapGetters([
				'coverUrl',
				'videoUrl',
				'isShowVideo'
			])
		},
		methods:{
			playVideo:(e) =>{
				var target = e.target;
				target.hidden = true;
				target.previousElementSibling.play();
			}
		}
	}
</script>
<style scoped>
	.video-container{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #000;
	}
	.video-container video{
		width: 80%;
	}
	.video-container img{
		width: 20%;
		position: absolute;
	}
	.v-icon{
		width: 90px;
	    height: 90px;
	    left: 50%;
	    top: 50%;
	    margin-left: -45px;
	    margin-top: -45px;
	    background: url(../../assets/images/sprite.png) -2px -2px no-repeat;
	    position: absolute;
	}
</style>