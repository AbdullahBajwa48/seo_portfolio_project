"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

/* ── Floating geometric shapes ── */
function GeometricShapes() {
  const torusRef = useRef<THREE.Mesh>(null!);
  const octaRef = useRef<THREE.Mesh>(null!);
  const icoRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.18;
      torusRef.current.rotation.y = t * 0.22;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x = t * 0.25;
      octaRef.current.rotation.z = t * 0.15;
    }
    if (icoRef.current) {
      icoRef.current.rotation.y = t * 0.2;
      icoRef.current.rotation.x = t * 0.12;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.3;
      ringRef.current.rotation.x = 0.6 + Math.sin(t * 0.2) * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.2;
      ring2Ref.current.rotation.y = t * 0.15;
    }
  });

  return (
    <group>
      {/* Central distorted torus — main focal shape */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh ref={torusRef} position={[0, 0, 0]}>
          <torusGeometry args={[1.8, 0.5, 32, 100]} />
          <MeshDistortMaterial
            color="#f97316"
            emissive="#7c2d12"
            emissiveIntensity={0.3}
            distort={0.25}
            speed={2}
            roughness={0.4}
            metalness={0.6}
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      {/* Octahedron — top right */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={octaRef} position={[3.5, 1.5, -1]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.8}
            wireframe={false}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>

      {/* Icosahedron — bottom left */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={icoRef} position={[-3.5, -1.5, -0.5]}>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial
            color="#1a1a1a"
            emissive="#f97316"
            emissiveIntensity={0.2}
            roughness={0.3}
            metalness={0.9}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      {/* Orbital ring 1 */}
      <mesh ref={ringRef} rotation={[0.6, 0, 0]}>
        <torusGeometry args={[2.8, 0.015, 16, 120]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={1}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Orbital ring 2 */}
      <mesh ref={ring2Ref} rotation={[1.1, 0.3, 0]}>
        <torusGeometry args={[3.5, 0.008, 16, 120]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.6}
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Small floating spheres */}
      {[
        [-2.5, 2, -1] as [number, number, number],
        [2.8, -2, -0.5] as [number, number, number],
        [0.5, 2.8, -1.5] as [number, number, number],
        [-1, -2.5, -1] as [number, number, number],
      ].map((pos, i) => (
        <Float key={i} speed={1.5 + i * 0.3} floatIntensity={0.8}>
          <mesh position={pos}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial
              color="#f97316"
              emissive="#f97316"
              emissiveIntensity={1.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ── Main Hero Component ── */
export default function ServicesHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col
                        items-center justify-center overflow-hidden px-6 md:px-16 lg:px-24">

      {/* ── Three.js canvas — full background ── */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 55 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#f97316" />
          <pointLight position={[-5, -5, 3]} intensity={0.5} color="#ffffff" />
          <pointLight position={[0, 0, 6]} intensity={0.8} color="#f97316" />
          <GeometricShapes />
        </Canvas>
      </div>

      {/* ── Background overlays ── */}
      {/* Dark vignette so center text is readable */}
      <div className="absolute inset-0 z-[1]
                      bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,10,10,0.7)_70%)]" />
      {/* Subtle dark center for text contrast */}
      <div className="absolute inset-0 z-[1]
                      bg-[radial-gradient(ellipse_60%_50%_at_center,_rgba(10,10,10,0.5)_0%,_transparent_100%)]" />
      {/* Orange grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[2]
                      bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      {/* ── Centered Content ── */}
      <div className="relative z-10 text-center max-w-4xl mx-auto pt-28 pb-20">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30
                     rounded-full px-4 py-2 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">
            SEO Services — Melbourne
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                     font-extrabold leading-tight mb-6"
        >
          SEO Services Melbourne{" "}
          <span className="text-orange-500">Businesses</span>{" "}
          Rely On
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto"
        >
          From local search dominance to technical fixes and AI-ready optimisation
          — tailored SEO strategies that drive traffic, leads, and revenue.
        </motion.p>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto"
        >
          No cookie-cutter packages. No outdated tactics. Every strategy is built
          around your business, your industry, and your goals. Month-to-month
          service, full transparency, and results you can actually measure.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="/free-seo-audit"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 active:scale-95
                       text-white font-bold px-8 py-3.5 rounded transition-all duration-300
                       text-sm inline-flex items-center justify-center gap-2 group"
          >
            Get Your Free SEO Audit
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="/contact"
            className="w-full sm:w-auto border border-gray-600 hover:border-orange-500
                       text-white hover:text-orange-400 font-semibold px-8 py-3.5 rounded
                       transition-all duration-300 text-sm active:scale-95
                       inline-flex items-center justify-center gap-2"
          >
            📞 Book a Call
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2"
        >
          {[
            "✓ No lock-in contracts",
            "✓ Month-to-month",
            "✓ Full transparency",
            "✓ Direct communication",
          ].map((item) => (
            <span key={item} className="text-gray-600 text-xs">{item}</span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                   flex flex-col items-center gap-1"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}