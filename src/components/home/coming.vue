<template>
	<div>
		<div class="movie-container" v-for="item in comingList">
			<div class="thumbnail">
				<img v-lazyload="`https://gw.alicdn.com/${item.poster}`" alt="">
				<img class="play" src="https://gw.alicdn.com/tps/TB1PH2uLXXXXXaLaXXXXXXXXXXX-60-60.png" @click="changeVedioState(item.preview[0].ipadUrl,`https://gw.alicdn.com/${item.poster}`)" alt="">
			</div>
			<div class="summary">
				<div class="detail">
					<h5 class="title">{{item.showName}}</h5>
					<div class="score-info">
						<!-- <div class="stars" :style="{'width':item.remark * 10 + '%' }">
							
						</div> -->
						<!-- <span class="scores">{{item.remark}}</span> -->
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
	export default{
		data(){
			return{
				limit:'20',
				offset:'0',
				total:'',
				comingList:[]
			}
		},
		created(){
			this.$http.get(`/movie/coming/?limit=${this.limit}&offset=${this.offset}`).then((res) =>{
				this.total = res.total;
				this.comingList = res.data.data.data.returnValue;
				this.offset = this.offset + this.limit;
			})
		},
		methods:{
			
		}
	}
</script>
<style>
	
</style>