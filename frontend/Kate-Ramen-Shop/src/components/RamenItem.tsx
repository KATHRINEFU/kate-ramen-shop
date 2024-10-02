import React from 'react';

type RamenItemProps = {
  name: string;
  image: string;
  onClick: () => void;
};

const RamenItem: React.FC<RamenItemProps> = ({ name, image, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', margin: '10px', padding: '20px', textAlign: 'center', width: '120px' }}>
      <img src={image} alt={name} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
      <p>{name}</p>
    </div>
  );
};

export default RamenItem;
