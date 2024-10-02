import "./App.css"

import React, { useEffect, useState } from 'react';
import MenuPage from './pages/MenuPage';
import { FaShoppingCart } from 'react-icons/fa'; // Import shopping cart icon

type RamenOrder = {
  name: string;
  image: string;
  meat: string;
  spicyLevel: string;
  noodleType: string;
};

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [orders, setOrders] = useState<RamenOrder[]>([]);

  const handleAddToCart = (order: RamenOrder) => {
    setOrders([...orders, order]);
  };

  useEffect(() => {
    setCartCount(orders.length)
  }, [orders]);

  return (
    <>
      <div style={cartContainerStyle}>
        <FaShoppingCart style={cartIconStyle} />
        {cartCount > 0 && (
          <div style={cartCountStyle}>{cartCount}</div>
        )}
      </div>
      <div>
        <h1>Kate Ramen Shop</h1>
        <h2>Welcome and enjoy your ramen</h2>
        <MenuPage onAddToCart={handleAddToCart} /> 
      </div>
    </>
  );
}

const cartContainerStyle: React.CSSProperties = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  cursor: 'pointer',
};

const cartIconStyle: React.CSSProperties = {
  fontSize: '32px',
  color: '#000',
};

const cartCountStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-8px',
  right: '-8px',
  backgroundColor: 'red',
  borderRadius: '50%',
  color: 'white',
  width: '20px',
  height: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '12px',
};

export default App;
