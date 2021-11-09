import { adaptV4Theme, createTheme } from '@mui/material/styles'

export default createTheme(adaptV4Theme({
  palette: {
    type: 'dark',
    primary: {
      light: '#b20062',
      main: '#9d2053',
      contrastText: '#fff'
    },
    background: {
      default: '#fff',
      paper: '#303030'
    }
  },
  typography: {
    fontFamily: 'Open Sans, Roboto, Arial, sans-serif'
  }
}))
