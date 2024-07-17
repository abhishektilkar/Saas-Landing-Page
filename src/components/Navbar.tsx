import Image from 'next/image';
import logoImage from '../assets/images/logosaas.png';
import MenuIcon from '../assets/icons/menu.svg';


export const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='container'>
        <div className='py-4 flex items-center justify-between'>
          <div className='relative'>
            <div className='absolute w-full top-2 bottom-0 bg-[liner-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md'></div>
            <Image
              src={logoImage}
              alt='Saas logo'
              className='h-12 w-12 relative'
            />
          </div>
          <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'> 
            <MenuIcon className='text-white' />
          </div>
          <nav className='flex gap-6 items-center'>
            <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>About</a>
            <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Updates</a>
            <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Features</a>
            <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Customers</a>
            <a href='#' className='text-opacity-60 text-white hover:text-opacity-100 transition'>Help</a>
            <button className='bg-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition'>Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  )
};