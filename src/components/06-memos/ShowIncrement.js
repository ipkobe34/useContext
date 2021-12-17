import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {

  console.log('llamando ShowIncrement :) ')
  
  return (
    <button
        className="btn btn-primary"
        // onClick={ increment }
        onClick={ () => {
          increment(5);
        } }
    >
      +
    </button>
  )

})
