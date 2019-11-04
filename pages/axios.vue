<template>
  <div>
    <h1>ERROR</h1>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <pre>{{ json_data }}</pre>
    <pre>{{ json_data.userId }}</pre>
    <pre>{{ json_data.id }}</pre>
    <pre>{{ json_data.title }}</pre>
    <pre>{{ json_data.body }}</pre>
  </div>
</template>

<script>
// import { async } from 'q'
const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/posts/'
export default {
  data () {
    return {
      title: 'Axios',
      message: 'axios sample'
    }
  },
  // asyncData: async () => {
  //   const result = await axios.get(url)
  //   return { html_data: result }
  // }
  async asyncData () {
    const id = 1
    const result = await axios.get(url + id)
    return { json_data: result.data }
  }
}
</script>
