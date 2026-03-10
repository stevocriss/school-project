<template>
  <div class="color">
    <form @submit.prevent="make">
      <h1>LOGIN</h1><br>

      <label>ID:</label><br>
      <input type="text" v-model="go.id" @blur="validId"><br>
      <p style="color:red">{{ ben.pr }}</p>

      <label>NAME:</label><br>
      <input type="text" v-model="go.name" @blur="validName"><br>
      <p style="color:red">{{ ben.nam }}</p>

      <label>EMAIL:</label><br>
      <input type="text" v-model="go.email" @blur="validEmail"><br>
      <p style="color:red">{{ ben.emai }}</p>

      <button type="submit">Submit</button>
    </form>

    <router-link to="/dashboard" style="color:white;">
      Go to Dashboard
    </router-link>
  </div>
</template>

<script>
export default {
  name: "LoginPage",

  data() {
    return {
      go: {
        id: "",
        name: "",
        email: ""
      },
      ben: {
        pr: "",
        nam: "",
        emai: ""
      }
    }
  },

  methods: {
    validId() {
      this.ben.pr = this.go.id ? "" : "ID is required";
    },

    validName() {
      this.ben.nam = this.go.name ? "" : "Name is required";
    },

    validEmail() {
      if (!this.go.email) {
        this.ben.emai = "Email is required";
      } else if (!this.go.email.includes("@")) {
        this.ben.emai = "Email must contain @";
      } else {
        this.ben.emai = "";
      }
    },

    async make() {
      this.validId();
      this.validName();
      this.validEmail();

      if (!this.ben.pr && !this.ben.nam && !this.ben.emai) {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(this.go)
            }
          );

          if (!response.ok) throw new Error("Submit failed");

          // Redirect after success
          this.$router.push({ name: "DashBoard" });

        } catch (error) {
          alert(error.message);
        }
      }
    }
  }
}
</script>

<style scoped>
.color {
  text-align: center;
  margin-top: 100px;
}

input {
  padding: 8px;
  margin: 5px;
}

button {
  padding: 10px 20px;
  background: blue;
  color: white;
  border: none;
  cursor: pointer;
}
</style>