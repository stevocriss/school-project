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
    <div class="footer">
  <h1><ul>GS GIHOGWE WEBSITE</ul></h1>
  <p> Kigal Rwanda</p>

  <h3>Project Partners:</h3>
  <p>Gs Gihogwe leaders</p>
  <h3>Developed by students</h3>

  <h3>Contact: stevocriss9@gmail.com | +250 7XX XXX XXX</h3>
  <h3>Website: gs-gihogwe.netlify.app</h3>

</div>

   <p id="gg"> ©2026 MyWebsite. All Rights Reserved.</p>
  
    
  </footer>
</template>