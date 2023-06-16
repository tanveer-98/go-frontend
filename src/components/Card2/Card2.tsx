import React from 'react';
import './styles.css'; // Import the CSS file for styling

interface IProductCard {
  product_description: string;
  product_name: string;
  product_image: string;
}

const ProductCard: React.FC<IProductCard> = ({ product_description, product_name, product_image }) => {
  return (
    <div className="product-card">
      <img draggable={false} src={product_image} alt={product_name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product_name}</h3>
        <p className="product-description">{product_description}</p>
      </div>
    </div>
  );
};

export default ProductCard;