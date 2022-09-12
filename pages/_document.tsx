// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
<link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap'
            rel='stylesheet'
          />

          <script
            data-token={`${process.env.SPLITBEE_ANALYTICS_CODE}`}
            async
            src='https://cdn.splitbee.io/sb.js'
          ></script>

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_CODE}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.GOOGLE_ANALYTICS_CODE}', {
                        page_path: window.location.pathname,
                        });
                    `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
