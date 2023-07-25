import React, { useState, useEffect } from 'react';
import '../CSS/calendar.css';

const Timer = () => {
  const [timeOnline, setTimeOnline] = useState(getStoredTime('timeOnline') || {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [timeOffline, setTimeOffline] = useState(getStoredTime('timeOffline') || {
    days: 0,
    hours: 10,
    minutes: 0,
    seconds: 30
  });

  const [data, setData] = useState([
      
{ id: 1, component: 'Madhapur', type: 'Gateway', status: 'Online', time: '2023-07-13 10:30:00', gateway: 'Dev Gateway' },
{ id: 2, component: 'Hitech City', type: 'Feed', status: 'Offline', time: '2023-07-14 09:15:00', gateway: 'Prod Gateway' },
{ id: 3, component: 'Durgam Cheruvu', type: 'Abc', status: 'Online', time: '2023-07-15 14:45:00', gateway: 'Stag Gateway' },
{ id: 4, component: 'Madhapur', type: 'Gateway', status: 'Online', time: '2023-07-13 10:30:00', gateway: 'Dev Gateway' },
{ id: 5, component: 'Hitech City', type: 'Feed', status: 'Offline', time: '2023-07-14 09:15:00', gateway: 'Prod Gateway' },
{ id: 6, component: 'Durgam Cheruvu', type: 'Abc', status: 'Online', time: '2023-07-15 14:45:00', gateway: 'Stag Gateway' },
{ id: 7, component: 'Madhapur', type: 'Gateway', status: 'Online', time: '2023-07-13 10:30:00', gateway: 'Dev Gateway' },
{ id: 8, component: 'Hitech City', type: 'Feed', status: 'Offline', time: '2023-07-14 09:15:00', gateway: 'Prod Gateway' },
{ id: 9, component: 'Durgam Cheruvu', type: 'Abc', status: 'Online', time: '2023-07-15 14:45:00', gateway: 'Stag Gateway' },

  ]);

  const compareValues = (key, order = 'ascending') => {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
  
      if (key === 'time') {
        const timeA = new Date(a[key]).getTime();
        const timeB = new Date(b[key]).getTime();
        if (timeA === timeB) {
          return 0;
        }
        return order === 'ascending' ? timeA - timeB : timeB - timeA;
      }
  
      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
  
      return order === 'descending' ? comparison * -1 : comparison;
    };
  };

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

      const newTime = {
        days: days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      };

      storeTime('timeOnline', newTime);

      return newTime;
    });
  };

  const updateOfflineTimer = () => {
    setTimeOffline(prevTime => {
      const seconds = prevTime.seconds + 1;
      const minutes = prevTime.minutes + Math.floor(seconds / 60);
      const hours = prevTime.hours + Math.floor(minutes / 60);
      const days = prevTime.days + Math.floor(hours / 24);

      const newTime = {
        days: days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      };

      storeTime('timeOffline', newTime);

      return newTime;
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

  const handleOnlineStatus = () => {
    if (navigator.onLine && mode === 'uptime') {
      setInterval(updateOnlineTimer, 1000);
    }
  };

  const handleOfflineStatus = () => {
    if (!navigator.onLine && mode === 'downtime') {
      setInterval(updateOfflineTimer, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    };
  }, []);

  const getSortIcon = (column) => {
    if (sortConfig && sortConfig.column === column) {
      return sortConfig.direction === 'ascending' ? (
        <i className="fa fa-sort-up" aria-hidden="true"></i>
      ) : (
        <i className="fa fa-sort-down" aria-hidden="true"></i>
      );
    }
    return <i className="fa fa-sort" aria-hidden="true"></i>;
  };

  const [sortConfig, setSortConfig] = useState(null);
  const [sortedData, setSortedData] = useState(data);

  const sortData = (column) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.column === column && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ column, direction });
    const sorted = [...data].sort(compareValues(column, direction));
    setSortedData(sorted);
  };

  const handleModeChange = (newMode) => {
    if (newMode !== mode) {
      if (mode === 'uptime') {
        setPrevTime(timeOnline);
      } else if (mode === 'downtime') {
        setPrevTime(timeOffline);
      }

      if (newMode === 'uptime') {
        setTimeOnline(prevTime => {
          const newTime = {
            days: prevTime.days + prevTime.days,
            hours: prevTime.hours + prevTime.hours,
            minutes: prevTime.minutes + prevTime.minutes,
            seconds: prevTime.seconds + prevTime.seconds
          };

          storeTime('timeOnline', newTime);

          return newTime;
        });
      }

      setMode(newMode);
    }
  };

  useEffect(() => {
    if (mode === 'uptime') {
      setTimeOnline(prevTime => ({
        ...prevTime,
        ...prevTime
      }));
    } else if (mode === 'downtime') {
      setTimeOffline(prevTime => ({
        ...prevTime,
        ...prevTime
      }));
    }
  }, [prevTime, mode]);

  return (
    <table className="container table table-striped table-hover" style={{ marginLeft: '13rem', marginTop: '10px' }}>
      <thead>
        <tr className="table-danger">
          <th onClick={() => sortData('component')}>
            Component {getSortIcon('component')}
          </th>
          <th onClick={() => sortData('type')}>
            Type {getSortIcon('type')}
          </th>
          <th onClick={() => sortData('status')}>
            Status {getSortIcon('status')}
          </th>
          <th onClick={() => sortData('time')}>
            Time {getSortIcon('time')}
          </th>
          <th onClick={() => sortData('gateway')}>
            Gateway {getSortIcon('gateway')}
          </th>
          <th>Up/Down time</th>
          
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.id}>
            <td>{item.component}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
            <td>{new Date(item.time).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
            <td>{item.gateway}</td>
            
            <td>
              <Timer
                days={0}
                hours={10}
                minutes={0}
                seconds={30}
                
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Helper function to store timer values in local storage
const storeTime = (key, time) => {
  localStorage.setItem(key, JSON.stringify(time));
};

// Helper function to retrieve timer values from local storage
const getStoredTime = (key) => {
  const storedTime = localStorage.getItem(key);
  return storedTime ? JSON.parse(storedTime) : null;
};

export default Timer;
