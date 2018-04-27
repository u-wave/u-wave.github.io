import { createMuiTheme } from 'material-ui/styles'

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#b20062',
      main: '#9d2053',
      contrastText: '#fff'
    },
    background: {
      default: '#151515',
      paper: '#303030'
    }
  },
  typography: {
    fontFamily: '"Open Sans", Roboto, Arial, sans-serif'
  }
})
