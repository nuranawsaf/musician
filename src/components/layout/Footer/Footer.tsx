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
      <main className='ft-outWrapper'>
          <div className='ft-inWrapper'>
                <div className='ft-infoBg'>
                    <h2 className=' font-normal font-oswald'><span className='text-orange'>SUBSCRIBE</span> TO GET UPDATES</h2>
                    <h5 className='font-semibold tracking-widest'>STAY UP TO DATE!</h5>
                    <div className='input-wrap'>
                      <input className='input-style' placeholder='Enter your Email' type="text" name="name" id="name" />
                      <button>SUBSCRIBE</button>
                    </div>
                    <p className='footer-p'>Please note: The Form above requires Elementor Pro. You can, of course, use any other free contact form plugins like Contact form  7  or WPForms.</p>
                </div>
          </div>

          <div className='lg:mx-[2rem] 2xl:mx-[3.5rem]'>
                <div className='icon-bgStyle'>
                            <div className='text-center font-medium '>
                                  <p className='text-sm lg:text-2xl'>jones@cssigniter.com</p>
                                  <p className='text-sm lg:text-2xl'>2019 © Robert, All right reserved.</p>
                            </div>

                            <div className=' flex justify-center mt-4 lg:mt-8'>
                                  {icons.map((item, index) => {
                                    return <>

                                          <div key={index} className="icon-box" >
                                              <a href="" className='lg:text-3xl'>
                                                {item.icon}
                                              </a>
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
