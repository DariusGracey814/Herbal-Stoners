import React from "react";
import { Card } from "react-bootstrap";

import classes from "./cartItem.module.css";
import img from "../../Assets/Extracts/extract6.jpg";

function CartItem({
  title,
  imageSrc,
  breeder,
  weight,
  quantity,
  info,
  id,
  price,
}) {
  const cartTitle = `${title} | ${breeder}`;

  return (
    <Card id={id} className={classes.card}>
      <Card.Body>
        <div className={classes["wrapper-img"]}>
          <img
            src={`${imageSrc ? imageSrc : img}`}
            alt="product image"
            width="75px"
            height="75px"
          />
          <div>
            <Card.Title className={classes["card-title"]}>
              {cartTitle}
            </Card.Title>
            <Card.Text className={classes["cart-breeder"]}>{breeder}</Card.Text>
            <Card.Text className={classes["cart-thcInfo"]}>{info}</Card.Text>
            <div className={classes["cart-text--wrapper"]}>
              <Card.Text className={classes["cart-breeder"]}>
                {weight}
              </Card.Text>
              <div className={classes["btn-wrapper"]}>
                <button
                  className={classes["cart-update-btn"]}
                  type="button"
                  aria-label="remove 1 item"
                >
                  -
                </button>
                <span className={classes["quantity-price"]}>
                  &nbsp; {quantity} &nbsp;
                </span>
                <button
                  className={classes["cart-update-btn"]}
                  type="button"
                  aria-label="add 1 item"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className={classes.cartBtn} type="button">
          <i className="fa-solid fa-trash"></i>
        </button>
        <div className={classes["card-price"]}>
          <span>${price}</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
