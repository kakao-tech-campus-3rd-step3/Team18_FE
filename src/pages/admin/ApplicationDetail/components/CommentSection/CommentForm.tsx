import styled from '@emotion/styled';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import { Button } from '@/shared/components/Button';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import { Text } from '@/shared/components/Text';
import { ApplicantStarRating } from './ApplicantStarRating';
import type { CreateCommentRequest } from '@/mocks/handler/applicant';

type Props = {
  createComment: (comment: CreateCommentRequest) => void;
};

export const CommentForm = ({ createComment }: Props) => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isContentInvalid = !content.trim();
  const isRatingInvalid = rating === 0;
  const isSubmitDisabled = isRatingInvalid || isContentInvalid;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (isSubmitDisabled) {
      return;
    }

    const newComment = {
      content: content.trim(),
      rating: rating,
    };

    createComment(newComment);
    setContent('');
    setRating(0);
    setIsSubmitted(false);
  };

  let errorMessage = '';
  if (isSubmitted && isSubmitDisabled) {
    if (isRatingInvalid && isContentInvalid) {
      errorMessage = '별점과 댓글을 모두 입력해주세요.';
    } else if (isRatingInvalid) {
      errorMessage = '별점을 선택해주세요.';
    } else {
      errorMessage = '댓글을 입력해주세요.';
    }
  }

  return (
    <Layout>
      <Wrapper>
        <Text weight={'medium'}>댓글</Text>
        <ApplicantStarRating rating={rating} onRatingChange={setRating} />
      </Wrapper>
      <Form onSubmit={handleSubmit}>
        <OutlineTextareaField
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          invalid={isSubmitted && isSubmitDisabled}
          message={errorMessage}
        />
        <ButtonWrapper>
          <Button variant='outline' type='submit' width='3.5rem'>
            등록
          </Button>
        </ButtonWrapper>
      </Form>
    </Layout>
  );
};

const Layout = styled.div({
  display: 'flex',
  gap: '0.8rem',
  marginBottom: '3rem',
  flexDirection: 'column',
});

const Wrapper = styled.div({
  display: 'flex',
  gap: '16px',
});

const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: '-1.65rem',
});
