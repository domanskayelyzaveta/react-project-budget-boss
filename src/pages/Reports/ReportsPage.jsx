import CategoriesList from 'components/CategoriesList/CategoriesList';
import PeriodSwitch from 'components/PeriodSwitch/PeriodSwitch';
import { StatisticsByCategory } from 'components/StatisticsByCategory/StatisticsByCategory';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectPeriodData } from 'redux/selectors';

const Reports = () => {
  const object = useSelector(selectPeriodData);

  return (
    <div>
      <PeriodSwitch />
      {object ? <CategoriesList data={object} /> : null}
      <StatisticsByCategory />
    </div>
  );
};

export default Reports;
