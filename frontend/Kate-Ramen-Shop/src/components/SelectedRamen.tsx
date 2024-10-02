import React from 'react';

type SelectedRamenProps = {
  name: string;
  image: string;
};

const SelectedRamen: React.FC<SelectedRamenProps> = ({ name, image }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Selected Ramen: {name}</h2>
      <img src={image} alt={name} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
    </div>
  );
};

export default SelectedRamen;
