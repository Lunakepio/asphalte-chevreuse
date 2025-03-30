import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useGameStore = create((set, get) => ({
  gameState: undefined,
  setGameState: (newState) => set({ gameState: newState }),
  gameStarted: false,
  setGameStarted: (newGameStarted) => set({ gameStarted: newGameStarted }),
  count: 3,
  decrementCount: () => set({ count: get().count - 1 }),
  incrementCount: () => set({ count: get().count + 1 }),
  setCount: (newCount) => set({ count: newCount }),
  afk: false,
  setAfk: (newAfk) => set({ afk: newAfk }),
  gear: 1,
  setGear: (newGear) => set({ gear: newGear }),
  speed: 0,
  setSpeed: (newSpeed) => set({ speed: newSpeed }),
  rpm: 1500,
  setRpm: (newRpm) => set({ rpm: newRpm }),
  pause: false,
  togglePause: () => set({ pause: !get().pause }),
  showSuccess: false,
  setShowSuccess: (newShowSuccess) => set({ showSuccess: newShowSuccess }),
}));


export const useGameStatsStore = create(
  persist(
    (set) => ({
      distance: 0,
      addDistance: (amount) => set((state) => ({ distance: state.distance + amount })),
    }),
    {
      name: "game-stats-storage",
    },
  ),
);
