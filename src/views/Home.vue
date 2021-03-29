<template>
  <div class="container">
    <h1>
      Oi Mesa, espero que esse teste consiga algo sobre minhas habilidades com o
      framework
    </h1>

    <b-input-group size="sm">
      <b-form-input v-model="search"></b-form-input>
    </b-input-group>
    <button @click.prevent="buscar">buscar</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      currentPossition: {},
      search: "",
      results: [],
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  },
  methods: {
    buscar() {
      // `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.currentPossition.latitude},${this.currentPossition.longitude}&radius=1500&&keyword=${this.search}&key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}`
      console.log(1);
      setTimeout(() => {
        console.log(2);
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
            types: [
              "hair_care",
              "health",
              "point_of_interest",
              "establishment",
            ],
            user_ratings_total: 45,
            vicinity:
              "Palato - Anexo 7, Av. Fernandes Lima, 548 - Farol, Maceió",
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
      }, 1500);
    },
    showPosition(position) {
      this.currentPossition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    },
    prepareResults(results) {
      this.results = results.map((place) => {
        return {
          name: place.name,
          open: place.opening_hours.open_now,
          rating: place.rating,
          place_id: place.place_id,
          user_ratings_total: place.user_ratings_total,
          vicinity: place.vicinity,
          position: {
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng,
          },
        };
      });
    },
  },
};
</script>
