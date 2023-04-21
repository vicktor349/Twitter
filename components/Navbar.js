import React from 'react'
import Image from 'next/image'
import { FiTwitter } from 'react-icons/fi'
import { BiHomeCircle, BiDotsHorizontalRounded } from 'react-icons/bi'
import { CiHashtag, CiMail, CiViewList, CiUser, CiCircleMore } from 'react-icons/ci'
import { BsBell, BsBookmark } from 'react-icons/bs'
import { Avatar } from '@mantine/core';
import { killua } from '../public/images/Avatar/Killua.jpg'

const Navbar = () => {
    return (
        <div>
            <div className='text-lg leading-6'>
                <div className='h-[50px] w-[255px]'>
                    <FiTwitter className='fill-[#1DA1F2] text-[#1DA1F2]' />
                </div>
                <div className='h-[50px] w-[255px]'>
                    <BiHomeCircle className='inline-block text-lg w-[30px] h-[30px]' /><span className='font-bold text-[#0F1419] align-middle ml-5'>Home</span>
                </div>
                <div className='h-[50px] w-[255px]'>
                    <CiHashtag className='inline-block w-[30px] h-[30px]' /> <span className='font-bold text-[#0F1419] align-middle ml-4'>Explore</span>
                </div>
                <div className='h-[50px] w-[255px]'>
                    <BsBell className='inline-block w-[30px] h-[30px]' /> <span className='font-bold text-[#0F1419] align-middle ml-4'>Notification</span>
                </div>
                <div className='h-[50px] w-[255px]'>
                    <CiMail className='inline-block w-[30px] h-[30px]' /> <span className='font-bold text-[#0F1419] align-middle ml-4'>Messages</span>
                </div>
                <div className='h-[50px] w-[255px]'>
                    <BsBookmark className='inline-block w-[30px] h-[30px]' /><span className='font-bold text-[#0F1419] align-middle ml-5'>Bookmarks</span>
                </div>
                <div className='h-[50px] w-[255px]'>
                    <CiViewList className='inline-block w-[30px] h-[30px]' /><span className='font-bold text-[#0F1419] align-middle ml-5'>Lists</span>
                </div>
                <div className='h-[50px] w-[255px]'>
                    <CiUser className='inline-block w-[30px] h-[30px]' /> <span className='font-bold text-[#0F1419] align-middle ml-4'>Profile</span>
                </div>
                <div className='h-[50px] w-[255px]'>
                    <CiCircleMore className='inline-block w-[30px] h-[30px]' /> <span className='font-bold text-[#0F1419] align-middle ml-4'>More</span>
                </div>
                <div className='bg-[#1DA1F2] px-[93px] py-[15px] w-[228px] rounded-[9999px]'>
                    <p className='text-white font-bold text-center text-sm'>Tweet</p>
                </div>
                <div className='flex mt-32'>
                    <Avatar src={killua} alt="it's me" radius='xl' />
                    <div className='ml-2 -mt-1'>
                        <p className='font-bold'>Jerome Bell</p>
                        <p className='font-lighter text-[#5B7083]'>@afonsoinocente</p>
                    </div>
                    <BiDotsHorizontalRounded />
                </div>
            </div>
        </div>
    )
}

export default Navbar