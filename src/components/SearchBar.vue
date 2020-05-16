<template>
    <b-form @submit.prevent="search()" inline>
            <input class="form-control" type="text" v-model="searchWord">
            <button class="btn btn-outline-success" type="submit">rechercher</button>
    </b-form>
</template>

<script>
    export default {
    data() {
        return {
        searchWord: "",
        };
    },

        methods: {
            search: function() {

                this.$http.post('http://localhost/api/search', {
                        word: this.searchWord
                    })
                    .then(function (response) {
                        if (response.data.results) {
                        this.$router.push({ path:'/search', param: {results: response.data.results}})
                        }
                    })
                    .catch(function (err) {
                        console.log('err', err)
                    })
                }
        }
    }
</script>