<template>
    <div class="container">
    <h1>This Page is Not Found</h1>
   <h3>Go back to Home page</h3>
    <router-link to="/" >Go back to home</router-link>
    </div>
    <router-view/>
</template>
<script>

export default{
    name:"NotFound"
}
</script>