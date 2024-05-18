import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, useGLTF,OrbitControls } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(30000), { radius: 1.2 }));
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={0x00aaff}
          size={0.0007}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
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
    if (mesh.current.position.x > 5 || mesh.current.position.x < -5 ||
        mesh.current.position.y > 5 || mesh.current.position.y < -5 ||
        mesh.current.position.z > 5 || mesh.current.position.z < -5) {
      mesh.current.position.set(...initialPosition);
    }
  });

  return (
    <primitive object={meteor.scene} ref={mesh}  scale={[1, 1, 1]}  />
  );
};
const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Stars />
          {/* <Meteor/> */}
          
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
