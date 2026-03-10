<template>
  <div class="dashboard">
    <h1>Welcome to Dashboard 🎉</h1>
    <p>You have successfully logged in.</p>

    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "DashBoard",

  // methods: {
  //   logout() {
  //     this.$router.push({ name: "Login" });
  //   }
  // }
}
</script>

<style scoped>
.dashboard {
  text-align: center;
  margin-top: 100px;
}

button {
  padding: 10px 20px;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
}
</style>