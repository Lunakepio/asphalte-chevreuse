import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import NumberFlow from "@number-flow/react";
import { useGSAP } from "@gsap/react";

export const Countdown = () => {
  const size = 130;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const circleRef = useRef(null);
  const countdownRef = useRef(null);
  const [count, setCount] = useState(4);

  useGSAP(() => {
    setTimeout(() => {
      gsap.to(countdownRef.current, {
        opacity: 1,
        duration: 0.3,
      });
      gsap.fromTo(
        circleRef.current,
        { strokeDashoffset: circumference },
        {
          strokeDashoffset: 0,
          duration: 3,
          delay: -3,
          ease: "power1.inOut",
        }
      );

      let countdown = 4;
      const interval = setInterval(() => {
        countdown -= 1;
        setCount(countdown);
        if (countdown === 0) clearInterval(interval);
      }, 1000);

      return () => clearInterval(interval);
    }, 1000);
  }, []);

  return (
    <div className="countdown">
      <svg width={size} height={size} style={{ overflow: "visible" }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#ffffff30"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Animated progress circle */}
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
            filter: "url(#glow)", // Glow effect
            stroke: "rgba(255, 255, 255, 0.8)", // Soft white glow
            transition: "stroke-dashoffset 3s ease-in-out",
          }}
        />
      </svg>

      {/* Countdown Number */}
      <div className="countdown-container" ref={countdownRef}>
        <NumberFlow value={count} />
      </div>
    </div>
  );
};
