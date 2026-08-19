import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import type { RecruitStatus } from '@/pages/user/Main/types/club';

export const ClubHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
});

export const ClubNameContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  minWidth: 0,
});

const pulse = keyframes({
  '0%': { transform: 'scale(1)', opacity: 1 },
  '50%': { transform: 'scale(1.25)', opacity: 0.5 },
  '100%': { transform: 'scale(1)', opacity: 1 },
});

export const LiveViewerBadge = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  flexShrink: 0,
  fontSize: theme.font.size.xs,
  fontWeight: theme.font.weight.medium,
  color: theme.colors.textSecondary,
  whiteSpace: 'nowrap',
}));

export const LiveDot = styled.span(({ theme }) => ({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: theme.colors.primary600,
  animation: `${pulse} 1.6s ease-in-out infinite`,
  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}));

export const TodayViewCount = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  flexShrink: 0,
  fontSize: theme.font.size.xs,
  fontWeight: theme.font.weight.regular,
  color: theme.colors.gray500,
  whiteSpace: 'nowrap',
  marginLeft: 'auto',
}));

export const ClubNameText = styled.div(({ theme }) => ({
  fontSize: theme?.font?.size?.lg,
  fontWeight: theme.font.weight.bold,
  color: theme?.colors?.textPrimary,
}));

export const VerifiedBadge = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '3px',
  color: theme.colors.primary,
}));

export const VerifiedText = styled.span(({ theme }) => ({
  fontSize: '10px',
  fontWeight: theme.font.weight.medium,
  color: theme.colors.primary,
})); //차후 추가 (등록뱃지 옆 문구)

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

export const StatusContainer = styled.div({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});
export const RecruitStatusBox = styled.div<Props>(({ theme, status }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '6px 12px',
  borderRadius: '10rem',
  whiteSpace: 'nowrap',
  backgroundColor: status === '모집중' ? theme.colors.primary : theme.colors.gray200,
}));

export const RecruitStatusText = styled.div<Props>(({ theme, status }) => ({
  textAlign: `center`,
  fontSize: theme.font.size.xs,
  fontWeight: theme.font.weight.medium,
  color: status === '모집중' ? theme.colors.primary00 : theme.colors.textPrimary,
  lineHeight: 1.2,
}));

export const CategoryStatusBox = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '6px 10px',
  borderRadius: '10rem',
  border: `1px solid ${theme.colors.gray200}`,
}));

export const CategoryStatusText = styled.div(({ theme }) => ({
  textAlign: `center`,
  fontSize: theme.font.size.xs,
  fontWeight: theme.font.weight.medium,
  color: theme.colors.textPrimary,
  lineHeight: 1.2,
}));

export const Grid = styled.div(({ theme }) => ({
  display: 'grid',
  gap: 30,
  padding: '30px 0',
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
  justifyContent: 'center',
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
  border: `1px solid #E6E8EB`,
  borderRadius: theme.radius.md,
  padding: '1.7rem 1.5rem',
  gap: 16,
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.01)',
    cursor: 'pointer',
  },
}));

export const NoSearchResultContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 10,
  padding: 16,
  gap: 16,
});

export const EmptyStateWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '50vh',
  width: '100%',
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
