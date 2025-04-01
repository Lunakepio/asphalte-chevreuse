import { useGameStore } from "../../../store/store"; // Adjust the import according to your project structure
import { formatTime } from "../../../lib/formatTime";

export const Time = () => {
  const time = useGameStore((state) => state.time);
  const formattedTime = formatTime(time);

  return (
    <div className="time">
      <div className="time-container">
          <div className="time-value">
            {formattedTime.split('').map((digit, index) => (
            <span
            key={index}
            className={`digit ${digit === '.' ? 'zero dot' : ''}`}
          >
            {digit}
          </span>
            ))}
          </div>
      </div>
    </div>
  );
};
