<template>
  <div>
    <div class="row flex-column align-items-center">
      <div class="">
        <b-form-checkbox v-model="listOrMap" name="check-button" switch>
          <b>Modo {{ listOrMap ? "lista" : "mapa" }}</b>
        </b-form-checkbox>
      </div>
      <div v-show="listOrMap">
        <b-list-group>
          <b-list-group-item
            button
            :key="place.place_id"
            v-for="place in results"
            @click.prevent="openPlaceDetailsModal(place.place_id)"
            >{{ place.name }}</b-list-group-item
          >
        </b-list-group>
      </div>
      <div id="map" v-show="!listOrMap"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Places",
  data() {
    return {
      listOrMap: true,
      map: {},
      loader: {},
      service: {},
      currentPossition: {},
      search: "",
      results: [],
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);

      window.loader.load().then(() => {
        this.map = new window.google.maps.Map(document.getElementById("map"), {
          center: { ...this.currentPossition },
          zoom: 15,
          mapTypeId: "roadmap",
        });
      });

      setTimeout(() => {
        this.nearbyPlaces({
          lat: this.currentPossition.lat,
          lng: this.currentPossition.lng,
          radius: 2000,
          map: this.map,
        });
      }, 500);
    }
  },
  methods: {
    ...mapActions("place", ["fetchPlaceDetails", "nearbyPlaces"]),
    showPosition(position) {
      this.currentPossition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    },
    prepareResults(results) {
      this.results = results.map((place) => {
        const position = {
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
        };
        new window.google.maps.Marker({
          position,
          map: this.map,
          title: "Hello World!",
        });
        return {
          name: place.name,
          open: place.opening_hours.open_now,
          rating: place.rating,
          place_id: place.place_id,
          user_ratings_total: place.user_ratings_total,
          vicinity: place.vicinity,
          position,
        };
      });
    },
    openPlaceDetailsModal(place_id) {
      this.fetchPlaceDetails(place_id).then(() => {
        this.$bvModal.show("placeDetails");
      });
    },
  },
};
</script>

<style>
#map {
  height: 800px;
  width: 100%;
}
</style>
