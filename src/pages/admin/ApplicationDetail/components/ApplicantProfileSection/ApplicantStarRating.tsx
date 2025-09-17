import styled from '@emotion/styled';

export const ApplicantStarRating = ({ rating = 0 }: { rating?: number }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    let fillPercentage = 0;

    if (rating >= i) {
      fillPercentage = 100;
    } else if (rating > i - 1) {
      fillPercentage = (rating - (i - 1)) * 100;
    }

    stars.push(
      <StarWrapper key={i}>
        <StarEmpty>★</StarEmpty>
        <StarFilled fillPercentage={fillPercentage}>★</StarFilled>
      </StarWrapper>,
    );
  }

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
