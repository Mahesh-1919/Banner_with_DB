import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../utils/timeLeft";

export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <div className="flex text-red-500 gap-2 justify-center my-4 bg-white/10 rounded-lg p-2 md:w-96 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <span className="text-4xl">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="label">Day</span>
      </div>

      <div className="flex flex-col justify-center items-center">
        <span className="text-4xl">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="label">Hours</span>
      </div>

      <div className="flex flex-col justify-center items-center">
        <span className="text-4xl">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="label">Minutes</span>
      </div>

      <div className="flex flex-col justify-center items-center">
        <span className="text-4xl">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};
