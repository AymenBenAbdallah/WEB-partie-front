<template>
<div>
	<div id="navbar" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<h2 class="navbar-brand">Dildozone</h2>
		<div class="collapse navbar-collapse">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item" :key="todo.id" v-for="todo in links" >
					<a class="nav-link">
						{{ todo.text }}
					</a>
				</li>
			</ul>
			<search-bar style="margin-right: 10rem" />
			<b-button v-b-modal.my-modal v-if="!logged">Se connecter</b-button>
			<a class="btn btn-primary" v-else>{{LoggedUser.nom}} {{LoggedUser.prenom}}</a>
		</div>
	</div>
	

	<b-modal id="my-modal" hide-footer title="Login">
		<LoginForm />
	</b-modal>
</div>
</template>


<script>
import LoginForm from './LoginForm.vue'
import SearchBar from './SearchBar.vue'

export default {
	components: {
		LoginForm,
		SearchBar,
	},
	data() {
		return {
			links: [
				{
					id: 0,
					text: 'Acheter un dildo',
					page:'/achat'
				},
				{
					id: 1,
					text: 'Vendre un didlo',
					page:'/vente'
				}
				],
			logged: false,
			LoggedUser: ""
		}
	}
}
</script>