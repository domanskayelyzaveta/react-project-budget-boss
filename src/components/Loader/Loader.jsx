import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <ProgressBar
      height={200}
      width={200}
      ariaLabel="progress-bar-loading"
      borderColor="#100c08"
      barColor="var(--button)"
    />
  </div>
);
