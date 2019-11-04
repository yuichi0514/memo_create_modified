import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAEtNMBV9Y_0blDihpyorSfCH01jlLJps4',
    authDomain: 'my-nuxtvuex-app.firebaseapp.com',
    databaseURL: 'https://my-nuxtvuex-app.firebaseio.com',
    projectId: 'my-nuxtvuex-app',
    storageBucket: 'my-nuxtvuex-app.appspot.com',
    messagingSenderId: '1077752023201',
    appId: '1:1077752023201:web:870edcba0346da6a1788e0',
    measurementId: 'G-3VY92CLTEN'
  })
}

export default firebase
