import { useRef, useState } from "react";
import { gsap } from "gsap";
import NumberFlow from "@number-flow/react";
import { useGSAP } from "@gsap/react";
import { useGameStore } from "../../../store/store";

export const Countdown = () => {
  const size = 130;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const circleRef = useRef(null);
  const countdownRef = useRef(null);
  const startRef = useRef(null);
  const setGameStarted = useGameStore(state => state.setGameStarted);
  const count = useGameStore(state => state.count);
  const setCount = useGameStore(state => state.setCount);
  const [isFinished, setIsFinished] = useState(false);

  useGSAP(() => {
    setTimeout(() => {
      gsap.to(countdownRef.current, {
        opacity: 1,
        duration: 0.2,
      });

      gsap.fromTo(
        circleRef.current,
        { strokeDashoffset: circumference },
        {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power4.inOut",
        },
      );
      let countdown = 3;
      if (countdown <= 1) {
        gsap.to(countdownRef.current, {
          opacity: 0,
          duration: 0.2,
        });
      }
      const interval = setInterval(() => {
        countdown -= 1;
       if(countdown >= 1) {
         setCount(countdown);
         gsap.fromTo(
           circleRef.current,
           { strokeDashoffset: circumference },
           {
             strokeDashoffset: 0,
             duration: 1,
             ease: "power4.inOut",
           },
         );
       }

        if (countdown === -3) clearInterval(interval);
      }, 1000);

      return () => clearInterval(interval);
    }, 1000);
  }, []);

  useGSAP(() => {
    if (count === 1) {
      gsap.to(countdownRef.current, {
        autoAlpha: 0,
        duration: 0.2,
        delay: 1,
      });
      gsap.to(circleRef.current, {
        opacity: 0,
        duration: 0.2,
        delay: 1,
        onComplete: () => {
          setGameStarted(true);
          const tl = gsap.timeline();
          tl.to(startRef.current, {
            opacity: 1,
            duration: 0.2,
            scale: 1,
            ease: "power4.out",
          });
          tl.to(startRef.current, {
            duration: 2,
            scale: 1,
            delay: -0.2,
            ease: "power4.out",
          });
          tl.to(startRef.current, {
            autoAlpha: 0,
            scale: 3,
            duration: 0.3,
            onComplete:()=>{
              setIsFinished(true);
            }
          });
        },
      });
    }
  }, [count]);

  if(isFinished){
    return null;
  }
  
  return (
    <div className="countdown">
      <svg width={size} height={size} style={{ overflow: "visible" }}>
        <circle
          ref={circleRef}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#ffffff"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            stroke: "rgba(255, 255, 255, 1)", // Soft white glow
          }}
        />
      </svg>

      {/* Countdown Number */}
      <div className="countdown-container" ref={countdownRef}>
        <NumberFlow value={count} />
      </div>
      <div className="start" ref={startRef}>START!</div>
    </div>
  );
};
