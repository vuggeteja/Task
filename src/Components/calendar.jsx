import React, { useState, useEffect } from 'react';
import '../CSS/calendar.css';

const Timer = () => {
  const [timeOnline, setTimeOnline] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [timeOffline, setTimeOffline] = useState({
    days: 0,
    hours: 10,
    minutes: 0,
    seconds: 30
  });

  const [mode, setMode] = useState('downtime');
  const [prevTime, setPrevTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const updateOnlineTimer = () => {
    setTimeOnline(prevTime => {
      const seconds = prevTime.seconds + 1;
      const minutes = prevTime.minutes + Math.floor(seconds / 60);
      const hours = prevTime.hours + Math.floor(minutes / 60);
      const days = prevTime.days + Math.floor(hours / 24);

      return {
        days: days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      };
    });
  };

  const updateOfflineTimer = () => {
    setTimeOffline(prevTime => {
      const seconds = prevTime.seconds + 1;
      const minutes = prevTime.minutes + Math.floor(seconds / 60);
      const hours = prevTime.hours + Math.floor(minutes / 60);
      const days = prevTime.days + Math.floor(hours / 24);

      return {
        days: days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      };
    });
  };

  useEffect(() => {
    let onlineTimer = null;
    let offlineTimer = null;

    if (mode === 'uptime') {
      onlineTimer = setInterval(updateOnlineTimer, 1000);
    } else if (mode === 'downtime') {
      offlineTimer = setInterval(updateOfflineTimer, 1000);
    }

    return () => {
      clearInterval(onlineTimer);
      clearInterval(offlineTimer);
    };
  }, [mode]);

  // const handleOnlineStatus = () => {
  //   if (navigator.onLine && mode === 'uptime') {
  //     setInterval(updateOnlineTimer, 1000);
  //   }
  // };

  // const handleOfflineStatus = () => {
  //   if (!navigator.onLine && mode === 'downtime') {
  //     setInterval(updateOfflineTimer, 1000);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('online', handleOnlineStatus);
  //   window.addEventListener('offline', handleOfflineStatus);

  //   return () => {
  //     window.removeEventListener('online', handleOnlineStatus);
  //     window.removeEventListener('offline', handleOfflineStatus);
  //   };
  // }, []);

  const handleModeChange = (newMode) => {
    if (newMode !== mode) {
      if (mode === 'uptime') {
        setPrevTime(timeOnline);
      } else if (mode === 'downtime') {
        setPrevTime(timeOffline);
      }

      if (newMode === 'uptime') {
        setTimeOnline(prevTime => ({
          days: prevTime.days + prevTime.days,
          hours: prevTime.hours + prevTime.hours,
          minutes: prevTime.minutes + prevTime.minutes,
          seconds: prevTime.seconds + prevTime.seconds
        }));
      }

      setMode(newMode);
    }
  };

  // useEffect(() => {
  //   if (mode === 'uptime') {
  //     setTimeOnline(prevTime => ({
  //       ...prevTime,
  //       ...prevTime
  //     }));
  //   } else if (mode === 'downtime') {
  //     setTimeOffline(prevTime => ({
  //       ...prevTime,
  //       ...prevTime
  //     }));
  //   }
  // }, [prevTime, mode]);

  return (
    <div className="container text-center" style={{ maxWidth: '25vw' }}>
      
      <div className="row">
        <div className="time" onClick={() => handleModeChange('uptime')}><b>UpTime</b></div>
        <div className="col">
          <div className={`p-3 bg-warning text-light ${mode === 'uptime' ? '' : 'paused'}`}>
            {timeOnline.days.toString().padStart(2, '0')}Days
          </div>
        </div>
        <div className="col">
          <div className={`p-3 bg-danger text-light ${mode === 'uptime' ? '' : 'paused'}`}>
            {timeOnline.hours.toString().padStart(2, '0')}Hrs
          </div>
        </div>
        <div className="col">
          <div className={`p-3 bg-primary text-light ${mode === 'uptime' ? '' : 'paused'}`}>
            {timeOnline.minutes.toString().padStart(2, '0')}Min
          </div>
        </div>
        <div className="col">
          <div className={`p-3 bg-success text-light ${mode === 'uptime' ? '' : 'paused'}`}>
            {timeOnline.seconds.toString().padStart(2, '0')}Sec
          </div>
        </div>
      </div>

      <div className="row" style={{ display: 'flex', flexWrap: 'nowrap' }}>
        <div className="time" onClick={() => handleModeChange('downtime')}><b>DownTime</b></div>
        <div className="col">
          <div className={`p-3 bg-warning text-light ${mode === 'downtime' ? '' : 'paused'}`}>
            {timeOffline.days.toString().padStart(2, '0')}Days
          </div>
        </div>
        <div className="col">
          <div className={`p-3 bg-danger text-light ${mode === 'downtime' ? '' : 'paused'}`}>
            {timeOffline.hours.toString().padStart(2, '0')}Hrs
          </div>
        </div>
        <div className="col">
          <div className={`p-3 bg-primary text-light ${mode === 'downtime' ? '' : 'paused'}`}>
            {timeOffline.minutes.toString().padStart(2, '0')}Min
          </div>
        </div>
        <div className="col">
          <div className={`p-3 bg-success text-light ${mode === 'downtime' ? '' : 'paused'}`}>
            {timeOffline.seconds.toString().padStart(2, '0')}Sec
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
