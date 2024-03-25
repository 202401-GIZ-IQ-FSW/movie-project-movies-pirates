// import React from 'react';

// const ActorCard = ({ name, imgSrc }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <img src={imgSrc} alt={name} className="w-full h-auto" />
//       <div className="p-4">
//         <h2 className="text-lg font-semibold">{name}</h2>
//       </div>
//     </div>
//   );
// };

// export default ActorCard;

 

import React from 'react'
import sample from '../../../style/sample.css'
function ActorCard({name, imgSrc}) {
  return (

<>

 
    
    <div className='relative w-full   mx-4 mb-8 overflow-hidden   ActorCArd'>
        <img className='z-1' src={`https://image.tmdb.org/t/p/w500${imgSrc}`} alt={name}/>
        <div className='  z-1  absolute  imgOverlay '  ></div>
        <h1 className='absolute z-10  mx-5 text-white font-semibold text-lg bottom-0'> {name}</h1>
    </div>
    
   
 
 
        
        
        </>
  )
}

export default ActorCard