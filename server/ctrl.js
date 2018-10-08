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
    console.log(req.body, req.params)
    // let editId = req.params.id;
    // if (editId == favorites[0].id) {
    //     favorites[0].body = req.body.newQuote

    // }
    let editId = parseInt(req.params.id);
    let index = favorites.findIndex((quotes) => quotes.id === editId);
    console.log("editQuote in ctrl", index)
    console.log(favorites, "favories iin editquote")
    if (index >= 0) {
        favorites[index].body = req.body.edit
    }



    res.status(200).json(favorites);
}

function getFavorites(req, res) {
    res.status(200).json(favorites)
}









module.exports = {
    getQuote,
    addFav,
    deleteFav,
    editQuote,
    getFavorites
};
