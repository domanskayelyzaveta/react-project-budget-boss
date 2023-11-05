import styled from '@emotion/styled';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(ChartDataLabels);
export function VerticalChart({ keysArray, valuesArray }) {
  const verticalGradient = document.createElement('canvas').getContext('2d');
  const gradientGreen = verticalGradient.createLinearGradient(0, 550, 0, 120);
  gradientGreen.addColorStop(0, '#383C46');
  gradientGreen.addColorStop(1, '#60C470');

  const gradientGray = verticalGradient.createLinearGradient(0, 550, 0, 120);
  gradientGray.addColorStop(0, '#373745');
  gradientGray.addColorStop(1, '#5B5B6D');

  function getBarColor(index) {
    return index % 3 === 0 ? gradientGreen : gradientGray;
  }

  const data = {
    labels: keysArray,

    datasets: [
      {
        data: valuesArray,

        datalabels: {
          color: 'rgb(199, 204, 220)',
          anchor: 'end',
          align: 'top',
          offset: 8,
          labels: {
            title: {
              font: {
                size: '10px',
              },
            },
          },
          formatter: function (value, context) {
            return ` ${value} UAH`;
          },
        },
      },
    ],
  };
  const colorSettings = {
    backgroundColor: data.labels.map((_, index) => getBarColor(index)),
  };
  const dynamicData = {
    ...data,
    datasets: [
      {
        ...data.datasets[0],
        ...colorSettings,
        backgroundColor: colorSettings.backgroundColor,
      },
    ],
  };
  const options = {
    layout: {
      padding: 25,
    },
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 0,
        borderRadius: 20,
      },
    },
    plugins: {
      labels: {
        title: {
          font: {
            size: '20',
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },

      title: {
        display: false,
      },
    },

    scales: {
      x: {
        max: 9,
        // beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#C7CCDC',
          display: true,
        },
      },
      y: {
        // beginAtZero: true,

        border: {
          display: false,
          color: ' rgb(71, 71, 89)',
        },
        grid: {
          lineWidth: 2,
        },

        ticks: {
          display: false,
        },
      },
    },
    categoryPercentage: 1,
    barThickness: 38,
  };
  const dynamicOptions = {
    ...options,
  };
  const media = {
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1280px)',
  };
  const ChartContainer = styled.div`
    margin-top: 40px;
    padding-top: 20px;
    @media ${media.tablet} {
      height: 420px;
      background-color: rgba(56, 56, 71, 0.6);
      box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
      border-radius: 30px;
      margin-bottom: 80px;
    }
    @media ${media.desktop} {
      margin-left: auto;
      margin-right: auto;
      width: 1034px;
    }
  `;
  return (
    <ChartContainer>
      <Bar options={dynamicOptions} data={dynamicData} />
    </ChartContainer>
  );
}
