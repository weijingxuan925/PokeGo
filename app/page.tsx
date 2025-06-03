import { 
  About, 
  Event, 
  Feature, 
  Hero, 
  Menu, 
  Reservation, 
  Service, 
  SpecialDish, 
  Testimonials 
} from "@/components/components";

export default function Home() {
  return (
    <main>
      <article>
        <Hero/>
        <Service/>
        <About/>
        <SpecialDish/>
        <Menu/>
        <Testimonials/>
        <Reservation/>
        <Feature/>
        <Event/>
      </article>
    </main>
  )
}
