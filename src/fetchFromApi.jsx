import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";




const FetchFromApi = () => {
    const [ data ,setData] = useState([]);
    const [visible,setVisible]= useState(12);
    const [pageCount, setpageCount] = useState(0);
    
    
   
    const getData = async() => {
        const response = await fetch("https://api.spacexdata.com/v4/launches/past");
        setData(await response.json());
       
     
    };
    const loadMore = () =>{
        setVisible(visible+12)
    }
    useEffect(()=> {
        getData();
    
    }, [] );


    
                
                const renderData =(selectData,index) => {
                    return (
                        
                        <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3"  key = {selectData.id}>    
                            <div class="card-flyer">
                                <div class="text-box">
                                    <div class="image-box">
                                    <Link to={`"/moreinformation/${selectData.id}`}> <img src={selectData.links.patch.small} class = "rounded" alt="small" /></Link>
                                    </div>
                                    <div class="text-container">
                                        <h6><Link to="/moreinformation">{selectData.name}</Link></h6>
                                        <div class ="text-limit" >
                                      

                                        </div>
                                        
                                    </div>
                                </div>
                                <p>Flight Number:{selectData.flight_number}</p> 
                            </div>
                            
                 
                    </div>  
                    
           
                    )
                }
      return(
        <div id="cards_landscape_wrap-2">
        <div class="container">
          <div class="row">
            {data.slice(0,visible).map(renderData)}  
            </div>
        </div>
        {visible < data.length &&(
      <button className='button' onClick={loadMore}><span>Load More</span></button>
        )}

<ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
     pageCount={pageCount}
      marginPagesDisplayed={15}
      pageRangeDisplayed={20}
    //  onPageChange={handlePageClick}
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
      </div>
      )
 
    
    
}
export default FetchFromApi;