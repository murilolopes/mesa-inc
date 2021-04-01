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
            v-for="place in $store.state.place.places"
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
      map_loaded: false,
      loader: {},
      service: {},
      currentPossition: {},
      search: "",
      results: [],
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.savePosition);
    }
  },
  methods: {
    ...mapActions("place", ["fetchPlaceDetails", "nearbyPlaces"]),
    savePosition(position) {
      this.currentPossition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    },
    openPlaceDetailsModal(place_id) {
      this.fetchPlaceDetails(place_id).then(() => {
        this.$bvModal.show("placeDetails");
      });
    },
    loadMap() {
      window.loader.load().then(() => {
        this.map = new window.google.maps.Map(document.getElementById("map"), {
          center: { ...this.currentPossition },
          zoom: 15,
          mapTypeId: "roadmap",
        });
        this.map_loaded = true;
      });
    },
    addMarker(place) {
      new window.google.maps.Marker({
        position: place.position,
        map: this.map,
      });
    },
  },
  watch: {
    currentPossition(newValue) {
      if (newValue.lng && newValue.lng) this.loadMap();
    },
    map_loaded(newValue) {
      if (newValue) {
        this.nearbyPlaces({
          lat: this.currentPossition.lat,
          lng: this.currentPossition.lng,
          radius: 2000,
          map: this.map,
        }).then((response) => {
          response.filter((place) => {
            this.addMarker(place);
          });
        });
      }
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
