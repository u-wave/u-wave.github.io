import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import yellow from '@material-ui/core/colors/yellow';
import withLayout from '../layout/src/withLayout';
import Instructions from './install.mdx';

const enhance = withLayout({ Link });

const useRootStyles = makeStyles(theme => ({
  content: {
    ...theme.mixins.gutters(),
    maxWidth: 1024,
    margin: 'auto',
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(6) + 56,
    color: '#000',
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
