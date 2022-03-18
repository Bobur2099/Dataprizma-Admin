<template>
  <div class="modal-create" v-if="createModalShow">
    <button class="close" @click="createModalShow = false">&times;</button>
    <form name="create" @submit.prevent="createUser">
      <h3>Create user</h3>
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
  </div>
  <div class="table">
    <table border="3">
      <thead>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>Role</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(value, i) in userData"
          v-bind:key="i"
          v-bind:title="value.email"
          style="border-top: 2px solid black"
        >
          <td>{{ value.id }}</td>
          <td>{{ value.email }}</td>
          <td>{{ value.name }}</td>
          <td>{{ value.password }}</td>
          <td>
            <button>U</button>
            <button @click="deleteUser(value.id, i)">D</button>
          </td>
        </tr>
        <tr style="border-top: 2px solid black">
          <td>Avarage {{ userData.length }}</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <button @click="createModalShow = true">Create</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="addUser">Click</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserTables.vue",
  data() {
    return {
      userData: [],
      token: JSON.parse(localStorage.getItem("userData"))["token"],
      createModalShow: false,
      email: "",
      password: "",
      role: "0",
    };
  },
  methods: {
    tableData() {
      axios
        .get("login/list", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          if (response.status !== 200) {
            alert("Error");
          } else {
            console.log(response.data);
            this.userData = response.data;
            for (let i = 0; i < this.userData.length; i++) {
              for (let j = 0; j < this.userData.length; j++) {
                if (this.userData[i].id < this.userData[j].id) {
                  let c = this.userData[i];
                  this.userData[i] = this.userData[j];
                  this.userData[j] = c;
                }
              }
            }
          }
        });
    },
    createUser() {
      let userData = {};
      userData["email"] = this.email;
      userData["password"] = this.password;
      userData["roleId"] = Number(this.role);
      axios
        .post("/login/create", userData, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          if (response.status !== 200) {
            alert("It was not created");
          } else {
            alert("It was created");
            this.tableData();
            this.role = 0;
            this.email = "";
            this.password = "";
            this.createModalShow = false;
          }
        });
    },
    deleteUser(id, row) {
      axios
        .delete("login/delete/" + id, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          if (response.status !== 200) {
            alert("Cant delete");
          } else {
            alert("Successfully deleted");
            this.userData.splice(row, 1);
          }
        });
    },
  },
  created() {
    this.tableData();
  },
};
</script>

<style scoped>
body {
  overflow-x: hidden !important;
}

table td,
table th {
  padding: 7px 40px;
}

form input {
  height: 24px;
}

.modal-create {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  place-content: center;
  place-items: center;
  display: flex;
  text-align: center;
  font-size: 20px;
  color: white;
}

.modal-create h3 {
  font-size: 46px;
  font-family: Arial, sans-serif;
}

.close {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
