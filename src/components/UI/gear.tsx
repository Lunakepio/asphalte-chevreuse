import React, { useEffect, useState } from "react";
import { useGameStore } from "../../store/store";
import { minRPM, maxRPM } from "../../constants";
import NumberFlow from "@number-flow/react";

export const Gear = () => {
  const numSegments = 24; // Total segments in the arc
  const gameState = useGameStore((state) => state.gameState);
  const [gear, setGear] = useState(1);
  const [rpm, setRPM] = useState(minRPM);
  const purpleThreshold = 18;
  const filledSegments = rpm ? Math.round((rpm / maxRPM) * numSegments) : 0;

  useEffect(() => {
    const updateGear = () => {
      if (gameState && gameState.gear !== undefined) {
        setGear(gameState.gear);
        setRPM(Math.floor(gameState.rpm));
      }
    };

    const interval = setInterval(updateGear, 20);
    return () => clearInterval(interval);
  }, [gameState]);

  const getInterpolatedColor = (index: number) => {
    const t = index / (numSegments - 6);

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
    <div className="gearometer">
      {" "}
      <div style={styles.container}>
        {/* Circular Arc */}
        <svg style={styles.svg} viewBox="0 0 100 100">
          {Array.from({ length: numSegments }).map((_, i) => {
            const angle = (i / numSegments) * 240 - 130;
            const isFilled = i < filledSegments;
            const color = isFilled
              ? getInterpolatedColor(i)
              : i > purpleThreshold
              ? "#ff54da50"
              : "#baf7e850";

            return (
              <rect
                key={i}
                x="50"
                y="10"
                width="2"
                height="6"
                rx="1"
                fill={i > purpleThreshold && isFilled ? "#ff54da" : color}
                transform={`rotate(${angle} 50 50)`}
              />
            );
          })}
        </svg>

        {/* Speed Number */}
        <div style={styles.speedText}>
          <span className="gear">
            <NumberFlow value={gear} />
          </span>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    width: "200px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
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
