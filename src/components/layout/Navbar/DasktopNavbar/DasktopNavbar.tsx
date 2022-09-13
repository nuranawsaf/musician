import React from 'react'
import Link from 'next/link';
import { navdata as data, navdata } from '../navdata';

const DasktopNavbar = () => {
  return (
    <div  className=' absolute w-full py-12 '>
       <nav className='invisible  lg:visible'>
          <div className='container flex justify-end bg-transparent gap-28 text-white  '>
            {data.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                    {item.title}
                </Link>
              )
            })}
          </div>
       </nav>
    </div>
  )
}

export default DasktopNavbar
