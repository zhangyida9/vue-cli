<template>
  <div id="app">
    <router-link to="/Home" tag="button" replace>首页</router-link>
    <router-link to="/About" tag="button" replace>关于</router-link>
    <router-link :to="'/User/'+ userId" tag="button" replace>用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan'
    }
  },
}
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>
