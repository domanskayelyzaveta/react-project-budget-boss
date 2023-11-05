import CategoriesList from 'components/CategoriesList/CategoriesList';
import PeriodSwitch from 'components/PeriodSwitch/PeriodSwitch';
import { StatisticsByCategory } from 'components/StatisticsByCategory/StatisticsByCategory';
import TotalStatistics from 'components/TotalStatistic/TotalStatistics';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectPeriodData } from 'redux/selectors';

const Reports = () => {
  const data = useSelector(selectPeriodData);
  
  return (
    <div>
      <PeriodSwitch />
      <TotalStatistics />
      {data ? <CategoriesList data={data} /> : null}
      <StatisticsByCategory />
    </div>
  );
};

export default Reports;
