import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  padding: '2.5rem 0 1rem 0',
  boxSizing: 'border-box',

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '1.5rem 0 0.5rem 0',
    gap: '0.8rem',
  },
}));

export const HeaderWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ButtonWrapper = styled.div({
  display: 'flex',
  gap: '0.5rem',
});

export const Title = styled.h1(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: theme.font.weight.medium,

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '1.5rem',
  },
}));

export const CheckboxWrapper = styled.div({
  display: 'flex',
  gap: '0.5rem',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const CustomCheckbox = styled.input(({ theme }) => ({
  width: '1.15rem',
  height: '1.15rem',
  cursor: 'pointer',
  appearance: 'none',
  border: `2px solid ${theme.colors.primary}`,
  borderRadius: '4px',
  position: 'relative',
  transition: 'all 0.2s ease',

  '&:checked': {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },

  '&:checked::after': {
    content: '"✓"',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },

  '&:hover': {
    borderColor: theme.colors.primary800,
    boxShadow: `0 0 0 3px ${theme.colors.primary}20`,
  },

  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 3px ${theme.colors.primary}40`,
  },
}));
