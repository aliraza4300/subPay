"use client";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTimerData = async () => {
      try {
        const response = await fetch("/backend/api/timer");
        const data = await response.json();
        if (data.success) {
          setTime(data.data);
        }
      } catch (error) {
        console.error("Error fetching timer data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch initial data
    fetchTimerData();

    // Update timer every second
    const interval = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Timer finished
          clearInterval(interval);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <span className="footer-timer-text">
      {String(time.hours).padStart(2, "0")}:
      {String(time.minutes).padStart(2, "0")}:
      {String(time.seconds).padStart(2, "0")}
    </span>
  );
};

export default Timer;