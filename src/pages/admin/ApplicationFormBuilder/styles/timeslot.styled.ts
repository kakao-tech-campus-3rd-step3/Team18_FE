import styled from '@emotion/styled';

export const Layout = styled.div({
  display: 'flex',
  maxWidth: '37.6rem',
  justifyContent: 'space-between',

  '@media (max-width: 550px)': {
    flexDirection: 'column',
    gap: '1.5rem',
  },
});

export const DatePickerWrapper = styled.div({
  position: 'relative',
});
export const CustomInputWrapper = styled.div(({ theme }) => ({
  height: '29px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '15rem',
  cursor: 'pointer',
  borderBottom: `1px solid ${theme.colors.gray200}`,
  paddingBottom: '0.5rem',
  boxSizing: 'border-box',

  '&::after': {
    content: '"⌵"',
    position: 'absolute',
    top: '-5px',
    right: '13px',
    color: theme.colors.textSecondary,
    fontSize: '22px',
    fontWeight: 'bold',
  },
}));

export const TimeSelectContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '@media (max-width: 550px)': {
    width: '100%',
  },
});

export const TimeSelectWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});
