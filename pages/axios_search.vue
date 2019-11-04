<template>
  <section>
    <!-- アクセスできない -->
    <h1>{{ title }}</h1>
    <h1>{{ message }}</h1>
    <input type="text" v-model="find" />
    <button @click="getData">getData</button>
    <ul>
      <li>{{ json_data }}</li>
      <li>{{ json_data.age }}</li>
      <li>{{ json_data.name }}</li>
      <li>{{ json_data.tel }}</li>
    </ul>
  </section>
</template>

<script>
// import { async } from 'q'
const axios = require('axios')
const url = 'https://my-nuxtvuex-app.firebaseio.com/person.json?orderBy=%22$key%22equalTo=%22'
export default {
  data () {
    return {
      title: 'Axios',
      find: '',
      message: 'axios sample',
      msg: '',
      json_data: {}
    }
  },
  methods: {
    getData () {
      const idUrl = url + this.find + '%22'
      axios.get(idUrl).then((res) => {
        this.message = 'get ID' + this.find
        this.json_data = res.data
      }).catch((error) => {
        this.message = 'ERROR'
        console.lgo('ERROr')
        console.lgo(error)
        this.json_data = {}
      })
    }
  }
}
</script>
