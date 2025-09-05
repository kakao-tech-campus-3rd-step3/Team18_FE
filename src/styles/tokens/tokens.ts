import { base, background, primarys, red, gray, blue } from './colors';

export const colors = {
  ...base,
  ...background,
  ...primarys,
  ...gray,
  ...red,
  ...blue,
};

export const font = {
  size: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '24px',
  },
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

export const radius = {
  sm: '4px',
  md: '8px',
  lg: '16px',
};

export const shadow = {
  sm: '0 1px 3px rgba(0,0,0,0.1)',
  md: '0 3px 6px rgba(0,0,0,0.15)',
};

export const zIndex = {
  header: 100,
  modal: 1000,
};
