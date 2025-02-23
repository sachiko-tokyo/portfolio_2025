'use client'
import Image from 'next/image'
import { heroIcons} from '@/assets'
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion'
import { useState } from 'react'

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({innerWidth: 0, innerHeight: 0})
  const [mouseMove, setMouseMove] = useState(false)
  const [buttonHover, setButtonHover] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e: any) => {    
    const {clientX, clientY} = e
    x.set(clientX)
    y.set(clientY)
    // console.log(clientX, clientY, x, y)
  }

    const handleMouseEnter = () => {
      setWindowOffset({innerWidth: window.innerWidth, innerHeight: window.innerHeight })
      setMouseMove(true)
      // console.log(innerWidth, innerHeight)
    }

    const {innerWidth, innerHeight} = windowOffset

    const xSpring = useSpring(x, {stiffness: 100, damping: 10})
    const ySpring = useSpring(y, { stiffness: 100, damping: 10})
    
    const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30])
    const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50])
  
  return (
    <div className="h-screen grid place-items-center" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
      <div>
        <div className='flex flex-col items-center justify-center gap-y-3 font-light capitalize'>
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: '0.1s',
            }}
            transition={{ opacity: { delay: 0.4 }}}
          >
            <Image src={'/icon-sachiko.png'} alt='Sachiko Icon' width={400} height={400} priority={true} className='h-auto w-[150px]'/>
            <motion.span className='absolute text-3xl font-semibold text-white' initial={{scale: 0}} animate={{ opacity: buttonHover ? 0 : 1, scale: buttonHover ? 2 : 0, y: buttonHover ? -40: 0 }}>Hi</motion.span>
          </motion.div>
          <h1 className='text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl transition-colors'>Frontend developer based in Kamakura👽</h1>
        </div>
        <div className='mt-8 flex justify-center gap-x-10 text-3xl text-primary sm:text-2xl'>
        {heroIcons.map((item, i) => (
          <a
            href={item.link}
            key={i}
            className="rounded-lg hover:bg-second hover:text-bg transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
        </div>
       <a href="mailto: sachiko.dev.0811@gmail.com" className='mx-auto mt-7 block w-max rounded-lg bg-second px-3 py-1 font-light text-bg capitalize tracking-wider hover:bg-bg hover:text-primary transition-colors' onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)}>Talk to me!</a>
      </div>
    </div>
  )
}

export default Hero