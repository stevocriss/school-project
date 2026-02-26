<template>
  

  
    <div class="color">
      <form @submit.prevent="make">
        <h1>LOGIN</h1><br>
        <label>ID:</label><br>
        <input type="text" v-model="go.id" @blur="validid"><br>
        <p style="color:red">{{ my.pr }}</p>

        <label>NAME:</label><br>
        <input type="text" v-model="go.name" @blur="validname"><br>
        <p style="color:red">{{ hi.nam }}</p>

        <label>EMAIL:</label><br>
        <input type="text" v-model="go.email" @blur="validemail"><br><br>
        <p style="color:red">{{ no.emai }}</p>

        <button type="submit">Submit</button>
      </form>

      <p>{{ go.id }} {{ go.name }} {{ go.email }}</p>

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
      no: { emai: "" }
    }
  },

  methods: {
    validId() {
      if (!this.go.id) {
        this.my.pr = "ID is required"
      } else {
        this.my.pr = ""
      }
    },

    validName() {
      if (!this.go.name) {
        this.hi.nam = "Name is required"
      } else {
        this.hi.nam = ""
      }
    },

    validEmail() {
      if (!this.go.email) {
        this.no.emai = "Email is required"
      } else if (!this.go.email.includes("@")) {
        this.no.emai = "Email must contain @"
      } else {
        this.no.emai = ""
      }
    },

   async make() {

      this.validId();
      this.validName();
      this.validEmail();
      if (!this.my.pr && !this.hi.nam && !this.no.emai) {
       try{
        const criss= await fetch("https://jsonplaceholder.typicode.",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(this.make)
        });
        if(!criss.ok) throw new Error("Sub fail");
         alert("done👌👌");
  
        this.go.id = ""
        this.go.name = ""
        this.go.email = ""
       }
       catch(error){
        alert(error.message);
       }

      }
    }
  }
}
</script>

