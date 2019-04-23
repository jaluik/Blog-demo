<template>
    <div id="header-blog">
        <ul>
            <li>
                <router-link to="/" exact>Home</router-link>
            </li>
            <li>
                <router-link to="/add" exact>Add</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'header-blog'
}
</script>

<style scoped>
#header-blog{
    background-color: blue;
    height: 40px;
    padding: 20px;
}
ul{
    width: 100%;
    margin: 0 auto;
    text-align: center;
    height: 100%;
}
li{
    list-style:none;
    display: inline-block;
    margin-right: 50px;
    line-height: 40px;
}
a{
    text-decoration: none;
    color: #fff;
    padding: 12px;
    
}
.router-link-active{
    background-color: rgba(255,255,255,0.8);
    color:#444;
}
</style>


