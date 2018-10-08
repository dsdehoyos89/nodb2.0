const axios = require('axios');

axios.defaults.headers.common['Authorization'] = `Token token=${process.env.API_TOKEN}`;

let quotes = [];
let favorites = [];

function getQuote(req, res) {
    axios.get('https://favqs.com/api/quotes')
        .then(response => {
            quotes = response.data
            res.status(200).json(quotes)
        }).catch(err => res.status(500).json(err))
}

function addFav(req, res) {
    // console.log(req.body)
    favorites.push(req.body);
    res.status(200).json(favorites)
}

function deleteFav(req, res) {
    deleteId = req.params.id;
    console.log("deleteFav", deleteId);
    let index = favorites.findIndex(quotes => quotes.id == deleteId);
    // console.log('INDEX!',index);
    favorites.splice(index, 1);
    res.status(200).json(favorites);


}

function editQuote(req, res) {
    let editId = req.params.id;
    if (editId == favorites[0].id) {
        favorites[0].body = req.body.newQuote
        // Object.assign(favorites[0].id, req.body.newQuote)
    }
    console.log(favorites[0].id, "Favorite ID");
    console.log(req.params.id, "Edit ID");
    console.log(req.body.newQuote, "New Quote");
    console.log(favorites, "Favorites")
    res.status(200).json(favorites);
}









module.exports = {
    getQuote,
    addFav,
    deleteFav,
    editQuote
};
