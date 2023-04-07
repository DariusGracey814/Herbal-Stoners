import React from "react";
import { Button, Card } from "react-bootstrap";

import classes from "./cartItem.module.css";

function CartItem({ title }) {
  return (
    <Card className={classes.card}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Cart Item Text</Card.Text>
        <button className={classes.cartBtn} type="button">
          <i className="fa-solid fa-trash"></i> Remove
        </button>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
