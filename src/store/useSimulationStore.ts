import { create } from 'zustand';

// Simülasyon için state
interface SimulationState {
    step: number;
    shapes: string[];
    inlineCaches: string[];
    nextStep: () => void;
    reset: () => void;
}

export const useSimulationStore = create<SimulationState>((set, get) => ({
    step: 0,
    shapes: [],
    inlineCaches: [],
    
    nextStep: () => {
        const { step, shapes } = get();

        let newColor;
        if (step === 0) {
            newColor = "blue"; // Cold State
            alert("you are in the cold state");
        } else if (step === 1) {
            newColor = "blue"; // Monomorphic State (same color, same structure)
            alert("you are in the Monomorphic state");
        } else if (step === 2) {
            newColor = "yellow"; // Transition to Polymorphic
            alert("you are in the Polymorphic state");
        } else {
            newColor = "red"; // Megamorphic State (final optimization loss)
            alert("you are in the Megamorphic state");
        }
        if(step===4){
            // i want to stop creating new shapes after 4th step
            alert("You have reached the end of the simulation u need to update the code-block to see more features.");
            return;
        }

        set({
            step: step + 1,
            shapes: [...shapes, newColor], // Use controlled state transitions
        });
    },

    reset: () => set({ step: 0, shapes: [], inlineCaches: [] }),
}));


// ✅ Random color generator
const getRandomColor = () => {
    const colors = ["red", "blue", "green", "yellow", "purple"];
    return colors[Math.floor(Math.random() * colors.length)];
};


