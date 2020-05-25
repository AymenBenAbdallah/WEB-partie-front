<template>
    <div class="container justify-content-center vertical-center" style='margin-top: 70px'>
        <form @submit.prevent="addProduit()">
            <label for="produit.nom">Nom du produit : </label> <br/>
            <b-form-input class="form-control" type="text" v-model="produit.nom" required/> <br/>
            <label for="produit.price">Prix :</label> <br/>
            <b-form-input class="form-control" type="number" v-model="produit.price" required/><br />
            <label for="produit.description">Description : </label> <br/>
            <b-form-input class="form-control" type="text" v-model="produit.description" required/><br />
            <label for="inventaire.quantite">Quantité disponible </label> <br/>
            <b-form-input class="form-control" type="text" v-model="inventaire.quantite" required/><br />
            <button class="btn btn-success float-right" type="submit">S'inscrire</button>
        </form>
    </div>  
</template>

<script>

export default {
  data() {
      return {
            produit: {
                nom: '',
                price: 0,
                description : ''
            },
            inventaire: {
                produit : this.produit,
                quantite: 0, 
            },
            stock:  {
                stockId: this.$session.user.vendeur.stock,
                inventaire: this.inventaire
            }
      }
  },
    methods: {
        addProduit: function() {
            let config = { headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': "*",
                'Accept': '*/*'
                }}
            this.$http
                .post('http://localhost:8080/site-vente/rest/produit/add', {'user' : this.$session.user, 'inventaire' : this.inventaire}, config)
                .then(function () {
                    console.log("Succès d'ajout à la bdd")
                })
                .catch(function (err) {
                    console.log(Response)
                    console.log('err', err)
                })
            }

  }
}
</script>