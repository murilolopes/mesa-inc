<template>
  <div>
    <b-modal
      id="placeDetails"
      size="lg"
      :title="placeTitle"
      @hide="clearSelectedPlace()"
      cancel-disabled
      button-size="sm"
      ok-only
    >
      <b-carousel
        id="carousel-1"
        :interval="3000"
        background="#ababab"
        indicators
      >
        <b-carousel-slide
          v-for="(photo, photoIndex) in selectedPlace.photos"
          :key="photoIndex"
          :img-src="photo"
        />
      </b-carousel>
      <div class="rating">
        <b-form-rating
          id="rating-sm-no-border"
          v-model="rating"
          no-border
          size="sm"
          @change="sendNewRating"
        />
      </div>
      <div>
        <b-button-group class="w-100 mb-4">
          <b-button @click.prevent="openReviewForm()" variant="outline-success">
            Comentar
          </b-button>
          <b-button @click.prevent="sendBookmark()" variant="outline-danger">
            <b-icon-heart-fill
              v-if="$store.state.place.selectedPlace.bookmark"
            />
            <b-icon-heart v-else variant="danger" />
          </b-button>
        </b-button-group>

        <review-form v-show="reviewing" @closeReviewForm="reviewing = false" />
      </div>
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
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ReviewForm from "./../components/ReviewForm";

export default {
  name: "NavBar",
  components: { ReviewForm },
  data() {
    return {
      rating: 0,
      reviewing: false,
      bookmark: false,
    };
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    ...mapActions("place", ["clearSelectedPlace", "addRating", "addBookmark"]),
    callLogout() {
      this.logout().then(() => this.$router.push({ name: "Login" }));
    },
    sendNewRating(rating) {
      this.addRating({ place_id: this.selectedPlace.place_id, rating });
    },
    sendBookmark() {
      this.addBookmark(this.selectedPlace.place_id);
    },
    openReviewForm() {
      this.reviewing = !this.reviewing;
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
