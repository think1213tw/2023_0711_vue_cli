<template>
  <button type="button" @click="getRoute">getRoute</button>
  <button type="button" @click="push">Push</button>
  <button type="button" @click="rplace">Rplace</button>
  <button type="button" @click="go">Go</button>
  <hr />
  <button type="button" @click="addRoute">新增路由</button>
</template>

<script>
export default {
  methods: {
    // 取得常用參數
    getRoute() {
      // 取得路由屬性
      // this.$route
      console.log('route', this.$route)

      // 取得路由方法
      // this.$router
      console.log('router', this.$router)
    },
    // 以下都是 路由提供的方法
    // 有歷史紀錄
    push() {
      // this.$router.push('dynamicrouter/e4732d57d6dbeaaf')

      // 也可以用name
      this.$router.push({
        name: 'about'
      })
    },
    // 無歷史紀錄
    rplace() {
      this.$router.replace({
        name: 'about'
      })
    },
    // 操作歷史紀錄，回上下一頁，帶入
    // 負整數 -1 回上頁
    // 正整數  1 下一頁
    go() {
      this.$router.go(-1)
    },
    // 延伸介紹
    // 臨時要新增路由
    addRoute() {
      this.$router.addRoute({
        path: '/newAbout',
        name: 'newAbout',
        component: () => import('./AboutView.vue')
      })
    }
  }
}
</script>
