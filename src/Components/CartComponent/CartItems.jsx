import React from "react";
import CartItem from "./CartItem";

import classes from "./cartItem.module.css";

function CartItems({ currentCart }) {
  const cart = JSON.parse(sessionStorage.getItem("userCart"));

  return (
    <div className={classes.cartContainer}>
      {cart.cart.map((cartItem) => {
        return (
          <CartItem
            key={cartItem.id}
            id={cartItem.id}
            title={cartItem.name}
            breeder={cartItem.breeder}
            imageSrc={cartItem.img}
            weight={cartItem.weight}
            quantity={cartItem.quantity}
            info={cartItem.thcLevel}
            price={cartItem.price}
          />
        );
      })}
    </div>
  );
}

export default CartItems;
