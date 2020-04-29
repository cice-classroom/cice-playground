import Link from 'next/link'
import Head from 'next/head'
import { Page } from '../components/page'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Page>
    </>
  )
}
