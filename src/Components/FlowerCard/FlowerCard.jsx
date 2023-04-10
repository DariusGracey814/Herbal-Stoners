import React, { useState, lazy } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import strainData from "../../Utils/strains";
import ReactPaginate from "react-paginate";
import classes from "./FlowerCard.module.css";

const WeedPrices = lazy(() => import("../WeedPrices/WeedPrices"));

function FlowerCard() {
  const [weedInfo, setWeedInfo] = useState(strainData);
  const [pageNumber, setPageNumber] = useState(0);

  const postPerPage = 10;
  const pagesVisited = pageNumber * postPerPage;
  const pageCount = Math.ceil(weedInfo.length / postPerPage);
  // Update current page number as it changes
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  // Creating Pagination of all strains
  const displayStrains = weedInfo
    .slice(pagesVisited, pagesVisited + postPerPage)
    .map((strain) => {
      return (
        <div className={classes["card-wrapper"]} key={strain.id}>
          <div id={strain.id} className={classes.col1}>
            {/* Image */}
            <LazyLoadImage
              className={classes["flower-img"]}
              src={strain.image}
              alt={`${strain.name} weed strain`}
              width="120px"
              height="100px"
            ></LazyLoadImage>

            {/* information */}
            <div className={classes.info}>
              {/* Product id opacity */}
              <p className={classes.breeder}>{strain.breeder}</p>
              <p className={classes.strain}>{strain.name}</p>

              <p className={classes["strain-info"]}>
                {/* type */}
                <span className={classes.type}>{strain.type} </span>
                {/* thc level */}
                <p className={classes.levels}>
                  <span className={classes.thc}>{strain.thc} </span>
                  {/* cbd level */}
                  <span className={classes.cdb}>{strain.cbd}</span>
                </p>
              </p>
            </div>
          </div>

          {/* Prices per weight and add to cart */}
          <WeedPrices />
        </div>
      );
    });

  return (
    <>
      <div className={classes.card}>
        {displayStrains}

        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          onPageChange={pageChange}
          containerClassName="paginationButtons"
          previousLinkClassName="previousBtn"
          nextLinkClassName="nextBtn"
          disabledClassName="paginationDisabled"
          activeClassName="paginationActive"
        />
      </div>
    </>
  );
}

export default FlowerCard;
