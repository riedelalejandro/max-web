import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import Gallery from '@/components/sections/Gallery'
import SocialProof from '@/components/sections/SocialProof'
import Pricing from '@/components/sections/Pricing'
import Faq from '@/components/sections/Faq'
import Map from '@/components/sections/Map'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Gallery />
      <SocialProof />
      <Pricing />
      <Faq />
      <Map />
      <Footer />
    </main>
  )
}
