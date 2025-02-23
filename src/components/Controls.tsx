import React from 'react';
import { useSimulationStore } from '../store/useSimulationStore';

const Controls = () => {
    const { nextStep, reset } = useSimulationStore();

    return (
        <div className="controls">
            <button onClick={nextStep}>Sonraki Adım</button>
            <button onClick={reset}>Sıfırla</button>
        </div>
    );
};

export default Controls;
