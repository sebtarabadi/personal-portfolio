import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, OrthographicCamera } from '@react-three/drei'

import CSharpIcon from '../public/CSharpIcon.jsx'

import PythonIcon from '../public/PythonIcon.jsx'

import './index.css'

function Projects(){

    return(
                
        <div id='projects' className='section-parent'>

            <h1>Projects</h1>

            <div className='csharp-icon-container'>

                <Canvas style={{ width: "30em", height: "30em" }}>
                    <ambientLight intensity={5}/>
                    <Suspense fallback={null}>
                        <CSharpIcon/>
                    </Suspense>
                </Canvas>    

            </div>

            <h2>Below is a selection of my completed projects</h2>

            <h4>Please be aware that I am unable to provide the source code for projects completed as part of my University submissions</h4>

            <div className='section-child'>

                <h2>Hockey Whiteboard</h2>

                <p><b>Using: React, JavaScript, HTML, CSS, Git</b></p>
                <p>
                 A project built primarily using React; Hockey Whiteboard is an interactive whiteboard web application that allows Ice hockey coaches, players, and anybody else a way to easily
                 create and download ice hockey drills. In the real-world, ice hockey drills are drawn with a standardized drawing convention, i.e. a squiggly line represents
                 skating with the puck, a dotted line shows a pass, and so on and so forth, this is replicated in hockey whiteboard which hosts all necessary drawing styles that would be 
                 needed and also boasts a multitude of other features such as easy to use counters, such as cones, tyres, player counters, and more, along with the ability to change which rink 
                 you want to draw your drill on, such as a full rink, half rink, or end-zone just to name a few. When finished creating your drill, the user can then name and download their
                 drawn drill in a PNG format.  
                 <br/><br/>
                 For a more extensive project description and list of site functionality, along with an application preview and installation guide, please view the GitHub repository here: <a href="https://github.com/sebtarabadi/hockey-whiteboard" target="_blank" rel="noopener noreferrer">https://github.com/sebtarabadi/hockey-whiteboard
                </a></p>

                <h2>Trophies & Tombstones</h2>

                <p><b>Using: Godot, GDScript, Canva, Git</b></p>
                <p> 
                 Trophies & Tombstones is a game developed in Godot by myself and a collaborator for a game jam. In this game, you wager your health in exchange for money and then gamble that 
                 money on classic casino games, namely Roulette and Slots. If you lose all your money and have no health left to exchange, you die and gain a tombstone. However, you will be reborn with 100 health and once again have the
                 chance to stake your way to the top. The aim of the game is to win enough money to purchase the trophies from the shop while keeping the number of tombstones you amass to a minimum.
                 <br/><br/>
                 The theme of the game jam was “Lose Health, Gain Wealth.”
                 <br/><br/> 
                 Feel free to download and play the game by clicking the download link here: <a href="./public/trophiestombstones.zip" download> Download</a>
                 <p><i>To play simply unzip the folder and run 'trophiesandtombstones.exe'</i></p>
                </p>


                <h2>Portfolio Website</h2> 
                
                <p><b>Using: React, React-Three-Fiber, JavaScript, HTML, CSS, Git</b></p>
                <p>
                 This interactive portfolio website was created using React and React Three Fiber. It features 3D elements that users can interact with to trigger real-time animations and state changes. The website serves as a
                  hub containing relevant contact information, a downloadable copy of my CV, and a showcase of my projects and skills.
                  <br/><br/> 
                  Click around and explore the site to experience the unique interactions that each icon has to offer.
                </p>

                </div>

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

                <div className="section-child">

                <h2>ST Currency Transfer</h2>

                <p><b>Using: HTML, CSS, PHP, SQLite, Mockplus, Git</b></p>
                <p>
                 This Currency Transfer CRUD App simulates the core functionalities of popular money transfer services such as Western Union. Utilizing a local SQLite database; the app enables users to open accounts, 
                 transfer funds across different accounts and different currencies, and perform other essential banking operations. Security features include automated checks to detect suspicious activity;
                 with algorithms in place that check and then temporarily freeze accounts if certain risk conditions are met. 
                 Suspended accounts are restricted from site functions until an admin manually reviews and reactivates them, ensuring robust oversight.
                 A support ticket system is also present that allows all users to submit tickets that are to be reviewed and subsequently resolved by an admin.
                 <br/><br/>
                 This project highlighted backend database design and implementation, CRUD operations, server-side scripting, implementing automated security protocols, and a neat front-end that brings together all features
                </p>

                <h2>EER Calculator</h2>

                <p><b>Using: HTML, CSS, PHP, SQLite, Mockplus, Git</b></p>
                <p>
                 This group project, created for a real client as part of my second-semester Software Projects module, involved building an energy efficiency rating calculator for residential buildings. 
                 For many team members, this was our first experience in collaborative software development. We held biweekly sessions to coordinate development and met with the client every other week to refine requirements 
                 and address feedback. After assessing the project’s needs, we divided roles; my primary responsibility was as the front-end engineer, ensuring an intuitive and responsive user interface that met client 
                 specifications.
                 <br/><br/>
                 Working together, we successfully delivered a fully functional product that met all criteria established by the client and our team, resulting in a high-performing final submission. 
                 The project was awarded a 1st and earned a spot in my universities' Computer Science and Software Engineering Student Showcase, recognized as an exemplary solution to a real-world problem.
                 <br/><br/>
                 This project strengthened my front-end skills. Underpinned the importance and process of effective communication working for a real client, and highlighted collaborative 
                 planning and workflows with other team members.
                </p>

                <h2>Console Multi-Tool</h2>

                <p><b>Using: C#</b></p>
                <p> 
                 This project, which earned a 1st in my Programming for Computer Science module, is a console-based set of mini-apps designed to consolidate and test my understanding of core programming concepts. 
                 The project includes a menu system with applications such as an ISBN Verifier, School Register, and Trinary Number Converter.
                 Developed as a final assessment, the project evaluated key programming competencies: correct data type usage, effective control structures, clean and DRY code, and foundational OOP principles.
                 In addition, I maintained high standards for code formatting, testing, and inline documentation to ensure readability and maintainability.
                 <br/><br/> 
                 I also authored a final report, detailing the rationale behind my design and implementation choices, further demonstrating my ability to plan, execute, and document my code effectively.
                </p>

            </div>

        </div>

    )
}

export default Projects 

