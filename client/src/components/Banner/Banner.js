import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  bannerLayout: {
    width: 'auto',
    height: '30%',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    marginTop: 20,
    paddingBottom: 10,
  },

}));

const Banner = () => {

  const classes = useStyles()

  return (
    <Grid container justify='center'>
      <Grid item xs={10} >
          <Box
            textAlign="center"
            
          >
          <Paper className={classes.bannerLayout}>
            <Typography variant='h1' gutterBottom>
              Google Book Search
            </Typography>
            <Typography variant='h4' gutterBottom>
              Search and Save your favorite books to a list
            </Typography>
        </Paper>   
          </Box>
      </Grid>
    </Grid>
  )
}

export default Banner