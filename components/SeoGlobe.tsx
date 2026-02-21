"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Sphere, MeshDistortMaterial, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

/* ── Rotating Globe ── */
function Globe() {
  const globeRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const textRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Slow globe rotation
    if (globeRef.current) {
      globeRef.current.rotation.y = t * 0.3;
    }

    // Rings orbit
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.4;
      ringRef.current.rotation.x = Math.sin(t * 0.2) * 0.1 + 0.4;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.25;
      ring2Ref.current.rotation.x = Math.cos(t * 0.2) * 0.1 + 0.9;
    }

    // Text always faces camera (billboard effect)
    if (textRef.current) {
      textRef.current.rotation.y = t * 0.3;
    }
  });

  // Latitude/longitude grid lines
  const gridLines = useMemo(() => {
    const lines: THREE.BufferGeometry[] = [];

    // Latitude lines
    for (let lat = -75; lat <= 75; lat += 25) {
      const points: THREE.Vector3[] = [];
      const phi = THREE.MathUtils.degToRad(90 - lat);
      for (let lng = 0; lng <= 360; lng += 5) {
        const theta = THREE.MathUtils.degToRad(lng);
        points.push(
          new THREE.Vector3(
            1.52 * Math.sin(phi) * Math.cos(theta),
            1.52 * Math.cos(phi),
            1.52 * Math.sin(phi) * Math.sin(theta)
          )
        );
      }
      lines.push(new THREE.BufferGeometry().setFromPoints(points));
    }

    // Longitude lines
    for (let lng = 0; lng < 360; lng += 30) {
      const points: THREE.Vector3[] = [];
      const theta = THREE.MathUtils.degToRad(lng);
      for (let lat = -90; lat <= 90; lat += 5) {
        const phi = THREE.MathUtils.degToRad(90 - lat);
        points.push(
          new THREE.Vector3(
            1.52 * Math.sin(phi) * Math.cos(theta),
            1.52 * Math.cos(phi),
            1.52 * Math.sin(phi) * Math.sin(theta)
          )
        );
      }
      lines.push(new THREE.BufferGeometry().setFromPoints(points));
    }

    return lines;
  }, []);

  // Floating dots on globe surface
  const dots = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 80; i++) {
      const phi = Math.acos(-1 + (2 * i) / 80);
      const theta = Math.sqrt(80 * Math.PI) * phi;
      positions.push([
        1.54 * Math.sin(phi) * Math.cos(theta),
        1.54 * Math.cos(phi),
        1.54 * Math.sin(phi) * Math.sin(theta),
      ]);
    }
    return positions;
  }, []);

  return (
    <group>
      {/* ── Core Globe ── */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#1a1a1a"
          emissive="#0a0a0a"
          roughness={0.8}
          metalness={0.2}
          transparent
          opacity={0.95}
        />

        {/* Grid lines */}
        {gridLines.map((geo, i) => {
  const lineObj = new THREE.Line(
    geo,
    new THREE.LineBasicMaterial({ color: "#f97316", transparent: true, opacity: 0.15 })
  );
  return <primitive key={i} object={lineObj} />;
})}

        {/* Surface dots */}
        {dots.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.018, 8, 8]} />
            <meshStandardMaterial
              color="#f97316"
              emissive="#f97316"
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}
      </mesh>

      {/* ── SEO Text on globe ── */}
      <group ref={textRef}>
        <Text
          position={[0, 0, 1.56]}
          fontSize={0.20}
          fontWeight={900}
          color="#f97316"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000"
        >
          Search Engine Optimization
        </Text>
      </group>

      {/* ── Orbital Ring 1 ── */}
      <mesh ref={ringRef} rotation={[0.4, 0, 0]}>
        <torusGeometry args={[2.1, 0.012, 16, 120]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* ── Orbital Ring 2 ── */}
      <mesh ref={ring2Ref} rotation={[0.9, 0.3, 0]}>
        <torusGeometry args={[2.4, 0.008, 16, 120]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.5}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* ── Glow sphere ── */}
      <mesh>
        <sphereGeometry args={[1.65, 32, 32]} />
        <meshStandardMaterial
          color="#f97316"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>

      {/* ── Outer pulse glow ── */}
      <mesh>
        <sphereGeometry args={[1.85, 32, 32]} />
        <meshStandardMaterial
          color="#f97316"
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

/* ── Orbiting particles ── */
function Particles() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      ] as [number, number, number],
      scale: Math.random() * 0.03 + 0.01,
    }));
  }, []);

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[p.scale, 6, 6]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={1}
            transparent
            opacity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ── Main Export ── */
export default function SeoGlobe() {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#f97316" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#ffffff" />
        <pointLight position={[0, 0, 4]} intensity={0.6} color="#f97316" />

        {/* Stars background */}
        <Stars radius={20} depth={10} count={500} factor={1.5} fade speed={0.5} />

        {/* Globe */}
        <Globe />

        {/* Floating particles */}
        <Particles />

        {/* Optional: allow user to drag/rotate */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
        />
      </Canvas>
    </div>
  );
}