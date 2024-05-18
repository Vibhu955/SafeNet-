import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Meteor = () => {
  const meteor = useGLTF("./meteor/scene.gltf");
  const mesh = useRef();

  // Set initial position and randomize motion direction
  const initialPosition = [Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10];
  const motionDirection = [Math.random() * 0.01 - 0.005, Math.random() * 0.01 - 0.005, Math.random() * 0.01 - 0.005];

  useFrame(() => {
    // Update position based on motion direction
    mesh.current.position.x += motionDirection[0];
    mesh.current.position.y += motionDirection[1];
    mesh.current.position.z += motionDirection[2];

    // Wrap around if meteor moves out of view
    if (mesh.current.position.x > 10 || mesh.current.position.x < -10 ||
        mesh.current.position.y > 10 || mesh.current.position.y < -10 ||
        mesh.current.position.z > 10 || mesh.current.position.z < -10) {
      mesh.current.position.set(...initialPosition);
    }
  });

  return (
    <primitive object={meteor.scene} ref={mesh}  scale={[1, 1, 1]} position={[-5,1,2]} />
  );
};

const MeteorCanvas = () => {
  return (
    <div className='  z-[-1]'>
    <Canvas >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Meteor 
        />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
    </div>
  );
};

export default MeteorCanvas;
