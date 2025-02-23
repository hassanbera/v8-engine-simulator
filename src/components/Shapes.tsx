import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useSimulationStore } from '../store/useSimulationStore';

// Basit bir küp şekli
const ShapeBox = ({ position, color }: { position: [number, number, number]; color: string }) => (
    <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
    </mesh>
);

const Shapes = () => {
    const { shapes }: { shapes: string[] } = useSimulationStore();

    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {shapes.map((color, index) => (
                <ShapeBox key={index} position={[index * 1.5, 0, 0]} color={color} />
            ))}
        </Canvas>
    );
};

export default Shapes;
