import React, { ReactNode } from 'react'
import Navbar from './Navbar'

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const Layout = ({children}:Props) => {
  return (
    <div className=' lg:mx-[5%] mt-[2%] font-Reem-Kufi'>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout