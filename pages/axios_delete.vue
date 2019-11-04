<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <table>
      <tr>
        <th>Email</th>
        <td><input type="text" v-model="email"></td>
        <td><button @click="delData">Click</button></td>
      </tr>
    </table>
    <ul v-for="(data, key) in json_data" :key="key">
      <li><strong>{{ key }}</strong><br>{{ data }}</li>
    </ul>
    <div>
      {{ json_data }}
    </div>
  </div>
</template>

<script>
const axios = require('axios')
const url = 'https://my-nuxtvuex-app.firebaseio.com/person'
export default {
  data () {
    return {
      title: 'Axios',
      email: '',
      username: '',
      tel: '',
      age: 0,
      message: 'axios sample',
      json_data: {}
    }
  },
  methods: {
    delData () {
      const delUrl = url + '/' + this.email + '.json'
      axios.delete(delUrl).then((re) => {
        this.message = this.email + '削除'
        this.email = ''
        console.log(re)
        this.getData()
      })
    },
    getData () {
      console.log('getapibefore')
      axios.get(url + '.json').then((res) => {
        console.log('getapinow')
        this.json_data = res.data
      }).catch((error) => {
        this.message = 'ERROR'
        this.json_data = {}
        console.log(error)
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>
<style>
input{
  border: 1px solid white
}
</style>
