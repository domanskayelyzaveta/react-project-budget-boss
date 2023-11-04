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
export function VerticalChart() {
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
  const labels = [
    'Orange',
    'Pear',
    'Kiwi',
    'Mango',
    'Peach',
    'Pineapple',
    'Raspberry',
    'Cherry',
    'Mango',
    'Peach',
  ];

  const datasetData = labels.map(() => Math.floor(Math.random() * 100) - 0);
  const sortedData = [...datasetData].sort((a, b) => b - a);
  // .slice(0, datasetData.length - 1);

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
    labels: labels,
    datasets: [
      {
        data: sortedData,

        datalabels: {
          color: 'rgb(199, 204, 220)',
          anchor: 'end', // Установите расположение меток данных, например, 'end', 'start', 'center', и т.д.
          align: 'top', // Выравнивание меток данных, например, 'start', 'center', 'end', и т.д.
          offset: 8,
          labels: {
            title: {
              font: {
                size: '10px',
              },
            },
          },
          // padding: { top: 8, bottom: 0, left: 20, right: 0 },
          formatter: function (value) {
            return `${value} UAH`;
          },
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
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#C7CCDC',
          display: true,
        },
      },
      y: {
        beginAtZero: true,

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
    barThickness: 38,
    // barPercentage: 0.5,
  };
  const dynamicOptions = {
    ...options,
    // indexAxis: indexAxis,
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
  return (
    <ChartContainer>
      <Bar options={dynamicOptions} data={dynamicData} />
    </ChartContainer>
  );
}
