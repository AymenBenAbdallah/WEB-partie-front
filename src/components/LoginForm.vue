<template>
    <div class="d-flex justify-content-center">
        <form @submit.prevent="submit()">
            <label for="email">Email : </label> <br/>
            <input class="form-control" type="email" v-model="email" /> <br/>
            <label for="password">Mot de passe : </label> <br/>
            <input class="form-control" type="password" v-model="password" /><br />
            <button class="btn btn-success float-right" type="submit">Log in</button>
        </form>
    </div>  
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    submit: function() {
      this.$http.post('http://localhost/api/login', {
            password: this.password,
            email: this.email
          })
          .then(function (response) {
            if (response.status === 200 && 'token' in response.data) {
              this.$session.start()
              this.$session.set('jwt', response.body.token)
              Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.token
            }
        }, function (err) {
            console.log('err', err)
          })
    }
  }
}
</script>