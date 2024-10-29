/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 PythonIcon.gltf 
Author: AnshiNoWara (https://sketchfab.com/AnshiNoWara)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/python-8be4a2579dd84586b915068e475073ee
Title: Python
*/

import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber' 

export default function Model(props) {
  const { nodes, materials } = useGLTF('/PythonIcon.gltf')
  const [ rotation, setRotation ] = useState(0) 
  const [targetRotation, setTargetRotation] = useState(0)

  const handleClick = () => {
    setTargetRotation((prev) => prev + (Math.PI*2) )  
  }

  useFrame(() => {
    setRotation((current) => {
      const speed = 0.1  
      if (Math.abs(targetRotation - current) < 0.01) return targetRotation 
      return current + (targetRotation - current) * speed  
    })
  })


  return (
    <group {...props} dispose={null} onClick={handleClick}>
      <group scale={0.0006}>
        <mesh geometry={nodes.Python_Python_0.geometry} material={materials.Python} rotation={[-Math.PI / 2, 0-(rotation*1.5), 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/PythonIcon.gltf')
