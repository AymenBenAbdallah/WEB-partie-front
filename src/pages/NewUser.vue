<template>
    <div class="container justify-content-center vertical-center" style='margin-top: 70px'>
        <form @submit.prevent="addUser()">
            <label for="user.email">Email : </label> <br/>
            <b-form-input class="form-control" type="email" v-model="user.email" required/> <br/>
            <label for="user.password">Mot de passe : </label> <br/>
            <b-form-input class="form-control" type="password" v-model="user.password" required/><br />
            <label for="user.prenom">Prénom : </label> <br/>
            <b-form-input class="form-control" type="text" v-model="user.prenom" required/><br />
            <label for="user.nom">Nom : </label> <br/>
            <b-form-input class="form-control" type="text" v-model="user.nom" required/><br />
            <label for="adresse">Adresse : </label> <br/>
            <label for="adresse">Numéro : </label> <br/>
            <b-form-input class="form-control" type="number" v-model="user.adresse.numero" required/>
            <label for="user.adresse.rue">rue : </label> <br/>
            <b-form-input class="form-control" type="text" v-model="user.adresse.rue" required/>
            <label for="user.adresse.ville">ville : </label> <br/>
            <b-form-input class="form-control" type="text" v-model="user.adresse.ville" required/>
            <button class="btn btn-success float-right" type="submit">S'inscrire</button>
        </form>
    </div>  
</template>

<script>

export default {
  data() {
      return {
          user: {

            prenom : '',
            nom: '',
            email: '',
            password: '', 
            adresse: {
                rue: '',
                numero: 0,
                ville : ''
            }
            },
          
      }
  },
    methods: {
        addUser: function() {
            let self = this
            let config = { headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': "*",
                'Accept': '*/*'
                }}
            this.$http
                .post('http://localhost:8080/site-vente/rest/user/add', this.user, config)
                .then(function () {

                    console.log("Ajout à la bdd réussi, redirection vers connection")
                    
                })
                .catch(function (err) {
                    console.log(Response)
                    console.log('err', err)
                })


            this.$http.post('http://localhost:8080/site-vente/rest/login', this.user, config)
                .then(function (response) {
                    this.$session.start()
                    this.$session.set('user', response.data[0])
                    console.log(self.$session)
                    window.location.reload()
                    this.$router.push({path:'/'})

                })
                .catch(function (err) {
                    console.log('err', err)
                })
            }

  }
}
</script>