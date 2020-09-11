<template>
  <div class="reviews-show">
    <h1>Reviews</h1>
    <h2>{{ review.professor_id }}</h2>
    <h3>{{ review.rating }}</h3>
    <h3>{{ review.text }}</h3>

    <div class="modal-body">
      <form v-on:submit.prevent="editReview()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Rating:</label>
          <input type="text" class="form-control" v-model="review.title" />
        </div>
        <div class="form-group">
          <label>Text:</label>
          <input type="text" class="form-control" v-model="review.school" />
        </div>
        <input type="submit" class="btn btn-primary" value="Update" />
      </form>
    </div>
    <button type="submit" class="btn btn-custom" v-on:click="destroyReview()">
      Delete Review
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      review: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/reviews/${this.$route.params.id}`).then((response) => {
      this.review = response.data;
      console.log(this.review);
    });
  },

  methods: {
    editReview: function() {
      var params = {
        rating: this.review.rating,
        text: this.review.text,
      };
      if (confirm("Are you sure you'd like to update this review?")) {
        axios
          .patch(`/reviews/${this.review.id}`, params)
          .then((response) => {
            console.log("The review has been updated!", response.data);
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },
    destroyReview: function() {
      if (confirm("Are you sure you want to delete this review?")) {
        axios.delete(`/reviews/${this.review.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/reviews");
        });
      }
    },
  },
};
</script>
