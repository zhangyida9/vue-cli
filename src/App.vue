<template>
  <div id="app">
    <router-link to="/Home" tag="button" replace>首页</router-link>
    <router-link to="/About" tag="button" replace>关于</router-link>
    <router-link :to="'/User/'+ userId" tag="button" replace>用户</router-link>
    <!-- <router-link :to="{path: '/Profile', query: {name:'zhangsan', age:18}}" tag="button">档案</router-link> -->
    <button @click="btnClick">档案</button>
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
  methods: {
    btnClick() {
      this.$router.push({
        path: '/Profile',
        query: {
          name: 'lisi',
          age: 18
        }
      })
    }
  },
}
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>
