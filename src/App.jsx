import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/app.scss";
import Search from "./components/Search";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/items" component={ProductList} />
      <Route exact path="/items/:id" component={ProductDetail} />
    </Switch>
  );
}

export default App;
