import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { RamenOrder } from '../App';

type CartPageProps = {
  cartItems: RamenOrder[];
  onDeleteItem: (index: number) => void;
  onUpdateItem: (index: number, updatedOrder: RamenOrder) => void;
  onPlaceOrder: () => void;
};

const CartPage: React.FC<CartPageProps> = ({ cartItems, onDeleteItem, onUpdateItem, onPlaceOrder }) => {
  return (
    <div style={cartPageStyle}>
      {cartItems.length === 0 ? (
        <div>
            <p style={emptyCartStyle}>Your cart is empty</p>
            <p style={emptyCartStyle}>Go back to menu and order Ramen</p>
        </div>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} style={cardStyle}>
            <img src={item.image} alt={item.name} style={cardImageStyle} />
            <div style={cardContentStyle}>
              <h3>{item.name}</h3>

              <label style={labelStyle}>
                Meat:
                <select
                  value={item.meat}
                  onChange={(e) =>
                    onUpdateItem(index, {
                      ...item,
                      meat: e.target.value,
                    })
                  }
                  style={selectStyle}
                >
                  <option value="beef">Beef</option>
                  <option value="pork">Pork</option>
                  <option value="chicken">Chicken</option>
                  <option value="seafood">Seafood</option>
                </select>
              </label>

              <label style={labelStyle}>
                Spicy Level:
                <select
                  value={item.spicyLevel}
                  onChange={(e) =>
                    onUpdateItem(index, {
                      ...item,
                      spicyLevel: e.target.value,
                    })
                  }
                  style={selectStyle}
                >
                  <option value="no">No Spice</option>
                  <option value="less">Less Spice</option>
                  <option value="regular">Regular</option>
                  <option value="crazy">Crazy</option>
                </select>
              </label>

              <label style={labelStyle}>
                Noodle:
                <select
                  value={item.noodleType}
                  onChange={(e) =>
                    onUpdateItem(index, {
                      ...item,
                      noodleType: e.target.value,
                    })
                  }
                  style={selectStyle}
                >
                  <option value="ramen">Ramen</option>
                  <option value="egg noodle">Egg Noodle</option>
                  <option value="udon">Udon</option>
                </select>
              </label>
            </div>

            <div style={deleteButtonContainerStyle}>
              <FaTrash style={deleteButtonStyle} onClick={() => onDeleteItem(index)} />
            </div>
          </div>
        ))
      )}

      {cartItems.length !== 0 && (      
        <button style={placeOrderButtonStyle} onClick={onPlaceOrder}>
          Place Order
        </button>)}
    </div>
  );
};

const cartPageStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '60vh',
};

const emptyCartStyle: React.CSSProperties = {
  fontSize: '36px',
  color: '#333',
  fontFamily: 'Caveat',
  marginLeft: '300px',
};

const cardStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  width: '60%',
  padding: '10px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#fff',
};

const cardImageStyle: React.CSSProperties = {
  width: '30%',
  marginRight: '20px',
  objectFit: 'cover',
};

const cardContentStyle: React.CSSProperties = {
  color: '#557C56',
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
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
  padding: '2px',
  margin: '2px',
  fontSize: '16px',
  borderRadius: '4px',
  backgroundColor: '#557C56',
  width: '100px'
};

const deleteButtonContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const deleteButtonStyle: React.CSSProperties = {
  fontSize: '30px',
  color: '#E78F81',
  cursor: 'pointer',
};

const placeOrderButtonStyle: React.CSSProperties = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#FF885B',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  };

export default CartPage;
