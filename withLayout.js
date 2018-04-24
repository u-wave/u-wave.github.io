import React from 'react';
import { MuiThemeProvider, withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import theme from './muiTheme';

const enhance = withStyles({
  logo: {
    height: 48,
    maxHeight: '100%',
    marginRight: 48,
  },
});

const Header = enhance(({ classes }) => (
  <AppBar elevation={0}>
    <Toolbar>
      <a href="/">
        <img src="/static/images/logo-white.png" className={classes.logo} />
      </a>
      <Button variant="flat" href="/">
        Install
      </Button>
      <Button variant="flat" href="https://hub.u-wave.net/">
        Public Server List
      </Button>
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
