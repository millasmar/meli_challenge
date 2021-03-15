/* eslint react/prop-types: 0 */
import React from "react";
import { Link } from "react-router-dom";
import shippingLogo from "../images/ic_shipping.png";

export const ProductItem = ({ item }) => {
  return (
    <div key={item.id} className="product">
      <div className="items">
        <Link className="product-img" to={`/items/${item.id}`}>
          <img src={item.picture} alt="imágen de producto" />
        </Link>
        <div className="text">
          <span id="price">${item.price.amount}</span>
          {item.freeShipping ? (
            <img src={shippingLogo} alt="logo de envío" />
          ) : null}
          <p>{item.title}</p>
        </div>
        <p className="province">Lorem, ipsum.</p>
      </div>
    </div>
  );
};
