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
  height: 'clamp(120px, 15vw, 250px)',
  width: 'auto',
  borderRadius: '8px',
  objectFit: 'cover',
});
