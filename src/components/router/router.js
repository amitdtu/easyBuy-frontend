import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../homepage/home";
import NavbarMenu from "../homepage/navbar";
import Footer from "../homepage/footer";
import ProductDetails from "../productDetails/productDetails";
import Cart from "../cart/cart";
import Orders from "../orders/orders";
import Wishlist from "../wishlist/wishlist";
import AdminPanel from "../adminPanel/adminPanel";

const history = createBrowserHistory();

export default function AppRouter() {
  return (
    <Router history={history}>
      <NavbarMenu />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/productDetails" exact={true} component={ProductDetails} />
        <Route path="/checkout" exact={true} component={Cart} />
        <Route path="/orders" exact={true} component={Orders} />
        <Route path="/wishlist" exact={true} component={Wishlist} />
        <Route path="/adminPanel" exact={true} component={AdminPanel} />
      </Switch>
      <Footer />
    </Router>
  );
}
