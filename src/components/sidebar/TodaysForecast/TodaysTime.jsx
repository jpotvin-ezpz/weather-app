import React from 'react';

const TodaysTime = ({time}) => {
  let todaysDateTime = new Date(time)
  
  function getDayOfWeek(date) {
    let dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null 
    : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
  }
  const todaysDay = getDayOfWeek(todaysDateTime);
  const todaysDate = todaysDateTime.getDate();
  const todaysMonth = todaysDateTime.toLocaleString('default', {month: 'short'});
  const today = `${todaysDay}, ${todaysDate} ${todaysMonth}`;

  return ( 
    <div className='todays-time'>
      Today 
      <span className='middot'>
        &middot;
      </span> 
      {today}
    </div>
   );
}
 
export default TodaysTime;