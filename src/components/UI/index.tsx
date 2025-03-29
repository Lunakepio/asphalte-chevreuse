// import { useGameStore } from "../../store/store";
import { CarUI } from "./car"
import { UserUI } from "./user";
export const Ui = () => {
  return (
    <div className="ui">
      <CarUI/>
      <UserUI/>
    </div>
  );
};
