import { useGameStore } from "../../store/store";
import { useEffect, useRef } from "react";

export const Speedometer = () => {
  const gameState = useGameStore((state) => state.gameState);
  const speedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateSpeed = () => {
      if (gameState&& gameState.speed !== undefined && speedRef.current) {
        speedRef.current.textContent = Math.round(gameState.speed).toString();
      }
    };

    const interval = setInterval(updateSpeed, 20);

    return () => clearInterval(interval);
  }, []);

  if (!gameState) {
    return null;
  }

  return (
    <div className="speedometer">
      <span ref={speedRef}>0</span><span className="unit">KM/H</span>
    </div>
  );
};