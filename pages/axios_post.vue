<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ message }}</h1>
    <table>
      <tr>
        <th>Email</th>
        <td><input type="text" v-model="email" /></td>
      </tr>
      <tr>
        <th>Name</th>
        <td><input type="text" v-model="username" /></td>
      </tr>
      <tr>
        <th>Age</th>
        <td><input type="text" v-model="age" /></td>
      </tr>
      <tr>
        <th>Tel</th>
        <td><input type="text" v-model="tel" /></td>
      </tr>
      <tr>
        <th></th>
        <td><button @click="addData()" style="border: 1px solid white">click</button></td>
      </tr>
    </table>
    <div>
      {{ json_data }}
    </div>
    <ul v-for="(data, key) in json_data" :key="key">
      <li><strong>{{ key }}</strong><br>{{ data }}</li>
    </ul>
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
    addData () {
      const addUrl = url + '/' + this.email + '.json'
      const data = {
        'name': this.name,
        'age': this.age,
        'tel': this.tel
      }
      axios.put(addUrl, data).then((res) => {
        this.email = ''
        this.username = ''
        this.tel = ''
        this.age = 0
        this.getData()
      })
    },
    getData () {
      console.log('apibefore')
      axios.get(url + '.json').then((res) => {
        this.message = 'get all data'
        console.log('apinow')
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
