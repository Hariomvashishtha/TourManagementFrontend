import React from 'react';
import Masonry ,{ResponsiveMasonry} from 'react-responsive-masonry';
import gallaryImages from './gallaryImages';

const MasonaryImageGallary = () => {
  return (
       <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter="1rem">
            {
                gallaryImages.map((item,index)=>{
                    return(
                       
                            <img src={item} alt="" className='masonary__img' style={{width:"100%" , display:"block",borderRadius:"10px"}} key={index}/>
                        
                    )
                })
            }

        </Masonry>

       </ResponsiveMasonry>
  )
}

export default MasonaryImageGallary