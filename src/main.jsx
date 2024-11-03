
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import About from'./About.jsx'
import Header from './Header.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>

  </StrictMode>,
)

