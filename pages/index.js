import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import withLayout from '../withLayout';

const enhance = compose(withLayout, withStyles(theme => ({
  hero: {
    background: theme.palette.primary.main,
    padding: 48,
  },
  screenshots: {
    width: '90%',
    margin: 'auto',
    marginTop: 48,
    display: 'flex',
    justifyContent: 'space-around',
  },
  screenshot: {
    maxWidth: '80%',
    maxHeight: '60vh',
    boxShadow: theme.shadows[2],
  },
  intro: {
    maxWidth: '80%',
    margin: 'auto',
  },
})));

const Index = ({ classes }) => (
  <div>
    <div className={classes.hero}>
      <Typography className={classes.intro} variant="subheading">
        üWave is a self-hosted collaborative listening platform. Users take
        turns playing media—songs, talks, gameplay videos, or anything else—from
        a variety of media sources like YouTube and SoundCloud.
      </Typography>
      <div className={classes.screenshots}>
        <img
          src="/static/images/u-wave-web-mobile.png"
          alt="Screenshot of the mobile version of the üWave Web Client"
          className={classes.screenshot}
        />
        <img
          src="/static/images/u-wave-web.png"
          alt="Screenshot of the desktop version of the üWave Web Client"
          className={classes.screenshot}
        />
      </div>
    </div>
  </div>
);

Index.propTypes = {
  classes: PropTypes.shape({
    hero: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    screenshots: PropTypes.string.isRequired,
    screenshot: PropTypes.string.isRequired,
  }).isRequired,
};

export default enhance(Index);
