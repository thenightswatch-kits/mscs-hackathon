import { Html, Head, Main, NextScript } from 'next/document'
import { AuthContextProvider } from '@/context/AuthContext'

export default function Document({children}:any) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
