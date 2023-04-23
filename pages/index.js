import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home / Twitter</title>
      </Head>
      <main>
        <div className='mx-[88px] mt-[10px]'>
          <Navbar />
        </div>
      </main>
    </>
  )
}
