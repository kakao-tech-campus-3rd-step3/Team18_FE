import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

type OverlayProps = {
  $variant?: 'modal' | 'popover';
};

export const Overlay = styled.div<OverlayProps>(({ $variant = 'modal' }) => ({
  position: 'fixed',
  inset: 0,
  backgroundColor: $variant === 'popover' ? 'transparent' : 'rgba(0, 0, 0, 0.3)',
  display: $variant === 'popover' ? 'block' : 'flex',
  alignItems: $variant === 'popover' ? undefined : 'center',
  justifyContent: $variant === 'popover' ? undefined : 'center',
  zIndex: 50,
  padding: $variant === 'popover' ? 0 : '1rem',
  animation: `${fadeIn} 0.2s ease-out`,
}));

type ContentProps = {
  $size?: 'sm' | 'md' | 'lg';
  $variant?: 'modal' | 'popover';
  $position?: { top: number; left: number; maxHeight?: number };
};

const sizeMap = {
  sm: '13rem',
  md: '20rem',
  lg: '30rem',
};

export const Content = styled.div<ContentProps>(
  ({ theme, $size = 'md', $variant = 'modal', $position }) => ({
    backgroundColor: '#fff',
    borderRadius: theme.radius.lg,
    boxShadow:
      $variant === 'popover'
        ? '0 4px 20px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.1)'
        : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    width: sizeMap[$size],
    maxWidth: '100%',
    maxHeight: $variant === 'popover' ? '80vh' : '90vh',
    overflow: 'hidden',
    padding: $variant === 'popover' ? '1.5rem' : '2rem',
    animation: `${scaleIn} 0.2s ease-out`,
    display: 'flex',
    flexDirection: 'column',

    // popover일 때 position 계산 전에는 숨김
    ...($variant === 'popover' &&
      !$position && {
        visibility: 'hidden',
        position: 'fixed',
      }),

    // popover일 때 위치 지정 (fixed로 스크롤 시 따라감)
    ...($variant === 'popover' &&
      $position && {
        position: 'fixed',
        top: $position.top - 10,
        left: $position.left - 30,
        maxHeight: $position.maxHeight != null ? `${$position.maxHeight}px` : '80vh',
      }),

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      padding: '1.5rem',
      maxHeight: '85vh',
    },
  }),
);

export const Title = styled.h2(({ theme }) => ({
  fontSize: theme.font.size.base,
  fontWeight: 700,
  color: theme.colors.gray900,
  marginBottom: '0.5rem',

  '&:focus': {
    outline: 'none',
  },
}));

export const Description = styled.p(({ theme }) => ({
  fontSize: '1rem',
  color: theme.colors.gray500,
  marginBottom: '1.5rem',
}));

export const CloseButton = styled.button(({ theme }) => ({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  background: 'none',
  border: 'none',
  padding: '0.5rem',
  cursor: 'pointer',
  color: theme.colors.gray400,
  borderRadius: theme.radius.sm,
  transition: 'color 0.2s, background-color 0.2s',

  '&:hover': {
    color: theme.colors.gray600,
    backgroundColor: theme.colors.gray100,
  },
}));

export const Header = styled.div({
  position: 'relative',
  marginBottom: '1rem',
});

export const Body = styled.div({
  flex: 1,
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  overscrollBehavior: 'contain',
});
