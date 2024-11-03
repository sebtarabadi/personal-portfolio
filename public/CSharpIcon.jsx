/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 CSharpIcon.gltf 
Author: AnshiNoWara (https://sketchfab.com/AnshiNoWara)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/c-e3a5d3e564a64fb0ab39665f44632520
Title: C#
*/

import React, { useState} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame} from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/CSharpIcon.gltf')
  const [rotation, setRotation] = useState(0)
  const [targetRotation, setTargetRotation] = useState(0)

  const handleClick = () => {
    setTargetRotation((prev) => prev + (Math.PI*2) )  
  }

  useFrame(() => {
    setRotation((current) => {
      const speed = 0.25  
      if (Math.abs(targetRotation - current) < 0.01) return targetRotation 
      return current + (targetRotation - current) * speed  
    })
  })

  return (
    <group {...props} dispose={null} onClick={handleClick}>
      <group scale={0.001}>
        <mesh geometry={nodes['C#_C#_0'].geometry}
         material={materials.material} 
         rotation={[-1.85, 0.25, (rotation)/2]} //[-1.85, 0.25, rotation]
         scale={50} />
      </group>
    </group>
  )
}

useGLTF.preload('/CSharpIcon.gltf')
