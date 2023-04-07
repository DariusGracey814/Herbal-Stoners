import React, { useState, useEffect, Suspense, lazy } from "react";
import { Form } from "react-bootstrap";
import Container from "../Components/UI/Container/Container";
import LoadingSpinner, {
  LoadingSpinner3,
} from "../Components/LoadingSpinner/LoadingSpinner";
import { Directory3 } from "../Components/UI/Directory/Directory";
import classes from "./Flower.module.css";

const MenuNavigation = lazy(() =>
  import("../Components/MenuNavigation/MenuNavigation")
);
const FlowerCard = lazy(() => import("../Components/FlowerCard/FlowerCard"));

function Flower() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  }, []);

  return (
    <section className={classes.flower}>
      <Directory3 main="menu" current="flower" location="/menu" />

      <Suspense fallback={<LoadingSpinner />}>
        <MenuNavigation />
      </Suspense>

      <Container>
        <div className={classes.sort}>
          <h1>All Flower</h1>
          <Form.Select
            className={classes.select}
            aria-label="Default select example"
          >
            <option>Sort By</option>
            <option value="1">Price: Low to High</option>
            <option value="2">Price: High to Low</option>
            <option value="3">Potency: Low to High</option>
            <option value="3">Potency: High to Low</option>
          </Form.Select>
        </div>

        <Suspense fallback={<LoadingSpinner3 />}>
          {/* Flower Information */}
          {load ? <LoadingSpinner /> : <FlowerCard />}
        </Suspense>
      </Container>
    </section>
  );
}

export default Flower;
