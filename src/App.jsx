import { Canvas } from "@react-three/fiber";
import React from 'react'
import "./style.css";
import "./index.css";
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import Sce from "./Scene";

const App = () => {
  return (
  <>
  <Canvas camera={{fov: 35}}>

    <ambientLight></ambientLight>
    <Sce/>
    <EffectComposer>
    <Bloom
    intensity={12.0} // The bloom intensity.
    
    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
    mipmapBlur  // Enables or disables mipm
  />
  </EffectComposer>
  </Canvas>
  </>
  );
}

export default App