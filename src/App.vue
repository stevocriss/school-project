<template>
  
<header>
  

  <nav ><div class="div">
    <img src="./assets/logo.png" alt="not found">
    <router-link to="/" class="nav-router">Home</router-link> 
    <router-link to="/about" class="nav-router">About</router-link>
     <router-link to="/ServicePage" class="nav-router">Services</router-link> 
    <router-link to="" class="nav-router">Contact Us</router-link>
    </div>
  </nav>
</header>




  <router-view />
</template>

<script>
export default {
}
</script>

<style>

</style>