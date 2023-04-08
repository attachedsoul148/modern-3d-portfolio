import { BrowserRouter } from 'react-router-dom'
import {
  Experience,
  Hero,
  About,
  Tech,
  Works,
  Navbar,
  Contact,
  StarsCanvas,
  Feedbacks,
} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary scroll-smooth">
        <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
