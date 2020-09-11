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
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      professors: [],
    };
  },
  created: function() {
    axios.get("/professors").then((response) => {
      console.log("All Professors:", response.data);
      this.professors = response.data;
    });
  },
  methods: {},
};
</script>
