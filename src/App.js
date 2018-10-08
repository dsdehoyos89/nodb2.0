import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import Favorites from './components/Favorites';
import ChuckNorris from './components/ChuckNorris'

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      favorites: []

      // jokes: []

    }
    this.handleClick = this.handleClick.bind(this)
    this.addToFavorites = this.addToFavorites.bind(this)
    this.deleteFavs = this.deleteFavs.bind(this)
    // this.editQuote = this.editQuote.bind(this)
    // this.handleChuck = this.handleChuck.bind(this)
  }

  componentDidMount() {
    axios.get('/api/test').then(response => {
      console.log("front end data", response)
      this.setState({ quotes: response.data.quotes })
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







  // handleChuck() {
  //   axios.get('https://api.chucknorris.io/jokes/random').then(response => {
  //     console.log(response.data.value, "CHuck")
  //     this.setState({ jokes: response.data.value })
  //   })
  // }





  render() {
    // console.log("APP RENDER METHOD", this.state.quotes)

    let quotesMap = this.state.quotes.map((quote, index) => {
      return (
        <div className="quoteCard">
          <QuoteCard

            quote={quote}

            key={index}
          // addFav={this.addToFavorites}
          />
          <button onClick={() => this.addToFavorites(quote)}>Add to Favorites</button>
        </div>
      )
    })

    return (

      <div className="App" >
        <header className="topOpage">
          <h2>QuoteBook</h2>

          <button onClick={this.handleClick}>More</button>
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
          {/* <div>
            <ChuckNorris
              clicky={this.handleChuck}
              jokes={this.state.jokes}

            />

          </div> */}


        </div>

      </div>
    );
  }
}

export default App;
