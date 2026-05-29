"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function Particles({ count = 90 }) {
  const mesh = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const seed = i + count;
      pos[i * 3] = (seededRandom(seed) - 0.5) * viewport.width * 3;
      pos[i * 3 + 1] = (seededRandom(seed + 101) - 0.5) * viewport.height * 3;
      pos[i * 3 + 2] = (seededRandom(seed + 202) - 0.5) * 10 - 2;
      siz[i] = seededRandom(seed + 303) * 2 + 0.5;
    }
    return [pos, siz];
  }, [count, viewport.width, viewport.height]);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.02;
    mesh.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function FloatingShape({
  position,
  geometry,
  color,
  speed = 1,
  distort = 0.3,
  scale = 1,
}: {
  position: [number, number, number];
  geometry: "icosahedron" | "torus" | "octahedron" | "sphere";
  color: string;
  speed?: number;
  distort?: number;
  scale?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.15 * speed;
    mesh.current.rotation.z += delta * 0.1 * speed;
    mesh.current.position.x += (pointer.x * 0.3 - mesh.current.position.x + position[0]) * delta * 0.5;
    mesh.current.position.y += (pointer.y * 0.3 - mesh.current.position.y + position[1]) * delta * 0.5;
  });

  const geometryElement = useMemo(() => {
    switch (geometry) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 1]} />;
      case "torus":
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "sphere":
        return <sphereGeometry args={[1, 24, 24]} />;
    }
  }, [geometry]);

  return (
    <Float speed={speed * 2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={mesh} position={position} scale={scale}>
        {geometryElement}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          wireframe
          distort={distort}
          speed={speed * 2}
        />
      </mesh>
    </Float>
  );
}

function GlowSphere({
  position,
  color,
  scale = 0.3,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
  });

  return (
    <Float speed={1.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={position} scale={scale}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  return (
    <>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />

      <Particles count={90} />

      {/* Main shapes */}
      <FloatingShape
        position={[-3, 1, -2]}
        geometry="icosahedron"
        color="#8b5cf6"
        speed={0.8}
        distort={0.4}
        scale={1.2}
      />
      <FloatingShape
        position={[3, -1, -3]}
        geometry="torus"
        color="#06b6d4"
        speed={0.6}
        distort={0.2}
        scale={0.9}
      />
      <FloatingShape
        position={[-1.5, -2, -1.5]}
        geometry="octahedron"
        color="#a78bfa"
        speed={1}
        distort={0.3}
        scale={0.7}
      />
      <FloatingShape
        position={[2, 2, -4]}
        geometry="sphere"
        color="#7c3aed"
        speed={0.5}
        distort={0.5}
        scale={0.8}
      />

      {/* Glow dots */}
      <GlowSphere position={[-2, 2.5, -1]} color="#8b5cf6" scale={0.08} />
      <GlowSphere position={[2.5, 1.5, -2]} color="#06b6d4" scale={0.06} />
      <GlowSphere position={[0, -2, -1]} color="#a78bfa" scale={0.05} />
      <GlowSphere position={[-3, -1.5, -3]} color="#06b6d4" scale={0.07} />
      <GlowSphere position={[3.5, -0.5, -1.5]} color="#8b5cf6" scale={0.04} />
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      dpr={[1, 1.25]}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      style={{ background: "transparent" }}
    >
      <SceneContent />
    </Canvas>
  );
}
