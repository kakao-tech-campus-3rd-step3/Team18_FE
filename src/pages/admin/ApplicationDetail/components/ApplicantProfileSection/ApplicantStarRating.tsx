import { useMemo } from 'react';
import styled from '@emotion/styled';

const getFillPercentage = (rating: number, index: number) => {
  if (rating >= index) return 100;
  if (rating > index - 1) return (rating - (index - 1)) * 100;
  return 0;
};

const STAR_INDICES = [1, 2, 3, 4, 5];

export const ApplicantStarRating = ({ rating = 0 }: { rating?: number }) => {
  const stars = useMemo(() => {
    return STAR_INDICES.map((i) => {
      const fillPercentage = getFillPercentage(rating, i);

      return (
        <StarWrapper key={i}>
          <StarEmpty>★</StarEmpty>
          <StarFilled fillPercentage={fillPercentage}>★</StarFilled>
        </StarWrapper>
      );
    });
  }, [rating]);

  return <StarContainer>{stars}</StarContainer>;
};

const StarContainer = styled.div({
  display: 'flex',
  gap: '0.125rem',
  alignItems: 'center',
});

const StarWrapper = styled.div({
  position: 'relative',
  display: 'inline-block',
  fontSize: '1.25rem',
});

const StarEmpty = styled.div(({ theme }) => ({
  color: theme.colors.gray200,
}));

const StarFilled = styled.div<{ fillPercentage: number }>(({ fillPercentage, theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  color: theme.colors.primary,
  overflow: 'hidden',
  width: `${fillPercentage}%`,
}));
