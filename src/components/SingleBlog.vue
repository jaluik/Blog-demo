<template>
    <div id="single-block">
        <h1>{{blog.title}}</h1>
        <p>{{blog.body}}</p>
    </div>
</template>

<script>
export default {
    name:'single-block',
    data(){
        return {
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
        .then(function(data){
            this.blog = data.body
        })
        
    }
}
</script>

<style scoped>

</style>


