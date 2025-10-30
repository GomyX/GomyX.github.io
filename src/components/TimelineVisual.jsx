import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import './TimelineVisual.css';

function TimelineNode({ position, color, label, onClick, isActive }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      // Subtle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[0.5, 32, 32]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered || isActive ? 1.3 : 1}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
      {(hovered || isActive) && (
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.05}
          outlineColor="#000000"
        >
          {label}
        </Text>
      )}
    </group>
  );
}

function TimelinePath({ nodes }) {
  const points = nodes.map(node => new THREE.Vector3(...node.position));
  const curve = new THREE.CatmullRomCurve3(points);
  const linePoints = curve.getPoints(100);
  const geometry = new THREE.BufferGeometry().setFromPoints(linePoints);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="#61dafb" linewidth={2} />
    </line>
  );
}

function Scene({ filteredData, onNodeClick, selectedItemId }) {
  const getCategoryColor = (category) => {
    const colors = {
      professional: '#22c55e',
      research: '#3b82f6',
      'extra-curricular': '#a855f7',
      competitions: '#fb923c',
    };
    return colors[category] || '#61dafb';
  };

  // Create spiral layout for timeline nodes
  const nodes = filteredData.map((item, index) => {
    const angle = (index / filteredData.length) * Math.PI * 4; // 2 full rotations
    const radius = 5;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = index * 2 - filteredData.length; // Vertical progression

    return {
      position: [x, y, z],
      color: getCategoryColor(item.category),
      label: item.title,
      item: item,
    };
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {nodes.length > 1 && <TimelinePath nodes={nodes} />}
      
      {nodes.map((node) => (
        <TimelineNode
          key={node.item.id}
          position={node.position}
          color={node.color}
          label={node.label}
          onClick={() => onNodeClick(node.item)}
          isActive={selectedItemId === node.item.id}
        />
      ))}
      
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={30}
      />
    </>
  );
}

function TimelineVisual({ filteredData, onNodeClick, selectedItemId }) {
  if (filteredData.length === 0) {
    return (
      <div className="timeline-visual-container">
        <div className="no-data-message">
          <p>No events match the selected filters.</p>
          <p>Please adjust your filters to see timeline events.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="timeline-visual-container">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <color attach="background" args={['#0a0a1a']} />
        <Scene
          filteredData={filteredData}
          onNodeClick={onNodeClick}
          selectedItemId={selectedItemId}
        />
      </Canvas>
      <div className="timeline-instructions">
        <p>🖱️ Click and drag to rotate | Scroll to zoom | Click nodes to view details</p>
      </div>
    </div>
  );
}

export default TimelineVisual;
