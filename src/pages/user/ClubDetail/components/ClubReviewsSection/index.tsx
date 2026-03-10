import { useState } from 'react';
import { useClubReviews } from '@/pages/user/ClubDetail/hooks/useClubReviews';
import { Button } from '@/shared/components/Button';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import { SectionHeading } from '@/shared/components/SectionHeading';
import { Text } from '@/shared/components/Text';
import * as S from './index.styled';

export const ClubReviewsSection = ({ clubId }: { clubId: number }) => {
  const { reviews, apiError, addReview } = useClubReviews(clubId);
  const [studentId, setStudentId] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isStudentIdInvalid = submitted && !studentId.trim();
  const isContentInvalid = submitted && !content.trim();

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setSubmitted(true);
    if (!studentId.trim() || !content.trim()) return;

    setIsSubmitting(true);
    try {
      const success = await addReview(studentId, content);
      if (success) {
        setContent('');
        setStudentId('');
        setSubmitted(false);
      }
    } finally {
      setIsSubmitting(false);
    }
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

      <S.ReviewForm>
        <SectionHeading>
          후기 작성 <S.FormNote>* 수정 및 삭제가 불가능하니, 신중히 작성해 주세요!</S.FormNote>
        </SectionHeading>

        {apiError && (
          <Text size='xs' color={'red'}>
            {apiError}
          </Text>
        )}
        <OutlineInputField
          placeholder='학번 입력 (학번은 노출되지 않습니다.)'
          value={studentId}
          invalid={isStudentIdInvalid}
          message={isStudentIdInvalid ? '학번을 입력해 주세요.' : undefined}
          onChange={(e) => setStudentId(e.target.value)}
        />

        <OutlineTextareaField
          placeholder='후기를 입력하세요'
          rows={4}
          value={content}
          invalid={isContentInvalid}
          message={isContentInvalid ? '후기를 입력해 주세요.' : undefined}
          onChange={(e) => setContent(e.target.value)}
        />
        <S.ButtonWrapper>
          <Button variant='outline' width='10rem' onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? '등록 중...' : '후기 등록'}
          </Button>
        </S.ButtonWrapper>
      </S.ReviewForm>
    </S.ReviewsContainer>
  );
};
