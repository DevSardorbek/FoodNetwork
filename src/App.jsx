import "./sass/style.css"
import Navbar from './components/navbar/Navbar'
import Prodacts from './components/prodacts/Prodacts'
import Hero from "./components/hero/Hero"
import Features from "./components/features/Features"
import About from "./components/about/About"
import Menu from "./components/menu/Menu"
import Testimon from "./components/testimon/Testimon"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <About/>
      <Menu/>
      <Testimon/>
      <Contact/>
      <Footer/>
      {/* <Prodacts/> */}
    </>
  )
}

export default App
