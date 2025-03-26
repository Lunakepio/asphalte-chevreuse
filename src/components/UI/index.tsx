import { useGameStore } from "../../store/store";
import { Speedometer } from "./Speedometer";
export const Ui = () => {
  
  const gameState = useGameStore(state => state.gameState);
  
  return (
    <div className="ui">
      {gameState && <Speedometer />}
    </div>
  );
};