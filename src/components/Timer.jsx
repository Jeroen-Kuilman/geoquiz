import useCountdown from "../hooks/useCountdown";
import { TIMER_SETTINGS } from "../data/quizConfig";
import { useEffect } from "react";
export default function Timer({ currentRound, onNextRound, onTimeLeft }) {
  const timeLeft = useCountdown({
    duration: TIMER_SETTINGS.QUESTION_DURATION,
    resetKey: currentRound,
    onExpire: () => onNextRound("Out of time"),
  });

  useEffect(() => {
    onTimeLeft(timeLeft);
  }, [timeLeft, onTimeLeft]);

  return (
    <div>
      <p className="quiz-timer">
        Time left: <strong>{timeLeft}</strong>
      </p>
    </div>
  );
}
