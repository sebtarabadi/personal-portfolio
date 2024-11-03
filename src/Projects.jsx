import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei'

import CSharpIcon from '../public/CSharpIcon.jsx'

import PythonIcon from '../public/PythonIcon.jsx'

import './index.css'

function Projects(){

    return(
                
        <div id='projects' className='section-parent'>

            <div className='csharp-icon-container'>

                <Canvas style={{ width: "30em", height: "30em" }}>
                    <ambientLight intensity={5}/>
                    <Suspense fallback={null}>
                        <CSharpIcon/>
                    </Suspense>
                </Canvas>    

            </div>

            <h1>Projects</h1>

            <h2>Below is a selection of my completed projects</h2>

            <h4>Please be aware that I am unable to provide the source code for projects completed as part of my University submissions</h4>

            <div className='section-child'>

                <h2>Hockey Whiteboard</h2>

                <p>
                 A project created using React; Hockey Whiteboard is an interactive whiteboard web application that allows Ice hockey coaches, players, and anybody else to a way to easily
                 create and download ice hockey drills. In the real-world Ice hockey drills are drawn with a common drawing convention, i.e. a squiggly line represents
                 skating with the puck, a dotted line shows a pass, and so on and so forth, this is replicated in hockey whiteboard which hosts all necessary brush ‘styles’ that would be 
                 needed and also boasts a multitude of other features such as easy to use counters, such as cones, tyres, player counters, and more, along with the ability to change which rink 
                 you want to draw your drill on, such as a full rink, half rink, or end-zone just to name a few. When finished creating your drill, the user can then name and download their
                 drawn drill in a PNG format.  
                 <br/><br/>
                 For a more extensive project description and list of site functionality, along with an application preview and installation guide, please view the github repo here: www.github.com/sebt
                </p>

                <h2>Trophies & Tombstones</h2>

                <p>
                 A game made in Godot by myself and another for a game jam. Trophies and Tombstones is a game in which you wager your health in exchange for wealth and then gamble said wealth
                 on classic casino games namely Roulette and Slots, If you lose all your wealth and have no more health to exchange, you die and gain a tombstone, you will then be reborn with 
                 100 health again and have the chance to stake your way to the top. The aim of the game is to win enough money to purchase the available trophies from the shop whilst keeping
                 the number of tombstones you amass to a minimal. The game jam’s theme was ‘Lose Health, Gain Wealth’
                 <br/><br/>
                 Feel free to download and play the game yourself by clicking the download here: Download
                </p>

                <h2>Portfolio Website</h2>

                <p> 
                 Created using React and ?react-three-fiber, ?what about react-three-drei?? Interactive website with 3d elements that can be ‘used’ by the user to trigger real time animations
                 and state changes. Created simply as a personal ‘hub’, containg all relevant contact info and persona links, and stylish way to showcase and provide descriptions for certain
                 projects
                </p>

                <div className='python-icon-container'>

                    <Canvas style={{ width: "30em", height: "30em" }}>
                        <ambientLight intensity={12.25}/>
                        <directionalLight position={[10, 10, 5]}intensity={15}castShadow/>
                        <pointLight position={[-Math.PI / 2, 0, 0]} intensity={15} />
                        <OrthographicCamera makeDefault zoom={100} position={[0, 0, 10]} />
                        <Suspense fallback={null}>
                            <PythonIcon/>
                        </Suspense>
                    </Canvas>   

                </div>   

                <h2>ST Currency Transfer</h2>

                <p>
                 This Currency Transfer CRUD App simulates the core functionalities of popular money transfer services 
                 like Western Union and Monzo. Utilizing a local SQLite database; the app enables users to open accounts, transfer funds across different accounts and currencies with their respective exchange rates, an
                 d perform other essential banking operations. Security features include automated checks to detect suspicious activity, with algorithms that temporarily freeze accounts 
                 if certain risk conditions are met. Suspended accounts are restricted from site functions until an admin manually reviews and reactivates them, ensuring robust oversight.
                 A support ticket system is also present that allows all users to submit tickets that are to be reviewed and subsequently resolved by an admin.

                 This project involved backend database design, implementation, and management, CRUD operations, server-side scripting, and implementing security protocols.
                </p>

                <h2>EER Calculator</h2>

                <p>
                 A Group Project created for a client as part of my 2nd semester software projects module; to create an energy efficiency rating calculator for residential buildings. This was myself and many of my group 
                 members first time actively collaborating on a piece of software together; meeting twice a week in our allocated sessions to work on the software, and once every other week
                 to meet with the client to discuss project wants and needs, we evaluated the task and then split up responsibilities between ourselves. My Primary responsibility in the 
                 projects was as the front-end engineer, as a group we successfully met all criteria set out by our client and ourselves which resulted in a fully functioning final product; The Project received a 1st 
                 and was awarded a spot at my universities’ computer science and software engineering student showcase  
 
                 For me, this project highlighted front-end development and implementation in response to both a real Client's wants and needs and other project collaborators/backend 
                 engineers, along wth collaboration using Git
                </p>

                <h2>Console Multi-Tool</h2>

                <p>
                 Achieving a 1st, this set of utilities was my final assessment for my programming for computer science module, in it, I consolidated oop themes along with good 
                 all around implementation of clean code practices such as common naming conventions and meaningful comments, etc. more stuff 
                </p>

            </div>

        </div>

    )
}

export default Projects 

