import styled from '@emotion/styled';
import type { RecruitStatus } from '@/types/club.ts';

export const ClubCategoryText = styled.div(({ theme }) => ({
  fontSize: theme?.font?.size?.xs,
  fontWeight: theme.font.weight.regular,
  color: theme?.colors.textSecondary,
}));

export const ClubNameText = styled.div(({ theme }) => ({
  fontSize: theme?.font?.size?.lg,
  fontWeight: theme.font.weight.bold,
  color: theme?.colors?.textPrimary,
}));

export const ClubIntroduction = styled.div(({ theme }) => ({
  fontSize: theme?.font?.size?.xs,
  fontWeight: theme.font.weight.regular,
  color: theme?.colors?.textSecondary,
}));

type Props = {
  status: RecruitStatus;
};

export const RecruitStatusBox = styled.div<Props>(({ theme, status }) => ({
  padding: '6px 10px',
  borderRadius: theme.radius.lg,
  width: 50,
  backgroundColor: status === '모집중' ? theme.colors.primary100 : theme.colors.red100,
}));

export const RecruitStatusText = styled.div<Props>(({ theme, status }) => ({
  textAlign: `center`,
  fontSize: theme.font.size.sm,
  fontWeight: theme.font.weight.bold,
  color: status === '모집중' ? theme.colors.primary700 : theme.colors.red700,
}));



export const Grid = styled.div(() => ({
  display: 'grid',
  gap: 15,
  gridTemplateColumns: 'repeat(4, 1fr)',
}));

export const ClubListContainer = styled.div({
  maxWidth: '1200px',
  margin: '0 auto',
});

export const ClubItem = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 240,
  height: 130,
  marginBottom: 10,
  border: `1px solid ${theme.colors.border}`,
  borderRadius: theme.radius.lg,
  boxShadow: theme.shadow.md,
  padding: 16,
  gap: 16,
}));


