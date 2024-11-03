import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei'

import ReactIcon from '../public/ReactIcon.jsx'
import GitIcon from '../public/GitIcon.jsx'

import './index.css'

function Test(){

    return(


        <div id='about' className='section-parent'>

            <div className='react-icon-container'>

                <Canvas style={{ width: "30em", height: "30em" }}>
                <ambientLight intensity={2.25}/>
                     <directionalLight position={[10, 10, 5]}intensity={1}castShadow/>
                      <pointLight position={[-10, -10, 10]} intensity={1.5} />
                        <OrthographicCamera makeDefault zoom={100} position={[0, 0, 10]} />
                        <Suspense fallback={null}>
                            <ReactIcon/>
                        </Suspense>
                </Canvas>   

            </div>

            <h1>About</h1>

            <div className='section-child'>
            
                <h2>About Me</h2> 
                
                <p> 
                 I am currently a second-year undergraduate Computer Science student. 
                 <br/><br/>
                 
                 Passionate about developing software of all kinds, I continuously embrace new technologies and tools that I leverage
                 to the best of my abilities whilst constantly seeking improvement. I am strongly committed to building software that solves real-world problems and find fulfillment in working toward solutions that achieve and
                 exceed the criteria set by clients. 
                 <br/><br/> 
                 
                 I particularly enjoy working in collaborative environments where I can learn from diverse team members, each of whom bring their own unique skills, This team-driven
                 approach inspires and motivates me not only to perform at my best but also to continually redefine what my 'best' truly is. 
                 <br/><br/> 
                 
                 In my free time, I enjoy playing ice hockey both recreationally and in a 
                 league setting and I am also dedicated to competitive drug-free bodybuilding, which helps me stay disciplined and motivated.
                </p>

                <h2>Familiar Technologies</h2>

                <div className='git-icon-container'>

                    <Canvas style={{ width: "30em", height: "30em" }}>
                        <ambientLight intensity={1.5}/>
                        <directionalLight position={[10, 10, 5]}intensity={1}castShadow/>
                        <pointLight position={[-10, -10, 10]} intensity={1.5} />
                        <OrthographicCamera makeDefault zoom={100} position={[0, 0, 10]} />
                        <Suspense fallback={null}>
                            <GitIcon/>
                        </Suspense>
                    </Canvas>  

                </div> 


                <h3>Software</h3>

                <p>Visual Studio</p>
                <p>Visual Studio Code</p>
                <p>Sublime Text</p>
                <p>Godot Engine</p>
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
                <p>JavaScript</p>
                <p>Python</p>
                <p>SQL (SQLite)</p>
                <p>GDScript</p>


                <h3>Frameworks & Libraries</h3>

                <p>React</p>
                <p>Phaser</p>
                <p>Node.js (Familiarity comes from dependency installations for React)</p>

            </div>

        </div>

    )
}

export default Test 