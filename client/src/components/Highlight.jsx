import React from 'react';

const Highlight = ({ text, highlight }) => {
    console.log('Highlight for '+highlight)
  if (typeof highlight == 'undefined') {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} style={{ backgroundColor: 'yellow' }}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default Highlight;
