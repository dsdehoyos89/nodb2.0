import React, { Component } from 'react'
import SingleFav from './SingleFav'

class Favorites extends Component {





    render() {
        console.log(this.props.favs);
        return (
            <div>

                <div className="topOpageFav">Favorites List</div>

                <div className="favList">
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
                </div>



            </div >



        )

    }
}

export default Favorites;

