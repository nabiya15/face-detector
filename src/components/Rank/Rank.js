import React from 'react';

const Rank = ({ name, entries }) => {
  const formattedName = name.charAt(0).toUpperCase()+name.substring(1);
  return (
    <div>
      <div className='white f3'>
        {`${formattedName}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;