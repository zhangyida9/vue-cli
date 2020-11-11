<template>
  <div>
      <h2>我是首页</h2>
      <p>我是用户内容，嘿嘿嘿</p>
      <h2>{{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId() {
      return this.$route.params.userId  //$route谁处于活跃状态，拿到的就是这个对象
    }
  },
}
</script>

<style>

</style>