import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        <title>OmniMart</title>
        <meta
          name="description"
          content="TecShop - Your ultimate tech store developed with Next.js/TypeScript/TailwindCSS by MisalStack"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" type="image/png" sizes="32x32" href="/images/OmniMart-favicon.png" />
  
      </Head>
      <body className="px-5 xl:px-16">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
