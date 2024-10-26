
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import About from'./About.jsx'
import Header from './Header.jsx'
import Projects from './Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <About />
    <Projects/>


  </StrictMode>,
)

/*

---> current todo, is create contact page and also align clickable icons in a better way ie make them more spread out and layed out aesthetically
-->then add python logo from sketchfab, same pack as c# logo as the last one for contact me

-Landing Page

 - below headers link to respective pages/sections 
--About Me
--Projects & Experience
--Contact 

--CV - header links to cv

*/