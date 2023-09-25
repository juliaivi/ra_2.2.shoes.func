import React from "react";
import PropTypes  from "prop-types";
import ShopCard from "./ShopCard";

export default function CardsView(props) {
    const { cards } = props;

    if (cards.length === 0) {
        return null;
    }

    return (
        <div className="gallery">
            <div className="card__view">
                {cards.map((el, index) => <ShopCard item={el} key={index} />)}
            </div>
        </div>
    )

}

CardsView.propTypes = {
    cards: PropTypes.array,
}
