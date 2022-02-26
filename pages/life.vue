<script>
export default {
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        console.log("asyncData");
    },
    beforeCreate(){ 
        console.log("beforeCreate");
    },
    created(){
        console.log("created");
    },
    fetch(){
        console.log("fetch");
    },
    mounted(){
        console.log("mounted");
    }
}
</script>

<template>
    <h1>life</h1>
</template>