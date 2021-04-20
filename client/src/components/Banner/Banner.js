import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  bannerLayout: {
    width: 'auto',
    height: '25vh',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    marginTop: 20,
  },

}));

const Banner = () => {

  const classes = useStyles()

  return (
    <Grid container justify='center'>
      <Grid item xs={10} >
        <Paper >
          <Box
            textAlign="center"
            className={classes.bannerLayout}
          >
            <Typography variant='h1' gutterBottom>
              Google Book Search
            </Typography>
          </Box>
        </Paper>   
      </Grid>
    </Grid>
  )
}

export default Banner