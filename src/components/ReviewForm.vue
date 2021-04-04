<template>
  <div class="mb-4">
    <b-form-textarea
      id="textarea"
      v-model="review"
      placeholder="Escreva aqui seu comentário sobre o local..."
      rows="3"
    />
    <b-button-group class="w-100 mt-3">
      <b-button
        @click.prevent="$emit('closeReviewForm')"
        variant="outline-danger"
      >
        Cancelar
      </b-button>
      <b-button @click.prevent="sendReview()" variant="outline-success">
        Enviar
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ReviewForm",
  data() {
    return {
      review: "",
    };
  },
  methods: {
    ...mapActions("place", ["addReview"]),
    sendReview() {
      const payload = {
        place_id: this.$store.state.place.selectedPlace.place_id,
        review: {
          author_name: this.$store.state.auth.loggedUser.first_name,
          relative_time_description: "Segundos atrás",
          text: this.review,
        },
      };
      this.addReview(payload).then(() => {
        this.review = "";
        this.$emit("closeReviewForm");
      });
    },
  },
};
</script>

<style></style>
