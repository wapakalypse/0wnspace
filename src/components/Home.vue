<template>

	<div class="home">
		<h1>{{title}}</h1>

			<div class="home-site">
				<img class="home-site-image" src="/images/alsport.jpg" />
				<div class="home-site-descr">
					<h2 class="home-site-descr-title">AlSport.kz</h2>
					<p class="home-site-descr-resume">Интернет-портал о спорте в Алматы, Казахстане и мире.</p>
					<p><strong>Front:</strong> HTML + CSS</p>
					<p><strong>Back:</strong> Wordpress
					<p><a href="https://alsport.kz">https://alsport.kz</a></p>
				</div>
			</div>

			<div class="home-site">
				<div class="home-site-descr">
					<h2 class="home-site-descr-title">AlSport.tv</h2>
					<p class="home-site-descr-resume">Бесплатные прямые трансляции спортивных событий.</p>
					<p><strong>Front:</strong> Vue.js + Vue-Router</p>
					<p><strong>Back:</strong> No
					<p><a href="https://alsport.kz">https://tv.alsport.kz</a></p>
				</div>
				<img class="home-site-image-right" src="/images/tvalsport.jpg" />
			</div>

			<div class="home-site">
				<img class="home-site-image" src="/images/rightrule.jpg" />
				<div class="home-site-descr">
					<h2 class="home-site-descr-title">Rightrule.site</h2>
					<p class="home-site-descr-resume">Петиция за свободный ввоз праворульных автомобилей в Казахстан.</p>
					<p><strong>Front:</strong> Native JS</p>
					<p><strong>Back:</strong> PHP
					<p><a href="https://alsport.kz">https://rightrule.site</a></p>
				</div>
			</div>

			<div class="home-site">
				<div class="home-site-descr">
					<h2 class="home-site-descr-title">KIMEP.kz</h2>
					<p class="home-site-descr-resume">Официальный сайт университета KIMEP.</p>
					<p><strong>Front:</strong> Bootstrap + jQuery</p>
					<p><strong>Back:</strong> Wordpress
					<p><a href="https://alsport.kz">https://kimep.kz</a></p>
				</div>
				<img class="home-site-image-right" src="/images/kimep.jpg" />
			</div>

			<div class="home-site">
				<img class="home-site-image" src="/images/shaft.jpg" />
				<div class="home-site-descr">
					<h2 class="home-site-descr-title">Shaft.kz</h2>
					<p class="home-site-descr-resume">Центр печати в Алматы.</p>
					<p><strong>Front:</strong> jQuery</p>
					<p><strong>Back:</strong> No
					<p><a href="https://alsport.kz">http://shaft.kz</a></p>
				</div>
			</div>

			<div class="home-site">
				<div class="home-site-descr">
					<h2 class="home-site-descr-title">1000akb.kz</h2>
					<p class="home-site-descr-resume">Интернет-магазин автомобильных аккумуляторов.</p>
					<p><strong>Front:</strong> Bootstrap + jQuery</p>
					<p><strong>Back:</strong> Wordpress
					<p><a href="https://alsport.kz">http://1000akb.kz</a></p>
				</div>
				<img class="home-site-image-right" src="/images/1000akb.jpg" />
			</div>

			<div class="home-site">
				<img class="home-site-image" src="/images/ownspace.jpg" />
				<div class="home-site-descr">
					<h2 class="home-site-descr-title">0wn.space</h2>
					<p class="home-site-descr-resume">Сайт, облегчающий мне жизнь.</p>
					<p><strong>Front:</strong> Vue-CLI</p>
					<p><strong>Back:</strong> Node.js
					<p><a href="http:/www./0wn.space">http://0wn.space</a></p>
				</div>
			</div>
	</div>
</template>

<script>

export default {
	name: 'Home',
		data(){
			return {
			title: 'My Works'
		}
	}
}
</script>

<style>

.home-site {
	display: flex;
	background: rgb(255,255,255,0.6);
	padding: 1rem;
	margin: 2rem 0;
}

.home-site-image,
.home-site-image-right {
	width: 60%;
	margin: 1rem;
	transition: 1s;
}

.home-site-image {
	transform: perspective(28px) rotateY(1deg);
}

.home-site-image-right {
	transform: perspective(28px) rotateY(-1deg);
}

.home-site-image:hover{
}

.home-site-descr {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1rem;
}

.home-site-descr p {
	margin: .5rem 0;
	font-size: 15pt;
}


</style>
