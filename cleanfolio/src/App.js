import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import image from './profile.jpg'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' style={{boxShadow: '0px 5px 10px 0px black'}} className={`${themeName} app`} >
      <Header />

      <main>
      <img src={image} alt="profile" className='test' 
          style={{ borderRadius: '140px'}} 
          height={320} width={304}
      />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App