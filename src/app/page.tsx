 
import About from '@sections/about'
import Banner from '@sections/banner'
import Contact from '@sections/contact'
import HomeBanner from '@sections/homeBanner' 
import LocationMap from '@sections/locationMap'
import Offer from '@sections/offer'   

export default function Home() {  
  
  return (
    <main> 
      <HomeBanner />
      <About />
      <Offer/>
      <Banner /> 
      <Contact />
      <LocationMap />
    </main>
  )
}
