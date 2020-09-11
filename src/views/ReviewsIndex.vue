<template>
  <div class="reviews-index">
    <h1>Reviews</h1>
    <div v-for="review in reviews">
      <figure>
        <h1>{{ review.professer_id }}</h1>
        <h3>{{ review.rating }}</h3>
        <h3>
          <router-link v-bind:to="`/reviews/${review.id}`"
            >See More Information</router-link
          >
        </h3>
      </figure>
    </div>

    <div class="modal-body">
      <h1>New Review</h1>
      <form v-on:submit.prevent="createReview()">
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        Professor ID: <input type="text" v-model="newProfessorId" /> Rating:
        <input type="text" v-model="newReviewRating" /> Text:
        <input type="text" v-model="newReviewText" />
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
      reviews: [],
      newProfessorId: "",
      newReviewRating: "",
      newReviewText: "",
      errors: [],
    };
  },
  created: function() {
    axios.get("/reviews").then((response) => {
      console.log("All Reviews:", response.data);
      this.reviews = response.data;
    });
  },
  methods: {
    createReview: function() {
      var params = {
        professor_id: this.newProfessorId,
        rating: this.newReviewRating,
        text: this.newReviewText,
      };
      axios
        .post("/reviews", params)
        .then((response) => {
          console.log("review created", response);
          this.$router.push("/reviews");
        })
        .catch((error) => {
          console.log("review create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
