import styled from '@emotion/styled';
import type { StatusLabel, ApplicationStatus } from '@/pages/admin/Dashboard/types/dashboard';

type Props = {
  label: StatusLabel;
  value: ApplicationStatus;
  selected: boolean;
  onClick: (status: ApplicationStatus) => void;
};

export const ApplicantStatusButton = ({ label, value, selected, onClick }: Props) => {
  return (
    <Wrapper label={label} selected={selected} onClick={() => onClick(value)}>
      {label}
    </Wrapper>
  );
};

const Wrapper = styled.button<Pick<Props, 'selected' | 'label'>>(({ theme, selected, label }) => {
  const statusStyles = {
    합격: {
      backgroundColor: theme.colors.primary100,
      color: theme.colors.primary800,
      border: `2px solid ${theme.colors.primary800}`,
    },
    불합격: {
      backgroundColor: theme.colors.red100,
      color: theme.colors.red600,
      border: `2px solid ${theme.colors.red600}`,
    },
    미정: {
      backgroundColor: theme.colors.gray200,
      color: theme.colors.gray700,
      border: `2px solid ${theme.colors.gray700}`,
    },
  };

  const defaultStyle = {
    backgroundColor: theme.colors.gray100,
    color: theme.colors.gray600,
    border: `2px solid ${theme.colors.gray300}`,
  };

  const appliedStyle = selected ? statusStyles[label] : defaultStyle;

  return {
    padding: '0.3rem 1.5rem',
    cursor: 'pointer',
    fontSize: theme.font.size.base,
    fontWeight: selected ? theme.font.weight.bold : theme.font.weight.regular,
    transition: 'all 200ms ease-in-out',
    borderRadius: '4rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    ...appliedStyle,
  };
});
