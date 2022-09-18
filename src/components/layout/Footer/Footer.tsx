import React from 'react'
import { FaFacebookF, FaTwitter, FaSpotify, FaYoutube, FaInstagram  } from 'react-icons/fa'; 

const Footer = () => {

  const icons = [
    {
      icon: <FaFacebookF/> 
    },
    {
      icon: <FaTwitter/>
    },
    {
      icon: <FaSpotify/>
    },
    {
      icon: <FaYoutube/>
    },
    {
      icon: <FaInstagram/>
    },
  ]

  return (
    <>
      <main className='lg:relative lg:mt-[50rem] '>
          <div className='px-[2rem] lg:px-[17rem] lg:absolute lg:bottom-[40rem] lg:right-0 lg:left-0 my-12'>
                <div className='bg-dark_blue mt-44 p-20 lg:p-56 text-center text-white'>
                    <h2 className=' font-normal font-oswald'><span className='text-orange'>SUBSCRIBE</span> TO GET UPDATES</h2>
                    <h5 className='font-semibold tracking-widest'>STAY UP TO DATE!</h5>
                    <div className='mt-20 gap-4 flex items-center justify-center'>
                      <input className='text-black h-[4.7rem] lg:h-[82px] w-[55%] lg:w-[48%] px-12 text-4xl' placeholder='Enter your Email' type="text" name="name" id="name" />
                      <button>SUBSCRIBE</button>
                    </div>
                    <p className='text-white text-3xl mt-8 lg:w-[68%] mx-auto '>Please note: The Form above requires Elementor Pro. You can, of course, use any other free contact form plugins like Contact form  7  or WPForms.</p>
                </div>
          </div>

          <div className='mx-[2rem] lg:mx-[10rem]'>
                <div className=' bg-white pb-60 pt-44 lg:pt-[40rem] -mt-16 lg:-mt-0 mb-24'>
                            <div className='text-center font-medium'>
                                  <p>jones@cssigniter.com</p>
                                  <p>2019 © Robert, All right reserved.</p>
                            </div>

                            <div className=' flex justify-center mt-12'>
                                  {icons.map((item, index) => {
                                    return <>

                                          <div key={index} className="icon-box" >
                                              <h4>{item.icon}</h4>
                                          </div>
                                    </>
                                  })}
                            </div>
                </div>
          </div>
      </main>
    </>
  )
}

export default Footer
