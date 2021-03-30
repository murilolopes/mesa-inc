<template>
  <div>
    <b-modal id="placeDetails">
      <h4>{{ selectedPlace.name }} - ({{ selectedPlace.rating }})</h4>
      <b-carousel
        id="carousel-1"
        :interval="3000"
        background="#ababab"
        img-width="1024"
        img-height="480"
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
      ></b-form-rating>
      <div>
        <b-button-group style="width: 100%">
          <b-button @click.prevent="toggleCommentInput()">comentar</b-button>
          <b-button>favoritar</b-button>
        </b-button-group>

        <div v-show="commenting">
          <b-form-textarea
            id="textarea"
            v-model="new_comment"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>

          <b-button @click.prevent="toggleCommentInput()">cancelar</b-button>
          <b-button @click.prevent="addNewComment()">save</b-button>
        </div>
      </div>
      <b-list-group>
        <b-list-group-item
          class="flex-column align-items-start"
          v-for="(review, reviewIndex) in selectedPlace.reviews"
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
      rating: 3,
      new_comment: "",
      commenting: false,
      selectedPlace: {},
    };
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    callLogout() {
      this.logout().then(() => this.$router.push({ name: "Login" }));
    },
  },
};
</script>

<style lang="scss"></style>
