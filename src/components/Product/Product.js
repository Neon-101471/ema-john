import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    //console.log(props)
    const { img, name, seller, stock, price } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3> <br />
                <div className="product-details">
                    <p><small>Stocked by- {seller}</small></p>
                    <p>${price}</p>
                    <p>Only {stock} product left in the stock | <span style={{ color: 'lightsalmon', fontWeight: '600' }}>Order soon</span></p>
                    <button className="cart-button" onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart}/>  Add to cart </button>
                </div>
            </div>
        </div>
    );
};

export default Product;