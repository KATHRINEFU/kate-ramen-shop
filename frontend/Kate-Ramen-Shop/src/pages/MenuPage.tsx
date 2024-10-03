import React, { useState } from 'react';
import SelectedRamen from '../components/SelectedRamen';
import MenuSlider from '../components/MenuSlider';
import ramen1 from '../assets/ramen1.png';
type MenuPageProps = {
    onAddToCart: (order: any) => void;
  };

  
const MenuPage: React.FC<MenuPageProps> = ({ onAddToCart }) => {
  const [selectedRamen, setSelectedRamen] = useState({ id: 1, name: 'Shoyu Ramen', image: ramen1 },);

  const handleRamenSelect = (ramen: typeof selectedRamen) => {
    setSelectedRamen(ramen);
  };

  return (
    <div>
      <SelectedRamen id={selectedRamen.id} name={selectedRamen.name} image={selectedRamen.image}  onAddToCart={onAddToCart}/>
      <MenuSlider onRamenSelect={handleRamenSelect} />
    </div>
  );
};

export default MenuPage;
