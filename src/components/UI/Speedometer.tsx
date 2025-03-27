import { useGameStore } from "../../store/store";
import { useEffect, useState } from "react";

export const Speedometer = () => {
  const gameState = useGameStore((state) => state.gameState);
  const [speed, setSpeed] = useState("000");

  useEffect(() => {
    const updateSpeed = () => {
      if (gameState && gameState.speed !== undefined) {
        const formattedSpeed = String(
          Math.min(999, Math.round(gameState.speed)),
        ).padStart(3, "0");
        setSpeed(formattedSpeed);
      }
    };

    const interval = setInterval(updateSpeed, 20);
    return () => clearInterval(interval);
  }, [gameState]);

  return (
    <div className="speedometer-container">
      <div className="speedometer">
        <div className="speed">
          {speed.split("").map((digit, index) => (
            <span
              key={index}
              className={`digit ${index === 0 && digit === "0" ? "zero" : ""}`}
            >
              {digit}
            </span>
          ))}
        </div>
        <span className="unit">KM/H</span>
      </div>
    </div>
  );
};
