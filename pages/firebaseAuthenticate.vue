<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ message }}</h1>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      title: 'Auth',
      message: 'this is message'
    }
  },
  created () {
    // Your web app's Firebase configuration
    const config = {
      apiKey: 'AIzaSyAEtNMBV9Y_0blDihpyorSfCH01jlLJps4',
      authDomain: 'my-nuxtvuex-app.firebaseapp.com',
      databaseURL: 'https://my-nuxtvuex-app.firebaseio.com',
      projectId: 'my-nuxtvuex-app',
      storageBucket: 'my-nuxtvuex-app.appspot.com',
      messagingSenderId: '1077752023201',
      appId: '1:1077752023201:web:870edcba0346da6a1788e0',
      measurementId: 'G-3VY92CLTEN'
    }
    // Initialize Firebase
    firebase.initializeApp(config)
    const provider = new firebase.auth.GoogleAuthProvider()
    const self = this
    firebase.auth().signInWithPopup(provider).then((result) => {
      self.message = result.user.displayName + ',' + result.user.email
    })
  }
}
</script>
