import React from 'react'

const Footer = () => {
  return (
    <div className='bg-dark_blue mt-44 p-32 text-center text-white'>
      <h2 className=' font-normal font-oswald'><span className='text-orange'>SUBSCRIBE</span> TO GET UPDATES</h2>
      <h5 className='font-semibold tracking-widest'>STAY UP TO DATE!</h5>
      <div className='mt-20 gap-4 flex items-center justify-center'>
        <input className='text-black h-[5rem] lg:h-[73px] w-[55%] lg:w-[45%] px-12 text-4xl' placeholder='Enter your Email' type="text" name="name" id="name" />
        <button>SUBSCRIBE</button>
      </div>
      <p className='text-white text-3xl mt-8 w-[60%] mx-auto '>Please note: The Form above requires Elementor Pro. You can, of course, use any other free contact form plugins like Contact form  7  or WPForms.</p>
    </div>
  )
}

export default Footer
