"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { Icosahedron } from "@react-three/drei";
import * as THREE from "three";
import { usePolyhedronAnimation } from "./PolyhedronAnimation";

interface PolyhedronProps {
  position: [number, number, number];
  polyhedrons: React.RefObject<(THREE.Mesh | null)[]>;
}

export const Polyhedron = forwardRef<THREE.Mesh, PolyhedronProps>(
  ({ position, polyhedrons }, ref) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useImperativeHandle(ref, () => meshRef.current!, []);

    usePolyhedronAnimation({ 
      meshRef,
      polyhedrons: { current: polyhedrons.current?.filter(Boolean) || [] }
    });

    return (
      <Icosahedron
        ref={meshRef}
        position={position}
        args={[1, 0]}
        scale={3}
      >
        <meshPhongMaterial
          color="#6366f1"
          opacity={0.15}
          transparent
          side={THREE.DoubleSide}
        />
      </Icosahedron>
    );
  }
);