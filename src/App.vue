<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/"> Home </router-link>
          <router-link class="nav-link" to="/about"> About </router-link>
          <router-link
            class="nav-link"
            :to="{
              name: '新增頁面'
            }"
            >新增頁面</router-link
          >
        </div>
      </div>
    </div>
  </nav>
  <nav></nav>
  <div class="container" style="height: 300vh">
    <router-view />
  </div>
  <router-link to="/newpage/routerNavigation"
    >/newpage/routerNavigation</router-link
  >
  <!-- <div>{{ name }}</div> -->
</template>

<style lang="scss">
@import 'bootstrap';
body {
  padding-top: 80px;
}
</style>

<script>
export default {
  data() {
    return {
      name: process.env.VUE_APP_NAME
    }
  },
  mounted() {}
}
</script>
