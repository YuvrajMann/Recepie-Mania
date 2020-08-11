import React from "react";
import { cusines_types } from "../Shared/cusines.js";
import { Link } from "react-router-dom";
function handelSearch(recepieName, fetchSearchedDishes) {
  fetchSearchedDishes(recepieName, 100);
}
const RenderCategories = (props) => {
  return cusines_types.map((category) => {
    return (
      <Link to="/searchResult" className="nav-link">
        <div onClick={() => handelSearch(category, props.fetchSearchedDishes)}>
          <span id="category_type">{category}</span>
        </div>
      </Link>
    );
  });
};
function Recepies(props) {
  return (
    <div className="categories">
      <h1>
        <span>Categories</span>
      </h1>
      <div className="categories-type">
        <RenderCategories
          fetchSearchedDishes={props.fetchSearchedDishes}
        ></RenderCategories>
      </div>
    </div>
  );
}

export default Recepies;
