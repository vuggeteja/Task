import React, { useState } from 'react';
import '../App.css'

const Table = () => {
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

  const [sortConfig, setSortConfig] = useState(null);

  const sortData = (column) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.column === column && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ column, direction });
    setData([...data].sort(compareValues(column, direction)));
  };

  const compareValues = (key, order = 'ascending') => {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
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

  return (
    <table className='container table table-striped table-hover' style={{ marginLeft: '13rem', marginTop: '10px' }}>
      <thead>
        <tr className='table-danger'>
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
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.component}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
            <td>{new Date(item.time).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
            <td>{item.gateway}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;


