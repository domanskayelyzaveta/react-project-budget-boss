import styled from 'styled-components';
// import css from '../../index.css';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

  // layout: {
  //   padding: 20,
  // },
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
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const horizontalGradient = document.createElement('canvas').getContext('2d');
const gradient = horizontalGradient.createLinearGradient(0, 0, 400, 0);
gradient.addColorStop(0, '#020202');
gradient.addColorStop(1, '#60c470');
const datasetData = labels.map(() => Math.floor(Math.random() * 2000) - 0);

const sortedData = [...datasetData].sort((a, b) => b - a);

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: sortedData,
      backgroundColor: gradient,
      parsing: {
        display: false,
      },
    },
  ],
};
const ChartContainer = styled.div`
  background-color: #00c3ff58;

  /* @media screen and (min-width: 320px) {
    .container {
      width: 320px;

      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      width: 704px;
    }
  }

  @media screen and (min-width: 1280px) {
    .container {
      width: 1098px;
    }
  } */
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

  const dynamicOptions = {
    ...options,
    indexAxis: indexAxis,
  };
  return (
    <ChartContainer className="container">
      <Bar options={dynamicOptions} data={data} />
    </ChartContainer>
  );
}
