import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import Favorites from './components/Favorites';
import Signature from './components/Signature'

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      favorites: [],
      jokes: []

    }
    this.handleClick = this.handleClick.bind(this)
    this.addToFavorites = this.addToFavorites.bind(this)
    this.deleteFavs = this.deleteFavs.bind(this)
    this.editQuote = this.editQuote.bind(this)
    // this.handleChuck = this.handleChuck.bind(this)
  }

  componentDidMount() {
    axios.get('/api/test').then(response => {
      console.log("front end data", response)
      this.setState({ quotes: response.data.quotes })
    })
    axios.get('/api/favorites').then(response => {
      console.log(response, " front end data for favorites")
      this.setState({ favorites: response.data })
    })
  }

  handleClick() {
    axios.get('/api/test').then(response => {
      this.setState({ quotes: response.data.quotes })
    })
  }

  addToFavorites(element) {
    axios.post('/api/favs', element).then(response => {
      console.log(response.data, "response")
      this.setState({ favorites: response.data })
    })
  }

  deleteFavs(id) {
    axios.delete(`/api/deleteFavs/${id}`).then(response => {
      console.log("delete response", response)
      this.setState({ favorites: response.data })
    })
  }

  editQuote(id, edit) {
    console.log('Favorites editquote func', id, edit)
    axios.put(`/api/editQuote/${id}`, { edit }).then(response => {
      console.log(response.data);
      this.setState({ favorites: response.data })
    })
  }


  handleEasterEgg() {
    axios.get('https://api.chucknorris.io/jokes/random').then(response => {
      // console.log('joke', response.data.value)
      alert(response.data.value)
    })
  }














  render() {
    // console.log("APP RENDER METHOD", this.state.quotes)

    let quotesMap = this.state.quotes.map((quote, index) => {
      return (
        <div className="main-container">
          <div className="quoteCard">
            <QuoteCard

              quote={quote}

              key={index}
            // addFav={this.addToFavorites}
            />
            <button onClick={() => this.addToFavorites(quote)}>Add to Favorites</button>
          </div>
        </div>

      )

    })


    return (

      <div className="App" >
        <header className="topOpage">
          <h2>QuoteBook</h2>

          <button onClick={this.handleClick}>More</button>
          <div className="sig">
            <Signature
              egg={this.handleEasterEgg} />
          </div>
        </header>
        {quotesMap}

        <div className="bottomButton">

          <button onClick={this.handleClick}>More</button>
        </div>
        <div>
          <Favorites
            favs={this.state.favorites}
            delete={this.deleteFavs}
            newQuote={this.state.newQuote}
            edit={this.editQuote}
            quotes={this.state.quotes}
          />
          <div className="sig2">
            <Signature
              egg={this.handleEasterEgg}
            />
          </div>

        </div>

      </div>
    );
  }
}

export default App;
