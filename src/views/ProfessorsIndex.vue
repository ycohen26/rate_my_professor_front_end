<template>
  <div class="professor">
    <h1>Professors</h1>
    <div v-for="professor in professors">
      <h2>{{ professor.name }}</h2>
      <h3>{{professor.school}}</h3>
      <h3><button v-on:click="`/professors/${professor.id}`">Click here for more information</button></h3>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      professors: [],
    };
  },
  created: function() {
    this.indexProfessors();
  },
  methods: {
    indexProfessors: function() {
      axios.get("/api/professor").then(response => {
        console.log("All professors", response);
        this.professors = response.data;
      });
    },
  },
};