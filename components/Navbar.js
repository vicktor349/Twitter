import React from 'react'
import { FiTwitter } from 'react-icons/fi'
import { BiHomeCircle } from 'react-icons/bi'
import { CiHashtag, CiMail, CiViewList, CiUser, CiCircleMore } from 'react-icons/ci'
import { BsBell, BsBookmark } from 'react-icons/bs'
import { TfiMore } from 'react-icons/tfi'
import { Avatar } from '@mantine/core';
import profilePicture from '../public/images/Avatar/Profile.png'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div className="absolute -mt-3 h-full border-l border-gray-300 ml-72"></div>
            <div className='w-[255px]'>
                <div className='text-lg leading-6'>
                    <div>
                        <FiTwitter className='relative fill-[#1DA1F2] p-1 text-[#1DA1F2] w-7 h-7' />
                    </div>
                    <div className='mt-4'>
                        <div className='-ml-6 flex justify-center items-center h-[50px] cursor-pointer w-36 hover:bg-hover-color hover:rounded-[9999px]'>
                            <Link href='/'><BiHomeCircle className='inline-block w-[30px] h-[30px]' /><span className='text-[#0F1419] ml-5'>Home</span></Link>
                        </div>
                        <div className='-ml-[23px] flex justify-center items-center h-[50px] w-36 cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                            <CiHashtag className='inline-block w-8 h-8 ml-2' /> <span className='text-[#0F1419] ml-5'>Explore</span>
                        </div>
                        <div className='-ml-7 flex justify-center items-center h-[50px] w-48 cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                            <BsBell className='inline-block w-[30px] h-[30px] ml-1' /> <span className='text-[#0F1419] ml-5'>Notification</span>
                        </div>
                        <div className='-ml-[28px] flex justify-center items-center h-[50px] w-44 cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                            <CiMail className='inline-block w-[30px] h-[30px] ml-1' /> <span className='text-[#0F1419] ml-5'>Messages</span>
                        </div>
                        <div className='-ml-[23px] flex justify-center items-center h-[50px] w-44 cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                            <BsBookmark className='inline-block w-[30px] h-[30px] ml-1' /><span className='text-[#0F1419] ml-5'>Bookmarks</span>
                        </div>
                        <div className='-ml-[18px] flex items-center h-[50px] w-32 cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                            <CiViewList className='inline-block w-[30px] h-[30px] ml-4' /><span className='text-[#0F1419] ml-5'>Lists</span>
                        </div>
                        <div className='-ml-[14px] flex items-center h-[50px] w-36 cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                            <CiUser className='inline-block w-[30px] h-[30px] ml-3' /> <span className='text-[#0F1419] ml-5'>Profile</span>
                        </div>
                        <div className='-ml-[14px] flex items-center h-[50px] w-32 cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                            <CiCircleMore className='inline-block w-[30px] h-[30px] ml-3' /> <span className='text-[#0F1419] ml-5'>More</span>
                        </div>
                    </div>
                    <div className='bg-tweet-button px-[93px] py-[15px] mt-6 w-[228px] cursor-pointer select-none rounded-[9999px] hover:bg-hover-tweet-button'>
                        <p className='text-white font-bold text-center text-sm'>Tweet</p>
                    </div>
                    <div className='flex justify-center items-center mt-20 text-base px-3 py-2 cursor-pointer rounded-[99px] hover:bg-hover-color'>
                        <Avatar src={profilePicture} alt="it's me" radius='xl' />
                        {console.log(profilePicture)}
                        <div className='ml-2 -mt-1'>
                            <p className='font-bold'>Jerome Bell</p>
                            <p className='font-lighter text-[#5B7083]'>@afonsoinocente</p>
                        </div>
                        <TfiMore className='ml-12 text-xl' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar