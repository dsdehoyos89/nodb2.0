import React, { Component } from 'react'
import QuoteCard from './QuoteCard'
import axios from 'axios'
import SingleFav from './SingleFav'

class Favorites extends Component {





    render() {
        console.log(this.props.favs);
        return (
            <div>

                <div className="topOpage">Favorites List</div>
                {
                    (this.props.favs) && this.props.favs.map((quote, index) => {
                        return (
                            <SingleFav
                                quote={quote}
                                key={quote.id}
                                editBut={this.props.edit}
                                deleteBut={this.props.delete}

                            />
                        )
                    })
                }



            </div >



        )

    }
}

export default Favorites;

