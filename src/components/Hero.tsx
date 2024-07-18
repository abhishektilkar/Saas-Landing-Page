import Image from 'next/image';
import ArrowWIcon from '../assets/icons/arrow-w.svg';
import cursorImage from '../assets/images/cursor.png';
import messageImage from '../assets/images/message.png';

export const Hero = () => {


  return (
    <div className='bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip'>
      <div className='container relative z-10'>
        <div className="flex items-center justify-center">
        <a href='#' className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
          <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
            Version 2.0 is here
          </span>
          <span className='inline-flex items-center gap-1'>
            <span>
              Read More
            </span>
            <ArrowWIcon/>
          </span>
        </a>
        </div>
        <div className='flex justify-center mt-8'>
          <div className='inline-flex relative'>
            <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex'>One Task <br/> at a Time</h1>
            <Image src={cursorImage} height="200" width="200" alt='Cursor Image' className='absolute right-[476px] top-[108px] hidden sm:inline'/>
            <Image src={messageImage} height="200" width="200" alt='Message Image' className='absolute top-[56px] left-[498px] hidden sm:inline'/>
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='text-center text-xl mt-8 max-w-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, 
            cumque quisquam hic nisi dignissimos corrupti! Eligendi quos et blanditiis.
          </p>
        </div>
        <div className='flex justify-center mt-8 mb-0'>
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium z-20 hover:bg-opacity-80 transition'>Get for free</button>
        </div>
      </div>
      <div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] jg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[84%] z-0'>
      </div>
    </div>
  )
};
