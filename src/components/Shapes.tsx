import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useSimulationStore } from '../store/useSimulationStore';

// Basit bir küp şekli
const ShapeBox = ({ position, color }: { position: [number, number, number]; color: string }) => (
    <mesh position={position}>
        <boxGeometry args={[1.01, 1.01, 1.01]} />
        <meshStandardMaterial color={color} />
    </mesh>
);

const Shapes = () => {
    const { shapes } = useSimulationStore();

    console.log("Current Cache State:", shapes);

    return (
        <Canvas camera={{ position: [5, 5, -5], fov: 35 }}>
            <ambientLight intensity={1} />
            <pointLight position={[5, 5, 5]} />
            {shapes.map((color, index) => (
                <ShapeBox key={index} position={[index * 2.5 - 5, 0, 0]} color={color} />
            ))}
        </Canvas>
    );
};



export default Shapes;
