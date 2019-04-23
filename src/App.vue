<template>
  <div id="app">
    <div id="nav">
      <!-- <add-blog></add-blog> -->
      <ShowBlog></ShowBlog>
    </div>
  </div>
</template>

<script>
import AddBlog from '@/components/AddBlog.vue'
import ShowBlog from '@/components/ShowBlog.vue'
export default {
  components:{
    AddBlog,ShowBlog
  }
  
}
</script>


<style>

</style>
