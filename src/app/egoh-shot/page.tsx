import { CTAthree } from "@/components/CTA";
import { HeroExit } from "@/components/Hero";
import { TitleExit } from "@/components/Title";


export default function Exit() {
  return (
    <main className='py-[2rem] px-[1.5rem] lg:px-[9rem] xl:px-[12rem] 2xl:px-[23vw]'>
      <TitleExit />
      <HeroExit />
      <div className='flex items-center justify-center pb-[0.75rem] lg:pb-[1%]'>
        <CTAthree />
      </div>
    </main>
  )
}