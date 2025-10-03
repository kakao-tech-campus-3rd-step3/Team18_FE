import styled from '@emotion/styled';
import { useState } from 'react';

interface ApplicantStarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const STAR_INDICES = [1, 2, 3, 4, 5];

export const ApplicantStarRating = ({ rating, onRatingChange }: ApplicantStarRatingProps) => {
  const [hover, setHover] = useState(0);

  return (
    <StarContainer
      onMouseLeave={() => setHover(0)}
    >
      {STAR_INDICES.map((index) => {
        const fillPercentage = index <= (hover || rating) ? 100 : 0;
        return (
          <StarWrapper
            key={index}
            onClick={() => onRatingChange(index)}
            onMouseEnter={() => setHover(index)}
          >
            <StarEmpty>★</StarEmpty>
            <StarFilled fillPercentage={fillPercentage}>★</StarFilled>
          </StarWrapper>
        );
      })}
    </StarContainer>
  );
};

const StarContainer = styled.div({
  display: 'flex',
  gap: '0.125rem',
  alignItems: 'center',
  cursor: 'pointer',
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
