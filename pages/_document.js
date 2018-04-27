import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { createGenerateClassName } from 'material-ui/styles';

const globalStyles = `
  body { font-family: "Open Sans", sans-serif; }
`;

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const sheets = new SheetsRegistry();
    const generateClassName = createGenerateClassName();
    const page = renderPage(Page => props => (
      <JssProvider registry={sheets} generateClassName={generateClassName}>
        <Page {...props} />
      </JssProvider>
    ));

    return {
      ...page,
      styles: (
        <style id="jss" dangerouslySetInnerHTML={{ __html: sheets.toString() }} />
      ),
    };
  }

  render() {
    const { styles } = this.props;

    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
          <title>üWave</title>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="üWave is a self-hosted collaborative listening platform." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
