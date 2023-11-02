// import styled from 'styled-components';
// import 'chartjs-plugin-datalabels';
// import React, { useEffect, useState } from 'react';
// import chartBcg from '../../images/tablet/chartBcg.png';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   maintainAspectRatio: false,
//   responsive: true,
//   indexAxis: 'y',
//   elements: {
//     bar: {
//       borderWidth: 0,
//       borderRadius: 20,
//     },
//   },

//   plugins: {
//     legend: {
//       display: false,
//     },

//     title: {
//       display: false,
//     },
//   },

//   scales: {
//     x: {
//       grid: {
//         display: false,
//       },
//     },

//     y: {
//       grid: {
//         display: false,
//       },
//     },
//   },
//   categoryPercentage: 1,
//   barThickness: 'flex',
//   barPercentage: 0.6,
// };

// const labels = [
//   'Orange',
//   'Pear',
//   'Kiwi',
//   'Watermelon',
//   'Mango',
//   'Peach',
//   'Pineapple',
//   'Raspberry',
//   'Cherry',
//   'Blackberry',
//   'Cantaloupe',
// ];
// const horizontalGradient = document.createElement('canvas').getContext('2d');
// const gradient = horizontalGradient.createLinearGradient(0, 0, 350, 0);
// gradient.addColorStop(0, '#020202');
// gradient.addColorStop(1, '#60c470');
// const datasetData = labels.map(() => Math.floor(Math.random() * 2000) - 0);

// const sortedData = [...datasetData].sort((a, b) => b - a);

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 2',
//       data: sortedData,
//       backgroundColor: gradient,
//       parsing: {
//         display: false,
//       },
//     },
//   ],
// };
// const ChartContainer = styled.div`
//   background-color: #5a6a6e30;

//   @media screen and (min-width: 320px) {
//     width: 320px;
//     min-height: 90px;
//     margin-left: auto;
//     margin-right: auto;
//   }

//   @media screen and (min-width: 768px) {
//     width: 704px;
//     height: 420px;
//   }

//   @media screen and (min-width: 1280px) {
//     width: 1098px;
//   }
// `;

// export function StatisticsByCategory() {
//   const [indexAxis, setIndexAxis] = useState('y');

//   useEffect(() => {
//     const handleResize = () => {
//       const windowWidth = window.innerWidth;
//       setIndexAxis(windowWidth >= 704 ? 'x' : 'y');
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const dynamicOptions = {
//     ...options,
//     indexAxis: indexAxis,
//   };
//   return (
//     <ChartContainer>
//       <Bar options={dynamicOptions} data={data} />
//     </ChartContainer>
//   );
// }

import styled from 'styled-components';
import 'chartjs-plugin-datalabels';
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
import { array } from 'i/lib/util';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

  scales: {
    x: {
      grid: {
        display: false,
      },
    },

    y: {
      grid: {
        display: false,
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
const gradientGreen = horizontalGradient.createLinearGradient(0, 0, 200, 0);
gradientGreen.addColorStop(0, '#020202');
gradientGreen.addColorStop(1, '#60c471ae');
const gradientGray = horizontalGradient.createLinearGradient(0, 0, 200, 0);

gradientGray.addColorStop(0, '#000000');
gradientGray.addColorStop(1, '#8e8e91c7');

function getBarColor(index) {
  return index % 3 === 0 ? gradientGreen : gradientGray;
}

const datasetData = labels.map(() => Math.floor(Math.random() * 2000) - 0);

const sortedData = [...datasetData].sort((a, b) => b - a);

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: sortedData,
      parsing: {
        display: false,
      },
    },
  ],
};
const ChartContainer = styled.div`
  background-color: #5a6a6e30;

  @media screen and (min-width: 320px) {
    width: 320px;
    min-height: 90px;
    margin-left: auto;
    margin-right: auto;
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
  const [indexAxis, setIndexAxis] = useState('y');

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIndexAxis(windowWidth >= 704 ? 'x' : 'y');
    };

    handleResize();
    window.addEventListener('resize', handleResize);

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
