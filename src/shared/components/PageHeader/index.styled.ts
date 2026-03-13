import styled from '@emotion/styled';

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
});

export const TitleRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.5rem',
});

export const TextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
});

export const Title = styled.h1(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: theme.font.weight.medium,
  margin: '1rem 0 0 0.5rem',
}));

export const Category = styled.span(({ theme }) => ({
  fontSize: theme.font.size.base,
  color: theme.colors.textSecondary,
  margin: '0.5rem 0 0 0.5rem',
}));

export const InstagramLink = styled.a(({ theme }) => ({
  display: 'none',
  marginRight: '0.4rem',
  [`@media (max-width: ${theme.breakpoints.web})`]: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
    color: '#E1306C',
    marginTop: '1rem',
    flexShrink: 0,
    transition: 'opacity 0.2s',
    '&:hover': {
      opacity: 0.8,
    },
  },
}));
