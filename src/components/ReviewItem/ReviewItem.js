import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    
    const ReviewItem ={
        borderBottom:"1px solid black",
          marginBottom:"5px",
          paddingBottom:"5px",
          marginLeft:"10px"
    }
    return (
        <div style={ReviewItem} className="review-item">
            
            <h6 className="product-name">{name}</h6>
            <p>quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <button className="main-button"
            onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;