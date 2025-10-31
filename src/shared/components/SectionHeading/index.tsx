import type { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  required?: boolean;
  children: ReactNode;
};

export const SectionHeading = ({ required, children }: Props) => {
  return (
    <StyledHeading>
      {children}
      {required && <RequiredMark>*</RequiredMark>}
    </StyledHeading>
  );
};

const StyledHeading = styled.h2(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.font.size.lg,
  fontWeight: theme.font.weight.bold,
  margin: '1.5rem 0 0 0',
  color: theme.colors.textPrimary,
  width: '100%',
  gap: '0.25rem',
}));

const RequiredMark = styled.span(({ theme }) => ({
  color: theme.colors.error,
}));
