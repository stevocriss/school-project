<template>
  

  
    <div class="color">
      <form @submit.prevent="make">
        <h1>LOGIN</h1><br>
        <label>ID:</label><br>
        <input type="text" v-model="go.id" @blur="validid"><br>
        <p style="color:red">{{ ben.pr }}</p>

        <label>NAME:</label><br>
        <input type="text" v-model="go.name" @blur="validname"><br>
        <p style="color:red">{{ ben.nam }}</p>

        <label>EMAIL:</label><br>
        <input type="text" v-model="go.email" @blur="validemail"><br><br>
        <p style="color:red">{{ ben.emai }}</p>

        <button type="submit">Submit</button>
      </form>

      <p>{{ go.id }} {{ go.name }} {{ go.email }}</p>

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
      ben: { pr: "" ,
       nam: "" ,
       emai: "" }
    }
  },

  methods: {
    validid() {
      if (!this.go.id) {
        this.ben.pr = "ID is required"
      } else {
        this.ben.pr = ""
      }
    },

    validname() {
      if (!this.go.name) {
        this.ben.nam = "Name is required"
      } else {
        this.ben.nam = ""
      }
    },

    validemail() {
      if (!this.go.email) {
        this.ben.emai = "Email is required"
      } else if (!this.go.email.includes("@")) {
        this.ben.emai = "Email must contain @"
      } else {
        this.ben.emai = ""
      }
    },

   async make() {

      this.validId();
      this.validName();
      this.validEmail();
      if (!this.ben.pr && !this.ben.nam && !this.ben.emai) {
       try{
        const criss= await fetch("https://jsonplaceholder.typicode.com/users",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(this.go)
        });
        if(!criss.ok) throw new Error("Sub fail");
         alert("done");
  
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
