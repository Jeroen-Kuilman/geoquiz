import { useEffect, useRef, useState } from "react";

export default function useCountdown({ duration, resetKey, onExpire }) {
  const [timerState, setTimerState] = useState({
    duration,
    resetKey,
    timeLeft: duration,
  });
  const onExpireRef = useRef(onExpire);
  const isCurrentTimer =
    timerState.duration === duration &&
    Object.is(timerState.resetKey, resetKey);
  const timeLeft = isCurrentTimer ? timerState.timeLeft : duration;

  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    let remaining = duration;

    const timer = window.setInterval(() => {
      remaining -= 1;
      setTimerState({ duration, resetKey, timeLeft: remaining });

      if (remaining <= 0) {
        window.clearInterval(timer);
        onExpireRef.current();
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [duration, resetKey]);

  return timeLeft;
}
