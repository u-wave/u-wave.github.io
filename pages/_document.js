import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { cache } from './_app';

const { extractCritical } = createEmotionServer(cache);

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCritical(initialProps.html);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        <React.Fragment key="styles">
          {initialProps.styles}
          <style id="emotion-server-side">{emotionStyles.css}</style>
        </React.Fragment>,
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="üWave is a self-hosted collaborative listening platform." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
