import { CTAtwo } from '../components/CTA'
import { HeroHome } from '../components/Hero'
import { TitleHome } from '../components/Title'

export default function Home() {
  return (
    <>
      <main className='py-[2rem] px-[1.5rem] md:px-[2rem] 2xl:px-[2vw]'>
        <TitleHome />
        <HeroHome />
        <CTAtwo />
      </main>
    </>
  )
}
