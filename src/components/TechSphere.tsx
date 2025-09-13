// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { useRef, useState, useMemo } from "react";
// import { Sphere, Html } from "@react-three/drei";
// import { Vector3 } from "three";
// import * as THREE from "three";

// // Tech stack with official icons
// const techStack = [
//   {
//     name: "HTML5",
//     category: "Frontend",
//     icon: "/src/assets/icons/html.png",
//     color: "#E34F26",
//   },
//   {
//     name: "CSS3",
//     category: "Frontend",
//     icon: "/src/assets/icons/css.png",
//     color: "#1572B6",
//   },
//   {
//     name: "JavaScript",
//     category: "Frontend",
//     icon: "/src/assets/icons/javascript.png",
//     color: "#F7DF1E",
//   },
//   {
//     name: "TypeScript",
//     category: "Frontend",
//     icon: "/src/assets/icons/typescript.png",
//     color: "#3178C6",
//   },
//   {
//     name: "React",
//     category: "Frontend",
//     icon: "/src/assets/icons/react.png",
//     color: "#61DAFB",
//   },
//   {
//     name: "Next.js",
//     category: "Frontend",
//     icon: "/src/assets/icons/nextjs.png",
//     color: "#000000",
//   },
//   {
//     name: "Redux",
//     category: "Frontend",
//     icon: "/src/assets/icons/redux.png",
//     color: "#764ABC",
//   },
//   {
//     name: "Tailwind CSS",
//     category: "Frontend",
//     icon: "/src/assets/icons/tailwind.png",
//     color: "#06B6D4",
//   },
//   {
//     name: "Python",
//     category: "Backend",
//     icon: "/src/assets/icons/python.png",
//     color: "#3776AB",
//   },
//   {
//     name: "Node.js",
//     category: "Backend",
//     icon: "/src/assets/icons/nodejs.png",
//     color: "#339933",
//   },
//   {
//     name: "Express.js",
//     category: "Backend",
//     icon: "/src/assets/icons/express.png",
//     color: "#000000",
//   },
//   {
//     name: "NestJS",
//     category: "Backend",
//     icon: "/src/assets/icons/nestjs.png",
//     color: "#E0234E",
//   },
//   {
//     name: "MongoDB",
//     category: "Database",
//     icon: "/src/assets/icons/mongodb.png",
//     color: "#47A248",
//   },
//   {
//     name: "PostgreSQL",
//     category: "Database",
//     icon: "/src/assets/icons/postgresql.png",
//     color: "#336791",
//   },
//   {
//     name: "MySQL",
//     category: "Database",
//     icon: "/src/assets/icons/mysql.png",
//     color: "#4479A1",
//   },
//   {
//     name: "Prisma",
//     category: "Database",
//     icon: "/src/assets/icons/prisma.png",
//     color: "#2D3748",
//   },
//   {
//     name: "GitHub",
//     category: "Tools",
//     icon: "/src/assets/icons/github.png",
//     color: "#181717",
//   },
//   {
//     name: "Docker",
//     category: "Tools",
//     icon: "/src/assets/icons/docker.png",
//     color: "#2496ED",
//   },
//   {
//     name: "Postman",
//     category: "Tools",
//     icon: "/src/assets/icons/postman.png",
//     color: "#FF6C37",
//   },
//   {
//     name: "Vercel",
//     category: "Tools",
//     icon: "/src/assets/icons/vercel.png",
//     color: "#000000",
//   },
//   {
//     name: "Firebase",
//     category: "Tools",
//     icon: "/src/assets/icons/firebase.png",
//     color: "#FFCA28",
//   },
// ];

// // Generate sphere points using Fibonacci spiral
// const generateSpherePoints = (count: number, radius: number) => {
//   const points = [];
//   const increment = Math.PI * (3 - Math.sqrt(5)); // Golden angle

//   for (let i = 0; i < count; i++) {
//     const y = 1 - (i / (count - 1)) * 2;
//     const r = Math.sqrt(1 - y * y);
//     const theta = increment * i;
//     const x = Math.cos(theta) * r;
//     const z = Math.sin(theta) * r;

//     points.push(new Vector3(x * radius, y * radius, z * radius));
//   }

//   return points;
// };

// interface TechIconProps {
//   position: Vector3;
//   tech: (typeof techStack)[0];
//   groupRef: React.RefObject<THREE.Group>;
//   index: number;
// }

// const TechIcon = ({ position, tech, groupRef }: TechIconProps) => {
//   const iconRef = useRef<THREE.Group>(null);
//   const [hovered, setHovered] = useState(false);
//   const { camera } = useThree();

