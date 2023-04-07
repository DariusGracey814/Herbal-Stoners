import React, { useState, useEffect, Suspense } from "react";
import uuid from "react-uuid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ReactPaginate from "react-paginate";

import { getExtracts } from "../../api/api";
import { LoadingSpinner3 } from "../LoadingSpinner/LoadingSpinner";
import { SinglePrices } from "../WeedPrices/WeedPrices";
import { displayImage, displayBreeder } from "./ExtractFunctionality";
import classes from "./ExtractCard.module.css";

// Images
import extract1 from "../../Assets/Extracts/extract1.jpg";
import extract2 from "../../Assets/Extracts/extract2.jpg";
import extract3 from "../../Assets/Extracts/extract3.jpg";
import extract4 from "../../Assets/Extracts/extract4.jpg";
import extract5 from "../../Assets/Extracts/extract5.jpg";
import extract6 from "../../Assets/Extracts/extract6.jpg";

import wax1 from "../../Assets/Extracts/wax1.jpg";
import wax2 from "../../Assets/Extracts/wax2.jpg";
import wax3 from "../../Assets/Extracts/wax3.jpg";
import wax4 from "../../Assets/Extracts/wax4.jpg";

function ExtractCard() {
  const [extractInfo, setExtractInfo] = useState([]);
  const [load, setLoad] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  // console.log(extractInfo);

  useEffect(() => {
    async function extracts() {
      const results = await getExtracts();
      setExtractInfo(results);
      setLoad(false);
    }
    extracts();
  }, []);

  console.log(extractInfo);

  // Pagination
  const postPerPage = 10;
  const pagesVisited = pageNumber * postPerPage;
  const pageCount = Math.ceil(extractInfo.length / postPerPage);

  // On page Change
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayExtracts = extractInfo
    .slice(pagesVisited, pagesVisited + postPerPage)
    .map((extract) => {
      // Strain Data
      const data = {
        extracts: [extract1, extract2, extract3, extract4, extract5, extract6],
        wax: [wax1, wax2, wax3, wax4],
        extractBreeders: [
          "Platinum Vape",
          "MKX",
          "Motor City Cannacarts",
          "Society C",
          "Bossy",
          "Kola Karts",
        ],
        waxBreeders: [
          "Five Star Extracts",
          "Society C",
          "Kola Farms",
          "Kola Koncentrates",
        ],
        thc: [
          "THC: 87.75%",
          "THC: 91.08%",
          "THC: 83.46%",
          "THC: 85.81%",
          "THC: 86.19%",
          "THC: 90.41%",
        ],
        cbd: ["", "CBD: 0.06%", "CBD: 0.56%", "", "", "CBD: 0.17%"],
        type: ["Hybrid", "Indica", "Hybrid", "Indica", "Sativa", "Hybrid"],
        prices: [20.0, 15.0, 30.0, 15.0, 20.0, 20.0],
      };

      const randNum6 = Math.trunc(Math.random() * 5);
      const randNum4 = Math.trunc(Math.random() * 3);

      return (
        <div className={classes["card-wrapper"]} key={extract.id}>
          <div id={extract.id} className={classes.col1}>
            {/* Image */}
            <Suspense fallback={<LoadingSpinner3 />}>
              <LazyLoadImage
                className={classes["extract-img"]}
                src={displayImage(extract, data, randNum6, randNum4)}
                alt={`${extract.name}`}
                width="110px"
                height="90px"
                effect="blur"
              ></LazyLoadImage>
            </Suspense>

            {/* information */}
            <div className={classes.info}>
              <p className={classes.breeder}>
                {displayBreeder(extract, data, randNum6, randNum4)}
              </p>
              <p className={classes.strain}>{extract.name}</p>

              <p className={classes["strain-info"]}>
                {/* type */}
                <span className={classes.type}>{data.type[randNum6]}</span>
                {/* thc level */}
                <div className={classes.levels}>
                  <span className={classes.thc}>{data.thc[randNum6]}</span>
                  {/* cbd level */}
                  <span className={classes.cdb}>{data.cbd[randNum6]}</span>
                </div>
              </p>
            </div>
          </div>

          {/* Prices per weight and add to cart */}
          <SinglePrices price={data.prices[randNum6]} />
        </div>
      );
    });

  return (
    <div className={classes.extract}>
      {load ? <LoadingSpinner3 /> : displayExtracts}
      <ReactPaginate
        previousLabel="Previous"
        previousAriaLabel="Go back"
        nextLabel="Next"
        nextAriaLabel="Go Forward"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="paginationButtons"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </div>
  );
}

export default ExtractCard;
