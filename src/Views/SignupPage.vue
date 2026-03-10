

<template>
  

  
    <div class="color">
      <form @submit.prevent="signin">
        <h1>SIGN UP</h1><br>
        <label for="name">FRIST NAME:</label><br>
        <input type="text" v-model="inputs.id" @blur="validfname"><br>
        <p style="color:red">{{ par.pr }}</p>

        <label for="name">SECOND NAME:</label><br>
        <input type="text" v-model="inputs.name" @blur="validsname"><br>
        <p style="color:red">{{ par.nam }}</p>

        <label for="email">EMAIL:</label><br>
        <input type="text" v-model="inputs.email" @blur="validEmail"><br><br>
        <p style="color:red">{{ par.emai }}</p>
        <label for="password">PASSWORD:</label><br>
        <input type="text" v-model="inputs.pass" @blur="validpassword"><br><br>
        <p style="color:red">{{ par.passw }}</p>

        <button type="submit">SIGN UP</button>
      </form>

      <p>{{ inputs.id }} {{ inputs.name }} {{ inputs.email }} {{ inputs.passw }}</p>
<router-link style="color: violet;" to="/HomeViews">or Login</router-link>
    </div>
  
  
</template><script>
export default {
  name: "LoginPage",

  data() {
    return {
      inputs: {
        id: "",
        name: "",
        email: "",
        pass:""
      },
      par: { 
        pr: "",
        nam: "",
        emai: "",
        passw:"" 
      }
    }
  },

  methods: {
    validfname() {
      if (!this.inputs.id) {
        this.par.pr = "Frist name is required";
      } else {
        this.par.pr = "";
      }
    },

    validsname() {
      if (!this.inputs.name) {
        this.par.nam = "Second name is required ";
      } else {
        this.par.nam = "";
      }
    },

    validEmail() {
      if (!this.inputs.email) {
        this.par.emai = "Email is required";
      } else if (!this.inputs.email.includes("@")) {
        this.par.emai = "Email must contain @";
      } else {
        this.par.emai = "";
      }
    },
   validpassword() {
  const password = this.inputs.pass;

  if (!password) {
    this.par.passw = "Create password";
  } 
  else if (!/[A-Z]/.test(password)) {
    this.par.passw = "Password must contain a capital letter";
  } 
  else if (!/[a-z]/.test(password)) {
    this.par.passw = "Password must contain a small letter";
  } 
  else if (!/[0-9]/.test(password)) {
    this.par.passw = "Password must contain a number";
  } 
  else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    this.par.passw = "Password must contain a symbol";
  } 
  else {
    this.par.passw = "";
  }
},

    async signin() {

      this.validfname();
      this.validsname();
      this.validEmail();

      if (!this.par.pr && !this.par.nam && !this.par.emai) {
        try {
          const criss = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.inputs)
          });

          if (!criss.ok) throw new Error("Submit failed");

          // alert("Done");

          
          this.$router.push('/DashBoard');

        } catch (error) {
          alert(error.message);
        }
      }
    }
  }
}
</script>