//   useFrame(() => {
//     if (iconRef.current && groupRef.current) {
//       const lookAtPosition = new Vector3().copy(camera.position);
//       iconRef.current.lookAt(lookAtPosition);

//       if (hovered) {
//         const forwardOffset = new Vector3()
//           .copy(position)
//           .normalize()
//           .multiplyScalar(0.4);
//         iconRef.current.position.copy(position).add(forwardOffset);
//         iconRef.current.scale.setScalar(1.3);
//       } else {
//         iconRef.current.position.lerp(position, 0.1);
//         iconRef.current.scale.lerp(new Vector3(1, 1, 1), 0.1);
//       }
//     }
//   });

//   return (
//     <group
//       ref={iconRef}
//       position={position}
//       onPointerEnter={() => setHovered(true)}
//       onPointerLeave={() => setHovered(false)}
//     >
//       <Html distanceFactor={8} transform sprite occlude>
//         <div
//           className={`relative flex items-center justify-center w-16 h-16 rounded-full border-2 transition-all duration-300 transform backdrop-blur-md bg-gray-800/70 ${
//             hovered
//               ? "border-cyan-400 shadow-2xl scale-110"
//               : "border-cyan-600/60"
//           }`}
//           style={{
//             boxShadow: hovered
//               ? `0 0 30px ${tech.color}80, 0 0 60px ${tech.color}40`
//               : `0 4px 20px rgba(0,0,0,0.3)`,
//           }}
//         >
//           <img
//             src={tech.icon}
//             alt={tech.name}
//             className="w-10 h-10 object-contain"
//             style={{
//               filter: hovered
//                 ? "brightness(1.5) contrast(1.2) drop-shadow(0 0 8px rgba(255,255,255,0.5))"
//                 : "brightness(1.1) contrast(1.1)",
//             }}
//           />
//         </div>
//       </Html>
//     </group>
//   );
// };

// const RotatingSphere = () => {
//   const groupRef = useRef<THREE.Group>(null);
//   const spherePoints = useMemo(
//     () => generateSpherePoints(techStack.length, 3.0),
//     []
//   );

//   useFrame((state, delta) => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += delta * 0.15;
//       groupRef.current.rotation.x += delta * 0.05;
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       <Sphere args={[3.0, 32, 32]}>
//         <meshBasicMaterial
//           color="#4a9eff"
//           wireframe
//           transparent
//           opacity={0.3}
//         />
//       </Sphere>

//       {techStack.map((tech, index) => (
//         <TechIcon
//           key={tech.name}
//           position={spherePoints[index]}
//           tech={tech}
//           groupRef={groupRef}
//           index={index}
//         />
//       ))}
//     </group>
//   );
// };

// const TechSphere = () => {
//   return (
//     <div className="w-full h-[700px] bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 rounded-2xl overflow-hidden relative">
//       <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />
//       <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
//       <div
//         className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
//         style={{ animationDelay: "1s" }}
//       />
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

//       <Canvas
//         camera={{ position: [0, 0, 9], fov: 50 }}
//         gl={{
//           antialias: true,
//           alpha: true,
//           powerPreference: "high-performance",
//           toneMapping: THREE.ACESFilmicToneMapping,
//           toneMappingExposure: 1.2,
//         }}
//       >
//         <ambientLight intensity={0.3} color="#ffffff" />
//         <directionalLight
//           position={[10, 10, 5]}
//           intensity={0.8}
//           color="#ffffff"
//         />
//         <pointLight position={[-10, -10, -5]} intensity={0.4} color="#4a9eff" />
//         <pointLight position={[0, 10, 10]} intensity={0.3} color="#ffffff" />

//         <mesh position={[0, 0, -20]} scale={[50, 50, 1]}>
//           <planeGeometry args={[1, 1]} />
//           <meshBasicMaterial color="#1a1a2e" transparent opacity={0.1} />
//         </mesh>

//         <RotatingSphere />
//       </Canvas>

//       <div className="absolute top-8 left-8 z-10">
//         <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
//           Tech Stack
//         </h3>
//         <p className="text-gray-300 text-base font-medium">
//           Interactive 3D Sphere Visualization
//         </p>
//       </div>

//       <div className="absolute bottom-8 right-8 z-10 text-right">
//         <p className="text-gray-400 text-sm font-medium">
//           Hover over icons to explore
//         </p>
//         <p className="text-gray-500 text-xs">Drag to rotate view</p>
//       </div>
//     </div>
//   );
// };

// export default TechSphere;
