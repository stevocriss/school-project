<template>
  <div class="box">
    <h1>Simple<br> Clicking<br>Game</h1>
    <p>score : {{ score }}</p>
    <button v-if="!test" @click="tree">Click</button>
    <h2 v-else>Game is over</h2>

  </div>

  <div v-if="welcome" class="hi">Cool😅😅</div>
<footer>
 
   ©2026 MyWebsite. All Rights Reserved .
</footer>

</template>
<script>
export default {
  name: "HomeView",
  data() {
    return {
      score: 0,
      test: false,
      welcome: false
    }
  },
  mounted() {
    // Appear after 5 seconds
    setTimeout(() => {
      this.welcome = true

      // Disappear after 3 seconds
      setTimeout(() => {
        this.welcome = false
      }, 4000)

    }, )
  },
  methods: {
    tree() {
      this.score++
      if (this.score >= 20) {
        this.test = true
      }
    }
  }
}
</script>