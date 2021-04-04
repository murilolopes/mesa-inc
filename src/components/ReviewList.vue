<template>
  <b-list-group>
    <b-list-group-item
      class="flex-column align-items-start"
      v-for="(review, reviewIndex) in orderedReviews"
      :key="reviewIndex"
    >
      <div class="d-flex w-100 justify-content-between">
        <h6 class="mb-1">{{ review.author_name }}</h6>
        <small>{{ review.relative_time_description }}</small>
      </div>

      <p class="mb-1">
        {{ review.text }}
      </p>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: "ReviewList",
  computed: {
    orderedReviews() {
      const reviews = Object.assign(
        [],
        this.$store.state.place.selectedPlace.reviews
      );
      return reviews.reverse();
    },
  },
};
</script>

<style></style>
