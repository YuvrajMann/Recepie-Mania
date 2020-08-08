import React from "react";
import { Loading } from "./LoadingComponent";
import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";
import { Link } from "react-router-dom";

function RenderCard(recipe) {
  return (
    <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12 mb-2">
      <Card inverse>
        <Link to={`/menu/search/${recipe.recipe.label}`}>
          <CardImg width="100%" bottom src={recipe.recipe.image} alt="x" />
          <CardImgOverlay>
            <CardTitle>{recipe.recipe.label}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    </div>
  );
}
const SearchComponent = (props) => {
  if (props.searched_dishes.isLoading) {
    return <Loading></Loading>;
  } else if (props.searched_dishes.errmess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 m-2">
            <h2>{props.searched_dishes.errmess}</h2>
          </div>
        </div>
      </div>
    );
  } else {
    const menu = props.searched_dishes.searched_dishes.hits.map(
      (dish, index) => {
        return <RenderCard recipe={dish.recipe} key={index}></RenderCard>;
      }
    );
    console.log(props);
    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
};

export default SearchComponent;
