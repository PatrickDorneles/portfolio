"use client";

import { Canvas } from "@react-three/fiber";
import { Polyhedron } from "./Polyhedron";
import { createRef, useRef } from "react";

function PolyhedronField() {
  const polyhedronRefs = useRef<(THREE.Mesh | null)[]>([]);
  
  const polyhedrons = Array.from({ length: 15 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 40,
      (Math.random() - 0.5) * 30,
      (Math.random() - 10) * 1,
    ] as [number, number, number],
    ref: createRef<THREE.Mesh>(),
  }));

  // Initialize refs array
  polyhedronRefs.current = polyhedrons.map(p => null);

  return (
    <>
      {polyhedrons.map((props, i) => (
        <Polyhedron 
          key={i} 
          position={props.position}
          ref={props.ref}
          polyhedrons={polyhedronRefs}
        />
      ))}
    </>
  );
}

export function AnimatedBackground() {
  return (
    <div id="three-container" className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <fog attach="fog" args={['#1e1b4b', 5, 30]} />
        <PolyhedronField />
      </Canvas>
    </div>
  );
}