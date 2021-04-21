import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
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