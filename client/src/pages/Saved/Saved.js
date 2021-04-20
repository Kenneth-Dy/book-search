import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { useState, useEffect } from 'react'
import Book from '../../utils/BookAPI'

const useStyles = makeStyles((theme) => ({
  savedLayout: {
    width: 'auto',
    backgroundColor: theme.palette.green.main,
    color: theme.palette.green.contrastText,
    marginTop: 20,
    padding: 5
  },
  bookLayout: {
    margin: 10
  },
  buttons: {
    margin: theme.spacing(0.5)
  }

}))

const Saved = () => {

  const classes = useStyles()

  const [bookState, setBookState] = useState({
    books: []
  })

  const handleDeleteBook = id => {
    Book.deleteBook(id)
      .then(() => {
        const books = bookState.books.filter(book => book._id !== id)
        setBookState({ ...bookState, books })
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    Book.getBooks()
      .then(({ data: books }) => {
        setBookState({ ...bookState, books })
      })
  }, [])

  return (
    <Grid container justify='center'>
      <Grid item xs={9} >
        <Paper elevation={0} className={classes.savedLayout}>
          <Typography variant={'h4'}>Saved:</Typography>
        </Paper>
      </Grid>
      {
        bookState.books.length
          ? bookState.books.map((book, i) => (
            <Grid item xs={9} key={i}>
              <Paper elevation={0} className={classes.bookLayout} variant="outlined">
                <Box className={classes.bookLayout}>
                  <img alt={book.title} src={book.image} />
                  <Typography variant={'h6'}>{book.title}</Typography>
                  <Typography variant={'body1'}>{book.authors}</Typography>
                  <Typography variant={'body2'}>{book.description}</Typography> 
                  <Button
                    color='primary'
                    variant="contained"
                    className={classes.buttons}
                    href={book.link}
                  >More Info</Button>
                  <Button
                    color='secondary'
                    variant="contained"
                    className={classes.buttons}
                    onClick={() => handleDeleteBook(book._id)}
                  >Delete</Button>
                </Box>
              </Paper>
            </Grid>
          ))
          : null
      }
    </Grid>
  )
}

export default Saved