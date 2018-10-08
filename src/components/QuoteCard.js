import React from 'react';
import Favorites from './Favorites'


function QuoteCard(props) {
    return (
        <div>
            <h1>Quote</h1>
            <h2>{props.quote.body}</h2>
            <h3>-{props.quote.author}</h3>

        </div>

    )
}

export default QuoteCard;
