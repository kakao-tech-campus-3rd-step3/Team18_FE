import styled from '@emotion/styled';
import type { RecruitStatus } from '@/pages/main/type/club';

export const ClubCateogryText = styled.div(({ theme }) => ({
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
