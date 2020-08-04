import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import withLayout from '../layout/src/withLayout';

const useStyles = makeStyles(theme => ({
  hero: {
    ...theme.mixins.gutters(),
    background: theme.palette.primary.main,
    paddingTop: theme.spacing(6) + 56,
    paddingBottom: theme.spacing(6),
  },
  screenshots: {
    width: '90%',
    margin: 'auto',
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '@media (max-width: 767px)': {
      flexDirection: 'column',
    },
  },
  screenshot: {
    maxWidth: '80%',
    maxHeight: '60vh',
    boxShadow: theme.shadows[6],
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      '&:first-child': { marginBottom: theme.spacing(6) },
    },
  },
  intro: {
    maxWidth: '80%',
    margin: 'auto',
  },
}));

const enhance = withLayout({ Link });

function Index() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>üWave</title>
      </Head>
      <div className={classes.hero}>
        <Typography className={classes.intro} variant="subtitle1">
          üWave is a self-hosted collaborative listening platform. Users take
          turns playing media—songs, talks, gameplay videos, or anything else—from
          a variety of media sources like YouTube and SoundCloud.
        </Typography>
        <div className={classes.screenshots}>
          <img
            src="/images/u-wave-web-mobile.png"
            alt="Screenshot of the mobile version of the üWave Web Client"
            className={classes.screenshot}
          />
          <img
            src="/images/u-wave-web.png"
            alt="Screenshot of the desktop version of the üWave Web Client"
            className={classes.screenshot}
          />
        </div>
      </div>
    </div>
  );
}

export default enhance(Index);
