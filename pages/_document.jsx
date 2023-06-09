import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";


export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  // setGoogleTags() {
  //   return {
  //     __html: `
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag(){dataLayer.push(arguments);}
  //     gtag('js', new Date());

  //     gtag('config', 'UA-141654226-3');
  //     `
  //   };
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/DevHugs.png" type="image/x-icon" />
          <meta name="author" content="Nilarjun Das" />

          <link rel="apple-touch-icon" href="/DevHugs.png" />

          <link
            rel="preload"
            href="/fonts/Lato-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Lato-Regular.ttf"
            as="font"
            crossOrigin=""
          />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
		<script
		async={true}
		src="https://w.appzi.io/w.js?token=duILS"
		/>


		<script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
		<script
            dangerouslySetInnerHTML={{
              __html: `
              window.addEventListener('load', function() {
                kofiWidgetOverlay.draw('impydev', {
                  'type': 'floating-chat',
                  'floating-chat.donateButton.text': 'Support me',
                  'floating-chat.donateButton.background-color': '#d9534f',
                  'floating-chat.donateButton.text-color': '#fff'
                });
              });
              `,
            }}
          />

        </body>
      </Html>
    );
  }
}
