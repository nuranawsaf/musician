import React from 'react'

const About = () => {
  return (
    <div className='px-40 '>
      <div className='bg-white p-32'>
        <div className=' grid lg:grid-cols-2  justify-items-center gap-y-24'>
            <div className='ml-20'>
                <div>
                    <h1>ABOUT ME</h1>
                    <h5 className='text-orange font-semibold'>SINGER & SONGWRITER</h5>
                </div>
                <img className='mt-52' src="/assests/images/sing1.jpg" alt="" />
            </div>

            <div className='lg:absolute'>
                <div className=' flex justify-end ml-[5rem] lg:ml-[35rem]'>
                    <img className='lg:w-[70%] ' src="/assests/images/sing2.jpg" alt="" />
                </div>
            </div>
        </div>
       
       <div>
       <div className=' text-justify flex lg:justify-end mt-20 lg:-mt-40 lg:mr-24'>
            <p className=' lg:w-[40%]'>Vestibulum tempor eu risus posuere. Vivamus ex augue, tincidunt vel urna vitae, maximus luctus nunc. Vestibulum et tempus sem, eu consequat leo. In pellentesque eleifend augue a viverra.</p>
        </div>
        <div className=' text-center lg:ml-[49rem] mt-12'>
            <button className='text-black'>LEARN MORE</button>
        </div>
       </div>

      </div>
    </div>
  )
}

export default About
