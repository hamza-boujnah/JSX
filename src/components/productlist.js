// src/components/ProductList.js
import React from 'react';
import Product from './product';
import image1 from '../assets/piano.jpg'


const products = [
  {
    
    image: image1,
    price: 19.999,
    icon : image1,
    name:"piano toy"
  },
  {
   
   
},
  // Add more products as you want 
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;