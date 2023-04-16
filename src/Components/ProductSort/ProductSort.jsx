import React, { useContext } from "react";
import { SortContext } from "../../context/sort-context";
import { Form } from "react-bootstrap";

function ProductSort(props) {
  const { setSortProducts } = useContext(SortContext);

  const sortHandler = (evt) => {
    const sortPreference = evt.target.value;

    if (
      sortPreference.toLowerCase() === "no sort" ||
      sortPreference.toLowerCase() === "sort by"
    ) {
      setSortProducts(false);
    } else {
      setSortProducts(true);
    }
  };

  return (
    <Form.Select
      className={props.class}
      aria-label="Default select example"
      onClick={sortHandler}
    >
      <option>Sort By</option>
      <option value="No sort">No Sort</option>
      <option value="Name: Product Name">Product Name</option>
    </Form.Select>
  );
}

export default ProductSort;
