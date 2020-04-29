import React from 'react'
import '../styles/index.css'

export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return <Component {...pageProps} />
}
