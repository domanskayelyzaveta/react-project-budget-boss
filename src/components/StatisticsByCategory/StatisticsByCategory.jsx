import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { HorizontalChart } from './HorizontalChart';
import { VerticalChart } from './VerticalChart';

export const StatisticsByCategory = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return <div>{isSmallScreen ? <HorizontalChart /> : <VerticalChart />}</div>;
};
