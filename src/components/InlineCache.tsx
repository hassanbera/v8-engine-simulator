import React from 'react';
import { useSimulationStore } from '../store/useSimulationStore';

const InlineCache = () => {
    const { inlineCaches }: { inlineCaches: string[] } = useSimulationStore();

    return (
        <div className="inline-cache">
            <h3>Inline Caches</h3>
            <div className="inline-cache-boxes">
                {inlineCaches.map((cache, index) => (
                    <div key={index} className="cache-box">
                        {cache}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InlineCache;
