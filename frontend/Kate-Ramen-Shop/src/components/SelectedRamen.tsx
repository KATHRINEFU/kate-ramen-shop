import React, { useState }  from 'react';

type SelectedRamenProps = {
  id: number
  name: string;
  image: string;
  onAddToCart: (order: RamenOrder) => void;
};

type RamenOrder = {
  id: number;
  name: string;
  image: string;
  meat: string;
  spicyLevel: string;
  noodleType: string;
};

const SelectedRamen: React.FC<SelectedRamenProps> = ({ id, name, image, onAddToCart }) => {
  const [meat, setMeat] = useState('beef');
  const [spicyLevel, setSpicyLevel] = useState('regular');
  const [noodleType, setNoodleType] = useState('ramen');

  const handleAddToCart = () => {
    const order: RamenOrder = {
      id,
      name,
      image,
      meat,
      spicyLevel,
      noodleType,
    };
    onAddToCart(order);
    console.log(order);
  };

  return (
    <div style={outerContainerStyle}>
      <div style={innerContainerStyle}>
        <img src={image} alt={name} style={imageStyle} />
        <div style={infoStyle}>
          <h3 style={nameStyle}>{name}</h3>

          <label style={labelStyle}>
            Meat:
            <select value={meat} onChange={(e) => setMeat(e.target.value)} style={selectStyle}>
              <option value="beef">Beef</option>
              <option value="pork">Pork</option>
              <option value="chicken">Chicken</option>
              <option value="seafood">Seafood</option>
            </select>
          </label>

          <label style={labelStyle}>
            Spicy Level:
            <select value={spicyLevel} onChange={(e) => setSpicyLevel(e.target.value)} style={selectStyle}>
              <option value="no">No Spicy</option>
              <option value="less">Less Spicy</option>
              <option value="regular">Regular</option>
              <option value="crazy">Crazy Spicy</option>
            </select>
          </label>

          <label style={labelStyle}>
            Noodle Type:
            <select value={noodleType} onChange={(e) => setNoodleType(e.target.value)} style={selectStyle}>
              <option value="ramen">Ramen</option>
              <option value="egg noodle">Egg Noodle</option>
              <option value="udon">Udon</option>
            </select>
          </label>

          <button style={buttonStyle} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const outerContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  backgroundColor: '#FFE5CF',
  marginTop: '-200px'
};


const innerContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  maxWidth: '800px', 
  textAlign: 'left', 
};


const imageStyle: React.CSSProperties = {
  width: '400px',
  height: '400px',
  objectFit: 'cover',
  borderRadius: '12px',
  marginRight: '20px', 
};


const infoStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};


const nameStyle: React.CSSProperties = {
  fontSize: '24px',
  color: '#557C56',
  marginBottom: '10px',
};


const buttonStyle: React.CSSProperties = {
  backgroundColor: '#FF885B',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '10px',
  justifyContent: 'center'
};

const labelStyle: React.CSSProperties = {
  color: '#33372C',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '250px',
};

const selectStyle: React.CSSProperties = {
  marginLeft: '10px',
  padding: '8px',
  margin: '8px',
  fontSize: '16px',
  borderRadius: '4px',
  backgroundColor: '#557C56',
  width: '100px'
};

export default SelectedRamen;
