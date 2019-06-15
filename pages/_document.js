import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { createGenerateClassName, ServerStyleSheets, StylesProvider } from '@material-ui/styles';
import cssnano from 'cssnano';

const globalStyles = `
  body { font-family: "Open Sans", sans-serif; }
`;

export default class extends Document {
  static async getInitialProps({ renderPage }) {
    const sheets = new ServerStyleSheets();
    const generateClassName = createGenerateClassName();
    const page = renderPage(Page => props => sheets.collect(
      <StylesProvider generateClassName={generateClassName}>
        <Page {...props} />
      </StylesProvider>
    ));

    const css = sheets.toString();
    const minifiedCss = await cssnano.process(css);

    return {
      ...page,
      styles: (
        <style id="jss" dangerouslySetInnerHTML={{ __html: minifiedCss }} />
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
