import { poppins } from '../styles/fonts';
import { Html, Head, Main, NextScript } from 'next/document';
import Layout from '@/components/layout';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className={`p-20 debug-screens ${poppins} font-poppins`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
