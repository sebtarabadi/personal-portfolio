/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 GitIcon.gltf 
Author: mastergames2435 (https://sketchfab.com/mastergames243534)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/git-logo-01e9bc6656f0423bb4c68bff7aae4b99
Title: Git logo
*/

import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame} from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/GitIcon.gltf')
  const [spinY, setSpinY] = useState(0)
  const [targetRotation, setTargetRotation] = useState(0)

  const handleClick = () => {
    setTargetRotation((prev) => prev + (Math.PI*2) )  
  }

  useFrame(() => {
    setSpinY((current) => {
      const speed = 0.1  
      if (Math.abs(targetRotation - current) < 0.1) return targetRotation 
      return current + (targetRotation - current) * speed  
    })
  })

  return (
    <group {...props} dispose={null} onClick={handleClick}>
      <group rotation={[Math.PI / 180, 0, spinY/4]}>  {/*(-Math.PI / 2), 0, 0*, check and test for value where math/ x, where x =180 ie first value of the 3, xyz*/}
        <mesh geometry={nodes.Object_4.geometry} material={materials['SVGMat.006']} rotation={[Math.PI / 2, 0, 0]} scale={50} />
      </group>
    </group>
  )
}

useGLTF.preload('/GitIcon.gltf')
