<template>
  <h2>具名視圖練習</h2>
  <div class="row">
    <div class="col-6"><router-view name="left"> </router-view></div>
    <div class="col-6"><router-view name="right"></router-view></div>
  </div>
</template>
