import React, { useEffect, useState } from 'react'
import ReactPaginate from "react-paginate";
const FetchFromApi = () => {
    const [ data ,setData] = useState([])
    
    
   
    const getData = async(currentPage) => {
        const response = await fetch("https://api.spacexdata.com/v4/launches/past?_page=${currentPage}&_limit=12");
        setData(await response.json());
       
     
    };
    useEffect(()=> {
        getData();
    
    }, [] );

    console.log(data);
    const handlePageClick = (dat) =>{
        console.log(dat.selected);
    }
    return(
  <>
         <h1 className="text-muted">SpaceX Past Launches </h1>
         <div className="container-fluid mt-5">
          <div className="row text-center">
            {
                data.map((selectData) =>{
                    return(
                        <div className="col-10 col-md-4 mt-5 " key = {selectData.id}>
                        <div className="card p-2" >
                            <div className="d-flex align-items-center">
                            <div className="image"><img src = {selectData.links.patch.large} class="rounded" width="155"/></div>
                              <div className="m-3 w-100">
                                  <h4 className="mb-0 mt-0 text-left">{selectData.name}</h4> 
                                  <span className=" ">{selectData.details}</span> 
                                  
                                  <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white status">
                                      <div className="d-flex flex-column"><span className="Flight number">{selectData.flight_number}</span>Flight No.</div> 
                                      {/* <div className="d-flex flex-column"><span className="followers">{selectData.success}</span>Success/failure</div> 
                                      <div className="d-flex flex-column"><span className="ratingd">Ratings</span>4.5</div>  */}
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div> 
                    )
                }
                )
            }                                      
        </div>  
       
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
  </>
  
    )
}
export default FetchFromApi;