import CategoriesList from 'components/CategoriesList/CategoriesList';
import PeriodSwitch from 'components/PeriodSwitch/PeriodSwitch';
import { StatisticsByCategory } from 'components/StatisticsByCategory/StatisticsByCategory';
import TotalStatistics from 'components/TotalStatistic/TotalStatistics';
import { ReportPageWrapper } from 'components/TotalStatistic/TotalStatistics.styled';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPeriodData } from 'redux/selectors';

const Reports = () => {
  const data = useSelector(selectPeriodData);
  const [keysArray, setKeys] = useState([]);
  const [valuesArray, setValues] = useState([]);

  const categoryChartKeys = categoriesEl => {
    const categories = data.expenses.expensesData[categoriesEl];
    if (categories) {
      const resultData = { ...categories };
      delete resultData.total;
      const entries = Object.entries(resultData).sort((a, b) => {
        return b[1] - a[1];
      });
      const sortedEntries = Object.fromEntries(entries);
      const dynamicKeys = Object.keys(sortedEntries).filter(
        key => sortedEntries[key] !== null
      );
      setKeys(dynamicKeys);
      const dynamicValues = Object.values(sortedEntries).filter(
        value => sortedEntries[value] !== null
      );
      setValues(dynamicValues);
    } else {
      setValues(null);
      setKeys(null);
    }
  };

  const categoryChartValue = categoriesEl => {
    const categories = data.incomes.incomesData[categoriesEl];
    if (categories) {
      const resultData = { ...categories };
      delete resultData.total;
      const entries = Object.entries(resultData).sort((a, b) => {
        return b[1] - a[1];
      });
      const sortedEntries = Object.fromEntries(entries);
      const dynamicKeys = Object.keys(sortedEntries).filter(
        key => sortedEntries[key] !== null
      );
      setKeys(dynamicKeys);
      const dynamicValues = Object.values(sortedEntries).filter(
        value => sortedEntries[value] !== null
      );
      setValues(dynamicValues);
    } else {
      setValues(null);
      setKeys(null);
    }
  };

  return (
    <ReportPageWrapper>
      <PeriodSwitch />
      <TotalStatistics />
      {data ? (
        <CategoriesList
          data={data}
          categoryChartKeys={categoryChartKeys}
          categoryChartValue={categoryChartValue}
        />
      ) : null}
      <StatisticsByCategory keysArray={keysArray} valuesArray={valuesArray} />
    </ReportPageWrapper>
  );
};

export default Reports;
