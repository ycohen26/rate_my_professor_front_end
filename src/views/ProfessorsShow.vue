<template>
  <div class="professors-show"></div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      professors: [],
    };
  },
  created: function() {
    axios.get(`/api/professors/${this.$route.params.id}`).then((response) => {
      this.professor = response.data;
      console.log(this.professor);
    });
  },

  methods: {
    editAd: function() {
      var params = n;
      name: this.ad.name;
      title: this.ad.title;
      title: this.ad.title;

      if (confirm("Are you sure you'd like to update your ad?")) {
        axios
          .patch(`/professors/${this.professor.id}`, params)
          .then((response) => {
            console.log("Your ad has been updated!", response.data);
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },
    destroyAd: function() {
      if (confirm("Are you sure you want to delete this ad?")) {
        axios.delete(`/api/ads/${this.ad.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/ads");
        });
      }
    },
  },
};
</script>
