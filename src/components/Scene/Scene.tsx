import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {Model} from './Model'
export default function Scene() {
   return (
    <div className="w-full flex justify-center items-center h-[700px]">

      <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            // backgroundColor: '#111a21',
            width: '60%',
            height: '60%',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
           <Model position={[0.025, -0.9, 0]} />
         </Suspense>
         <OrbitControls />
      </Canvas>
    </div>
   );
}