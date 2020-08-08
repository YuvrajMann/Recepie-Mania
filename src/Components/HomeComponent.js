import React, { Component } from "react";
import { Loading } from "./LoadingComponent";
import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";
import { Link } from "react-router-dom";

function RenderCard(recipe) {
  return (
    <div className="col-xl-4 col-md-4 col-sm-12 col-xs-12 mb-2">
      <Card inverse>
        <Link to={`/menu/homeResult/${recipe.recipe.label}`}>
          <CardImg width="100%" bottom src={recipe.recipe.image} alt="x" />
          <CardImgOverlay>
            <CardTitle>{recipe.recipe.label}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    </div>
  );
}
const Home = (props) => {
  if (props.isLoading) {
    return <Loading></Loading>;
  } else if (props.errmess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 m-2">
            <h2>{props.errmess}</h2>
          </div>
        </div>
      </div>
    );
  } else {
    const menu = props.dishes.hits.map((dish, index) => {
      return <RenderCard recipe={dish.recipe} key={index}></RenderCard>;
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
};

export default Home;
