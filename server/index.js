require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors')
const { getQuote, addFav, deleteFav, editQuote, getFavorites } = require('./ctrl')
const port = 3001;

const app = express();
app.use(json());
app.use(cors());


app.get('/api/test', getQuote);
app.post('/api/favs', addFav);
app.delete('/api/deleteFavs/:id', deleteFav);
app.put('/api/editQuote/:id', editQuote);
app.get('/api/favorites', getFavorites)

app.listen(port, () => {
    console.log(`Server listening on port :${port}`)
});

