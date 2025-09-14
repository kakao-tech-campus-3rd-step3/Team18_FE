import styled from '@emotion/styled';
import type { ApplicantData } from '@/types/dashboard';

export const ApplicantListItem = ({
  id,
  name,
  studentId,
  department,
  phone,
  email,
  status,
  onClick,
}: ApplicantData) => {
  return (
    <ItemWrapper onClick={() => onClick(id)}>
      <InfoText>{name}</InfoText>
      <InfoText>{studentId}</InfoText>
      <InfoText>{department}</InfoText>
      <InfoText>{phone}</InfoText>
      <InfoText>{email}</InfoText>
      <StatusBadge status={status}>{status}</StatusBadge>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 2fr 2fr 1fr',
  gap: '2rem',
  alignItems: 'center',
  padding: '2.1rem 0',

  '&:hover': {
    cursor: 'pointer',
  },
});

const InfoText = styled.p(({ theme }) => ({
  fontSize: '1.2rem',
  color: theme.colors.textSecondary,
  textAlign: 'center',
}));

const StatusBadge = styled.p<Pick<ApplicantData, 'status'>>(({ theme, status }) => {
  const styles = {
    합격: {
      backgroundColor: theme.colors.primary100,
      color: theme.colors.primary800,
    },
    불합격: {
      backgroundColor: theme.colors.red100,
      color: theme.colors.red600,
    },
    미정: {
      backgroundColor: theme.colors.gray100,
      color: theme.colors.gray600,
    },
  };

  return {
    ...styles[status],
    width: '3.3rem',
    textAlign: 'center',
    margin: '0 auto',
    padding: '0.6rem 1.2rem',
    borderRadius: theme.radius.lg,
    fontSize: theme.font.size.lg,
    fontWeight: theme.font.weight.medium,
  };
});
