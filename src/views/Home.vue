<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <add-blog></add-blog>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AddBlog from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    AddBlog
  }
}
</script>
