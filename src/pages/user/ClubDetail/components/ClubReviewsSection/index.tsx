import styled from '@emotion/styled';

export const ClubReviewsSection = () => {
  return (
    <ReviewsContainer>
      <p>동아리 후기 영역</p>
    </ReviewsContainer>
  );
};

const ReviewsContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bg,
  padding: '16px',
  borderRadius: theme.radius.md,
}));
