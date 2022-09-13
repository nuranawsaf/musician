import React from 'react'
import MenuDrawer from './MenuDrawer'
import { expandMenuReducer } from '../../../../redux/slices/navbarSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/store/store';
import { AiOutlineMenu } from 'react-icons/ai'

const MobileNavbar: React.FC = () => {
    const dispatch = useAppDispatch();

  return (
    <nav className='block lg:hidden   py-4 absolute top-0 right-0'>
      <div className='container flex justify-end'>

        <div className=' text-center mr-16 mt-12'>
          <button
            onClick={() => dispatch(expandMenuReducer())}
            className='bg-transparent shadow-none p-0 border-none'
          >
            {/* <img className='w-[35px]' src='/assests/icons/menu.svg' alt='Menu Icon' /> */}
            <AiOutlineMenu className=' w-[35px] h-full text-white ' />
          </button>
        </div>
      </div>

      <MenuDrawer/>
    </nav>
  )
}

export default MobileNavbar
