import React from "react";
import PropTypes from 'prop-types';

export default function ShopCard({item}) {
    if (!item) return;

    return (
        <div className="shop-card">
            <div className="item-img"><img src={item.img} alt={item.name} /></div>
            <div className="content">
                <div className="name">{item.name}</div>
                <div className="color">{item.color}</div>
            </div>
            <div className="footer">
                <div className="price">{item.price}</div>
                <button className="add-btn">add to card</button>
            </div>
        </div>
    )
}

ShopCard.propTypes = {
    item: PropTypes.object,
}