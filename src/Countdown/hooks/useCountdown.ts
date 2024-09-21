import { useState, useEffect } from 'react';

interface CountdownProps {
  date: Date | number;
  showDay?: boolean;
  showHour?: boolean;
  showMinute?: boolean;
  showSecond?: boolean;
}

interface TimeLeft {
  day?: string;
  hour?: string;
  minute?: string;
  second?: string;
}

const useCountdown = ({
  date,
  showDay = true,
  showHour = true,
  showMinute = true,
  showSecond = true,
}: CountdownProps): TimeLeft => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  useEffect(() => {
    const targetDate = typeof date === 'number' ? new Date(date) : date;

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const timeLeft: TimeLeft = {};

      const totalMilliseconds = difference;
      const totalSeconds = Math.floor(totalMilliseconds / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      if (showDay) {
        timeLeft.day = String(totalDays).padStart(2, '0');
      }

      if (showHour) {
        const hours = showDay ? totalHours % 24 : totalHours;
        timeLeft.hour = String(hours).padStart(2, '0');
      }

      if (showMinute) {
        const minutes = showHour ? totalMinutes % 60 : totalMinutes;
        timeLeft.minute = String(minutes).padStart(2, '0');
      }

      if (showSecond) {
        const seconds = showMinute ? totalSeconds % 60 : totalSeconds;
        timeLeft.second = String(seconds).padStart(2, '0');
      }

      setTimeLeft(timeLeft);
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [date, showDay, showHour, showMinute, showSecond]);

  return timeLeft;
};

export default useCountdown;
