import * as ActionTypes from "./ActionTypes.js";

export const searchedDishes = (
  state = {
    isLoading: true,
    errmess: null,
    searched_dishes: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.SEARCHED_DISHES_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        searched_dishes: [],
      };
    case ActionTypes.SEARCHED_DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        searched_dishes: [],
      };
    case ActionTypes.ADD_SEARCHED_DISHES:
      return {
        ...state,
        isLoading: false,
        searched_dishes: action.payload,
      };
    default:
      return state;
  }
};
