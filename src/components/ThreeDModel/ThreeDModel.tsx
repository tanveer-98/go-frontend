// import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import React, { useRef } from 'react'

// import { useGLTF } from '@react-three/drei'


// function Scene() {
//   const gltf = useLoader(GLTFLoader, 'interior.glb')
//   return <primitive object={gltf.scene} />
// }

// type GLTFResult = {
//   nodes : {
//     Pyramid :THREE.Mesh;
//   };
//   materials : {
//     ['default'] : THREE.MeshStandardMaterial;
//   }
// }

//  function Model(props : any ) {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('interior.glb') as any;
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry} material={materials['Material.001']} />
//       <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />
//     </group>
//   )
// }


// useGLTF.preload('interior.glb')


// import { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { Environment } from '@react-three/drei'


// export default function App() {
//   return (
//     <div className="App">
//       <Canvas>
//         <Suspense fallback={null}>
//           <Model />
//           <Environment preset="sunset" background />
//         </Suspense>
//       </Canvas>
//     </div>
//   )
// }

import React from 'react'

const ThreeDModel = () => {
  return (
    <div>ThreeDModel</div>
  )
}

export default ThreeDModel