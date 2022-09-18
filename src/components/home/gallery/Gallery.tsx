import React from 'react'

const fes = [
    {
        url: '/assests/images/fes2.jpg'
    },
    {
        url: '/assests/images/fes3.jpg'
    },
    {
        url: '/assests/images/fes4.jpg'
    },
]

const Gallery = () => {
  return (
    <section className='px-[2rem] lg:px-40 mt-32 lg:mt-[30rem]'>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-x-20 gap-y-12'>
            <div id='discography' className='bg-white p-6 md:p-3'>
                <img src="/assests/images/fes1.jpg" alt="" />
            </div>
            <div className='text-center flex justify-center items-center'>
                <div>
                    <h2 className=' font-oswald font-normal'>GALLERY</h2>
                    <h5 className='lg:tracking-widest font-semibold text-orange'>FROM ALL OVER THE WORLD</h5>
                    <h4 className='mt-16 md:mt-8 font-roboto'>Nulla semper lectus hendrerit magna tristique, et<br />eleifend ipsum euismod augue a viverra.</h4>
                    <button className='text-black mt-16 md:mt-8'>VIEW MORE ON INSTAGRAM</button>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-24 md:gap-x-8 gap-y-16 mt-32 md:mt-16">
            {fes.map((item, index) => {
                return (
                    <div key={index} className='bg-white p-6 md:p-3'>
                        <img className=' w-full h-full lg:h-[409px]' src={item.url} alt="" />
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Gallery
