import styled from '@emotion/styled';
import type { RecruitStatus } from '@/pages/user/Main/types/club';

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
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  minWidth: 0,
  flex: '1 1 auto',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: '100%',
    textAlign: 'left',
  },
}));

type Props = {
  status: RecruitStatus;
};

export const RecruitStatusBox = styled.div<Props>(({ theme, status }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '6px 10px',
  borderRadius: theme.radius.md,
  width: 60,
  minHeight: 20,
  backgroundColor: status === '모집중' ? theme.colors.primary : theme.colors.gray200,
}));

export const RecruitStatusText = styled.div<Props>(({ theme }) => ({
  textAlign: `center`,
  fontSize: theme.font.size.xs,
  fontWeight: theme.font.weight.medium,
  color: 'white',
  lineHeight: 1.2,
}));

export const Grid = styled.div(({ theme }) => ({
  display: 'grid',
  gap: 30,
  padding: '30px 0',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  justifyItems: 'center',

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gap: 15,
    padding: '20px 12px',
  },
}));

export const ClubListContainer = styled.div({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1.5rem',
  boxSizing: 'border-box',
});

export const ClubItem = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  boxSizing: 'border-box',
  minHeight: '130px',
  height: 'auto',
  marginBottom: 10,
  border: `1px solid ${theme.colors.border}`,
  borderRadius: theme.radius.lg,
  boxShadow: theme.shadow.md,
  padding: 16,
  gap: 16,
}));

export const NoSearchResultContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 130,
  marginBottom: 10,
  padding: 16,
  gap: 16,
});

export const TextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
});

type ImageWrapperProps = {
  width?: number;
  height?: number;
};

export const SearchImage = styled.img<ImageWrapperProps>`
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
`;
