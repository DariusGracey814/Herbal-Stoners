import React, { useEffect, useRef } from 'react';

import classes from './WeedPrices.module.css';

export function SinglePrices({ price }) {
    return(
        <button className={`${classes['extract-btn']}`}>
            <p className={classes.weight2}>1g - </p>
            <p className={classes.price2}>${price}</p>
            <i className={`fa-solid fa-circle-plus ${classes['price-icon']}`}></i>
        </button>
    );
}

function WeedPrices() {
  return (
    <div className={classes.prices}>
        <div className={classes['prices-wrapper']}>
            <button className={`safari-gap--fix1r ${classes['prices-btn']}`}>
                <p className={classes.weight}>1g</p>
                <p className={classes.price}>$10.00</p>
                <i className={`fa-solid fa-circle-plus ${classes['price-icon']}`}></i>
            </button>

            <button className={`safari-gap--fix1r ${classes['prices-btn']}`}>
                <p className={classes.weight}>2g</p>
                <p className={classes.price}>$20.00</p>
                <i className={`fa-solid fa-circle-plus ${classes['price-icon']}`}></i>
            </button>

            <button className={`${classes['prices-btn']}`}>
                <p className={classes.weight}>3.5g</p>
                <p className={classes.price}>$30.00</p>
                <i className={`fa-solid fa-circle-plus ${classes['price-icon']}`}></i>
            </button>

            <button className={`${classes['prices-btn']}`}>
                <p className={classes.weight}>7g</p>
                <p className={classes.price}>$65.00</p>
                <i className={`fa-solid fa-circle-plus ${classes['price-icon']}`}></i>
            </button>

            <button className={`${classes['prices-btn']}`}>
                <p className={classes.weight}>14g</p>
                <p className={classes.price}>$140.00</p>
                <i className={`fa-solid fa-circle-plus ${classes['price-icon']}`}></i>
            </button>

            <button className={`${classes['prices-btn']}`}>
                <p className={classes.weight}>28g</p>
                <p className={classes.price}>$280.00</p>
                <i className={`fa-solid fa-circle-plus ${classes['price-icon']}`}></i>
            </button>
        </div>
    </div>
  );
};

export default WeedPrices;
