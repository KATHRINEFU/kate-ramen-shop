import "./App.css"

import React, { useEffect, useState } from 'react';
import MenuPage from './pages/MenuPage';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import CartPage from "./pages/CartPage";

export type RamenOrder = {
  name: string;
  image: string;
  meat: string;
  spicyLevel: string;
  noodleType: string;
};

function App() {
  
  const [cartCount, setCartCount] = useState(0);
  const [orders, setOrders] = useState<RamenOrder[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (order: RamenOrder) => {
    setOrders([...orders, order]);
  };
  
  const handleCartClick = () => {
    setIsCartOpen(true);
  };
  const handleMenuClick = () => {
    setIsCartOpen(false);
  };

  const handleDeleteItem = (index: number) => {
    setOrders((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleUpdateItem = (index: number, updatedOrder: RamenOrder) => {
    setOrders((prevItems) =>
      prevItems.map((item, i) => (i === index ? updatedOrder : item))
    );
  };

  const handlePlaceOrder = async () => {
    // console.log(orders)
    try {
      const requestBody = JSON.stringify(orders)
      console.log(requestBody)
      const response = await fetch('http://localhost:8000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orders),
      });

      if (response.ok) {
        alert('Order placed successfully!');
        setOrders([]);
      } else {
        alert('Failed to place the order. Please try again.');
      }
    } catch (error) {
      alert('Error occurred while placing the order.');
    }
  };


  useEffect(() => {
    setCartCount(orders.length)
  }, [orders]);

  return (
    <>

      <div>
      {isCartOpen ? (
          <div onClick={handleMenuClick} style={cartContainerStyle}>
            <FaBars style={cartIconStyle} />
            {cartCount > 0 && <div style={cartCountStyle}>{cartCount}</div>}
          </div>
        ) : (
          <div onClick={handleCartClick} style={cartContainerStyle}>
            <FaShoppingCart style={cartIconStyle} />
            {cartCount > 0 && <div style={cartCountStyle}>{cartCount}</div>}
          </div>
        )}
      </div>


      <div>
        <h1>Kate Ramen Shop</h1>
        <h2>Welcome and enjoy your ramen</h2>
      </div>

      {isCartOpen ? (
        <CartPage cartItems={orders} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} onPlaceOrder={handlePlaceOrder}/>
      ) : (
        <MenuPage onAddToCart={handleAddToCart} />
      )}
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
