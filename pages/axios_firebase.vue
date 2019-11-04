<template>
  <section>
    <h1>{{ title }}</h1>
    <h1>{{ message }}</h1>
    <ul v-for="(data, key) in json_data" :key="data.id">
      <li>{{ data.name }}</li>
      <li>{{ data.age }}</li>
      <li>[{{ key }}]</li>
    </ul>
  </section>
</template>

<script>
// import { async } from 'q'
const axios = require('axios')
const url = 'https://my-nuxtvuex-app.firebaseio.com/person.json'
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
  async asyncData () {
    const result = await axios.get(url)
    return { json_data: result.data }
  }
  // methods: {
  //   doClick () {
  //     axios.get(url + this.msg).then((res) => {
  //       console.log(this.msg)
  //       console.log(res)
  //       this.message = 'get ID' + this.msg
  //       this.json_data = res.data
  //     }).catch((error) => {
  //       this.message = 'ERROR'
  //       this.json_data = {}
  //       console.log(error)
  //       alert(this.message)
  //     })
  //   }
  // }
}
</script>
