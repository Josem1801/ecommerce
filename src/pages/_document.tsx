import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Main,
  NextScript,
  Head,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        // eslint-disable-next-line implicit-arrow-linebreak
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
            rel="stylesheet"
          />
          <link href=" https://fonts.googleapis.com/css2?family=Water+Brush&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
