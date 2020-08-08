import * as ActionTypes from "../redux/ActionTypes.js";

export const Dishes = (
  state = { isLoading: true, errMess: null, dishes: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.DISHES_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        dishes: [],
      };
    case ActionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        dishes: [],
      };
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        dishes: action.payload,
      };
    default:
      return state;
  }
};
