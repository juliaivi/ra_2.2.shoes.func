import React from "react";
import PropTypes from 'prop-types';
import ShopItem from "./ShopItem";

export default function ListView({items}) {
    if (items.length === 0) {
        return null;
    }
    
    return (
        <div className="gallery">
            {items.map((el, index) => <ShopItem item={el} key={index}/>)}
        </div>
    )
}

ListView.propTypes = {
    items: PropTypes.array,
}
