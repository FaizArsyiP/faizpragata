import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en" className="sm:scroll-smooth"> 
      <Head>
        <Link rel="stylesheet" href="devicon.min.css"></Link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
