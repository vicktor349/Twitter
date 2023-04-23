import React from 'react'
import Image from 'next/image'
import { FiTwitter } from 'react-icons/fi'
import { BiHomeCircle } from 'react-icons/bi'
import { CiHashtag, CiMail, CiViewList, CiUser, CiCircleMore } from 'react-icons/ci'
import { BsBell, BsBookmark } from 'react-icons/bs'
import { TfiMore } from 'react-icons/tfi'
import { Avatar } from '@mantine/core';
import { killua } from '../public/images/Avatar/Killua.jpg'

const Navbar = () => {
    return (
        <div className='w-[255px]'>
            <div className='text-lg leading-6'>
                <div className='h-[50px] w-[255px]'>
                    <FiTwitter className='fill-[#1DA1F2] text-[#1DA1F2] ' />
                </div>
                <div className='flex justify-center items-center h-[50px] w-[255px] cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                    <BiHomeCircle className='inline-block w-[30px] h-[30px]' /><span className='text-[#0F1419]'>Home</span>
                </div>
                <div className='flex justify-center items-center h-[50px] w-[255px] cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                    <CiHashtag className='inline-block w-[30px] h-[30px]' /> <span className='text-[#0F1419]'>Explore</span>
                </div>
                <div className='flex justify-center items-center h-[50px] w-[255px] cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                    <BsBell className='inline-block w-[30px] h-[30px]' /> <span className='text-[#0F1419]'>Notification</span>
                </div>
                <div className='flex justify-center items-center h-[50px] w-[255px] cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                    <CiMail className='inline-block w-[30px] h-[30px]' /> <span className='text-[#0F1419]'>Messages</span>
                </div>
                <div className='flex justify-center items-center h-[50px] w-[255px] cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                    <BsBookmark className='inline-block w-[30px] h-[30px]' /><span className='text-[#0F1419]'>Bookmarks</span>
                </div>
                <div className='flex justify-center items-center h-[50px] w-[255px] cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                    <CiViewList className='inline-block w-[30px] h-[30px]' /><span className='text-[#0F1419]'>Lists</span>
                </div>
                <div className='flex justify-center items-center h-[50px] w-[255px] cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                    <CiUser className='inline-block w-[30px] h-[30px]' /> <span className='text-[#0F1419]'>Profile</span>
                </div>
                <div className='flex justify-center items-center h-[50px] w-[255px] cursor-pointer hover:bg-hover-color hover:rounded-[9999px]'>
                    <CiCircleMore className='inline-block w-[30px] h-[30px]' /> <span className='text-[#0F1419]'>More</span>
                </div>
                <div className='bg-[#1DA1F2] px-[93px] py-[15px] w-[228px] rounded-[9999px]'>
                    <p className='text-white font-bold text-center text-sm'>Tweet</p>
                </div>+
                <div className='flex mt-24 text-base'>
                    <Avatar src={killua} alt="it's me" radius='xl' />
                    <div className='ml-2 -mt-1'>
                        <p className='font-bold'>Jerome Bell</p>
                        <p className='font-lighter text-[#5B7083]'>@afonsoinocente</p>
                    </div>
                    <TfiMore className='ml-12 mt-4 text-xl' />
                </div>
            </div>
        </div>
    )
}

export default Navbar