import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
  const{name, img,seller, price, stock, star} = props.product;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
          <div>
               <img src={img} alt="" />
          </div>
           <div>
               <h2 className="product-name">{name}</h2>
               <p><small>By: {seller} </small></p>
               <h4>Price: {price}</h4>
               <h4>Only {stock} left in stock-order soon.</h4>
               <Rating initialRating={star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
               readonly></Rating>
               <br />
               <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">{cartIcon} Add to chart</button>
           </div>
        </div>
    );
};

export default Product;