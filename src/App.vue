<template>
  <div id="app">
    <div id="nav">
      <!-- <add-blog></add-blog> -->
      <header-blog></header-blog>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AddBlog from '@/components/AddBlog.vue'
import ShowBlog from '@/components/ShowBlog.vue'
import HeaderBlog from '@/components/HeaderBlog.vue'
export default {
  components:{
    AddBlog,
    ShowBlog,
    HeaderBlog
  }
  
}
</script>


<style>

</style>
