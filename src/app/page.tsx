import { Band, Hero } from '@/components'
import Image from 'next/image'
//Francisco Costa 
export default function Home() {
  return (
    <main className="Home">
      <Hero />
      <Band />
    </main>
  )
}
