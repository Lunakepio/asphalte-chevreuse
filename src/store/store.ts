import { create } from "zustand";

export const useGameStore = create((set) => ({
  gameState: undefined,
  setGameState: (newState) => set({ gameState: newState }),
}));