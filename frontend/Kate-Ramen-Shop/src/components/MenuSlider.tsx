import React, { useState } from 'react';
import RamenItem from './RamenItem';

import ramen1 from '../assets/ramen1.png';
import ramen2 from '../assets/ramen2.png';
import ramen3 from '../assets/ramen3.png';
import ramen4 from '../assets/ramen4.png';
import ramen5 from '../assets/ramen5.png';
import ramen6 from '../assets/ramen6.png';
import ramen7 from '../assets/ramen7.png';
import ramen8 from '../assets/ramen8.png';

const ramenList = [
  { name: 'Shoyu Ramen', image: ramen1 },
  { name: 'Miso Ramen', image: ramen2 },
  { name: 'Tonkotsu Ramen', image: ramen3 },
  { name: 'Spicy Ramen', image: ramen4 },
  { name: 'Vegetarian Ramen', image: ramen5 },
  { name: 'Seafood Ramen', image: ramen6 },
  { name: 'Butter Corn Ramen', image: ramen7 },
  { name: 'Garlic Ramen', image: ramen8 }
];

const MenuSlider: React.FC<{ onRamenSelect: (ramen: typeof ramenList[0]) => void }> = ({ onRamenSelect }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 4; 
  const [transitioning, setTransitioning] = useState(false);

  const scrollLeft = () => {
    if (startIndex > 0 && !transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setStartIndex((prev) => prev - 1);
        setTransitioning(false);
      }, 300); 
    }
  };

  const scrollRight = () => {
    if (startIndex < ramenList.length - visibleItems && !transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setStartIndex((prev) => prev + 1);
        setTransitioning(false);
      }, 300); 
    }
  };

  return (
    <div style={containerStyle}>
      <button onClick={scrollLeft} style={arrowButtonStyle}>❮</button>
      <div style={sliderWrapperStyle}>
        <div
          style={{
            ...sliderStyle,
            transform: `translateX(-${startIndex * 120}px)`, 
            transition: transitioning ? 'transform 0.3s ease' : 'none' 
          }}
        >
          {ramenList.map((ramen, index) => (
            <RamenItem
              key={index}
              name={ramen.name}
              image={ramen.image}
              onClick={() => onRamenSelect(ramen)}
            />
          ))}
        </div>
      </div>
      <button onClick={scrollRight} style={arrowButtonStyle}>❯</button>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
  width: '70%',
  justifyContent: 'space-between',
};

const sliderWrapperStyle: React.CSSProperties = {
  width: '100%',
  overflow: 'hidden' 
};

const sliderStyle: React.CSSProperties = {
  display: 'flex',
  width: `${ramenList.length * 120}px`, 
};

const arrowButtonStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '64px',
  color: '#ffffff', 
  cursor: 'pointer',
  padding: '10px'
};

export default MenuSlider;
