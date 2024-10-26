import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei'

import ReactIcon from '../public/ReactIcon.jsx'

import './index.css'

function Test(){

    return(


        <div className='about-me-parent'>

            <div className='react-icon-container'>

                <Canvas>
                <ambientLight intensity={1.5}/>
                <OrthographicCamera makeDefault zoom={100} position={[0, 0, 10]} />
                <Suspense fallback={null}>
                    <ReactIcon/>
                    </Suspense>
                </Canvas>   

            </div>

            <h1>About</h1>

            <div className='about-me-child'>
            
            <h2>About Me</h2>

            <p>I am an Undergraduate Computer Science student</p>

            <h2>Familiar Technologies</h2>

            <h3>Software</h3>

            <p>Visual Studio</p>
            <p>Visual Studio Code</p>
            <p>Sublime Text</p>
            <p>Godot</p>
            <p>DB Browser for SQLite</p>
            <p>Git</p>
            <p>Canva</p>
            <p>MockPlus</p>

            <h3>Languages</h3>

            <p>C#</p>
            <p>C++</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>PHP</p>
            <p>Javascript</p>
            <p>Python</p>
            <p>SQL (SQLite)</p>
            <p>GDScript</p>


            <h3>Frameworks & Libraries</h3>

            <p>React</p>
            <p>Phaser</p>
            <p>Node.js (Familiarity comes from dependency installations for React)</p>

            </div>

            <p>end of about me</p>

        </div>

    )
}

export default Test 