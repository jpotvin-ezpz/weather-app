import React from 'react';

const TodaysTemp = ({weather, isCelsius}) => {
  
  let temp = weather.the_temp;
  if (isCelsius ? temp = temp.toPrecision(2)
      : temp = (temp * (9/5) + 32).toPrecision(2)
    )

  return ( 
      <h1 className='todays-temp'>
        {temp}
        <span className='todays-temp-unit-header'>
          &deg;{isCelsius ? 'C' : 'F'}
        </span>
      </h1>
   );
}
 
export default TodaysTemp;