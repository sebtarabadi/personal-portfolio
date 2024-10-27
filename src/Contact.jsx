import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei'

import GitIcon from '../public/GitIcon.jsx'

import './index.css'

function Contact(){

    return(
                
        <div id='contact' className='about-me-parent'>



        <h1>Contact</h1>

        <div className='contact'>

        <h1>You can find me at:</h1>

        <p>Github</p>

        <p>LinkedIn</p>

        <p>Email</p>

        </div>

        </div>

    )
}

export default Contact 

