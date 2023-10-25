'use client';
import Link from 'next/link';
import React from 'react'
import { PopupButton } from '@typeform/embed-react';

export const CTAone = () => {
    return (
        <Link
            href='/egoh-shot'
            className='btn btn-accent btn-lg font-poppins5 text-secondary text-[1.2rem] md:text-[1.4rem] 2xl:text-[1.4vw] normal-case w-full md:w-[25rem] 2xl:w-[25vw] h-[9vh] md:h-[5rem] lg:h-[4.5rem] 2xl:h-[7.2vh]'>
            Ver video informativo ahora
        </Link>
    )
}

export const CTAtwo = () => {
    return (
        <Link
            href='/egoh-shot'
            className='btn btn-accent btn-block btn-lg font-poppins5 text-secondary text-[1.2rem] md:text-[1.6rem] lg:text-[2rem] 2xl:text-[2vw] normal-case h-[9vh] lg:h-[6rem] 2xl:h-[9vh]'>
            Ver video informativo ahora
        </Link>
    )
}

export const CTAthree = () => {
    return (
        <PopupButton
            id="eNhkj25w"
            className="btn btn-accent btn-lg font-poppins5 text-secondary text-[1.2rem] md:text-[1.4rem] 2xl:text-[1.4vw] normal-case w-full md:w-[25rem] 2xl:w-[25vw] h-[9vh] md:h-[5rem] lg:h-[4.5rem] 2xl:h-[7.2vh]"
        >
            Programa tu consulta
        </PopupButton>
    )
}