/* eslint-disable no-empty-pattern */
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
};

export const getters = {};

export const actions = {
  fetchPlaceDetails({ commit }, { place_id }) {
    return Place.details(place_id).then((response) => {
      commit("SET_SELECTED_PLACE", response);
    });
  },
};
