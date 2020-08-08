import * as ActionTypes from "./ActionTypes.js";
import { baseUrl, apiKey, appId } from "../Shared/baseUrl";

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});
export const fetchDishes = (queryName, numbrOfDishes) => (dispatch) => {
  dispatch(dishesLoading());
  const searchQuery = `${baseUrl}?q=${queryName}&app_id=${appId}&app_key=${apiKey}&from=0&to=${numbrOfDishes}&calories=591-722&health=alcohol-free`;
  return fetch(searchQuery)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesFailed(error.message)));
};

export const searchedDishesLoading = () => ({
  type: ActionTypes.SEARCHED_DISHES_LOADING,
});
export const searchedDishesFailed = (errmess) => ({
  type: ActionTypes.SEARCHED_DISHES_FAILED,
  payload: errmess,
});
export const addSearchedDishes = (dishes) => ({
  type: ActionTypes.ADD_SEARCHED_DISHES,
  payload: dishes,
});
export const fetchSearchedDishes = (queryName, numbrOfDishes) => (dispatch) => {
  dispatch(searchedDishesLoading());
  const searchQuery = `${baseUrl}?q=${queryName}&app_id=${appId}&app_key=${apiKey}&from=0&to=${numbrOfDishes}&calories=591-722&health=alcohol-free`;
  return fetch(searchQuery)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addSearchedDishes(dishes)))
    .catch((error) => dispatch(searchedDishesFailed(error.message)));
};
