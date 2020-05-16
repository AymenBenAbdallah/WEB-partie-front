<template>
<div>
	<div id="navbar" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<router-link class="navbar-brand" to="/">Dildozone</router-link>
		<div class="collapse navbar-collapse">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item" :key="page.id" v-for="page in links" >
					<router-link class="nav-link" :to="page.link" >
						{{page.text}}
					</router-link>
				</li>
			</ul>
			<search-bar style="margin-right: 10rem" />
			<router-link class="btn btn-outline-success" to="/ajoutUtilisateur">S'inscrire</router-link>
			<b-button class="btn btn-success" v-b-modal.my-modal v-if="!logged">Se connecter</b-button>
			<router-link class="btn btn-primary" v-else to="/panier">Mon panier</router-link>
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
					text: 'Mon panier',
					link:'/panier'
				},
				{
					id: 1,
					text: 'Vendre un didlo',
					link:'/vente'
				}
				],
			logged: false,
			LoggedUser: ""
		}
	}
}
</script>