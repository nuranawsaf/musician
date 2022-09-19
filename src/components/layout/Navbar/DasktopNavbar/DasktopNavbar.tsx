import React, { Children, useState } from 'react'
import Link from 'next/link';
import { navdata as data } from '../navdata';
import { useRouter } from 'next/router'

const DasktopNavbar = () => {
const [active , setActive]=useState(0)
  return (
    <div  className='wrapper  absolute w-full  py-8 z-10'>
       <nav className='invisible  lg:visible  flex justify-end '>
          <div className=' w-full flex justify-end bg-transparent gap-12 text-white  '>
            {data.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                    <a className={`${active === index ? "text-orange" : "white"}`} onClick={()=> setActive(index)} href="">
                      {item.title}
                      </a>
                </Link>
              )
            })}
          </div>
       </nav>
    </div>
  )
}

export default DasktopNavbar


