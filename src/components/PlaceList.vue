<template>
  <div class="container mt-4 mb-4">
    <b-list-group>
      <b-list-group-item
        button
        :key="place.place_id"
        v-for="place in $store.state.place.places"
        @click.prevent="openPlaceDetailsModal(place.place_id)"
        >{{ place.name }}</b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PlaceList",
  data() {
    return {
      rating: 0,
      new_review: "",
      reviewing: false,
    };
  },
  methods: {
    ...mapActions("place", ["fetchPlaceDetails", "nearbyPlaces"]),
    openPlaceDetailsModal(place_id) {
      this.fetchPlaceDetails(place_id).then(() => {
        this.$bvModal.show("placeDetails");
      });
    },
  },
  computed: {
    selectedPlace() {
      return this.$store.state.place.selectedPlace;
    },
    orderedReviews() {
      const reviews = Object.assign([], this.selectedPlace.reviews);
      return reviews.reverse();
    },
    placeTitle() {
      return `${this.selectedPlace.name} - (${this.selectedPlace.rating})`;
    },
  },
  watch: {
    "selectedPlace.rating"(newValue) {
      if (newValue) this.rating = newValue;
    },
  },
};
</script>

<style lang="scss">
.rating {
  margin-top: 15px;
  margin-bottom: 15px;
}

.carousel-item {
  .w-100 {
    width: auto !important;
  }

  img {
    margin: auto;
  }
}

.img-fluid {
  height: 450px;
}

#map {
  position: fixed !important;
}
</style>
