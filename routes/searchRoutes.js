const router = require('express').Router()
const axios = requir('axios')

router.get('/search/:book', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.book}`)
    .then(({ data }) => res.json(data))
    .catch(err => console.log(err))
})