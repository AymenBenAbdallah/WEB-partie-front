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
                this.$router.push({path:'/search',query:{searchWord: this.searchWord}});
        }
    }
    
}
</script>