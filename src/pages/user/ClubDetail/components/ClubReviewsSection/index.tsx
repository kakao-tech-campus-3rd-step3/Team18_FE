import React from 'react';
import styled from '@emotion/styled';

const ClubReviewsSection: React.FC = () => {
  return (
    <ReviewsContainer>
      <p>동아리 후기 영역</p>
    </ReviewsContainer>
  );
};

export default ClubReviewsSection;

const ReviewsContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  padding: '16px',
  borderRadius: theme.radius.md,
}));
