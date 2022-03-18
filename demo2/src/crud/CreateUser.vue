<template>
  <form name="create" @submit.prevent="createUser">
    <label for="email">Name: </label>
    <input type="text" id="email" name="email" v-model="email" />
    <br />
    <label for="password">Password: </label>
    <input type="text" id="password" name="password" v-model="password" />
    <br />
    <label>Choose role: </label>
    <select id="roles" v-model="role">
      <option value="0" disabled>Choose your role</option>
      <option value="1">User</option>
      <option value="2">Admin</option>
    </select>
    <br />
    <button>Create user</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "createUser",
  data() {
    return {
      email: "",
      password: "",
      role: "0",
      token: JSON.parse(localStorage.getItem("userData"))["token"]
    };
  },
  methods: {
    createUser() {
      let userData = {};
      userData["email"] = this.email;
      userData["password"] = this.password;
      userData["roleId"] = Number(this.role);
      axios.post("/login/create", userData, {
        headers: {
          "Authorization": `Bearer ${this.token}`,
        },
      }).then((response) => {
        if (response.status !== 200) {
          alert("It was not created");
        } else {
          alert("It was created");
        }
      });
    },
  },
};
</script>

<style scoped></style>
