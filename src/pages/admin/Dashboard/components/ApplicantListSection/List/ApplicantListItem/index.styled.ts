import styled from '@emotion/styled';
import type { ApplicantData } from '@/pages/admin/Dashboard/types/dashboard';

export const ItemWrapper = styled.div<{ hasInterview: boolean }>`
  display: grid;
  grid-template-columns: ${({ hasInterview }) =>
    `1fr 1fr 1fr 1.2fr 1.5fr 1fr${hasInterview ? ' 1.2fr' : ''}`};
  gap: 1rem;
  align-items: center;
  padding: 1.5rem 0;
  transition: background-color 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gray00};
  }

  & > p {
    text-align: center;
  }

  @media (max-width: 1200px) {
    grid-template-columns: ${({ hasInterview }) =>
      `1fr 1fr 1fr 1.5fr 1fr${hasInterview ? ' 1.2fr' : ''}`};

    & > p:nth-of-type(4) {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.web}) {
    grid-template-columns: ${({ hasInterview }) =>
      `1fr 1fr 1.5fr 1fr${hasInterview ? ' 1.2fr' : ''}`};

    & > p:nth-of-type(3) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: ${({ hasInterview }) => `1fr 1.5fr 1fr${hasInterview ? ' 1.2fr' : ''}`};

    & > p:nth-of-type(2) {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;

    & > p:nth-of-type(5),
    & > p:nth-of-type(7) {
      display: none;
    }
  }
`;

export const InfoText = styled.p(({ theme }) => ({
  fontSize: theme.font.size.lg,

  color: '#434547',
}));

export const TimeSetter = styled.button(({ theme }) => ({
  color: theme.colors.gray500,
  background: 'none',
  fontSize: theme.font.size.lg,
  border: 'none',
  textDecoration: 'underline',
  textUnderlineOffset: '5px',
  cursor: 'pointer',
}));

export const ConfirmedTimeSetter = styled.button(({ theme }) => ({
  color: '#8C8C8C',
  background: 'none',
  fontSize: theme.font.size.lg,
  border: 'none',
  textDecoration: 'underline',
  textUnderlineOffset: '5px',
  cursor: 'pointer',
}));

export const StatusBadge = styled.p<Pick<ApplicantData, 'status'>>(({ theme, status }) => {
  const styles = {
    APPROVED: {
      backgroundColor: theme.colors.primary100,
      color: theme.colors.primary800,
    },
    REJECTED: {
      backgroundColor: theme.colors.red100,
      color: theme.colors.red600,
    },
    PENDING: {
      backgroundColor: theme.colors.gray100,
      color: theme.colors.gray600,
    },
  };

  return {
    ...styles[status],
    minWidth: '4rem',
    textAlign: 'center',
    margin: '0 auto',
    padding: '0.5rem 1.2rem',
    borderRadius: theme.radius.md,
    fontSize: theme.font.size.base,
    fontWeight: theme.font.weight.medium,
  };
});
