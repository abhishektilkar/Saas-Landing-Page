'use client';

import helixImage from '../assets/images/helix2.png';
import emojiStarImage from '../assets/images/emojistar.png';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  })
  const translateY = useTransform(scrollYProgress, [0,1], [-40, 40])
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center" ref={containerRef}>
      <div className="container max-w-xl relative">
        <motion.div style={{
          translateY
        }}>
          <Image src={helixImage} alt='helix image' className='absolute top-6 left-[calc(100%+36px)]'/>
        </motion.div>
        <motion.div style={{
          translateY
        }}>
          <Image src={emojiStarImage} alt='emoji star image' className='absolute -top-[120px] right-[calc(100%+24px)]'/>
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Get instant access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fuga error et eius libero cum corrupti doloribus pariatur reiciendis maxime?
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input type="email" placeholder="your@gmail.com" className="h-12 bg-white/20 rounded-lg px-5 placeholder:text-[#9CA3AF] sm:flex-1"/>
          <button className="bg-white text-black h-12 rounded-lg px-5">Get access</button>
        </form>
      </div>
    </div>
  );
};
