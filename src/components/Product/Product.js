import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const items = props.product;
  
    return (
        <div className="product">
        <div >
        <img src={items.img} alt=""/>
        </div>
        <div className="details">
        <h4 className="productName">{items.name}</h4> 
        <p>  <small> by {items.seller}</small></p>
        <p>Price:${items.price}</p>
        <p><small>Only {items.stock} Piece Of This Product Left In Our Stock - Order Soon</small></p>
      
      
        <button className= "main-button" onClick= {() => {props.handleAddProduct(items)}} > <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart </button>

        </div>
   
        </div>
    );
};

export default Product;