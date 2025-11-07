import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { HowItWorks, WhyThisWorks, CTASection, Footer } from './components/Sections'

function App() {
  return (
    <div className="font-inter bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyThisWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
