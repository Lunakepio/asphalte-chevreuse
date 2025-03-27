import { useGameStore } from "../../store/store";
import { Speedometer } from "./speedometter-2";
import { Gear } from "./Gear";
export const Ui = () => {
  
  const gameState = useGameStore(state => state.gameState);
  
  return (
    <div className="ui">
      {gameState && <Speedometer />}
      {gameState && <Gear/>}
    </div>
  );
};