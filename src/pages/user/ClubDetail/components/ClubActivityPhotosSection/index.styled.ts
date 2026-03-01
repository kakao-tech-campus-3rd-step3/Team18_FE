import styled from '@emotion/styled';

export const TitleWrapper = styled.div({
  marginLeft: '1rem',
});

export const PhotosWrapper = styled.div({
  overflowX: 'auto',
  paddingBottom: '4px',
  '&::-webkit-scrollbar': {
    height: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#ccc',
    borderRadius: '2px',
  },
});

export const PhotosContainer = styled.div({
  display: 'flex',
  gap: '8px',
});

export const Photo = styled.img({
  flex: '0 0 auto',
  height: 'clamp(320px, 50vw, 400px)',
  width: 'auto',
  borderRadius: '8px',
  objectFit: 'cover',
  cursor: 'pointer',
});

export const Overlay = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  cursor: 'pointer',
});

export const OverlayImage = styled.img({
  maxWidth: '90vw',
  maxHeight: '90vh',
  objectFit: 'contain',
  borderRadius: '8px',
});
