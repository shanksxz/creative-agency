import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <Footer />
    </>
  )
}

export default App
