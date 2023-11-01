import CategoriesList from 'components/CategoriesList/CategoriesList';
import PeriodSwitch from 'components/PeriodSwitch/PeriodSwitch';
import React from 'react';

const Reports = () => {
  return (
    <div>
      <PeriodSwitch/>
      <CategoriesList />
    </div>
  );
};

export default Reports;
