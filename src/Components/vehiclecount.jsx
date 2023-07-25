import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/vehicle.css';

const VehicleCountChart = () => {
  const vehicleData = [
    { label: 'Cars', inCount: 45, outCount: 30 },
    { label: 'Bikes', inCount: 128, outCount: 75 },
    { label: 'Trucks', inCount: 65, outCount: 40 },
  ];

  const data = {
    labels: vehicleData.map((item) => item.label),
    datasets: [
      {
        label: 'In Count',
        data: vehicleData.map((item) => item.inCount),
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
      },
      {
        label: 'Out Count',
        data: vehicleData.map((item) => item.outCount),
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <>
    <div className=''></div>
    <div className="container mt-4">
      <h1 className="mb-4">Vehicle Count (In and Out)</h1>
      <div className="card">
        <div className="card-body">
          <Bar data={data} options={options} width={10} height={10} />
        </div>
      </div>
      <div className="legend-box">
          <div className="in-legend">
            <span className="box"></span>
            In Vehicles
          </div>
          <div className="out-legend">
            <span className="box"></span>
            Out Vehicles
          </div>
        </div>
    </div>
    </>
  );
};

export default VehicleCountChart;
