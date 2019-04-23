<template>
  <div id="show-blog" v-theme = "'wild'">
      <h1>博客展示</h1>
      <div id="single-blog" v-for = "(blog,index) in blogArray" :key ='index' >
          <h3 v-rainbow>{{blog.title}}</h3>
          <p>{{blog.body}}</p>
      </div>
  </div>
</template>

<script>

export default {
    name:'show-blog',
    data(){
        return {
            blogArray:[],
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(data){
            this.blogArray = data.body.slice(0,10)
        })
    },
    directives:{
        'rainbow':{
            bind(el, bingding, vnode){
                el.style.color = "#" + Math.random().toString(16).slice(2,8)
            }
        },
        'theme':{
            bind(el,binding, vnode){
                if(binding.value == 'wild'){
                    el.style.maxWidth =='1260px'
                }else if(binding.value == 'narrow'){
                    el.style.maxWidth =='560px'
                }
            }
        }
    }
  
}
</script>


<style>
#show-blog{
    max-width: 800px;
    margin: 0 auto;
}
h1,#single-blog{
    padding: 20px;
    margin: 20px 0;
    background-color: #eee;
    box-sizing: border-box;
}

</style>