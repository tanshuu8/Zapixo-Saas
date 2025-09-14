import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Agents from './components/Agents'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top" className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Agents />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
