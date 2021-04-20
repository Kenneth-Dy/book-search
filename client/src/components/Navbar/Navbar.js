import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    // marginRight: theme.spacing(2),
    textDecoration: 'none',
    color: 'inherit'
  }
}))

const Navbar = () => {

  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
       
          <Typography variant="h6">
            | Google Book Search |
          </Typography>
          <Link to='/' className={classes.link}>
            <Button color='inherit'>Search</Button>
          </Link>
          <Link to='/saved' className={classes.link}>
            <Button color='inherit'>Saved</Button>
          </Link>
    
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar