import { ConfigProvider } from 'antd'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#6B47ED',
            fontSize: 16,
          },
        }}
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  )
}
