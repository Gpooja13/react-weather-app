import React from 'react';

function Detail({detail,img,det,unit}) {
  return (
  <>
    <img className='detail-pic' src={img} alt={detail}/>
    <div className='margin font'>{det} {unit}</div>
    <div><p className='font'>{detail}</p></div>
</>
  );
}

export default Detail;