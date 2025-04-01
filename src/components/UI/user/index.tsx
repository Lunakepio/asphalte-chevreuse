import { Countdown } from "./countdown"
import { Success } from "./success"
import { Time } from "./time"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useGameStore } from "../../../store/store";

export const UserUI = () => {
  const timeRef = useRef(null);
  const gameStarted = useGameStore((state) => state.gameStarted);

  useGSAP(() => {
    if (timeRef.current && gameStarted) {
      gsap.to(timeRef.current, {
        opacity: 1,
        duration: 1,
      });
    }
  }, [gameStarted]);
  return(
    <div className="user-ui">
      <Success/>
      <Countdown/>
      <div className="time" style={{opacity:0}} ref={timeRef}><Time/></div>
    </div>
  )
}
