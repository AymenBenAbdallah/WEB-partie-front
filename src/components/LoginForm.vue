<template>
    <div class="d-flex justify-content-center vertical-center">
        <form @submit.prevent="submit()">
            <label for="email">Email : </label> <br/>
            <b-form-input class="form-control" type="email" v-model="email" required/> <br/>
            <label for="password">Mot de passe : </label> <br/>
            <b-form-input class="form-control" type="password" v-model="password" required/><br />
            <button class="btn btn-success float-right" type="submit">Log in</button>
        </form>
    </div>  
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    submit: function() {
      let self = this
      this.$http.post('http://localhost:8080/site-vente/rest/login', {
            password: this.password,
            email: this.email
          })
          .then(function (response) {
              self.$session.start()
              self.$session.set('user', response.data[0])
              console.log(self.$session)
              self.$forceUpdate();
              if (self.$route.path != '/') {
                self.$router.push({path:'/'})
              }
          })
        .catch(function (err) {
            console.log('err', err)
          })
    }
  }
}
</script>
