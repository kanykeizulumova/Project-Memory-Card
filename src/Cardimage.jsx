import React, { memo } from 'react';


const BASE_URL = 'https://ringsdb.com';


const CardImage = memo(({ card, onClick }) => {

    const imageUrl = card.imagesrc
        ? `${BASE_URL}${card.imagesrc}`
        : 'https://placehold.co';

    return (
        <div className="card-container" onClick={() => onClick(card.code)}>
            <img
                className="card-image"
                src={imageUrl}
                alt={card.name}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co';
                }}
            />
            <div className="card-info">
                <h3>{card.name}</h3>
            </div>
        </div>
    );
});


export default CardImage;
