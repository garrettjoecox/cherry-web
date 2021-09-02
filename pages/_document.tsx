import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
        <link
            href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
            rel="stylesheet"
        />
        <title>Cherry</title>
        <meta name="description" content="The healthy Social Network" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}