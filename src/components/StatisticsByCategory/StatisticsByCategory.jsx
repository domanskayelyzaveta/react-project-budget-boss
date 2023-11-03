import styled from 'styled-components';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import React, { useEffect, useState } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(ChartDataLabels);
export const options = {
  layout: {
    padding: 25,
  },
  labels: {
    title: {
      font: {
        size: '10px',
      },
    },
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
    legend: {
      display: false,
    },

    title: {
      display: false,
    },
  },

  // scales: {
  //   x: {
  //     grid: {
  //       display: false,
  //     },
  //     ticks: {
  //       display: true,
  //     },
  //   },

  //   y: {
  //     display: true,
  //     grid: {
  //       display: false,
  //     },
  //     ticks: {
  //       display: false,
  //     },
  //   },
  // },
  scales: {
    x: {
      // beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        color: '#C7CCDC',
        // display: false,
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
        display: false, // Скрываем метки на оси y
      },
    },
  },
  categoryPercentage: 1,
  barThickness: 'flex',
  barPercentage: 0.6,
};

const labels = [
  'Orange',
  'Pear',
  'Kiwi',
  'Watermelon',
  'Mango',
  'Peach',
  'Pineapple',
  'Raspberry',
  'Cherry',
  'Blackberry',
  'Cantaloupe',
];
const horizontalGradient = document.createElement('canvas').getContext('2d');
const gradientGreen = horizontalGradient.createLinearGradient(0, 0, 100, 0);
gradientGreen.addColorStop(0, '#020202');
gradientGreen.addColorStop(1, '#60c471ae');
const gradientGray = horizontalGradient.createLinearGradient(0, 0, 100, 0);

gradientGray.addColorStop(0, '#000000');
gradientGray.addColorStop(1, '#8e8e91c7');

function getBarColor(index) {
  return index % 3 === 0 ? gradientGreen : gradientGray;
}

const datasetData = labels.map(() => Math.floor(Math.random() * 100) - 0);

const sortedData = [...datasetData].sort((a, b) => b - a);

export const data = {
  labels: labels, // Используйте массив `labels` для определения меток
  datasets: [
    {
      data: sortedData,

      datalabels: {
        color: 'rgb(199, 204, 220)',
        anchor: 'end', // Установите расположение меток данных, например, 'end', 'start', 'center', и т.д.
        align: 'top', // Выравнивание меток данных, например, 'start', 'center', 'end', и т.д.
        offset: 8,

        // padding: { top: 8, bottom: 0, left: 20, right: 0 },
        formatter: function (value) {
          return `${value} UAH`;
        },
      },
      label: '',
    },
  ],
};
const ChartContainer = styled.div`
  padding: 20px;
  @media screen and (min-width: 320px) {
    width: 320px;
    min-height: 90px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(56, 56, 71, 0.6);
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 420px;
  }

  @media screen and (min-width: 1280px) {
    width: 1098px;
  }
`;

export function StatisticsByCategory() {
  const [indexAxis, setIndexAxis] = useState('x');

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIndexAxis(windowWidth >= 704 ? 'x' : 'y');
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Добавьте новое условие здесь
    if (window.innerWidth > 704) {
      // options.scales.y.ticks.display = true;
      // options.scales.x.ticks.display = true;
    } else if (window.innerWidth < 704) {
      // options.scales.y.ticks.display = false;
      // options.scales.x.ticks.display = false;
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  const dynamicOptions = {
    ...options,
    indexAxis: indexAxis,
  };

  return (
    <ChartContainer>
      <Bar options={dynamicOptions} data={dynamicData} />
    </ChartContainer>
  );
}
