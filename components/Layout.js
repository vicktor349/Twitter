import React from 'react'
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className='mx-[88px] mt-[10px] grid grid-cols-3'>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout