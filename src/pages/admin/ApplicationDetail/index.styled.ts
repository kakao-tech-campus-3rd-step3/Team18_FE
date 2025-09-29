import styled from '@emotion/styled';

export const PageLayout = styled.div({
  display: 'flex',
  gap: '1.5rem',
  padding: '2rem 2.2rem 2rem 2rem',

  '@media (max-width: 72.5rem)': {
    flexDirection: 'column',
  },
});

export const MainContent = styled.main({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  minWidth: '0',
});

export const AsideContent = styled.aside({
  width: '30rem',
  flexShrink: '0',
  margin: '4.7rem 2rem 0 4rem',

  '@media (max-width: 72.5rem)': {
    margin: '2rem 0',
    width: '97%',
  },
});
