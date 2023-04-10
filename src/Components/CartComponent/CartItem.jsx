import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
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
  const { deleteFromCart } = useContext(CartContext);

  const cartTitle = `${title} | ${breeder}`;

  const deleteHandler = (evt) => {
    const itemName =
      evt.target.parentNode.parentNode.parentNode.childNodes[0].innerText.split(
        " |"
      )[0];

    const breeder =
      evt.target.parentNode.parentNode.parentNode.childNodes[1].innerText;

    const weight =
      evt.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[0]
        .innerText;

    const price =
      evt.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[4].innerText.replace(
        "$",
        ""
      );

    const selectedItem = {
      name: itemName,
      breeder: breeder,
      weight: weight,
      price: price,
    };

    deleteFromCart(selectedItem);
  };

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
                  onClick={deleteHandler}
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

            <div className={classes["price-wrapper"]}>
              {" "}
              <span>${price}</span>
            </div>
          </div>
        </div>
        <button className={classes.cartBtn} type="button">
          <i className="fa-solid fa-trash"></i>
        </button>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
