import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
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
              <img src="/static/images/logo-white.png" className={classes.logoImg} />
            </a>
          </Link>
          <Link href="https://hub.u-wave.net/" passHref>
            <Button variant="text">
              Join
            </Button>
          </Link>
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
