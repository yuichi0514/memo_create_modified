<template>
  <div>
    <!-- ログイン中に表示される画面 -->
    <div v-if="isAuthenticated">
      {{ user.email }}でログイン中です<br>
      <button v-on:click="logout">ログアウト</button><br>
      <a href="/member-page">メンバーページへ</a>
    </div>
    <!-- ログインしていない時に表示される画面 -->
    <div v-else>
      メール<br>
      <input type="text" style="border: 1px solid white" v-model="email"><br>
      パスワード<br>
      <input type="password" style="border: 1px solid white" v-model="password"><br>
      <button v-on:click="login" style="border: 1px solid white">ログイン</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
    })
  },
  methods: {
    ...mapActions(['setUser']),
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$router.push('/')
          console.log('login')
        })
        .catch((error) => { alert(error) })
    },
    logout () {
      firebase.auth().signOut()
        .then(() => {
          this.setUser(null)
        }).catch((error) => {
          alert(error)
        })
    }
  }
}
</script>
