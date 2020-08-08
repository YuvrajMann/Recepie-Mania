import { createStore, combineReducers, applyMiddleware } from "redux";
import { Dishes } from "./dishes.js";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { searchedDishes } from "./searchedDishes.js";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      searched_Dishes: searchedDishes,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
