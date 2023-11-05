import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { HorizontalChart } from './HorizontalChart';
import { VerticalChart } from './VerticalChart';
import { NoTransactionsChart } from './NoTransactions';

export const StatisticsByCategory = ({ keysArray, valuesArray }) => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      {!keysArray || !valuesArray ? (
        <NoTransactionsChart />
      ) : (
        <>
          {isSmallScreen && keysArray && valuesArray ? (
            <HorizontalChart keysArray={keysArray} valuesArray={valuesArray} />
          ) : (
            <VerticalChart keysArray={keysArray} valuesArray={valuesArray} />
          )}
        </>
      )}
    </div>
  );
};

//   if (!keysArray || !valuesArray) {
//     return <NoTransactionsChart />;
//   }

//   return isSmallScreen ? (
//     <HorizontalChart keysArray={keysArray} valuesArray={valuesArray} />
//   ) : (
//     <VerticalChart keysArray={keysArray} valuesArray={valuesArray} />
//   );
// };
