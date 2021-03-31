import { Place } from "../services/place";
import { treatPhotos, treatReviews } from "./../utils/array";

export const state = {
  selectedPlace: {},
};

export const mutations = {
  SET_SELECTED_PLACE(state, selectedPlace) {
    selectedPlace.photos = treatPhotos(selectedPlace.photos);
    selectedPlace.reviews = treatReviews(selectedPlace.reviews);
    state.selectedPlace = selectedPlace;
  },
  CLEAR_SELECTED_PLACE(state) {
    state.selectedPlace = {};
  },
  PUSH_REVIEW(state, review) {
    state.selectedPlace.reviews.push(review);
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
};
