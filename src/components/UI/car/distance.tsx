import NumberFlow from "@number-flow/react";
import { useGameStatsStore } from "../../../store/store";

export const Distance = () => {
  const distance = useGameStatsStore((state) => state.distance);

  return (
    <div className="distance-container">
      <NumberFlow value={Math.floor(distance / 1000)}/><span className="unit">KM</span>
    </div>
  );
};