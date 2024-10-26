import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei'

import CSharpIcon from '../public/CSharpIcon.jsx'

import './index.css'

function Projects(){

    return(
                
        <div className='about-me-parent'>

        <div className='react-icon-container'>

                <Canvas>
                <ambientLight intensity={3.25}/>
                <Suspense fallback={null}>
                    <CSharpIcon/>
                    </Suspense>
                </Canvas>    

        </div>

        <h1>Projects</h1>

        <div className='about-me-child'>

        <h2>Hockey Whiteboard</h2>

        <p>I am an Undergraduate Computer Science student</p>

        <h2>Trophies & Tombstones</h2>

        <p>I am an Undergraduate Computer Science student</p>

        <h2>ST Currency Transfer</h2>

        <p>I am an Undergraduate Computer Science student</p>

        <h2>EER Calculator</h2>

        <p>I am an Undergraduate Computer Science student</p>

        <h2>Console Multi-Tool</h2>

        <p>I am an Undergraduate Computer Science student</p>

        </div>

        <p>end of projects</p>

        </div>

    )
}

export default Projects 

