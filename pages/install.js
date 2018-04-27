import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import yellow from 'material-ui/colors/yellow';
import md from 'markdown-in-js';
import withLayout from '../withLayout';

const enhance = compose(withLayout, withStyles(theme => ({
  content: {
    maxWidth: 800,
    margin: 'auto',
    padding: 48,
  },
})));

const mdStyles = withStyles(theme => ({
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

const Link = mdStyles(({ classes, ...props }) => (
  <a className={classes.link} {...props} />
));
const Alert = mdStyles(({ classes, children }) => (
  <blockquote className={classes.alert}>
    {children}
  </blockquote>
));

const instructions = md({
  a: Link,
  blockquote: Alert,
})`
  > **Warning!** Not everything described on this page is ready just yet.
  > In the mean time, please visit the [Gitter](https://gitter.im/u-wave/Lobby) or the #uwave channel in the [WLK Slack](https://slack.wlk.yt) for updates.

  # Installing üWave

  This page describes how to install üWave from scratch using the [üWave CLI](/cli).
  This is aimed at a production environment—for a development installation, check out the [üWave Web Client](/web) documentation.
  If you run into trouble, try visiting the [Gitter](https://gitter.im/u-wave/Lobby) chat room!

  ## Dependencies

  To run üWave, you need a server with:

  * Node.js
  * MongoDB
  * Redis

  ### Ubuntu 16.04

  On Ubuntu 16.04, the following commands will install everything we need:

  \`\`\`bash
  echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
  curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

  sudo apt-get update
  sudo apt-get install -y build-essential mongodb-org nodejs redis-server
  \`\`\`

  ## Install

  We will use the \`pm2\` tool to manage the üWave server process and logging, and we will use the üWave CLI to configure the server.

  With \`npm\` do:

  \`\`\`bash
  npm install --global pm2 u-wave-cli
  \`\`\`

  Next, we will install the \`logrotate\` module for \`pm2\`, which automatically archives log files by date.
  That way log files don't grow to many hundreds of MBs.

  \`\`\`bash
  pm2 install pm2-logrotate
  \`\`\`

  Now we will start the configuration of the üWave server itself.
  The CLI will ask some questions about the necessary databases, API keys and administrator account credentials.

  \`\`\`bash
  u-wave init
  \`\`\`
`

const Install = ({ classes }) => (
  <div className={classes.content}>{instructions}</div>
);

Install.propTypes = {
  classes: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default enhance(Install);
