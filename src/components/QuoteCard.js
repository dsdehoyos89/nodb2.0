import React from 'react';
import Favorites from './Favorites'


function QuoteCard(props) {
    return (
        <div>

            <h1>{props.quote.body}</h1>
            <h2>-{props.quote.author}</h2>

        </div>

    )
}

export default QuoteCard;
