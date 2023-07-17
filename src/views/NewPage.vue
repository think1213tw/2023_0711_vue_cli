<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link
          class="list-group-item list-group-item-action"
          to="/newpage/a"
          >元件A</router-link
        >
        <router-link
          class="list-group-item list-group-item-action"
          to="/newpage/b"
          >元件B</router-link
        >
        <router-link
          class="list-group-item list-group-item-action"
          to="/newpage/namedview/c2a"
          >C2A</router-link
        >
        <router-link
          class="list-group-item list-group-item-action"
          to="/newpage/namedview/a2c"
          >A2C</router-link
        >
        <router-link
          class="list-group-item list-group-item-action"
          to="/newpage/dynamicrouter/e4732d57d6dbeaaf"
        >
          動態路由
        </router-link>
        <router-link
          class="list-group-item list-group-item-action"
          to="/newpage/routerNavigation"
          >路由選項</router-link
        >
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
