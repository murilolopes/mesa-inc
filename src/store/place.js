import { Place } from "../services/place";
import { treatPhotos, treatReviews } from "./../utils/array";

export const state = {
  selectedPlace: {},
  places: [],
  bookmarks: [],
};

export const mutations = {
  SET_SELECTED_PLACE(state, selectedPlace) {
    selectedPlace.photos = treatPhotos(selectedPlace.photos);
    selectedPlace.reviews = treatReviews(selectedPlace.reviews);

    state.places.filter((place) => {
      if (place.place_id === selectedPlace.place_id && place.bookmark)
        selectedPlace.bookmark = place.bookmark;
    });

    state.selectedPlace = selectedPlace;
  },
  CLEAR_SELECTED_PLACE(state) {
    state.selectedPlace = {};
  },
  PUSH_REVIEW(state, review) {
    state.selectedPlace.reviews.push(review);
  },
  PUSH_RATING(state, rating) {
    state.selectedPlace.rating = rating;
  },
  BOOKMARK(state) {
    let bookmark;
    const itsAlreadyBookmarked = state.bookmarks.some(
      (place) => place.place_id === state.selectedPlace.place_id
    );

    state.places.filter((place) => {
      bookmark = !place.bookmark;

      if (place.place_id === state.selectedPlace.place_id) {
        place.bookmark = bookmark;
        state.selectedPlace.bookmark = bookmark;
        if (!itsAlreadyBookmarked) state.bookmarks.push(place);
      }
    });

    if (itsAlreadyBookmarked) {
      let bookmarkedIndex;

      state.bookmarks.filter((place, placeIndex) => {
        if (place.place_id === state.selectedPlace.place_id)
          bookmarkedIndex = placeIndex;
      });

      state.bookmarks.splice(bookmarkedIndex, 1);
    }
  },
  PUSH_PLACES(state, places) {
    if (state.places.length) {
      state.places.filter((place) => {
        places.filter((newPlace) => {
          if (newPlace.place_id === place.place_id)
            newPlace.bookmark = place.bookmark;
        });
      });
    }

    state.places = places;
  },
};

export const getters = {};

export const actions = {
  fetchPlaceDetails({ commit }, place_id) {
    return Place.details(place_id).then((response) => {
      commit("SET_SELECTED_PLACE", response);
    });
  },
  clearSelectedPlace({ commit }) {
    commit("CLEAR_SELECTED_PLACE");
  },
  addReview({ commit }, { place_id, review }) {
    return Place.review(place_id, review).then((response) => {
      commit("PUSH_REVIEW", response);
    });
  },
  addRating({ commit }, { place_id, rating }) {
    return Place.rating(place_id, rating).then((response) => {
      commit("PUSH_RATING", response.rating);
    });
  },
  addBookmark({ commit }, place_id) {
    return Place.bookmark(place_id).then(() => {
      commit("BOOKMARK");
    });
  },
  nearbyPlaces({ commit }, { lat, lng, radius, map }) {
    return Place.nearby({ lat, lng, radius, map }).then((response) => {
      commit("PUSH_PLACES", response);
      return response;
    });
  },
};
