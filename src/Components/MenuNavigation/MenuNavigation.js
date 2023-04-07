import React, { useState, useContext } from "react";
import { CartContext } from "../../context/cart-context";

import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import Container from "../UI/Container/Container";

import classes from "./MenuNavigation.module.css";

function MenuNavigation() {
  const [menuActive, setMenuActive] = useState(false);
  const [show, setShow] = useState(false);

  const { itemCounter } = useContext(CartContext);

  const toggleMenuHandler = () => {
    setMenuActive((prevState) => !prevState);
  };

  // Hide cart Modal
  const handleClose = () => {
    setShow(false);
  };
  // Show cart Model
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className={classes["menu-nav"]}>
      <Container>
        <div className={classes["menu-content"]}>
          <Button
            className={classes["menu-btn"]}
            aria-controls=""
            aria-expanded="false"
            aria-label="herbal stoners categories menu"
            onClick={toggleMenuHandler}
          >
            {!menuActive ? (
              <i className={`fa-solid fa-bars ${classes["menu-icon"]}`}></i>
            ) : (
              <i className={`fa-solid fa-xmark ${classes["menu-icon"]}`}></i>
            )}
          </Button>

          <ul
            className={`${classes["menu-list"]} ${
              !menuActive ? null : classes.show
            }`}
          >
            <li>
              <Link to="/menu/flower">Flower</Link>
            </li>

            <li>
              <Link to="/menu/extracts">Extracts</Link>
            </li>

            <li>
              <Link to="/menu/edibles">Edibles</Link>
            </li>
          </ul>

          <div className={classes.col2}>
            <div className={classes["menu-title"]}>
              <p className={classes["menu-text"]}>Menu</p>
              <p className={classes["menu-rec"]}>
                Recreational <span className={classes.dash}></span>
              </p>
            </div>

            <div className={classes["menu-cartLog"]}>
              <i
                className={`fa-solid fa-circle-user ${classes.icon} ${classes["logIn-icon"]}`}
              ></i>

              <button
                className={classes["cartLog-wrapper"]}
                onClick={handleShow}
              >
                <i className={`fa-solid fa-cart-shopping ${classes.icon}`}></i>
                <span>{itemCounter}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cart Modal */}
        <Modal show={show} onHide={handleClose}>
          {/* Modal Header */}
          <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>

          {/* Modal Body */}
          <Modal.Body>
            <h1>This is the modal body</h1>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default MenuNavigation;
