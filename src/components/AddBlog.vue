<template>
  <div id="add-blog">
      <h2>添加博客</h2>
      <form v-if = "!submitted">
        <label>博客标题：</label>
        <input type = "text" v-model = "blog.title" required>

        <label>博客内容：</label>
        <textarea name="" id="" cols="30" rows="10" v-model = "blog.content"></textarea>

        <div id="checkbox">
          <label>Vue.js</label>
          <input type = "checkbox" value = "vue.js" v-model = "blog.categories">
          <label>Node.js</label>
          <input type = "checkbox" value = "Node.js" v-model = "blog.categories">
          <label>React.js</label>
          <input type = "checkbox" value = "React.js" v-model = "blog.categories">
          <label>Angular.js</label>
          <input type = "checkbox" value = "Angular.js" v-model = "blog.categories">
        </div>

        <label>作者：</label>
        <select name="" id="" v-model = "blog.author">
          <option v-for = "author in authors" :key = "author">
            {{author}}
          </option>
        </select>
        
        <button @click.prevent="post">添加博客</button>
      </form>
      <div v-if="submitted">
        <h3>您的博客提交成功</h3>
      </div>
      
      <hr>

      <div id="preview">
        <h3>博客总览</h3>
        <p>博客标题：{{blog.title}}</p>
        <p>博客内容：</p>
        <p>{{blog.content}}</p>
        <p>博客分类：</p>
        <ul>
          <li v-for = "category in blog.categories" :key = "category">{{category}}</li>
        </ul>
        <div>
          <p>作者：{{blog.author}}</p>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data(){
    return {
      blog: {
        title:'',
        content:'',
        categories:[],
        author:'',
      },
      authors:['jaluik', 'john','jack', 'rose'],
      submitted: false,
    }
  },
  methods:{
    post(){
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        title:this.blog.title,
        body: this.blog.content, 
        userId: 1

      }).then(function(data){
        console.log(data);
      });
      this.submitted = !this.submitted
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type = "text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}
textarea{
  height: 200px;
}
#checkbox label{
  display: inline-block;
  margin-top: 0;

}
#checkbox input{
  display: inline-block;
  margin-right: 10px;
}
button{
  display: block;
  margin: 20px 0;
  background-color: rgb(6, 40, 177);
  color:#ccc;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px
}
</style>
