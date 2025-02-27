import React from 'react';
import { useSimulationStore } from '../store/useSimulationStore';

const Controls = () => {
    const { nextStep, reset } = useSimulationStore();

    return (
        <div className="controls">
            <button onClick={() => { console.log("Next Step Clicked!"); nextStep(); }}>Sonraki Adım</button>
            <button onClick={() => { console.log("Reset Clicked!"); reset(); }}>
                Sıfırla
            </button>
        </div>
    );
};

export default Controls;
