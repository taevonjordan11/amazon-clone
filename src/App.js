import React, { useEffect } from "react";
import Header from "./Header.js";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";
import Payment from "./Payment";

const promise = loadStripe(
  "pk_test_51HYykCDFff3v2QcSBKm6zQQjrg31B2LnbgzXotH5DjTDiQQiKk2RVo65LjaA38ozIXr4IM6ve15mC5pFMsg9LIxz00eb6y5aZM"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // similar to an if statement for react. (blog topic)
    //will only run once when the app component loads

    auth.onAuthStateChanged((authUser) => {
      console.log("authUser", authUser);
      // the user is logged in
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user has logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
