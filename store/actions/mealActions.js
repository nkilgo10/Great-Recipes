export const ADD_FAVORITE = "ADD_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const addFavorite = (id) => {
  return {
    type: ADD_FAVORITE,
    mealId: id,
  };
};

export const setFilters = (filters) => {
  return {
    type: SET_FILTERS,
    filters,
  };
};
