import React, { useState, useEffect, Suspense } from 'react';
import ReactPaginate from 'react-paginate';
import uuid from 'react-uuid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { getEdibles } from '../../Utils/api';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { LoadingSpinner3 } from '../LoadingSpinner/LoadingSpinner';
import { SinglePrices } from '../WeedPrices/WeedPrices';
import classes from './EdibleCard.module.css';

function EdibleCard() {
  const [edibleInfo, setEdibleInfo] = useState([]);
  const [load, setLoad] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  // on page change
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  console.log(edibleInfo);
  
  useEffect(() => {
    async function fetchData() {
        try {
            const results = await getEdibles();
            setEdibleInfo(results);
            setLoad(false);
        } catch (err) {
            return err.message;
        }
    }

    fetchData();
  }, []);


  const postPerPage = 10;
  const pagesVisited = pageNumber * postPerPage;
  const pageCount = Math.ceil(edibleInfo.length / postPerPage);


  const displayEdibles = edibleInfo
  .slice(pagesVisited, pagesVisited + postPerPage)
  .map((edible) => {
    const data = {
       prices: [8.00, 12.00, 8.00, 10.00, 8.00, 9.00],
       breeders: ["Chewii", "Ubaked", "MKX", "Motor City Cannabites", "Rise", "Covert Cups"]
    };

    const randNum6 = Math.trunc(Math.random() * 5);


    return (
        <div className={classes['card-wrapper']} key={uuid()}>
            <div className={classes.col1}>
                {/* Image */}
                <Suspense fallback={<LoadingSpinner3 />}>
                    <LazyLoadImage className={classes['edible-img']}
                    src={edible.image}
                    alt={`${edible.name}`}
                    width="100px"
                    height="85px"
                    effect="blur"
                    ></LazyLoadImage>
                </Suspense>


                {/* information */}
                <div className={classes.info}>
                    <p className={classes.breeder}>{data.breeders[randNum6]}</p>
                    <p className={classes.strain}>{edible.name}</p>
                    
                    <p className={classes['strain-info']}>
                        {/* type */}
                        <span className={classes.type}>Hybrid</span>
                        {/* thc level */}
                      <div className={classes.levels}>
                            <span className={classes.thc}>{edible.thc}</span>
                            {/* cbd level */}
                            <span className={classes.cdb}>{edible.cdb}</span>
                      </div>
                    </p>
                </div>
            </div>

            {/* Prices per weight and add to cart */}
            <SinglePrices price={data.prices[randNum6]} />
        </div>
    );
  })


  return (
    <div className={classes.edible}>
        {load ? <LoadingSpinner3 /> : displayEdibles}

        <ReactPaginate 
        previousLabel="Previous"
        previousAriaLabel='Go Back'
        nextLabel="Next"
        nextAriaLabel="Go Forward"
        pageCount={pageCount}
        onPageChange={pageChange}
        containerClassName="paginationButtons"
        disabledClassName='paginationDisabled'
        activeClassName='paginationActive'
        />
    </div>
  );
};

export default EdibleCard;
