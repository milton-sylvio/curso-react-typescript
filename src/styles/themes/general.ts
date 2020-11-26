const colors = {
  black: '#343a40',
  white: '#fff',
  gray: [
    '#f5f6f8',
    '#e1e4e8',
    '#bfbfbf',
  ],
  blue: [
    '#313862',
    '#252a48',
    '#1b1f38',
  ],
  primary: '#8950fc',
  secondary: '#f64e60',
  success: '#1bc5bd',
  info: '#3867d6',
  warning: '#ffa800',
  danger: '#dd427c',
};

const bordersRadius = {
  small: '2px',
  normal: '4px',
  large: '8px', 
  rounded: '50%',
};

const fontSizes = [
  '12px',
  '14px',
  '16px',
  '20px',
  '24px',
  '32px',
  '40px',
  '48px'
];

const fontWeights = {
  normal: 400,
  bold: 700,
};

const lineHeights = {
  condensedUltra: 1,
  condensed: 1.25,
  default: 1.5,
};

const space = [
  '0',
  '4px',
  '8px',
  '16px',
  '24px',
  '32px',
  '40px',
  '48px',
  '64px',
  '80px',
  '96px',
  '112px',
  '128px'
];

// const button = {
//   primary: {
//     color: colors.white,
//     border: `1px solid ${colors.primary}`,
//     bg: colors.primary,
//     shadow: '0px 1px 0px rgba(20, 70, 32, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.03)'
//   },
// };

const general = {
  colors,
  bordersRadius,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
  // button,
};

export default general;
export { colors };
