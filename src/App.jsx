import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/app.scss"; /* CAMBIAR ESTA LINEA DE CODIGO PARA VER COMO APLICAR A CADA PÁGINA UN ESTILO DISTINTO */
import Search from "./components/Search";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/product" component={SingleProduct} />
    </Switch>
  );
}

export default App;
