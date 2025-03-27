import NumberFlow from "@number-flow/react";
import { useGameStore } from "../../store/store";
import { useEffect, useRef, useState } from "react";

export const Gear = () => {
  const gameState = useGameStore((state) => state.gameState);
  const speedRef = useRef<HTMLSpanElement>(null);
  const [gear, setGear] = useState(1)

  useEffect(() => {
    const updateSpeed = () => {
      if (gameState && gameState.gear !== undefined) {
        setGear(gameState.gear);
      }
    };

    const interval = setInterval(updateSpeed, 500);

    return () => clearInterval(interval);
  }, []);

  if (!gameState) {
    return null;
  }

  return (
    <div className="gearometer">
      <NumberFlow value={gear}/>
    </div>
  );
};