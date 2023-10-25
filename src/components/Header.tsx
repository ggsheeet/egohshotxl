import React from 'react'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className='bg-primary flex items-center justify-center py-[1rem] lg:py-[1.2rem] 2xl:py-[2vh] sticky top-0 z-50'>
      <Image
        src="/logos/drgerardoleon-min.png"
        alt='DrGL'
        width={4167}
        height={1084}
        className='w-[12rem] lg:w-[9.3rem] 2xl:w-[12vw] h-auto'
      />
    </div>
  )
}
