import React, { useEffect, useState } from 'react'



const MoreInformation = () => {
    const [ data1 ,setData1] = useState([]);
    const [visible1,setVisible1]= useState(12);
    
    
   
    const getData1 = async() => {
        const response = await fetch("https://api.spacexdata.com/v4/launches/past");
        setData1(await response.json());
    };
    const loadMore = () =>{
        setVisible1(visible1+12)
    }
    useEffect(()=> {
        getData1();
    
    }, [] );
    
    const renderData =(selectData,index) => {
        return (
            
      

            <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3"  key = {selectData.id}>
            
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
        
        </div>  

        )
    }
return(
<div id="cards_landscape_wrap-2">
<div class="container">
<div class="row">
{data1.slice(0,visible1).map(renderData)}  
</div>
</div>
{visible1 < data1.length &&(
<button className='button' onClick={loadMore}><span>Load More</span></button>
)}
</div>
)



}
export default MoreInformation;


