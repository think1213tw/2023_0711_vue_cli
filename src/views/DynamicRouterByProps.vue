<template>
  <div>安安</div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  created() {
    console.log('props', this.id)
    const send = this.id
    // e4732d57d6dbeaaf
    axios.get(`https://randomuser.me/api/?send=${send}`).then((res) => {
      console.log(res)
    })
  }
}
</script>
