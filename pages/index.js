import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='mx-[88px] mt-[10px]'>
        <Navbar />
      </div>
    </main>
  )
}
