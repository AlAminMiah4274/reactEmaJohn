import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;