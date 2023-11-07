import React from 'react'
import Image from 'next/image'

export const HeroHome = () => {
    return (
        <div className='flex flex-col lg:flex-row py-[5%] lg:py-[2%] gap-x-[2rem]'>
            <div className='flex flex-col items-center justify-end w-full lg:w-1/2'>
                <Image
                    src='/media/placeholderDGL.png'
                    alt='DrGL'
                    width={1430}
                    height={1324}
                    className='w-[50rem] 2xl:w-[40vw] h-[16rem] md:h-[25rem] lg:h-[27rem] 2xl:h-[38vh] object-cover object-top rounded-[0.175rem] elevation-7'
                />
                <p className='font-poppins6 text-center text-primary text-xs md:text-base lg:text-sm 2xl:text-[0.75vw] py-[0.75rem] md:py-[1rem] lg:py-[1.8%]'>Dr. Gerardo León - Urologo experto en EGOH SHOT XL®</p>
            </div>
            <ul className='flex flex-col w-full lg:w-1/2 my-auto md:pt-[0.5rem] lg:pt-0'>
                <p className='font-poppins5 text-[1.35rem] md:text-[1.6rem] lg:text-[2rem] 2xl:text-[1.9vw] text-info pb-[3%]'>Características del <span className='font-poppins6'>EGOH SHOT XL®</span></p>
                <li>
                    <Image
                        src='/icons/esicon.svg'
                        alt='icon'
                        width={182}
                        height={182}
                        className='w-[2.3rem] 2xl:w-[1.5vw] h-auto'
                    />
                    <p>Procedimiento ambulatorio, indoloro y de recuperación inmediata</p>
                </li>
                <li>
                    <Image
                        src='/icons/esicon.svg'
                        alt='icon'
                        width={182}
                        height={182}
                        className='w-[2.3rem] 2xl:w-[1.5vw] h-auto pt-0 lg:pt-1'
                    />
                    <p>El 99% de los pacientes están completamente satisfechos</p>
                </li>
                <li>
                    <Image
                        src='/icons/esicon.svg'
                        alt='icon'
                        width={182}
                        height={182}
                        className='w-[2.3rem] 2xl:w-[1.5vw] h-auto pt-0 lg:pt-1'
                    />
                    <p>Aumento del grosor y longitud del miembro</p>
                </li>
                <li>
                    <Image
                        src='/icons/esicon.svg'
                        alt='icon'
                        width={182}
                        height={182}
                        className='w-[2.3rem] 2xl:w-[1.5vw] h-auto'
                    />
                    <p>Todos los hombres con circunsición y mayoría de edad son candidatos</p>
                </li>
            </ul>
        </div>
    )
}

export const HeroExit = () => {
    return (
        <div className='flex flex-col lg:flex-row py-[5%] lg:py-[2%] gap-x-[2rem]'>
            <div className='flex flex-col items-center justify-end w-full'>
                <Image
                    src='/media/placeholderDGL.png'
                    alt='DrGL'
                    width={1430}
                    height={1324}
                    className='w-[60rem] 2xl:w-[40vw] h-[16rem] md:h-[25rem] lg:h-[34rem] 2xl:h-[38vh] object-cover object-top rounded-[0.175rem] elevation-7'
                />
                <p className='font-poppins5 text-center text-primary text-sm md:text-2xl lg:text-xl 2xl:text-[0.75vw] py-[0.75rem] md:py-[1rem] lg:py-[1.8%] px-[15%] lg:px-[30%]'>
                    Mándanos un WhatsApp <a href='https://wa.me/5543468098'>dando clic aquí</a> o llamanos al <a href='tel:5549977551'>5549-97-7551</a>
                </p>
            </div>
        </div>
    )
}