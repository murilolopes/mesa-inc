/* eslint-disable no-empty-pattern */
import { Place } from "../services/place";

export const state = {};

export const mutations = {};

export const getters = {};

export const actions = {
  fetchPlaceDetails({}, { place_id }) {
    return Place.details(place_id);
  },
};
