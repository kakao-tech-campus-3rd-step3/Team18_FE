import styled from '@emotion/styled';

interface SectionTitleProps {
  required?: boolean;
  children: React.ReactNode;
}

export const SectionTitle = ({ required, children }: SectionTitleProps) => {
  return (
    <StyledTitle>
      {children}
      {required && <RequiredMark>*</RequiredMark>}
    </StyledTitle>
  );
};

const StyledTitle = styled.h2(({ theme }) => ({
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
