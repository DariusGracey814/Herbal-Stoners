

const postPerPage = 10;
const pagesVisited = pageNumber * postPerPage; /* 0 * 10 */
let sum = pagesVisited + postPerPage;

// Strain Data
const data = {
    img: [weed1, weed2, weed3, weed4, weed5, weed6],
    breeders: ['Pro Gro', 'Society C', 'Weedys', 'Hytek', 'Unlyfted Cannabis', 'Green Labs'],
    thc: ['THC: 26.75%', 'THC: 24.08%', 'THC: 28.46%', 'THC: 25.81', 'THC: 30.19%', 'THC: 26.41%'],
    cbd: ["", 'CBD: 0.06%', 'CBD: 0.56%', 'CBD: 0.07%', "", "CBD: 0.17%"],
    type: ['Hybrid', 'Indica', 'Hybrid', 'Indica', 'Sativa', 'Hybrid']
}

// Strain Card Function
const currentPost = weedInfo
.slice(pagesVisited, sum)
.map((strain) => {
    return <div className={classes['card-wrapper']} key={uuid()}>
                        <div className={classes.col1}>
                            {/* Image */}
                            <Suspense fallback={<LoadingSpinner3 />}>
                                <LazyLoadImage className={classes['flower-img']}
                                src={data.img[Math.trunc(Math.random() * 5)]}
                                alt={`${strain.name} weed strain`}
                                width="120px"
                                height="100px"
                                effect="blur"
                                ></LazyLoadImage>
                            </Suspense>


                            {/* information */}
                            <div className={classes.info}>
                                <p className={classes.breeder}>{data.breeders[Math.trunc(Math.random() * 5)]}</p>
                                <p className={classes.strain}>{strain.name}</p>
                                
                                <p className={classes['strain-info']}>
                                    {/* type */}
                                    <span className={classes.type}>{data.type[Math.trunc(Math.random() * 5)]}</span>
                                    {/* thc level */}
                                   <div className={classes.levels}>
                                        <span className={classes.thc}>{data.thc[Math.trunc(Math.random() * 5)]}</span>
                                        {/* cbd level */}
                                        <span className={classes.cdb}>{data.cbd[Math.trunc(Math.random() * 5)]}</span>
                                   </div>
                                </p>
                            </div>
                        </div>

                        {/* Prices per weight and add to cart */}
                        <Suspense fallback={<LoadingSpinner3 />}>
                            <WeedPrices />
                        </Suspense>
                    </div>
});



const [users, setUsers] = useState(jsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  // Amount we want displayed per page
  const userPerPage = 10;
  // pages visited so far
  const pagesVisited = pageNumber * userPerPage;
  // page count (length of original data / post per page)
  const pageCount = Math.ceil(users.length / userPerPage);
  // on page change onPageChange returns selected obj which we can set to the current page number
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }


  const displayUsers = users
  .slice(pagesVisited, pagesVisited + userPerPage)
  .map((user) => {
    return (
      <div className={classes.user}>
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3>
        <h3>{user.email}</h3>
      </div>
    );
  })


  <ReactPaginate
  previousLabel="Previous"
  nextLabel="Next"
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName="paginationButtons"
  previousLinkClassName="previousBtn"
  nextLinkClassName="nextBtn"
  disabledClassName='paginationDisabled'
  activeClassName='paginationActive'
/>