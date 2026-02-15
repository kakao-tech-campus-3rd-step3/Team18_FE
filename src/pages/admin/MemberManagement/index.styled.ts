import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  minHeight: '100vh',
}));

export const ContentWrapper = styled.div({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem',
});
