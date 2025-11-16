import styled from '@emotion/styled';
import { Controller, useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import { Button } from '@/shared/components/Button';
import { OutlineTextareaField } from '@/shared/components/Form/TextAreaField/OutlineTextareaField';
import { Text } from '@/shared/components/Text';
import { ApplicantStarRating } from './ApplicantStarRating';
import type { CreateCommentRequest } from '@/app/mocks/handler/applicant';
import type { CommentFormData } from '@/pages/admin/ApplicationDetail/types/comments';

type Props = {
  createComment: (comment: CreateCommentRequest) => void;
};

export const CommentForm = ({ createComment }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    control,
  } = useForm<CommentFormData>({
    defaultValues: {
      content: '',
      rating: 0,
    },
  });

  const contentValue = watch('content');

  const handleFormSubmit = (data: CommentFormData) => {
    const newComment = {
      content: data.content.trim(),
      rating: data.rating,
    };

    createComment(newComment);
    reset();
  };

  return (
    <Layout>
      <Wrapper>
        <Text weight={'medium'}>댓글</Text>
        <Controller
          name='rating'
          control={control}
          rules={{
            required: '별점을 선택해주세요.',
            min: { value: 1, message: '별점을 선택해주세요.' },
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <ApplicantStarRating rating={value} onRatingChange={onChange} />
              {error && (
                <Text size='xs' color='#fa342c'>
                  {error.message}
                </Text>
              )}
            </>
          )}
        />
      </Wrapper>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <OutlineTextareaField
          {...register('content', {
            required: '댓글을 입력해주세요.',
            maxLength: { value: 500, message: '500자 이하로 입력해주세요.' },
          })}
          invalid={!!errors.content}
          message={errors.content?.message}
        />

        <ButtonWrapper>
          <Text size={'sm'} color={errors.content ? '#fa342c' : '#b0b3ba'}>
            {contentValue.length} / 500
          </Text>
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
  alignItems: 'center',
});

const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginRight: '-2rem',
  padding: '0 0.3rem',
});
