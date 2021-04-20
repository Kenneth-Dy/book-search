import axios from 'axios'

const Book = {
  searchBooks: book => axios.get(`/api/search/${book}`),
  getBooks: () => axios.get('/api/books'),
  addBook: book => axios.post('/api/books', book),
  deleteBook: id => axios.delete(`/api/books/${id}`)
}

export default Book
 