import React from 'react'

const About = () => {
  return (
    <div  className='px-[2rem] lg:px-40 '>
      <div className='bg-white px-16 lg:px-32 py-[10rem] lg:py-[30rem]'>
        <div className="lg:flex relative">
          <div className='lg:w-[50%] my-12 lg:my-0'>
                <div id='about'>
                    <h2 className='font-normal font-oswald'>ABOUT ME</h2>
                    <h5 className='text-orange font-semibold'>SINGER & SONGWRITER</h5>
                </div>
                <img className='mt-14 lg:mt-52' src="/assests/images/sing1.jpg" alt="" />
          </div>

          <div className=''>
            <h1></h1>
          </div>

          <div className='lg:absolute right-0 lg:w-[53%] '>
              <img className=' ' src="/assests/images/sing2.jpg" alt="" />
          </div>
        </div>

        <div className='flex justify-end '>
              <div className='lg:w-[42%]'>
                  <p className=' right-0 bottom-0 mt-12 lg:-mt-40  text-justify leading-tight text-5xl '>Vestibulum tempor eu risus posuere. Vivamus ex augue, tincidunt vel urna vitae, maximus luctus nunc. Vestibulum et tempus sem, eu consequat leo. In pellentesque eleifend augue a viverra.</p>
                  <button className='text-black lg:text-[20px] mt-12'>LEARN MORE</button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default About
