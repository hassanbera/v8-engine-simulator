import { create } from 'zustand';

// Simülasyon için state
interface SimulationState {
    step: number;
    shapes: string[];
    inlineCaches: string[];
    nextStep: () => void;
    reset: () => void;
}

export const useSimulationStore = create<SimulationState>((set) => ({
    step: 0,
    shapes: [],
    inlineCaches: [],
    nextStep: () => set((state) => ({ step: state.step + 1 })),
    reset: () => set({ step: 0, shapes: [], inlineCaches: [] }),
}));
