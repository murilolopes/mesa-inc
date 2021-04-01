export const state = {
  placesViewMode: "list",
};

export const mutations = {
  SET_PLACES_VIEW_MODE(state, mode) {
    state.placesViewMode = mode;
  },
};

export const getters = {
  listMode(state) {
    return state.placesViewMode == "list";
  },
  mapMode(state) {
    return state.placesViewMode == "map";
  },
};

export const actions = {
  setPlacesViewMode({ commit }, mode) {
    commit("SET_PLACES_VIEW_MODE", mode);
  },
};
