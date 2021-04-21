import React from 'react';

const Visibility = ({visibility}) => {
  return ( 
    <div className='highlight visibility'>
      <h2>Visibility</h2>
      <p className='visibility-dist'>
      {visibility.toPrecision(2)} 
       <span className='unit'>
        &nbsp;miles
      </span>
      </p>
    </div>
   );
}
 
export default Visibility;