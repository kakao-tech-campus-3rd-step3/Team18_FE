import { useState } from 'react';
import { toast } from 'sonner';
import { useClubReviews } from '@/pages/user/ClubDetail/hook/useClubReviews';
import { Button } from '@/shared/components/Button';
import { OutlineInputField } from '@/shared/components/Form/InputField/OutlineInputField';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import { LoadingSpinner } from '@/shared/components/LoadingSpinner';
import { SectionTitle } from '@/shared/components/SectionTitle';
import * as S from './index.styled';

export const ClubReviewsSection = ({ clubId }: { clubId: number }) => {
  const { reviews, loading, error, addReview } = useClubReviews(clubId);
  const [studentId, setStudentId] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    try {
      await addReview(studentId, content);
      setContent('');
      setStudentId('');
      toast.success('후기가 등록되었습니다!', {
        duration: 2000,
      });
    } catch {
      toast.error('후기 등록에 실패했습니다.', {
        duration: 2000,
      });
    }
  };

  return (
    <S.ReviewsContainer>
      <S.Divider />
      <SectionTitle>동아리 후기</SectionTitle>

      {loading && <LoadingSpinner />}
      {error && <div>{error}</div>}

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
          후기 작성 <S.FormNote>*수정 및 삭제가 불가능하니, 신중히 작성해 주세요!</S.FormNote>
        </S.FormTitle>
        <OutlineInputField
          placeholder='학번 입력 (학번은 노출되지 않습니다.)'
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <OutlineTextareaField
          placeholder='후기를 입력하세요'
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <S.ButtonWrapper>
          <Button variant='light' width='10rem' onClick={handleSubmit}>
            후기 등록
          </Button>
        </S.ButtonWrapper>
      </S.ReviewForm>
    </S.ReviewsContainer>
  );
};
