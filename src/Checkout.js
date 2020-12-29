import React from "react";
import "./Checkout.css";
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/amazoncards/desktop-CBCC-unloggedin-header.png"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Amazon Cart</h2>
        </div>
      </div>
      <div className="checkout__right">
          <Subtotal />
        <h2>Sub total will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
