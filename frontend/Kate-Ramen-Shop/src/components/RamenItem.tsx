import React from 'react';

type RamenItemProps = {
  name: string;
  image: string;
  onClick: () => void;
};

const RamenItem: React.FC<RamenItemProps> = ({ name, image, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', margin: '10px' }}>
      <img src={image} alt={name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      <p>{name}</p>
    </div>
  );
};

export default RamenItem;
