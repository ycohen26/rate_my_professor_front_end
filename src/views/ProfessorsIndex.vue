<template>
  <div class="professors-index">
    <h1>Professors</h1>
    <div v-for="professor in professors">
      <figure>
        <h1>{{ professor.name }}</h1>
        <h3>{{ professor.school }}</h3>
        <h3>
          <router-link v-bind:to="`/professors/${professor.id}`"
            >See More Information</router-link
          >
        </h3>
      </figure>
    </div>
    <div class="modal-body">
      <h1>New Professor</h1>
      <form v-on:submit.prevent="createProfessor()">
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        Name: <input type="text" v-model="newProfessorName" /> Title:
        <input type="text" v-model="newProfessorTitle" /> Department:
        <input type="text" v-model="newProfessorDepartment" /> School:
        <input type="text" v-model="newProfessorSchool" />
        <input type="submit" value="Create" />
      </form>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      professors: [],
      newProfessorName: "",
      newProfessorTitle: "",
      newProfessorSchool: "",
      newProfessorDepartment: "",
      errors: [],
    };
  },
  created: function() {
    axios.get("/professors").then((response) => {
      console.log("All Professors:", response.data);
      this.professors = response.data;
    });
  },
  methods: {
    createProfessor: function() {
      var params = {
        name: this.newProfessorName,
        title: this.newProfessorTitle,
        school: this.newProfessorSchool,
        department: this.newProfessorDepartment,
      };
      axios
        .post("/professors", params)
        .then((response) => {
          console.log("professor create", response);
          this.$router.push("/professors");
        })
        .catch((error) => {
          console.log("professor create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
