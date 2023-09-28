import React from 'react';
import { Bar, Line, Pie, Radar, Scatter } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js/auto';
import { Box, Typography } from '@mui/material';

const DashboardPage: React.FC = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales Data',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const barOptions: ChartOptions<'bar'> = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
      },
    },
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['red', 'blue', 'yellow'],
      },
    ],
  };

  const pieOptions: ChartOptions<'pie'> = {
    responsive: true,
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales Data',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const lineOptions: ChartOptions<'line'> = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const radarData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales Data',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  const radarOptions: ChartOptions<'radar'> = {
    scales: {
      r: {
        beginAtZero: true,
      },
    },
  };

  const scatterData = {
    datasets: [
      {
        label: 'Scatter Dataset',
        data: [
          { x: 65, y: 75 },
          { x: 59, y: 49 },
          { x: 80, y: 90 },
          { x: 81, y: 29 },
          { x: 56, y: 36 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const scatterOptions: ChartOptions<'scatter'> = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        type: 'linear',
        position: 'left',
      },
    },
  };

  return (
    <Box>
      <Box>
        <Typography>Bar Chart</Typography>
        <Bar data={barData} options={barOptions} />
      </Box>
      <Box>
        <Typography>Pie Chart</Typography>
        <Pie data={pieData} options={pieOptions} />
      </Box>
      <Box>
        <Typography>Line Chart</Typography>
        <Line data={lineData} options={lineOptions} />
      </Box>
      <Box>
        <Typography>Radar Chart</Typography>
        <Radar data={radarData} options={radarOptions} />
      </Box>
      <Box>
        <Typography>Scatter Chart</Typography>
        <Scatter data={scatterData} options={scatterOptions} />
      </Box>
    </Box>
  );
};

export default DashboardPage;