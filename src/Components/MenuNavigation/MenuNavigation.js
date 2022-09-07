import React, { useState, Navigate } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Container from '../UI/Container/Container';
import classes from './MenuNavigation.module.css';

function MenuNavigation() {
  const [menuActive, setMenuActive] = useState(false);
 
  const toggleMenuHandler = () => {
    setMenuActive((prevState) => !prevState);
  }

  return (
    <div className={classes['menu-nav']}>
       <Container>
          <div className={classes['menu-content']}>

            <Button className={classes['menu-btn']} aria-controls="" aria-expanded="false" aria-label="herbal stoners categories menu" onClick={toggleMenuHandler}>
                {!menuActive ? 
                <i className={`fa-solid fa-bars ${classes['menu-icon']}`}></i> : 
                <i className={`fa-solid fa-xmark ${classes['menu-icon']}`}></i>
                }
            </Button>


            <ul className={`${classes['menu-list']} ${!menuActive ? null : classes.show}`}>
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
                <div className={classes['menu-title']}>
                    <p className={classes['menu-text']}>Menu</p>
                    <p className={classes['menu-rec']}>Recreational <span className={classes.dash}></span></p>
                </div>

                <div className={classes['menu-cartLog']}>
                    <i className={`fa-solid fa-circle-user ${classes.icon} ${classes['logIn-icon']}`}></i>

                    <div className={classes['cartLog-wrapper']}>
                    <i className={`fa-solid fa-cart-shopping ${classes.icon}`}></i>
                    <span>0</span>
                    </div>
                </div>
            </div>
          </div>
       </Container>
    </div>  
  );
};

export default MenuNavigation;
