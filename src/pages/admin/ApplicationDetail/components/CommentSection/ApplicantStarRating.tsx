import styled from '@emotion/styled';
import { useState } from 'react';

type ApplicantStarRatingProps = {
  rating: number;
  onRatingChange: (rating: number) => void;
};

const STAR_INDICES = [1, 2, 3, 4, 5];

export const ApplicantStarRating = ({ rating, onRatingChange }: ApplicantStarRatingProps) => {
  const [hover, setHover] = useState(0);

  const handleStarClick = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const isLeftHalf = e.clientX - rect.left < rect.width / 2;
    onRatingChange(isLeftHalf ? index - 0.5 : index);
  };

  const handleStarHover = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const isLeftHalf = e.clientX - rect.left < rect.width / 2;
    setHover(isLeftHalf ? index - 0.5 : index);
  };

  return (
    <StarContainer onMouseLeave={() => setHover(0)}>
      {STAR_INDICES.map((index) => {
        const currentRating = hover || rating;
        const fillPercentage =
          index <= currentRating ? 100 : index - 0.5 === currentRating ? 50 : 0;

        return (
          <StarWrapper
            key={index}
            onClick={(e) => handleStarClick(index, e)}
            onMouseMove={(e) => handleStarHover(index, e)}
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
