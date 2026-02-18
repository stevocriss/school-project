<template>
  <div class="none">
    <h2>About Page</h2>
    <p>Here there is information about our web page</p>
  </div>

  <div class="table">
    <!-- TABLE -->
    <table border="1">
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>

    <!-- FORM -->
    <form @submit.prevent="make">
      <label>ID:</label><br>
      <input type="text" v-model="id"><br>

      <label>NAME:</label><br>
      <input type="text" v-model="name"><br>

      <label>EMAIL:</label><br>
      <input type="text" v-model="email"><br><br>

      <button type="submit">Submit</button>
    </form>

    <p>{{ id }} {{ name }} {{ email }}</p>

  </div>
  
</template>

<script>
export default {
  name: "AboutView",

  data() {
    return {
      users: [],
      id: "",
      name: "",
      email: ""
    }
  },

  methods: {
    make() {
      // simple validation
      if (!this.id || !this.name || !this.email) {
        alert("Complet down")
        return
      }

      // add new user to table
      this.users.push({
        id: this.id,
        name: this.name,
        email: this.email
      })

      // clear inputs
      this.id = ""
      this.name = ""
      this.email = ""
    }
  }
}
</script>
