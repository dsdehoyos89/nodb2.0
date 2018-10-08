import React, { Component } from 'react'

class SingleFav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: ''

        }
        this.newQuote = this.newQuote.bind(this)
    }

    newQuote(e) {
        this.setState({ edit: e.target.value })
    }

    render() {
        return (
            <div className="quoteCard">

                <h1>Quote</h1>
                <h2>{this.props.quote.body}</h2>
                <h3>-{this.props.quote.author}</h3>
                <button onClick={() => this.props.deleteBut(this.props.quote.id)}>Delete</button>
                <button onClick={() => {
                    this.props.editBut(this.props.quote.id, this.state.edit)

                    this.setState({ edit: "" })
                }} >Edit Quote</button>
                <input type="text" onChange={(e) => this.newQuote(e)} value={this.state.edit}></input>
            </div >

        )
    }
}

export default SingleFav; 