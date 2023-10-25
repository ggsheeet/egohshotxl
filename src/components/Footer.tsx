import React from 'react'
import Image from 'next/image'

export const Footer = () => {
    return (
        <>
            <div className='bg-gray-800 py-[2rem] px-[2rem]'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-y-[1.5rem] lg:gap-y-0 gap-x-0 lg:gap-x-[2rem] 2xl:gap-x-[4vw]'>
                    <Image
                        src="/logos/drgerardoleon-min.png"
                        alt='DrGL'
                        width={4167}
                        height={1084}
                        className='w-auto h-[4rem] 2xl:h-[4.5vh]'
                    />
                    <Image
                        src='/logos/egohshot.png'
                        alt='egohshot'
                        width={1201}
                        height={361}
                        className='w-auto h-[4rem] 2xl:h-[4.5vh]'
                    />
                </div>
                <p className='font-poppins5 text-center text-secondary 2xl:text-[1vw] pt-[2rem] pb-[1.5rem]'>
                    Hospital San Angel Inn Universidad​ | Hospital Star Medica Lomas Verdes |Teléfono: 5549 97 7551 | Whatsapp: 5543 46 8098
                </p>
                <p className='font-poppins5 text-center text-secondary 2xl:text-[1vw]'>Copyright © 2023 Dr Gerardo León</p>
            </div>
        </>
    )
}
