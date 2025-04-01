import { useGameStore } from "../../../store/store";
import { Speedometer } from "./speedometter";
import { Gear } from "./gear";
import { Distance } from "./distance";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const CarUI = () => {
  const uiRef = useRef(null);
  const afk = useGameStore((state) => state.afk);
  const pause = useGameStore((state) => state.pause);
  const gameStarted = useGameStore((state) => state.gameStarted);

  useGSAP(() => {
    if (!uiRef.current) return;
    const ui = uiRef.current;
      gsap.to(ui, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 4,
        ease: "power1.inOut",
      });

  }, []);

  useGSAP(() => {
    if (!uiRef.current) return;
    const ui = uiRef.current;
    if(gameStarted){
      if (afk) {
        gsap.to(ui, {
          opacity: 0,
          y: 25,
          duration: 1,
          ease: "power1.inOut",
        });
      } else {
        gsap.to(ui, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.inOut",
        });
      }
    }
  }, [afk]);

    return (
      <div className="speed-container" ref={uiRef}>
        <Speedometer />
        <Gear />
        <Distance />
      </div>
    );
};
