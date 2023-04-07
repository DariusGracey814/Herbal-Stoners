import React from "react";
import CartItem from "./CartItem";

import classes from "./cartItem.module.css";

function CartItems({ currentCart }) {
  return (
    <div className={classes.cartContainer}>
      {currentCart.map((cartItem) => {
        return <CartItem />;
      })}
    </div>
  );
}

export default CartItems;
