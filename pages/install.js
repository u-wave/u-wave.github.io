import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { yellow } from '@mui/material/colors';
import { createLayout } from '../layout';
import Instructions from './install.mdx';

const enhance = createLayout({ Link });

const useRootStyles = makeStyles(theme => ({
  content: {
    maxWidth: 1024,
    margin: 'auto',
    color: '#000',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(6) + 56,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
}));

const useMdStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': { color: theme.palette.primary.light },
  },
  alert: {
    margin: 0,
    padding: '12px 16px 12px 24px',
    background: yellow[200],
    borderLeft: `3px solid ${yellow[600]}`,
  },
}));

function MdLink(props) {
  const classes = useMdStyles();
  return (
    <a className={classes.link} {...props} />
  );
}

function Alert({ children }) {
  const classes = useMdStyles();
  return (
    <blockquote className={classes.alert}>
      {children}
    </blockquote>
  );
}

const components = {
  a: MdLink,
  blockquote: Alert,
  p: (props) => <Typography variant="body1" {...props} />,
  h1: (props) => <Typography variant="h1" {...props} />,
  h2: (props) => <Typography variant="h2" {...props} />,
  h3: (props) => <Typography variant="h3" {...props} />,
  h4: (props) => <Typography variant="h4" {...props} />,
  h5: (props) => <Typography variant="h5" {...props} />,
};

function Install() {
  const classes = useRootStyles();

  return (
    <>
      <Head>
        <title>üWave · Install</title>
      </Head>
      <MDXProvider components={components}>
        <div className={classes.content}>
          <Instructions />
        </div>
      </MDXProvider>
    </>
  );
}

export default enhance(Install);
