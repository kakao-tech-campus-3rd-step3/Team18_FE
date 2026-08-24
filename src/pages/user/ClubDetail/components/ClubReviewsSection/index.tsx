import { useForm } from 'react-hook-form';
import { useClubReviews } from '@/pages/user/ClubDetail/hooks/useClubReviews';
import { Button } from '@/shared/components/Button';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import { SectionHeading } from '@/shared/components/SectionHeading';
import * as S from './index.styled';

type ReviewFormValues = {
  studentId: string;
  content: string;
};

export const ClubReviewsSection = ({ clubId }: { clubId: number }) => {
  const { reviews, addReview } = useClubReviews(clubId);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReviewFormValues>();

  const onSubmit = async ({ studentId, content }: ReviewFormValues) => {
    const success = await addReview(studentId, content);
    if (success) reset();
  };

  return (
    <S.ReviewsContainer>
      <S.Divider />
      <SectionHeading>동아리 후기</SectionHeading>

      {reviews.map((review) => (
        <S.ReviewItem key={review.id}>
          <S.ReviewHeader>
            <S.ReviewAuthor>{review.writer}</S.ReviewAuthor>
            <S.ReviewDate>
              {review.createdAt ? new Date(review.createdAt).toLocaleDateString('ko-KR') : '-'}
            </S.ReviewDate>
          </S.ReviewHeader>
          <S.ReviewContent>{review.content}</S.ReviewContent>
        </S.ReviewItem>
      ))}

      <S.ReviewForm onSubmit={handleSubmit(onSubmit)}>
        <SectionHeading>
          후기 작성 <S.FormNote>* 수정 및 삭제가 불가능하니, 신중히 작성해 주세요!</S.FormNote>
        </SectionHeading>

        <OutlineInputField
          placeholder='학번 입력 (학번은 노출되지 않습니다.)'
          invalid={!!errors.studentId}
          message={errors.studentId?.message}
          {...register('studentId', { required: '학번을 입력해 주세요.' })}
        />
        <OutlineTextareaField
          placeholder='후기를 입력하세요 (등록된 동아리회원만 작성 가능)'
          rows={4}
          invalid={!!errors.content}
          message={errors.content?.message}
          {...register('content', { required: '후기를 입력해 주세요.' })}
        />
        <S.ButtonWrapper>
          <Button variant='outline' width='10rem' type='submit' disabled={isSubmitting}>
            {isSubmitting ? '등록 중...' : '후기 등록'}
          </Button>
        </S.ButtonWrapper>
      </S.ReviewForm>
    </S.ReviewsContainer>
  );
};
