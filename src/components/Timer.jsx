import useCountdown from "../hooks/useCountdown";
import { TIMER_SETTINGS } from "../data/quizConfig";
export default function Timer({ currentRound, onNextRound }) {
  const timeLeft = useCountdown({
    duration: TIMER_SETTINGS.QUESTION_DURATION,
    resetKey: currentRound,
    onExpire: () => onNextRound("Out of time"),
  });

  return (
    <div>
      <p className="quiz-timer">
        Time left: <strong>{timeLeft}</strong>
      </p>
    </div>
  );
}
