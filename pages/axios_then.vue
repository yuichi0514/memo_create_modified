<template>
  <section>
    <h1>{{ title }}</h1>
    <h1>{{ message }}</h1>
    <div>
      <input type="text" v-model="msg" />
      <button @click="doClick">Click</button>
    </div>
    <table>
      <tr>
        <th>User ID</th>
        <td>{{ json_data.userId }}</td>
      </tr>
      <tr>
        <th>ID</th>
        <td>{{ json_data.id }}</td>
      </tr>
      <tr>
        <th>title</th>
        <td>{{ json_data.title }}</td>
      </tr>
      <tr>
        <th>body</th>
        <td>{{ json_data.body }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
// import { async } from 'q'
const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/posts/'
export default {
  data () {
    return {
      title: 'Axios',
      message: 'axios sample',
      msg: '',
      json_data: {}
    }
  },
  // asyncData: async () => {
  //   const result = await axios.get(url)
  //   return { html_data: result }
  // }
  // async asyncData () {
  //   const id = 1
  //   const result = await axios.get(url + id)
  //   return { json_data: result.data }
  // }
  methods: {
    doClick () {
      axios.get(url + this.msg).then((res) => {
        console.log(this.msg)
        console.log(res)
        this.message = 'get ID' + this.msg
        this.json_data = res.data
      }).catch((error) => {
        this.message = 'ERROR'
        this.json_data = {}
        console.log(error)
        alert(this.message)
      })
    }
  }
}
</script>
