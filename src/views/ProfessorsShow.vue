<template>
  <div class="professors-show">
    <h1>Professor Information</h1>
    <h2>{{ professor.name }}</h2>
    <h3>{{ professor.title }}</h3>
    <h3>{{ professor.school }}</h3>
    <h3>{{ professor.department }}</h3>

    <div class="modal-body">
      <form v-on:submit.prevent="editProfessor()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="professor.name" />
        </div>
        <div class="form-group">
          <label>Title:</label>
          <input type="text" class="form-control" v-model="professor.title" />
        </div>
        <div class="form-group">
          <label>School:</label>
          <input type="text" class="form-control" v-model="professor.school" />
        </div>
        <div class="form-group">
          <label>Department:</label>
          <input
            type="text"
            class="form-control"
            v-model="professor.department"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Update" />
      </form>
    </div>
    <button
      type="submit"
      class="btn btn-custom"
      v-on:click="destroyProfessor()"
    >
      Delete Professor
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      professor: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/professors/${this.$route.params.id}`).then((response) => {
      this.professor = response.data;
      console.log(this.professor);
    });
  },

  methods: {
    editProfessor: function() {
      var params = {
        name: this.professor.name,
        school: this.professor.school,
        title: this.professor.title,
        department: this.professor.department,
      };
      if (confirm("Are you sure you'd like to update this professor?")) {
        axios
          .patch(`/professors/${this.professor.id}`, params)
          .then((response) => {
            console.log("The professor has been updated!", response.data);
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },
    destroyProfessor: function() {
      if (confirm("Are you sure you want to delete this professor?")) {
        axios.delete(`/professors/${this.professor.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/professors");
        });
      }
    },
  },
};
</script>
