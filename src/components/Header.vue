<template>
<div>
	<div id="navbar" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<router-link class="navbar-brand" to="/">Enozama</router-link>
		<div class="collapse navbar-collapse">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item" :key="page.id" v-for="page in links" >
					<router-link class="nav-link" :to="page.link" >
						{{page.text}}
					</router-link>
				</li>
			</ul>
			<search-bar style="margin-right: 10rem" />


			<div v-if="this.$session.get('user') != null ? false : true">
				<router-link class="btn btn-outline-success" to="/ajoutUtilisateur">S'inscrire</router-link>
				<b-button class="btn btn-success" v-b-modal.my-modal >Se connecter</b-button>
			</div>
			<div v-else>
				<router-link class="btn btn-primary"  to="/panier">Mon panier</router-link>
				<b-button class="btn btn-danger" @click='logout()'>Se déconnecter</b-button>
			</div>
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
					text: 'Vendre',
					link:'/vente'
				}
				],
			logged: this.$session.get('user') == null ? false : true ,
			
		}
	},
	methods : {
		logout: function() {
			console.log(this.$session)
			this.$session.destroy()
		}
	}
}
</script>