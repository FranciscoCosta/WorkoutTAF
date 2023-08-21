import { Band, Hero, Why, About } from '@/components'
import Image from 'next/image'
//Francisco Costa 
export default function Home() {
  return (
    <main className="Home">
      <Hero />
      <Band />
      <Why />
      <About />
    </main>
  )
}
