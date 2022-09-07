import React, { useState, useEffect, Suspense, lazy } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import uuid from 'react-uuid';

import { getWeedStrains } from '../../Utils/api';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { LoadingSpinner3 } from '../LoadingSpinner/LoadingSpinner';
import ReactPaginate from 'react-paginate';
import classes from './FlowerCard.module.css';

// Images
import weed1 from '../../Assets/weedCard.jpg';
import weed2 from '../../Assets/weedCard2.jpg';
import weed3 from '../../Assets/weedCard3.jpg';
import weed4 from '../../Assets/weedCard4.jpg';
import weed5 from '../../Assets/weedCard5.jpg';
import weed6 from '../../Assets/weedCard6.jpg';

const WeedPrices = lazy(() => import('../../Components/WeedPrices/WeedPrices'));

function FlowerCard() {
  const [load, setLoad] = useState(true);
  const [weedInfo, setWeedInfo] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    async function weedData() {
      try{
        const results = await getWeedStrains();
        setWeedInfo(results);
        setLoad(false);
      } catch (err) {
        return err.message;
      }
    }
    weedData();
  }, []); 

  const postPerPage = 10;
  const pagesVisited = pageNumber * postPerPage;
  const pageCount = Math.ceil(weedInfo.length / postPerPage);
  // Update current page number as it changes
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  }

  const displayStrains = weedInfo.slice(pagesVisited, pagesVisited + postPerPage).map((strain) => {
    // Strain Data
    const data = {
      img: [weed1, weed2, weed3, weed4, weed5, weed6],
      breeders: ['Pro Gro', 'Society C', 'Weedys', 'Hytek', 'Unlyfted Cannabis', 'Green Labs'],
      thc: ['THC: 26.75%', 'THC: 24.08%', 'THC: 28.46%', 'THC: 25.81', 'THC: 30.19%', 'THC: 26.41%'],
      cbd: ["", 'CBD: 0.06%', 'CBD: 0.56%', 'CBD: 0.07%', "", "CBD: 0.17%"],
      type: ['Hybrid', 'Indica', 'Hybrid', 'Indica', 'Sativa', 'Hybrid']
    }

    const randomNumber = Math.trunc(Math.random() * 5);

    return (
      <div className={classes['card-wrapper']} key={uuid()}>
                        <div className={classes.col1}>
                            {/* Image */}
                            <Suspense fallback={<LoadingSpinner3 />}>
                                <LazyLoadImage className={classes['flower-img']}
                                src={data.img[randomNumber]}
                                alt={`${strain.name} weed strain`}
                                width="120px"
                                height="100px"
                                effect="blur"
                                ></LazyLoadImage>
                            </Suspense>


                            {/* information */}
                            <div className={classes.info}>
                                <p className={classes.breeder}>{data.breeders[randomNumber]}</p>
                                <p className={classes.strain}>{strain.name}</p>
                                
                                <p className={classes['strain-info']}>
                                    {/* type */}
                                    <span className={classes.type}>{data.type[randomNumber]}</span>
                                    {/* thc level */}
                                   <div className={classes.levels}>
                                        <span className={classes.thc}>{data.thc[randomNumber]}</span>
                                        {/* cbd level */}
                                        <span className={classes.cdb}>{data.cbd[randomNumber]}</span>
                                   </div>
                                </p>
                            </div>
                        </div>

                        {/* Prices per weight and add to cart */}
                        <Suspense fallback={<LoadingSpinner3 />}>
                            <WeedPrices />
                        </Suspense>
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
        previousLinkClassName='previousBtn'
        nextLinkClassName='nextBtn'
        disabledClassName='paginationDisabled'
        activeClassName='paginationActive'
        />
      </div>
    </>
  )
}

export default FlowerCard;