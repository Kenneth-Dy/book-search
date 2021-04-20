import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { useState } from 'react'
import Book from '../../utils/BookAPI'

const useStyles = makeStyles((theme) => ({
  searchLayout: {
    width: 'auto',
    backgroundColor: theme.palette.yellow.main,
    color: theme.palette.yellow.contrastText,
    marginTop: 20,
    padding: 5
  },
  resultsLayout: {
    width: 'auto',
    backgroundColor: theme.palette.green.main,
    color: theme.palette.green.contrastText,
    marginTop: 20,
    padding: 5
  },
  searchBar: {
    backgroundColor: theme.palette.primary.contrastText,
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
    marginBottom: 10,
  },
  bookLayout : {
    margin: 10 
  }
}))


const Search = () => {
  
  const classes = useStyles()

  const [bookState, setBookState] = useState({
    search: '',
    books: []
  })

  const handleInputChange = ({ target }) => {
    setBookState({ ...bookState, [target.name]: target.value })
  }

  const handleBookSearch = (event) => {
    event.preventDefault()

    Book.searchBooks(bookState.search)
      .then(({ data : { items : books } }) => {
        console.log(books)
        setBookState({ ...bookState, books })
      })
      .catch(err => console.log(err))
  }

  const handleSaveBook = book => {
    Book.addBook(book)
      .then(() => alert('Book Added!'))
      .catch(err => console.log(err))
  }
  

  return (

    <>
    <Grid container justify='center'>
      <Grid item xs={9} >
        <Paper elevation={0} className={classes.searchLayout}>
          <Typography variant={'h4'}>Search:</Typography>
          <form onSubmit={handleBookSearch}>
            <TextField 
              variant='outlined' 
              fullWidth 
              className={classes.searchBar} 
              color='secondary'
              name='search'
              value={bookState.search}
              onChange={handleInputChange}
            />
              <Button 
                variant="contained" 
                color='secondary' 
                disableElevation
                onClick={handleBookSearch}
              >Submit</Button>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={9} >
        <Paper elevation={0} className={classes.resultsLayout}>
          <Typography variant={'h4'}>Results:</Typography>
        </Paper>
      </Grid>
      {
        bookState.books.length 
          ? bookState.books.map((book, i) => (
            <Grid item xs={9} key={i}>
              <Paper elevation={0} className={classes.bookLayout} variant="outlined">
                <Box className={classes.bookLayout}>
                  <img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.thumbnail} />
                  <Typography variant={'h6'}>{book.volumeInfo.title}</Typography> 
                  <Typography variant={'body1'}>{book.volumeInfo.authors}</Typography> 
                  {/* <Typography variant={'body1'}>{book.volumeInfo.description}</Typography>  */}
                  <Button 
                    color='primary' 
                    variant="contained" 
                    onClick={() => handleSaveBook({
                      title: book.volumeInfo.title,
                      authors: book.volumeInfo.authors,
                      description: book.volumeInfo.description,
                      image: book.volumeInfo.imageLinks.thumbnail,
                      link: book.volumeInfo.infoLink
                    })}
                  >Save</Button>
                </Box>
              </Paper>  
            </Grid>  
          ))
          : null
      }
    </Grid>
    </>
  )
}

export default Search