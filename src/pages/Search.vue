<template>
  <div style='margin-top: 70px'>
    <b-table :fields="fields" :items="items">
        <template v-slot:cell(id)='prod' >
            <div class="d-flex justify-content-end">
                <router-link class="btn btn-success" :to="'/produit/'+prod.value" >Voir la fiche</router-link>
            </div>
        </template>
    </b-table>
  </div>
</template>


<script>
export default {

    data() {
        return {
            fields: [
                {
                key: 'nom',
                label: 'Produit',
            },{
                key: 'prix',
                label: 'Prix'
            },{
                key: 'id',
                label: '',
            }

            
        
            ],
            items: []
        }
    },
    beforeMount : function() {
        let self = this

        this.$http.post('http://localhost/api/search', {
                        word: this.$route.query.searchWord
                    })
                    .then(function (response) {
                        if (response.data.results) {
                        this.items = response.data.results
                        }
                    })
                    .catch(function (err) {
                        console.log('err', err)
                        self.items =  [
                                        { nom: "dildo1", prix: 10,  id: 0 },
                                        { nom: "dildo2", prix: 20,  id: 1 },         
                                        { nom: "dildo3", prix: 30,  id: 2 },
                                                                    
                                        ]
                    })
        }

}
</script>