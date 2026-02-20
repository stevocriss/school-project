<template>
  <header>
    <nav>
      <div class="div">
        <img src="./assets/logo.png" alt="not found">
        <router-link to="/" class="nav-router">Home</router-link>
        <router-link to="/about" class="nav-router">About</router-link>
        <router-link to="/ServicePage" class="nav-router">Services</router-link>
        <router-link to="/ContactPage" class="nav-router">Contact Us</router-link>
      </div>
    </nav>
  </header>

  <router-view />

  <footer>
    <router-link to="/" class="nav-router">Home</router-link>
    <router-link to="/about" class="nav-router">About</router-link>
    <router-link to="/ServicePage" class="nav-router">Services</router-link>
    <router-link to="/ContactPage" class="nav-router">Contact Us</router-link>
    <router-link to="/PlayGame" class="nav-router">Play a game</router-link>
    ©2026 MyWebsite. All Rights Reserved.
  </footer>
</template>