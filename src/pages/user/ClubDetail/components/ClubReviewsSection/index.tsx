import { Button } from '@/shared/components/Button';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import { SectionTitle } from '@/shared/components/SectionTitle';
import * as S from './index.styled';
import { clubReviewMockData } from './mock';

export const ClubReviewsSection = () => {
  const reviews = clubReviewMockData.reviews;

  return (
    <S.ReviewsContainer>
      <SectionTitle>동아리 후기</SectionTitle>

      {reviews.map((review) => (
        <S.ReviewItem key={review.id}>
          <S.ReviewHeader>
            <S.ReviewAuthor>{review.writer}</S.ReviewAuthor>
            <S.ReviewDate>{new Date(review.createdAt).toLocaleDateString('ko-KR')}</S.ReviewDate>
          </S.ReviewHeader>
          <S.ReviewContent>{review.content}</S.ReviewContent>
        </S.ReviewItem>
      ))}

      <S.ReviewForm>
        <S.FormTitle>
          후기 작성 <S.FormNote>*학번은 노출되지 않습니다!</S.FormNote>
        </S.FormTitle>

        <OutlineInputField placeholder='학번 입력' />

        <OutlineTextareaField placeholder='후기를 입력하세요' rows={4} />

        <S.ButtonWrapper>
          <Button variant='light' width='10rem'>
            후기 등록
          </Button>
        </S.ButtonWrapper>
      </S.ReviewForm>
    </S.ReviewsContainer>
  );
};
