import { useGameStore } from "../../store/store";
import { Speedometer } from "./speedometter";
import { Gear } from "./gear";
import { useEffect, useRef, useState} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const Ui = () => {
  
  const gameState = useGameStore(state => state.gameState);
  const uiRef = useRef(null)
  const [afk, setAfk] = useState(false);

  useEffect(() => {
    const updateAfk = () => {
      if (gameState && gameState.afk !== undefined) {
        setAfk(gameState.afk);
      }
    }

    const interval = setInterval(updateAfk, 100);
    return () => clearInterval(interval);
  }, [gameState]);

  useGSAP(() => {
    if(!uiRef.current) return;
    const ui = uiRef.current;
    if(afk) {
      gsap.to(ui, {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "power1.inOut"
      })
    } else {
      gsap.to(ui, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.inOut"
      })
    }

  }, [afk])
  
  return (
    <div className="ui">
      <div className="speed-container" ref={uiRef}>
      {gameState && <Speedometer />}
      {gameState && <Gear/>}
      </div>
    </div>
  );
};
