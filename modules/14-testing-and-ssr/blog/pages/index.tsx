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
        <p>
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </p>
      </Page>
    </>
  )
}
