import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { createGenerateClassName } from 'material-ui/styles';

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
      styles: sheets.toString(),
    };
  }

  render() {
    const { styles } = this.props;

    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: 'body { margin: 64px 0 0 0; font-family: "Open Sans", sans-serif; }' }} />
          <style id="jss" dangerouslySetInnerHTML={{ __html: styles }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
