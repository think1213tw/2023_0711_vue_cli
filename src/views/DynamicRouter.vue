<template>
  <div>安安</div>
</template>

<script>
import axios from 'axios'

export default {
  created() {
    console.log(this.$route.params.id)
    const send = this.$route.params.id
    // e4732d57d6dbeaaf
    axios.get(`https://randomuser.me/api/?send=${send}`).then((res) => {
      console.log(res)
    })
  }
}
</script>
