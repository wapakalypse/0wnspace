<template>

	<div class="content">
		<h1>{{title}}</h1>


		<div class="about">

			<img src="/images/ava-01.jpg" />

			<div class="about-info">

				<p>
					<a href="https://www.linkedin.com/in/vladimir-kovpak-a109a6105/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
				</p>
				<p>
					<a href="https://github.com/wapakalypse" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
				</p>
				<p>
					<a href="https://vk.com/id31050921" target="_blank"><i class="fa fa-vk" aria-hidden="true"></i></a>
				</p>
				
			</div>

		</div>



	</div>

</template>

<script>

export default {
	name: 'Main',
		data(){
			return {
			title: 'About me'
		}
	}
}
</script>

<style>

.about {
	display: flex;
	background: radial-gradient(rgb(255,255,255,0.7), rgb(255,255,255,0.3));
	margin: 2rem auto;
	width: 500px;
    height: 500px;
    border-radius: 50%;
    overflow: hidden;
    align-items: center;
    transition: .5s;
}

.about:hover {
	box-shadow: 0 0 5px 1px #3568aa;	
	transition: .5s;
}

.about img {
	width: 50%;
    border-radius: 50%;
}

.about-info {
	width: 40%;
	text-align: center;
}

</style>
