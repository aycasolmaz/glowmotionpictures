import React from 'react';

const directors = [
  { name: 'Director One', image: 'path_to_image_one.jpg' },
  { name: 'Director Two', image: 'path_to_image_two.jpg' },
  // ... more directors
];

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '16px',
  padding: '16px',
};

const boxStyle = {
  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  opacity: 0,
  transition: 'opacity 0.3s ease',
};

const nameStyle = {
  display: 'block',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'text-decoration 0.3s ease',
};

const Personnel = () => {
  return (
    <div style={gridStyle}>
      {directors.map((director, index) => (
        <div style={boxStyle} key={index}
             onMouseOver={(e) => {
               e.currentTarget.children[0].style.opacity = 1;
               e.currentTarget.children[1].style.textDecoration = 'underline';
             }}
             onMouseOut={(e) => {
               e.currentTarget.children[0].style.opacity = 0;
               e.currentTarget.children[1].style.textDecoration = 'none';
             }}>
          <img src={director.image} alt={director.name} style={imageStyle} />
          <span style={nameStyle}>{director.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Personnel;
