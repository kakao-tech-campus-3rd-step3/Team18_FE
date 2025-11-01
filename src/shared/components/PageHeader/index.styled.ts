import styled from '@emotion/styled';

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
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
  margin: '1rem 0 0 0',
}));

export const Category = styled.span(({ theme }) => ({
  fontSize: theme.font.size.base,
  color: theme.colors.textSecondary,
  margin: '0.5rem 0 0 0.2rem',
}));
