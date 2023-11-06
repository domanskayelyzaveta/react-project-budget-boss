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
export function HorizontalChart({ keysArray, valuesArray }) {
  const horizontalGradient = document.createElement('canvas').getContext('2d');
  const gradientGreen = horizontalGradient.createLinearGradient(
    0,
    220,
    200,
    220
  );
  gradientGreen.addColorStop(0, '#383C46');
  gradientGreen.addColorStop(1, '#60C470');
  const gradientGray = horizontalGradient.createLinearGradient(
    0,
    220,
    200,
    220
  );

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
            return `${value} UAH`;
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
    indexAxis: 'y',
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
        grid: {
          display: false,
        },
        ticks: {
          color: '#C7CCDC',
          display: false,
        },
      },
      y: {
        // position: 'start',
        max: 9,
        border: {
          display: false,
          color: ' rgb(71, 71, 89)',
        },
        grid: {
          lineWidth: 0,
        },
        ticks: {
          crossAlign: 'far',
          color: '#C7CCDC',
          display: true,
        },
      },
    },
    barThickness: 15,
    minBarLength: 70,
  };
  const dynamicOptions = {
    ...options,
  };
  const media = {
    mobile: '(max-width: 767px)',
  };

  const ChartContainer = styled.div`
    /* margin-top: 20px; */
    min-height: 450px;
    @media ${media.mobile} {
      width: 280px;
      margin-left: auto;
      margin-right: auto;
      background-color: transparent;
      height: 300px;
      padding-top: 20px;
    }
  `;

  return (
    <ChartContainer>
      <Bar options={dynamicOptions} data={dynamicData} />
    </ChartContainer>
  );
}
