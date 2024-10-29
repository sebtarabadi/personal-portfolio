import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei'

import CSharpIcon from '../public/CSharpIcon.jsx'

import './index.css'

function Projects(){

    return(
                
        <div id='projects' className='about-me-parent'>

        <div className='react-icon-container'>

                <Canvas>
                <ambientLight intensity={5}/>
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

        <p>
            A Project created by me in react
            testintesting test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting tests
            g test text testing texting tests
            testintesting test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting tests
            g test text testing texting tests    
            
        </p>

        <h2>Trophies & Tombstones</h2>

        <p>
            A Game created by me and another, inspired by a gamejam theme of 'Lose Health, Gain Wealth', merging branches 
            testintesting test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting tests
            g test text testing texting tests
        </p>

        <h2>Portfolio Website</h2>

        <p>Interactive website with 3d elements
            testintesting test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting tests
            g test text testing texting tests
        </p>

        <h2>ST Currency Transfer</h2>

        <p>Achieving a 1st, this project was submitted as part of my second semester software projects module, this currency transfer CRUD app mimics the capabilites of 
            existing services such as western union, monzo, etc, and carries out all operations on a local SQLite Database.
            Users are able to open accounts, send money to and from different accounts and currencies and more.
            There are multiple checks in place that check for suspicious activity and algorithms set up to close accounts if the target accounts satisfy the conditions
            of said suspicious activity, closed accounts cannot use any site functions and are only able to be reopened when a site admin logs into an admin account and 
            specifically opens the account
        </p>

        <h2>EER Calculator</h2>

        <p>This project was a group effort, It was my first time working in a group project to create software for a client, My role in the group was the front-end engineer for the project.
            The project itself was a large success, achieving both a 1st class grade and a place at my univerisites annual computer science student showcase for excellent work
            testintesting test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting tests
            g test text testing texting tests
        </p>

        <h2>Console Multi-Tool</h2>

        <p>
            Achieving a 1st, this project consists of a bundle of mini-applications, namely a
            testintesting test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting tests
            testing test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting teststesting test text testing texting tests
            g test text testing texting tests
        </p>

        </div>

        </div>

    )
}

export default Projects 

