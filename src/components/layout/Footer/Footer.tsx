import React from 'react'

const Footer = () => {
  return (
    <div className='bg-dark_blue mt-44 p-32 text-center text-white'>
      <h2 className=' font-bold'><span className='text-orange'>SUBSCRIBE</span> TO GET UPDATES</h2>
      <h5 className='font-semibold tracking-widest'>STAY UP TO DATE!</h5>
      <div className='mt-20 gap-x-12'>
        <input className='text-black h-[43px] lg:h-[73px] w-[55%] lg:w-[45%] mr-12 px-12 text-4xl' placeholder='Enter your Email' type="text" name="name" id="name" />
        <button>SUBSCRIBE</button>
      </div>
      <p className='text-white text-3xl mt-16 '>Please note: The Form above requires Elementor Pro. You can, of course, use any other free contact form plugins like Contact form  7  or WPForms.</p>
    </div>
  )
}

export default Footer
