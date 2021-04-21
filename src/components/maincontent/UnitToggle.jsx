/* eslint-disable no-lone-blocks */
import React from 'react';

const UnitToggle = ({handleToggleUnits}) => {
  return ( 
        <div className="button r" id="button-1">
          <input 
            onClick={() => handleToggleUnits()}
            type="checkbox" 
            className="checkbox" />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
   );
}
 
export default UnitToggle;

// OG Toggle
/* <label onClick={() => handleToggleUnits()}>
  <input type='checkbox' />
  <span className='units-toggler'></span>
</label> */