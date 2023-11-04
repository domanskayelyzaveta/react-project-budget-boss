import styled from 'styled-components';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import React, { useEffect } from 'react';
import { selectPeriodData } from 'redux/selectors';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
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
export function HorizontalChart() {
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
  const labels = [
    'Orange',
    'Pear',
    'Kiwi',
    'Spagetti',
    'Mango',
    'Peach',
    'Pineapple',
    'Raspberry',
    'Cherry',
    'Blackberry',
  ];

  const datasetData = labels.map(() => Math.floor(Math.random() * 100) - 0);
  const sortedData = [...datasetData].sort((a, b) => b - a);

  // const [indexAxis, setIndexAxis] = useState('x');
  const dataStatisticsByCategory = useSelector(selectPeriodData);
  console.log(dataStatisticsByCategory);
  useEffect(() => {
    //   const handleResize = () => {
    //     const windowWidth = window.innerWidth;
    //     setIndexAxis(windowWidth >= 768 ? 'x' : 'y');
    //   };
    //   handleResize();
    //   window.addEventListener('resize', handleResize);
    //   if (window.innerWidth < 704) {
    //     dynamicOptions.scales.y.ticks.display = true;
    //     dynamicOptions.scales.x.ticks.display = false;
    //   } else if (window.innerWidth > 704) {
    //     dynamicOptions.scales.y.ticks.display = false;
    //     dynamicOptions.scales.x.ticks.display = true;
    //   }
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
  }, []);
  const data = {
    labels: labels, // Используйте массив `labels` для определения меток
    datasets: [
      {
        data: sortedData,

        datalabels: {
          color: 'rgb(199, 204, 220)',
          anchor: 'end',
          align: 'top',

          offset: 8,
          // align: context => {
          //   return context.dataIndex % 2 === 0 ? 'start' : 'end';
          // },
          labels: {
            title: {
              font: {
                size: '10px',
              },
            },
          },
          padding: { top: 10, bottom: 0, left: 20, right: 40 },
          formatter: function (value, context) {
            const label = context.chart.data.labels[context.dataIndex];
            return `${label}  ${value} UAH`;
          },
          // formatter: function (value, context) {
          //   const label = context.chart.data.labels[context.dataIndex];
          //   return `<div style="display: flex; justify-content: space-between;">${label}<span>${value} UAH</span></div>`;
          // },
        },
        // label: '',
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
        position: 'start',
        max: 9,
        // beginAtZero: false,
        border: {
          display: false,
          color: ' rgb(71, 71, 89)',
        },
        grid: {
          lineWidth: 0,
        },

        ticks: {
          crossAlign: 'far',
          display: true, // Скрываем метки на оси y
        },
      },
    },
    barThickness: 15,
    minBarLength: 70,
  };
  const dynamicOptions = {
    ...options,
    // indexAxis: indexAxis,
  };

  const ChartContainer = styled.div`
    padding: 20px;

    min-height: 500px;
    @media screen and (min-width: 320px) {
      width: 320px;

      margin-left: auto;
      margin-right: auto;
      background-color: rgba(56, 56, 71, 0.6);
      box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
      border-radius: 30px;
    }

    @media screen and (min-width: 768px) {
      width: 704px;
      /* height: 420px; */
    }

    @media screen and (min-width: 1280px) {
      width: 1098px;
    }
  `;
  return (
    <ChartContainer>
      <Bar options={dynamicOptions} data={dynamicData} />
    </ChartContainer>
  );
}
