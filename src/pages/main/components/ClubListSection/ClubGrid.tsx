import styled from '@emotion/styled';

export const Grid = styled.div(() => ({
  display: 'grid',
  gap: 15,
  gridTemplateColumns: 'repeat(4, 1fr)',
}));
