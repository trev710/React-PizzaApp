//Usual imports

import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


//route
import { BrowserRouter, Route, Switch } from 'react-router-dom';



//Importing the components
import PizzaBuilder from './PizzaBuilder/PizzaBuilder.js';
import IngredientList from './Ingredients/IngredientList.js';
import Layout from './Layout/Layout.js';
import CheckoutPage from './Ordering/CheckoutPage.js';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <div className="appSpacer"></div>
            <Switch>
              <Route path="/" exact component={PizzaBuilder} />
              <Route path="/ingredients" component={IngredientList} />
              <Route path="/checkout" component={CheckoutPage} />
              <Route path="/" component={PizzaBuilder} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
