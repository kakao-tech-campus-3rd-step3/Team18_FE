import styled from '@emotion/styled';

export const SectionTitle = styled.h2(({ theme }) => ({
  display: 'block',
  width: '100%',
  fontSize: theme.font.size.lg,
  fontWeight: theme.font.weight.bold,
  margin: '1.5rem 0 0 0',
  color: theme.colors.textPrimary,
}));
