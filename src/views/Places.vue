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
            @click.prevent="openPlaceDetails(place.place_id)"
            >{{ place.name }}</b-list-group-item
          >
        </b-list-group>
      </div>
      <div id="map" v-show="!listOrMap"></div>
    </div>
  </div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";
import { mapActions } from "vuex";

export default {
  name: "Places",
  data() {
    return {
      listOrMap: true,
      map: {},
      loader: {},
      currentPossition: {},
      search: "",
      results: [],
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
      this.loader = new Loader({
        apiKey: "AIzaSyB-PRLv1O1Qlj-_q2iVu_kxDIH1pa5ypwo",
        version: "weekly",
        libraries: ["places"],
      });

      this.loader.load().then(() => {
        this.map = new window.google.maps.Map(document.getElementById("map"), {
          center: this.currentPossition,
          zoom: 15,
          mapTypeId: "roadmap",
        });
      });

      setTimeout(() => {
        this.buscar();
      }, 500);
    }
  },
  methods: {
    ...mapActions("place", ["fetchPlaceDetails"]),
    buscar() {
      // `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.currentPossition.latitude},${this.currentPossition.longitude}&radius=1500&&keyword=${this.search}&key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}`
      this.prepareResults([
        {
          business_status: "OPERATIONAL",
          geometry: {
            location: {
              lat: -9.645709,
              lng: -35.7340393,
            },
            viewport: {
              northeast: {
                lat: -9.644379620107278,
                lng: -35.73279697010728,
              },
              southwest: {
                lat: -9.647079279892722,
                lng: -35.73549662989272,
              },
            },
          },
          icon:
            "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png",
          name: "Palato Farol",
          opening_hours: {
            open_now: true,
          },
          photos: [
            {
              height: 734,
              html_attributions: [
                '<a href="https://maps.google.com/maps/contrib/111534117311052468946">#Tips de belleza</a>',
              ],
              photo_reference:
                "ATtYBwIycXvsI2TlU2lXmP9x60QTKA2Z6BB2-8ARizlwweg12Mpcl6YWRb8nmulwDTbxycefXZ68IfJsXg8tIaNrC2N2P-Pl4qekx2zF60GjUXYFhIjYRTIkjMlTrlKk_1BmAfBStZktIKbHI10zv98L3ySOpPITsLQZIfLHjftTaSp4nnkk",
              width: 775,
            },
          ],
          place_id: "ChIJH_vMFoxFAQcRjH-G9VOE7No",
          plus_code: {
            compound_code: "9738+P9 Farol, Maceió - AL",
            global_code: "69269738+P9",
          },
          rating: 4.7,
          reference: "ChIJH_vMFoxFAQcRjH-G9VOE7No",
          scope: "GOOGLE",
          types: [
            "supermarket",
            "grocery_or_supermarket",
            "food",
            "point_of_interest",
            "store",
            "establishment",
          ],
          user_ratings_total: 5322,
          vicinity: "Av. Fernandes Lima, 548 - Farol, Maceió",
        },
        {
          business_status: "OPERATIONAL",
          geometry: {
            location: {
              lat: -9.645731999999999,
              lng: -35.733745,
            },
            viewport: {
              northeast: {
                lat: -9.644429620107278,
                lng: -35.73264222010727,
              },
              southwest: {
                lat: -9.647129279892722,
                lng: -35.73534187989272,
              },
            },
          },
          icon:
            "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
          name: "Arena Barbearia | Farol",
          opening_hours: {
            open_now: true,
          },
          photos: [
            {
              height: 3648,
              html_attributions: [
                '<a href="https://maps.google.com/maps/contrib/112610158271012462799">A Google User</a>',
              ],
              photo_reference:
                "ATtYBwKqVt45kKU_Q90-4RT96exkkaFChYYaJF0J3sYHMgsOYl4cYnUiwyvN38Lm-9gsJk2oJ4IwrSMDm5abNj8O2RXrUCKbXgOIKkvcc4ypEVYNS6hPLXKwOYtDKBj4chuMMWKwA01MXiV08kN43F9hnrce0QNFQ8Q04dLPVKxopEIaclRK",
              width: 5472,
            },
          ],
          place_id: "ChIJdT1vY7pFAQcRJ9_0TnLKOso",
          plus_code: {
            compound_code: "9738+PG Farol, Maceió - AL",
            global_code: "69269738+PG",
          },
          rating: 4.4,
          reference: "ChIJdT1vY7pFAQcRJ9_0TnLKOso",
          scope: "GOOGLE",
          types: ["hair_care", "health", "point_of_interest", "establishment"],
          user_ratings_total: 45,
          vicinity: "Palato - Anexo 7, Av. Fernandes Lima, 548 - Farol, Maceió",
        },
        {
          business_status: "OPERATIONAL",
          geometry: {
            location: {
              lat: -9.645888599999999,
              lng: -35.7338077,
            },
            viewport: {
              northeast: {
                lat: -9.644577520107278,
                lng: -35.73265982010728,
              },
              southwest: {
                lat: -9.647277179892722,
                lng: -35.73535947989272,
              },
            },
          },
          icon:
            "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
          name: "Academia Smart Fit - Palato",
          opening_hours: {
            open_now: true,
          },
          photos: [
            {
              height: 3024,
              html_attributions: [
                '<a href="https://maps.google.com/maps/contrib/117802322295678115108">Paulo Moyses</a>',
              ],
              photo_reference:
                "ATtYBwJQQpTSXBMXCyLlexNlefo8Rm8g4-jv9NWb5Lt_7ucIlTrTJNc0YztPopZjdSr4K6wha4yF2jHJd0W9huq4EwJn2nmntkOFbAJIwRPNbF5VxUklCPDl0wQ8qQgNvBncmYQLcuuQ05DcpTmj7oz8cJINZEomUX0P2NQAOau7BkbaMZmH",
              width: 4032,
            },
          ],
          place_id: "ChIJZQVPPYxFAQcRLwgOjHDfqxM",
          plus_code: {
            compound_code: "9738+JF Farol, Maceió - AL",
            global_code: "69269738+JF",
          },
          rating: 4.6,
          reference: "ChIJZQVPPYxFAQcRLwgOjHDfqxM",
          scope: "GOOGLE",
          types: ["gym", "health", "point_of_interest", "establishment"],
          user_ratings_total: 983,
          vicinity: "Av. Fernandes Lima, 548 - Farol, Maceió",
        },
      ]);
    },
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
    openPlaceDetails(place_id) {
      console.log(place_id);
      console.log(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=name,rating,formatted_phone_number&key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}`
      );

      this.fetchPlaceDetails(place_id).then(() => {
        this.$bvModal.show("placeDetails");
      });
    },
    toggleCommentInput() {
      this.commenting = !this.commenting;
      this.new_comment = "";
    },
  },
};
</script>

<style>
#asd {
  border: 1px solid red;
  max-width: 800px;
  max-height: 800px;
  width: 800px;
  height: 800px;
}
#map {
  height: 800px;
  width: 100%;
}
</style>
