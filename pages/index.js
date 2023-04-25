import Head from 'next/head'
import { Divider, Input, Avatar } from '@mantine/core'
import Tweet from '@/components/Tweet'
import { BsSearch } from 'react-icons/bs'


export default function Home() {

  return (
    <>
      <Head>
        <title>Home / Twitter</title>
      </Head>
      <div>
        <main className='absolute ml-80 w-[598px]'>
          <div>
            <p className='font-bold mt-2'>Home</p>
            <div className='-ml-8'>
              <Divider className='mt-6' />
              {/* Tweet Modal */}
              <div>
                <section className="w-full flex px-3 pt-2">
                  <div className="mr-1">
                    <Avatar src={null} alt="no image here" radius='xl' />
                  </div>
                  <div className="flex-1">
                    <textarea className="w-full h-[80px] p-2 bg-transparent outline-none placeholder-gray-400  resize-none" rows="4" placeholder="What's happening?"></textarea>
                    <div className='flex items-center justify-between '>
                      <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600 hover:text-blue-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWxidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600 hover:text-blue-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600 hover:text-blue-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 hover:text-blue-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <button className="transition duration-500 ease-in-out bg-blue-500 bg-opacity-50 hover:bg-opacity-100 text-white text-opacity-50 hover:text-opacity-100 py-2 px-3 rounded-full text-base font-bold focus:outline-none">Tweet</button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <Divider className='-ml-8 mt-6' />

          {/* TWEETS */}
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
        <div className="absolute -mt-3 h-full border-l border-gray-300 ml-[57.4rem]"></div>
      </div>
      <div>
        <div className='fixed ml-[540px]'>
          <Input type="text"
            placeholder='Search Twitter'
            className='w-[330px] h-[39px]'
            radius='xl'
            icon={<BsSearch className='' />}
          />
        </div>
      </div>
    </>
  )
}
