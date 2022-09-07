import React, { Suspense, lazy } from 'react';
import { Form } from 'react-bootstrap';

import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';
import { Directory3 } from '../Components/UI/Directory/Directory';
import Container from '../Components/UI/Container/Container';
import classes from './Edibles.module.css';

// Lazy Loading Components
const MenuNavigation = lazy(() => import("../Components/MenuNavigation/MenuNavigation"));
const EdibleCard = lazy(() => import("../Components/EdibleCard/EdibleCard"));

function Edibles() {
  return (
    <section className={classes.edibles}>
        <Directory3 main="menu" location="/menu" current="edibles" />
        <Suspense fallback={<LoadingSpinner />}>
            <MenuNavigation />
        </Suspense> 

        <Container>
            <div className={classes.sort}>
                <h1>All Edibles</h1>
                <Form.Select className={classes.select} aria-label="Default select example">
                    <option>Sort By</option>
                    <option value="1">Price: Low to High</option>
                    <option value="2">Price: High to Low</option>
                    <option value="3">Potency: Low to High</option>
                    <option value="3">Potency: High to Low</option>
                </Form.Select>
            </div>

            <Suspense fallback={<LoadingSpinner />}>
                <EdibleCard />
            </Suspense>  
        </Container>
    </section>
  );
};

export default Edibles;
