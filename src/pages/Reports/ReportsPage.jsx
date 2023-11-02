import CategoriesList from 'components/CategoriesList/CategoriesList';
import PeriodSwitch from 'components/PeriodSwitch/PeriodSwitch';
import { StatisticsByCategory } from 'components/StatisticsByCategory/StatisticsByCategory';
import React from 'react';

const Reports = () => {
  return (
    <div>
      <PeriodSwitch/>
      <CategoriesList />
      <StatisticsByCategory />
    </div>
  );
};

export default Reports;
