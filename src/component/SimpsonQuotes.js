import React from 'react';

function SimpsonQuote({ quote }) {
  return (
    <div className='SimpsonQuote'>
      <p>Name: {quote.character} </p>
      <p>Quote: {quote.quote} </p>
      <img src={quote.image} alt={quote.character} />
    </div>
  );
}

export default SimpsonQuote;
