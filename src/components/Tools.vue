<template>
	<div class="tools">

		<h1>{{title}}</h1>

		<div class="tools-info">

            <div class="info-meteo">
                <div class="info-meteo-today">
                    <h3 class="weather-city"></h3>
                    <div class="weather-icon"></div>
                </div>

                <div class="weather-forecast">
                
                   <!-- Forecast -->

                </div>

            </div>

            <div class="info-rate">

                    <!-- Rate -->

            </div>

        </div>

		<div class="tools-content">

			<div class="tools-todo">

				<h2>Todo List</h2>

				<form class="tools-todo-form" v-on:submit='addTask'>
					<input type="text" class="tools-todo-form-control" v-model='tasks.name'>
					<input type="submit" class="tools-todo-form-submit" value="Add">
				</form>

				<table class="tools-todo-list">
					<tbody>
						<tr v-for='task in tasks' v-bind:key="task.id">
							<td class="tools-todo-list-check"><input type="checkbox"></td>
							<td class="tools-todo-list-task">{{ task.name }}</td>
							<td class="tools-todo-list-delete"><button v-on:click="deleteTask(task)">X</button></td>
						</tr>
					</tbody>
				</table>

			</div>

			<div class="tools-convert">

				<h2>Converter</h2>

				<!-- <input class="tools-convert-dollar" type="number" v-model="number" placeholder="0 $">
				<div class="tools-convert-tenge">{{multiple.toFixed(0)}} тенге</div> -->

				<select v-model="selected">
					<option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
					{{ option.text }}
					</option>
				</select>

				<input class="tools-convert-dollar" type="number" v-model="number" placeholder="0 $">
				<div class="tools-convert-tenge">{{multiple.toFixed(0)}} тенге</div>

			</div>

		</div>

	</div>
</template>

<script>

let usd, eur, rub;

export default {
	name: 'Tools',
	created() {

		fetch('http://api.openweathermap.org/data/2.5/weather?id=1526384&appid=d4bb556b55ed16c1d3609b0c6fbaf986')
			.then(function (resp) {return resp.json() })
			.then(function (data) {
				document.querySelector('.weather-city').innerHTML = 
				`${data.name} ${Math.round(data.main.temp - 273)}&deg; (${Math.round(data.main.feels_like - 273)}&deg;)`;

				document.querySelector('.weather-icon').innerHTML = 
				`<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"><br>`;
			})

			.catch(function () {

		});

		fetch('http://api.openweathermap.org/data/2.5/forecast?id=1526384&appid=d4bb556b55ed16c1d3609b0c6fbaf986')
			.then(function (resp) {return resp.json() })
			.then(function (data) {

				let forecasts = document.querySelector('.weather-forecast');

				for (let i = 6; i < 40; i++) {

					if (i % 8 !== 0) continue;

					let newFc = document.createElement('div');
					newFc.className = 'forecast-item';
					let newFcDate = new Date(data.list[i].dt_txt);         
					newFc.innerHTML = `

						<div class="forecast-item-date">${newFcDate.getDate()}.${newFcDate.getMonth()} <b>(${Math.round(data.list[i].main.temp - 273)}&deg)</b> </div>

		                <div class="forecast-item-weather">
		                    <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png">

						</div>

		                `;

					forecasts.appendChild(newFc);
				}
			})

			.catch(function () {

		});

		fetch('http://data.fixer.io/api/latest?access_key=499d0e9242b3ca155d6f0afb4594e63d&format=1')
			.then(function (resp) {return resp.json() })
			.then(function (data) {

				usd = data.rates.KZT / data.rates.USD,
				eur = data.rates.KZT / data.rates.EUR,
				rub = data.rates.KZT / data.rates.RUB;

				document.querySelector('.info-rate').innerHTML = 
					`<div class="value">
		                <h3><i class="fa fa-usd" aria-hidden="true"></i></h3>
		                <span class="dollar">${usd.toFixed(1)}</span>
		            </div>
		            <div class="value">
		                <h3><i class="fa fa-eur" aria-hidden="true"></i></h3>
		                <span class="euro">${eur.toFixed(1)}</span>
		            </div>
		            <div class="value">
		                <h3><i class="fa fa-rub" aria-hidden="true"></i></h3>
		                <span class="rubl">${rub.toFixed(2)}</span>
		            </div> `;
			})

			.catch(function () {

		});

	},
	data(){
		return {
			title: 'Tools',
			selected: usd,
			number: 0,			
			multiple: 0,
			options: [
				{ text: 'Доллар', value: usd },
				{ text: 'Евро', value: eur },
				{ text: 'Рубль', value: rub }
			],
			tasks: [ ]
		}
	},
	methods: {
		addTask: function (e) {
			e.preventDefault();
			this.tasks.push({
				name: this.tasks.name
			});
		},
		deleteTask: function(task) {
			this.tasks.splice(this.tasks.indexOf(task), 1)
		}
	},
	watch: {

		number: function (v) {

			this.multiple = v * this.selected;
		}
	}
}


</script>


<style>

.tools {
    width: 100%;
}

.info-meteo-today,
.info-rate {
    background: radial-gradient(rgb(255,255,255,0.7), rgb(255,255,255,0.3));
    align-items: center;
}

.tools-info,
.info-rate {
    display: flex;
    justify-content: center;
}

.info-meteo {
    width: 55%;
    text-align: center;
}

.info-meteo-today {
    width: 70%;
    margin: auto;
    padding: 0 5%;
    border-radius: 50%;
    display: flex;
    font-size: 18pt;
}

.weather-forecast {
    display: flex;
    overflow: overlay;
    margin: 1% 0 0;
}

.info-rate {
    width: 45%;
    font-size: 30pt;
    text-align: center;
    border-radius: 40%;
}

.info-rate h3 {
    font-size: 50pt;
}

.info-rate div {
    margin: 5%;
}

.tools-content {
	display: flex;
	align-items: flex-start;
}

.tools-todo,
.tools-convert {
	width: 40%;
	background: radial-gradient(rgb(255,255,255,0.7), rgb(255,255,255,0.3));
	margin: 1%;
	padding: 1% 5%;
    border-radius: 50%;
	font-size: 14pt;
}

.tools-todo,
.tools-convert {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.tools-todo-form {
	display: flex;
	width: 100%;
}

.tools-todo-form-control {
	width: 80%;
	border: 1px solid #96c1f5;
	border-radius: 50%;
	font-size: 14pt;
    margin: 3%;
    padding: 5% 10%;
}

.tools-todo-form-submit {
	width: 20%;
	margin: 1rem 0;
    padding: 5%;
	font-size: 15pt;
	background: #96c1f5;
	color: #fff;
	border-radius: 50%;
}

.tools-todo-list {
	width: 100%;
	margin: 1rem;	
}

.tools-todo-list-check,
.tools-todo-list-task,
.tools-todo-list-delete {
	padding: .3rem 0;
}

.tools-todo-list-check {
	width: 5%;
}

.tools-convert-dollar,
.tools-convert-tenge {
	margin: 3%;
	padding: 5%;
}

.tools-convert-dollar {
	border: 1px solid #96c1f5;
	border-radius: 3px;
	font-size: 14pt;
	border-radius: 50%;
	text-align: center;
}

.tools-convert-tenge {
	font-size: 20pt;
}
</style>
