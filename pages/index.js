import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'

export default function Home({session}) {
  if(!session) return <Login />
  return (
    <div className="">
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      <main>
        {/* sidebar */}

        {/* feeds */}

        {/* widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  //get user
  const session = await getSession(context);

  return {
    props:{
      session
    }
  }
}
