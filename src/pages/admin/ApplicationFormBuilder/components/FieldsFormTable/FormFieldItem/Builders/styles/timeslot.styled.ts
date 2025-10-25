import styled from '@emotion/styled';

export const Layout = styled.div({
  display: 'flex',
  maxWidth: '37rem',
  justifyContent: 'space-between',
});

export const DatePickerWrapper = styled.div({
  position: 'relative',
});

export const CustomInputWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '15rem',
  padding: '0.75rem 1rem',
  borderBottom: `1px solid ${theme.colors.gray200}`,
  backgroundColor: theme.colors.bg,
  cursor: 'pointer',
  position: 'relative',

  '&::after': {
    content: '"⌵"',
    position: 'absolute',
    top: '6px',
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
});

export const TimeSelectWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});
