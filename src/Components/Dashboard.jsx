import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip);

const Dashboard = () => {
  const chartData = {
    labels: ['Bahubali', 'Avatar', 'Comedy', 'Action', 'Devotional', 'Drama', 'Adventure'],
    datasets: [
      {
        // label: 'Example Dataset',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(0, 0, 0, 0.6)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            if (label) {
              const value = chartData.datasets[0].data[context.dataIndex] || 0;
              return `${label}: ${value}`;
            }
            return '';
          },
        },
      },
    },
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Movies Watched in Bar Chart</h2>
          <div className="chart-container" style={{ width: '40vw', height: '40vh' }}>
            <Bar data={chartData} options={options} />
          </div>
        </div>
        <div className="col-md-6">
          <h2>Movies Watched in Pie Chart</h2>
          <div className="chart-container" style={{ width: '40vw', height: '40vh' }}>
            <Pie data={chartData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
