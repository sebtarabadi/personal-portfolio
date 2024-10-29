import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei'

import JsIcon from '../public/JsIcon.jsx'
import PythonIcon from '../public/PythonIcon.jsx'


import './index.css'

function Contact(){

    return(
                
        <div id='contact' className='about-me-parent'>

                <Canvas>
                <ambientLight intensity={12.25}/>
                     <directionalLight position={[10, 10, 5]}intensity={15}castShadow/>
                      <pointLight position={[-Math.PI / 2, 0, 0]} intensity={15} />
                        <OrthographicCamera makeDefault zoom={100} position={[0, 0, 10]} />
                        <Suspense fallback={null}>
                            <PythonIcon/>
                        </Suspense>
                </Canvas>   


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

