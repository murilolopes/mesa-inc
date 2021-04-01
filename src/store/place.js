import { Place } from "../services/place";
import { treatPhotos, treatReviews } from "./../utils/array";

export const state = {
  selectedPlace: {},
  places: [],
};

export const mutations = {
  SET_SELECTED_PLACE(state, selectedPlace) {
    selectedPlace.photos = treatPhotos(selectedPlace.photos);
    selectedPlace.reviews = treatReviews(selectedPlace.reviews);
    selectedPlace.bookmark = false;
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
  PUSH_BOOKMARK(state) {
    state.selectedPlace.bookmark = !state.selectedPlace.bookmark;
  },
  PUSH_PLACES(state, places) {
    state.places = places;
  },
};

export const getters = {};

export const actions = {
  fetchPlaceDetails({ commit }, { place_id }) {
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
      commit("PUSH_BOOKMARK");
    });
  },
  nearbyPlaces({ commit }, { lat, lng, radius, map }) {
    return Place.nearby({ lat, lng, radius, map }).then((response) => {
      commit("PUSH_PLACES", response);
    });
  },
};
