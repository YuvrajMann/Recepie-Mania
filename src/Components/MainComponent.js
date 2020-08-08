import React from "react";
import { Component } from "react";
import Header from "./HeaderComponent";
import { connect } from "react-redux";
import { fetchDishes, fetchSearchedDishes } from "../redux/ActionCreators";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./HomeComponent";
import { cusines_types } from "../Shared/cusines";
import About from "./AboutComponent.js";
import DishDetail from "./DishDetailComponent";
import SearchComponent from "./SearchComponent";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    searched_Dishes: state.searched_Dishes,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchDishes: (query_name, number) =>
    dispatch(fetchDishes(query_name, number)),
  fetchSearchedDishes: (query_name, number) =>
    dispatch(fetchSearchedDishes(query_name, number)),
});

class Main extends Component {
  componentDidMount() {
    let n = Math.floor(Math.random() * 17);
    this.props.fetchDishes(cusines_types[n], 73);
  }
  render() {
    const DishWithId = ({ match }) => {
      console.log(this.props.searched_Dishes.searched_dishes);
      console.log({ match });
      switch (match.params.req_type) {
        case "search":
          return (
            <DishDetail
              dish={
                this.props.searched_Dishes.searched_dishes.hits.filter(
                  (dish) =>
                    dish.recipe.label === match.params.dishLabel.toString()
                )[0]
              }
              isLoading={this.props.dishes.isLoading}
              errmess={this.props.dishes.errmess}
            />
          );

        case "homeResult":
          return (
            <DishDetail
              dish={
                this.props.dishes.dishes.hits.filter(
                  (dish) =>
                    dish.recipe.label === match.params.dishLabel.toString()
                )[0]
              }
              isLoading={this.props.dishes.isLoading}
              errmess={this.props.dishes.errmess}
            />
          );
      }
    };
    return (
      <React.Fragment>
        <Header
          fetchDishes={this.props.fetchDishes}
          fetchSearchedDishes={this.props.fetchSearchedDishes}
        ></Header>
        <Switch>
          <Route
            path="/home"
            component={() => (
              <Home
                isLoading={this.props.dishes.isLoading}
                errmess={this.props.dishes.errmess}
                dishes={this.props.dishes.dishes}
              />
            )}
          />

          <Route
            path="/searchResult"
            component={() => (
              <SearchComponent
                searched_dishes={this.props.searched_Dishes}
              ></SearchComponent>
            )}
          />
          <Route path="/about" component={() => <About />} />
          <Route path="/menu/:req_type/:dishLabel" component={DishWithId} />
          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
