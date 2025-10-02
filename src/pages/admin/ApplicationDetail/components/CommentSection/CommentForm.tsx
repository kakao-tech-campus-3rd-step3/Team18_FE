import styled from '@emotion/styled';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import { Text } from '@/shared/components/Text';
import { Form } from 'react-router-dom';
import { Button } from '@/shared/components/Button';
import { useState } from 'react';
import type { CreateCommentRequest } from '@/mocks/handler/applicant';

type Props = {
  createComment: (comment: CreateCommentRequest) => void;
};

export const CommentForm = ({ createComment }: Props) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!content.trim()) {
      alert('댓글을 입력해주세요');
      return;
    }

    const newComment = {
      content: content.trim(),
      rating: 5,
    };

    createComment(newComment);
    setContent('');
  };

  return (
    <Layout>
      <Wrapper>
        <Text weight={'medium'}>댓글</Text>
      </Wrapper>
      <Form onSubmit={handleSubmit}>
        <OutlineTextareaField
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
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
