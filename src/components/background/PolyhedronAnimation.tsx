"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

// Custom hook for physics-based movement
export function usePhysicsMovement(
  speed = 0.5,
  bounds = { x: 20, y: 15, z: 5 },
) {
  const velocity = useRef<Vector3D>({
    x: (Math.random() - 0.5) * speed,
    y: (Math.random() - 0.5) * speed,
    z: (Math.random() - 0.5) * speed * 0.5,
  });

  return (time: number, position: THREE.Vector3) => {
    // Update position based on velocity
    position.x += velocity.current.x * 0.1;
    position.y += velocity.current.y * 0.1;
    position.z += velocity.current.z * 0.1;

    // Bounce off boundaries
    if (Math.abs(position.x) > bounds.x) {
      velocity.current.x *= -1;
      position.x = Math.sign(position.x) * bounds.x;
    }
    if (Math.abs(position.y) > bounds.y) {
      velocity.current.y *= -1;
      position.y = Math.sign(position.y) * bounds.y;
    }
    if (Math.abs(position.z) > bounds.z) {
      velocity.current.z *= -1;
      position.z = Math.sign(position.z) * bounds.z;
    }

    return velocity.current;
  };
}

interface AnimatedPolyhedronProps {
  meshRef: React.RefObject<THREE.Mesh>;
  polyhedrons: React.RefObject<THREE.Mesh[]>;
}

export function usePolyhedronAnimation({
  meshRef,
  polyhedrons,
}: AnimatedPolyhedronProps) {
  const getMovement = usePhysicsMovement(0.5);
  const rotationSpeed = useRef({
    x: Math.random() * 0.01,
    y: Math.random() * 0.01,
  });

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const position = meshRef.current.position;
    const velocity = getMovement(time, position);

    // Check collisions with other polyhedrons
    if (polyhedrons.current) {
      polyhedrons.current.forEach((other) => {
        if (other && other !== meshRef.current) {
          const distance = position.distanceTo(other.position);
          if (distance < 3) {
            // Collision threshold
            // Calculate collision response
            const normal = new THREE.Vector3()
              .subVectors(position, other.position)
              .normalize();

            // Update velocities
            velocity.x += normal.x * 0.1;
            velocity.y += normal.y * 0.1;
            velocity.z += normal.z * 0.1;

            // Separate the polyhedrons
            position.add(normal.multiplyScalar(0.1));
          }
        }
      });
    }

    // Slow rotation
    meshRef.current.rotation.x += rotationSpeed.current.x;
    meshRef.current.rotation.y += rotationSpeed.current.y;
  });
}
