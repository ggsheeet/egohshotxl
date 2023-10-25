import React from 'react'
import { CTAone } from './CTA'

export const TitleHome = () => {
    return (
        <>
            <h1 className='font-poppins7 text-primary text-center text-[1.6rem] md:text-[2.1rem] lg:text-[2.5rem] 2xl:text-[2.5vw] px-[2.5%]'>
                Innovadora técnica para agrandamiento del pene
                <span className='text-accent'>{' '}SIN CIRUGÍA</span>
            </h1>
            <h3 className='font-poppins4 text-neutral text-center text-[1rem] md:text-[1.3rem] lg:text-[1.4rem] 2xl:text-[1.3vw] pt-[1rem] pb-[1.5rem] lg:pt-[1.5rem] lg:pb-[2rem] px-[2.5%]'>
                Te explicaremos como el
                <span className='font-poppins6 text-primary'> EGOH SHOT XL® PREMIUM </span> 
                ha ayudado a miles a mejorar su vida sexual
            </h3>
            <div className='flex items-center justify-center pb-[0.75rem] lg:pb-[1%]'>
                <CTAone />
            </div>
        </>
    )
}

export const TitleExit = () => {
    return (
        <>
            <h1 className='font-poppins7 text-primary text-center text-[1.6rem] md:text-[2.1rem] lg:text-[2.3rem] 2xl:text-[2.5vw] px-[2.5%]'>
                Innovadora técnica para agrandamiento del pene
                <span className='text-accent'>{' '}SIN CIRUGÍA</span>
            </h1>
        </>
    )
}