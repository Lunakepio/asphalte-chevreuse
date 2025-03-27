import React, { useEffect, useState } from "react";
import { useGameStore } from "../../store/store";
import { minRPM, maxRPM } from "../../constants";

export const Speedometer = () => {
  const numSegments = 24; // Total segments in the arc
  const gameState = useGameStore((state) => state.gameState);
  const [speed, setSpeed] = useState("000");
  const [rpm, setRPM] = useState(minRPM)
  const filledSegments = speed
    ? Math.round((rpm / maxRPM) * numSegments)
    : 0;

  useEffect(() => {
    const updateSpeed = () => {
      if (gameState && gameState.speed !== undefined) {
        const formattedSpeed = String(
          Math.min(999, Math.round(gameState.speed)),
        ).padStart(3, "0");
        setSpeed(formattedSpeed);
        setRPM(Math.floor(gameState.rpm))
      }
    };

    const interval = setInterval(updateSpeed, 20);
    return () => clearInterval(interval);
  }, [gameState]);

  // Function to interpolate color between Green, Blue, and Purple
  const getInterpolatedColor = (index: number) => {
    const t = index / numSegments; // Normalized position (0 to 1)

    let hue;
    if (t < 0.5) {
      // Green to Blue
      hue = 120 + (220 - 120) * (t / 0.5);
    } else {
      // Blue to Purple
      hue = 220 + (280 - 220) * ((t - 0.5) / 0.5);
    }

    return `hsl(${hue}, 80%, 60%)`;
  };

  return (
    <div style={styles.container}>
      {/* Circular Arc */}
      <svg style={styles.svg} viewBox="0 0 100 100">
        {Array.from({ length: numSegments }).map((_, i) => {
          const angle = (i / numSegments) * 240 - 90;
          const isFilled = i < filledSegments;
          const color = isFilled ? getInterpolatedColor(i) : i > 18 ? "#ff54da50" : "#baf7e850";

          return (
            <rect
              key={i}
              x="50"
              y="10"
              width="2"
              height="6"
              rx="1"
              fill={i > 18 && isFilled ? "#ff54da" : color}
              transform={`rotate(${angle} 50 50)`}
            />
          );
        })}
      </svg>

      {/* Speed Number */}
      <div style={styles.speedText}>
        <span className="speed-digits">
          {speed.split("").map((digit, index) => (
            <span
              key={index}
              className={`digit ${index === 0 && digit === "0" ? "zero" : ""}`}
            >
              {digit}
            </span>
          ))}
        </span>
      </div>
      <div className="unit">km/h</div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    width: "200px",
    height: "200px",
    position: "fixed",
    bottom: "5%",
    right: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  speedText: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  unitText: {
    position: "absolute",
    bottom: "30px",
    fontSize: "14px",
    color: "gray",
    textAlign: "center",
  },
};
