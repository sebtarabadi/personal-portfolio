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

        <h2>Below is a selection of my completed projects</h2>

        <h4>Please be aware that I am unable to provide the source code for projects completed as part of my University submissions</h4>

        <div className='about-me-child'>

        <h2>Hockey Whiteboard</h2>

        <p>A Project created by me in react</p>

        <h2>Trophies & Tombstones</h2>

        <p>I am an Undergraduate Computer Science student</p>

        <h2>Portfolio Website</h2>

        <p>Interactive website with 3d elements</p>

        <h2>ST Currency Transfer</h2>

        <p>Achieving a 1st</p>

        <h2>EER Calculator</h2>

        <p>This project was a group effort, It was my first time working in a group project to create software for a client, My role in the group was the front-end engineer for the project.
            The project itself was a large success, achieving both a 1st class grade and a place at my univerisites annual computer science student showcase for excellent work
        </p>

        <h2>Console Multi-Tool</h2>

        <p>Achieving a 1st, this project consists of a bundle of mini-applications, namely a</p>

        </div>

        </div>

    )
}

export default Projects 

