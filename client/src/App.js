import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'
import Navbar from './components/Navbar'
import { createMuiTheme, ThemeProvider, createResponsiveFontSizes, responsiveFontSizes } from '@material-ui/core/styles'
import Banner from './components/Banner'

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff5f52',
      main: '#c62828',
      dark: '#8e0000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
    yellow: {
      light: '#ffff6b',
      main: '#fdd835',
      dark: '#004ba0',
      contrastText: '#000000',
    },
    green: {
      light: '#60ad5e',
      main: '#2e7d32',
      dark: '#005005',
      contrastText: '#ffffff',
    },
  },
});

theme= responsiveFontSizes(theme)

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar />
          <Banner />
          <Switch>
            <Route exact path='/'>
              <Search />
            </Route>
            <Route path='/saved'>
              <Saved />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
}
export default App;
