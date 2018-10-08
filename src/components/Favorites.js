import React, { Component } from 'react'
import QuoteCard from './QuoteCard'
import axios from 'axios'

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newQuote: ''
            // favorites: []
        }
    }

    editQuote(id) {
        let { newQuote } = this.state;
        axios.put(`/api/editQuote/${id}`, { newQuote }).then(response => {
            console.log(response.data);
            this.setState({ newQuote: '' })
        })
    }

    newQuote(e) {
        this.setState({ newQuote: e.target.value })
    }

    render() {
        console.log(this.props.favs);
        return (
            <div>

                <div className="topOpage">Favorites List</div>
                {
                    (this.props.favs.length > 0) && this.props.favs.map((quote, index) => {
                        return (
                            <div className="quoteCard">

                                <h1>Quote</h1>
                                <h2>{quote.body}</h2>
                                <h3>-{quote.author}</h3>
                                <button onClick={() => this.props.delete(quote.id)}>Delete</button>
                                <button onClick={() => this.editQuote(quote.id)} >Edit Quote</button>
                                <input type="text" onChange={(e) => this.newQuote(e)}></input>
                            </div>
                        )
                    })
                }



            </div >



        )

    }
}

export default Favorites;

