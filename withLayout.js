import React from 'react';
import { MuiThemeProvider, withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Link from 'next/link';
import theme from './muiTheme';

const LOGO_HEIGHT = 114
const LOGO_SQUARE_WIDTH = 104

const enhance = withStyles(theme => ({
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

const Header = enhance(({ classes }) => (
  <AppBar elevation={0}>
    <Toolbar>
      <Link href="/">
        <a className={classes.logo}>
          <img src="/static/images/logo-white.png" className={classes.logoImg} />
        </a>
      </Link>
      <Link href="https://hub.u-wave.net/" passHref>
        <Button variant="flat">
          Join
        </Button>
      </Link>
      <Link href="/install" passHref>
        <Button variant="flat">
          Install
        </Button>
      </Link>
    </Toolbar>
  </AppBar>
));

export default function withLayout(Component) {
  const map = new Map();

  return (props) => (
    <MuiThemeProvider theme={theme} sheetsManager={map}>
      <Header />
      <Component {...props} />
    </MuiThemeProvider>
  );
}
