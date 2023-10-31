import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => (
  <ProgressBar
    height="80"
    width="80"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{ display: 'flex', width: '100%', justifyContent: 'center' }}
    wrapperClass="progress-bar-wrapper"
    borderColor="#100c08"
    barColor="#e0e0e0"
  />
);
