<template>
  <nav>
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link>
  </nav>
  <router-view />
  <div>{{name}}</div>
</template>

<style lang="scss">
@import "bootstrap";
</style>

<script>
export default {
  data () {
    return {
      name: process.env.VUE_APP_NAME
    }
  }
}
</script>
