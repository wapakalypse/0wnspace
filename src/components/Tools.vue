<template>
	<div class="tools">

		<h1>{{title}}</h1>

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

				<input class="tools-convert-dollar" type="number" v-model="number" placeholder="0 $">
				<div class="tools-convert-tenge" v-model="multiple">{{multiple}} тенге</div>

			</div>

		</div>

	</div>
</template>

<script>
export default {
	name: 'Tools',
	data(){
		return {
			title: 'Tools',
			number: 0,			
			multiple: 0,
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
			this.multiple = v * 385;
		}
	}
}


</script>


<style>

.tools {
	width: 100%;
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
