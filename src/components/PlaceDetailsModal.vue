<template>
  <div>
    <b-modal id="placeDetails" @hide="clearSelectedPlace()">
      <h4>{{ selectedPlace.name }} - ({{ selectedPlace.rating }})</h4>
      <b-carousel
        id="carousel-1"
        :interval="3000"
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333"
      >
        <b-carousel-slide
          v-for="(photo, photoIndex) in selectedPlace.photos"
          :key="photoIndex"
          :img-src="photo"
        ></b-carousel-slide>
      </b-carousel>
      <b-form-rating
        id="rating-sm-no-border"
        v-model="rating"
        no-border
        size="sm"
        @change="sendNewRating"
      ></b-form-rating>
      <div>
        <b-button-group style="width: 100%">
          <b-button @click.prevent="toggleReviewInput()">comentar</b-button>
          <b-button @click.prevent="sendBookmark()">
            <b-icon-heart v-if="selectedPlace.bookmark"> </b-icon-heart>
            <b-icon-heart-fill v-else variant="danger"></b-icon-heart-fill>
          </b-button>
        </b-button-group>

        <div v-show="reviewing">
          <b-form-textarea
            id="textarea"
            v-model="new_review"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>

          <b-button @click.prevent="toggleReviewInput()">cancelar</b-button>
          <b-button @click.prevent="sendReview()">save</b-button>
        </div>
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

export default {
  name: "NavBar",
  data() {
    return {
      rating: 0,
      new_review: "",
      reviewing: false,
    };
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    ...mapActions("place", [
      "clearSelectedPlace",
      "addReview",
      "addRating",
      "addBookmark",
    ]),
    callLogout() {
      this.logout().then(() => this.$router.push({ name: "Login" }));
    },
    toggleReviewInput() {
      this.reviewing = !this.reviewing;
      this.new_review = "";
    },
    sendReview() {
      const payload = {
        place_id: this.selectedPlace.place_id,
        review: {
          author_name: this.$store.state.auth.loggedUser.first_name,
          relative_time_description: "Segundos atrás",
          text: this.new_review,
        },
      };
      this.addReview(payload).then(() => this.toggleReviewInput());
    },
    sendNewRating(rating) {
      this.addRating({ place_id: this.selectedPlace.place_id, rating });
    },
    sendBookmark() {
      this.addBookmark({ place_id: this.selectedPlace.place_id });
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
  },
  watch: {
    "selectedPlace.rating"(newValue) {
      if (newValue) this.rating = newValue;
    },
  },
};
</script>

<style lang="scss"></style>
