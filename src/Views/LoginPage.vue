<template>
  <div class="color">
    <form @submit.prevent="make">
      <h1>LOGIN</h1><br>

      <label>ID:</label><br>
      <input type="text" v-model="go.id" @blur="validId"><br>
      <p style="color:red">{{ my.pr }}</p>

      <label>NAME:</label><br>
      <input type="text" v-model="go.name" @blur="validName"><br>
      <p style="color:red">{{ hi.nam }}</p>

      <label>EMAIL:</label><br>
      <input type="text" v-model="go.email" @blur="validEmail"><br>
      <p style="color:red">{{ no.emai }}</p><br>

      <button type="submit">Submit</button>
    </form>

    <!-- Display submitted data -->
    <div v-if="submitted">
      <h3>Submitted Data:</h3>
      <p>{{ submittedData.id }}</p>
      <p>{{ submittedData.name }}</p>
      <p>{{ submittedData.email }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "AboutView",

  data() {
    return {
      go: {
        id: "",
        name: "",
        email: ""
      },
      my: { pr: "" },
      hi: { nam: "" },
      no: { emai: "" },
      submitted: false,
      submittedData: {}
    }
  },

  methods: {
    validId() {
      this.my.pr = !this.go.id ? "ID is required" : "";
    },

    validName() {
      this.hi.nam = !this.go.name ? "Name is required" : "";
    },

    validEmail() {
      if (!this.go.email) {
        this.no.emai = "Email is required";
      } else if (!this.go.email.includes("@")) {
        this.no.emai = "Email must contain @";
      } else {
        this.no.emai = "";
      }
    },

    async make() {
      this.validId();
      this.validName();
      this.validEmail();

      if (!this.my.pr && !this.hi.nam && !this.no.emai) {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(this.go)
            }
          );

          if (!response.ok) throw new Error("Submit failed");

          // Show data on screen
          this.submittedData = { ...this.go };
          this.submitted = true;

          // Clear form
          this.go.id = "";
          this.go.name = "";
          this.go.email = "";

          alert("Done 👌");
        } catch (error) {
          alert(error.message);
        }
      }
    }
  }
}
</script>