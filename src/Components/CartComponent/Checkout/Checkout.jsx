import React, { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import Container from "../../UI/Container/Container";
import CartItems from "../CartItems";
import classes from "./Checkout.module.css";

function Checkout() {
  const { getCartTotal } = useContext(CartContext);
  let tax = getCartTotal() * 0.1025;
  let orderTotal = tax + getCartTotal();

  return (
    <section className={classes["checkout-section"]}>
      <Container>
        <div className={classes["checkout-wrapper"]}>
          <div className={classes["cartItems-wrapper"]}>
            <CartItems />
          </div>
          <div className={classes["checkout-order"]}>
            {/* Row 1 */}
            <div className={classes["info-row1"]}>
              <h1>Herbal Stoners</h1>
              <p>Est. pickup | Next service opportunity unknown</p>
            </div>

            <div className={classes["info-divider"]}></div>

            {/* Row 2 */}
            <div className={classes["info-row2"]}>
              <p>
                Subtotal: <span>${getCartTotal()}</span>
              </p>
              <p>
                Taxes: <span>${tax.toFixed(2)}</span>
              </p>
              <a href="#" title="add promo code">
                Add a promo code
              </a>
            </div>

            <div className={classes["info-divider"]}></div>

            {/* Row 3 */}
            <div className={classes["info-row3"]}>
              <p>
                Order Total: <span>${orderTotal.toFixed(2)}</span>
              </p>

              <button className={classes["orderSubmit-btn"]}>
                Place Order
              </button>

              <p className={classes["info-terms"]}>
                By placing an order you agree to our Terms and to receive
                automated text messages for order updates.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Checkout;
