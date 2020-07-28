<template>

	<div class="content">
		<h1>{{title}}</h1>

		<ul class="home-sites">
			<li v-for="site in sites" class="site" v-bind:key="site">

				<a class="home-site-image" :href="site.link">
					<img :src="site.image" />
				</a>
				<div class="home-site-descr">
					<h2 class="home-site-descr-name">{{ site.name }}</h2>
					<p class="home-site-descr-resume">{{ site.description }}</p>
					<p><strong>Front:</strong> {{ site.front }}</p>
					<p><strong>Back:</strong> {{ site.back }}</p>
					<p><strong><a :href="site.link">{{ site.link }}</a></strong></p>
				</div>

			</li>
		</ul>

	</div>

</template>

<script>

export default {
	name: 'Works',
		data(){
			return {
			title: 'My Works',
			sites: [
				{
					name: 'AlSport KZ',
					image: '/images/alsport.jpg',
					description: 'Интернет-портал о спорте в Алматы, Казахстане и мире',
					front: 'HTML + CSS',
					back: 'Wordpress',
					link: 'https://alsport.kz'
				},
				{
					name: 'AlSport TV',
					image: '/images/tvalsport.jpg',
					description: 'Бесплатные прямые трансляции спортивных событий',
					front: 'Vue-Router',
					back: 'No',
					link: 'https://tv.alsport.kz'
				},
				{
					name: 'AlSport Places',
					image: '/images/alplaces.jpg',
					description: 'Спортивные объекты Алматы',
					front: 'JS + Яндекс.Карты',
					back: 'No',
					link: 'https://alsport.kz/places'
				},
				{
					name: 'Rightrule',
					image: '/images/rightrule.jpg',
					description: 'Петиция за свободный ввоз праворульных автомобилей в Казахстан',
					front: 'Native JS',
					back: 'PHP',
					link: 'https://rightrule.su'
				},
				{
					name: 'No Standart',
					image: '/images/nostandart.jpg',
					description: 'Музыка из 2000-х',
					front: 'HTML + CSS',
					back: 'Laravel',
					link: 'https://nostand.art/'
				},
				{
					name: 'Savranchuk.com',
					image: '/images/pp.jpg',
					description: 'Архитектурно-дизайнерское бюро ИП «ППС»',
					front: 'JS + SCSS + Gulp',
					back: 'No',
					link: 'https://savranchuk.com/'
				},
				{
					name: 'KIMEP University',
					image: '/images/kimep.jpg',
					description: 'Официальный сайт университета KIMEP',
					front: 'Bootstrap + jQuery',
					back: 'Wordpress',
					link: 'https://kimep.kz'
				},
				{
					name: 'Iteramanagement KZ',
					image: '/images/itera.jpg',
					description: 'Разработка, внедрение, обучение в области систем менеджмента',
					front: 'HTML + CSS',
					back: 'Wordpress',
					link: 'https://iteramanagement.kz/'
				},
				{
					name: 'Bang Foundation',
					image: '/images/bang.jpg',
					description: 'Образовательный фонд доктора Бэнга',
					front: 'HTML + CSS',
					back: 'Wordpress',
					link: 'https://bangfoundation.com/'
				},
				{
					name: '1000akb KZ',
					image: '/images/1000akb.jpg',
					description: 'Интернет-магазин автомобильных аккумуляторов',
					front: 'Bootstrap + jQuery',
					back: 'PHP',
					link: 'https://1000akb.kz'
				},
				{
					name: 'Shaft KZ',
					image: '/images/shaft.jpg',
					description: 'Центр печати в Алматы',
					front: 'jQuery',
					back: 'No',
					link: 'https://shaft.kz'
				},
				{
					name: 'My 0wn Space',
					image: '/images/ownspace.jpg',
					description: 'Сайт, облегчающий мне жизнь',
					front: 'Vue-CLI',
					back: 'Node.js',
					link: 'https://0wn.space'
				},
			]
		}
	}
}
</script>

<style>

.home {
	width: 100%;
}

.site {
	position: relative;
	display: flex;
	background: rgb(255,255,255,0.6);
	padding: 5% 10%;
	margin: 5% 0;
	border-radius: 45%;
	overflow: hidden;
	transition: .5s;
}

.site:nth-child(2n) {
	flex-direction: row-reverse;
}

.site:hover {
	box-shadow: 0 0 5px 1px #3568aa;	
	transition: .5s;
}

.home-site-image {
	width: 100%;
    margin: 0;
	transition: 1s;
	transform: perspective(60px) rotateY(5deg);
	transition: 1s;

}

.home-site-image img {
	width: 100%;
	border-radius: 45%;
}

.site:nth-child(2n) .home-site-image {
	transform: perspective(60px) rotateY(-5deg);
	margin: 0 -15% 0 0;
}

.home-site-descr {
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1%;
}

.home-site-descr p {
	margin: .5rem 0;
	font-size: 15pt;
}


</style>
