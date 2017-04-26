<template>
	<div>
		<div class="movie-container" v-for="item in movies">
			<div class="thumbnail">
				<img v-lazyload="`https://gw.alicdn.com/${item.poster}`" alt="">
				<img class="play" src="https://gw.alicdn.com/tps/TB1PH2uLXXXXXaLaXXXXXXXXXXX-60-60.png" alt="">
			</div>
			<div class="summary">
				<div class="detail">
					<h5 class="title">{{item.showName}}</h5>
					<div class="score-info">
						<div class="stars" :style="{'width':item.remark * 10 + '%' }">
							
						</div>
						<span class="scores">{{item.remark}}</span>
					</div>
					<div class="short-des">
						<p>{{item.highlight}}</p>
						<p>{{item.leadingRole}}</p>
					</div>
				</div>
				<div class="actions">
					<button class="buy" v-if="item.openDay < '2016-12-09'">购买</button>
					<button class="pre-sale" v-else>预售</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	export default{
		data (){
			return {
				cityRN:"",
			}
		},
		methods:{

		},
		created(){
			
		},
		computed:{
			...mapGetters([
					'movies'
				])
		},
		watch:{
		}
	}
</script>
<style>
	.movie-container{
		width: 100%;
		display: flex;
		justify-content: flex-start;
		padding:10px;
	}
	.thumbnail{
		width: 80px;
		flex: 0 0 auto;
		position: relative;
	}
	.thumbnail img{
		width: 80%;
	}
	img.play{
		width: 20px;
    position: absolute;
    top: 36px;
    left: 22px;
    opacity: 0.7;
	}
	.summary{
		flex: 1;
		padding: 10px;
		display: flex;
		justify-content: flex-start;
	}
	.detail{
		width: 160px;
	}
	.actions{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.actions button{
		border: 1px ;
		width: 45px;
		height: 24px;
		border-radius: 3px;
		font-weight: 700;
		background-color: #fff;
		border: 1px solid #ff4d64;
    color: #ff4d64;
    outline: none;
	}
	.actions button.pre-sale{
		color: #37b7ff;
		border: 1px solid #37b7ff;
	}
	.score-info{
		position: relative;
		margin-top: 8px;
	  width: 50px;
	  height: 10px;
	  background-size: auto 100%;
	  background-image: url('../../assets/images/nostart.svg');
	  margin-bottom: 10px;
	}
	.stars{
		width: 80%;
		height: 100%;
		background-size: auto 100%;
		background-image: url('../../assets/images/star.svg');
	}
	.scores{
		position: absolute;
		right: -21px;
		top: 0px;
		font-size: 10px;
		color: #9c9c9c;
		display:inline-block;
	}
	.short-des p{
		font-size: 13px;
		color: #9c9c9c;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
</style>