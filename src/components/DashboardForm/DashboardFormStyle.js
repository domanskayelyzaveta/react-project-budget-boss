const selectStyles = {
  select: (baseStyles, state) => ({
    ...baseStyles,
    '&:focus': { outline: 'none' },
    '&:hover': { outline: 'none' },
    border: '2px solid transparent',
    transition: 'border-color 0.2s',
    '&:focus, &:hover': {
      borderColor: '#42A652',
    },
  }),
  option: (baseStyles, state) => ({
    '&:hover': { background: '#474759', color: '#F6F7FB' },
    letterSpacing: '0.02em',
    fontSize: '12px',
    lineHeight: 1.17,
    padding: '12px 18px',
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    '&:focus': {
      outline: 'none',
      border: 'none',
      boxShadow: 'rgba(102, 204, 102, 0.5)',
    },
    '&:hover': {
      outline: 'none',
      border: 'none',
      boxShadow: 'rgba(102, 204, 102, 0.5)',
    },
    border: 'none',
    background: 'transparent',
    height: '46px',
    width: '170px',
    fontSize: '12px',
    color: '#C7CCDC80',
    '@media only screen and (max-width: 768px)': {
      height: '44px',
      width: '280px',
      borderRadius: '0px 0px 10px 0px',
    },
  }),
  valueContainer: (baseStyles, state) => ({
    ...baseStyles,
    paddingTop: '4px',
    paddingLeft: '20px',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    '&:focus': { color: '#C7CCDC80' },
    '&:hover': { color: '#C7CCDC80' },
    '&:active': { color: '#C7CCDC80' },
    color: '#C7CCDC50',
  }),
  menu: (baseStyles, state) => ({
    ...baseStyles,
    background: '#383847',
    cursor: 'pointer',
    color: '#C7CCDC50',
    marginTop: '0px',
  }),
  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    color: '#C7CCDC50',
  }),
  container: styles => ({
    ...styles,
    '@media only screen and (max-width: 768px)': {
      ...styles['@media only screen and (max-width: 768px)'],
      height: '44px',
      width: '280px',
      borderRadius: '30px',
    },
  }),
};

export default selectStyles;
