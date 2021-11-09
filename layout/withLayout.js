import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './muiTheme';

const LOGO_HEIGHT = 114
const LOGO_SQUARE_WIDTH = 104

const useStyles = makeStyles(theme => ({
  logo: {
    height: 48,
    marginRight: 48,
    [theme.breakpoints.down('md')]: {
      width: `${LOGO_SQUARE_WIDTH * 48 / LOGO_HEIGHT}px`,
      overflow: 'hidden',
      marginRight: 12,
    },
  },
  logoImg: {
    maxHeight: '100%',
  },
}));

export default function createLayoutHOC({ Link }) {
  function Header() {
    const classes = useStyles();

    return (
      <AppBar elevation={0}>
        <Toolbar>
          <Link href="/">
            <a className={classes.logo}>
              <img src="/images/logo-white.png" className={classes.logoImg} />
            </a>
          </Link>
          <Button href="https://hub.u-wave.net/" variant="text">
            Join
          </Button>
          <Link href="/install" passHref>
            <Button variant="text">
              Install
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }

  return function withLayout(Component) {
    return (props) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...props} />
      </ThemeProvider>
    );
  }
}
