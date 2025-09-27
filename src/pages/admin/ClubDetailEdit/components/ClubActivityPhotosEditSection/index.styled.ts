import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { CSSObject } from '@emotion/react';

export const TitleWrapper = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginLeft: '1rem',
}));

export const AddButton = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  cursor: 'pointer',
  color: theme.colors.gray500,
  fontSize: '24px',
  transition: 'color 0.2s ease, transform 0.3s ease',
  '&:hover': {
    color: theme.colors.gray700,
    transform: 'rotate(90deg)',
  },
}));

export const PhotosWrapper = styled.div(({ theme }) => ({
  overflowX: 'auto',
  paddingBottom: '4px',
  '&::-webkit-scrollbar': {
    height: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.colors.gray300,
    borderRadius: theme.radius.sm,
  },
}));

export const PhotosContainer = styled.div({
  display: 'flex',
  gap: '8px',
});

export const PhotoWrapper = styled.div(({ theme }) => ({
  position: 'relative',
  flex: '0 0 auto',
  borderRadius: theme.radius.md,
  overflow: 'hidden',
  cursor: 'pointer',
  '&:hover .overlay': {
    opacity: 1,
    transform: 'scale(1)',
  },
}));

export const Photo = styled.img(({ theme }) => ({
  height: 'clamp(120px, 15vw, 250px)',
  width: 'auto',
  borderRadius: theme.radius.md,
  objectFit: 'cover',
  display: 'block',
  boxShadow: theme.shadow.sm,
}));

export const Overlay = styled.div(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255,255,255,0.4)',
  opacity: 0,
  transform: 'scale(0.9)',
  transition: 'opacity 0.25s ease, transform 0.25s ease',
  color: theme.colors.gray800,
  fontSize: theme.font.size.xl,
  zIndex: theme.zIndex.header,
}));

const ripple = keyframes`
  from { transform: scale(0); opacity: 0.8; }
  to { transform: scale(1.2); opacity: 0; }
`;

export const Circle = styled.div(
  (): CSSObject => ({
    position: 'absolute',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.6)',
    animation: `${ripple} 0.3s ease`,
    zIndex: 0,
  }),
);
