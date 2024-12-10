import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contacts'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}