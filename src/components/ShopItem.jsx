import React from "react";
import PropTypes from 'prop-types';

export default function ShopItem({item}) {
    if (!item) return;

    return (
        <div className="shop__item">
            <div className="item__img"><img src={item.img} alt={item.name}/></div>
            <div className="name">{item.name}</div>
            <div className="color">{item.color}</div>
            <div className="price">{item.price}</div>
            <button className="add-btn">add to cart</button>
        </div>
    )
}

ShopItem.propTypes = {
    item: PropTypes.object,
}