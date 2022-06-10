import React, { useEffect, useState } from 'react'



const FetchFromApi = () => {
    const [ data ,setData] = useState([]);
    const [visible,setVisible]= useState(12);
    
    
   
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
                        <a href="">
                            <div class="card-flyer">
                                <div class="text-box">
                                    <div class="image-box">
                                        <img src={selectData.links.patch.small} class = "rounded" alt="small" />
                                    </div>
                                    <div class="text-container">
                                        <h6>{selectData.name}</h6>
                                        <div class ="text-limit" >
                                        <p>{selectData.details}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
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
      </div>
      )
 
  
    
}
export default FetchFromApi;