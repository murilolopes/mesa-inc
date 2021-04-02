<template>
  <div>
    <div class="justify-content-center">
      <div id="listOrMap">
        <div v-show="listMode">
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
        </div>
        <div id="map" v-show="mapMode"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Places",
  data() {
    return {
      map: {},
      map_loaded: false,
      loader: {},
      currentPossition: {},
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.savePosition);
    }
  },
  methods: {
    ...mapActions("place", ["fetchPlaceDetails", "nearbyPlaces"]),
    ...mapActions("app", ["setPlacesViewMode"]),
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
        window.placesService = new window.google.maps.places.PlacesService(
          this.map
        );

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
  computed: {
    ...mapGetters("app", ["listMode", "mapMode"]),
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
  height: 100vh;
  overflow: hidden;
}
</style>
