import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/app.scss"; /*Todo: CAMBIAR ESTA LINEA DE CODIGO PARA VER COMO APLICAR A CADA PÁGINA UN ESTILO DISTINTO */
import Search from "./components/Search";
import ProductList from "./components/ProductList";
import Product from "./components/Product";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/items" component={ProductList} />
      <Route exact path="/items/:id" component={Product} />
    </Switch>
  );
}

export default App;
