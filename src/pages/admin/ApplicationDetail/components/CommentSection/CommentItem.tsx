import styled from '@emotion/styled';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useComments } from '@/pages/admin/ApplicationDetail/hooks/useComments';
import { Button } from '@/shared/components/Button';
import { UnderlineTextareaField } from '@/shared/components/Form/TextAreaField/UnderlineTextareaField';
import { Text } from '@/shared/components/Text';
import { ApplicantStarRating } from './ApplicantStarRating';
import type { Comment } from '@/pages/admin/ApplicationDetail/types/comments';

type Props = Pick<Comment, 'author' | 'content' | 'createdAt' | 'commentId' | 'rating'>;
type CommentFormData = {
  content: string;
  rating: number;
};

export const CommentItem = ({ author, commentId, content, createdAt, rating }: Props) => {
  const { applicantId } = useParams();
  const { deleteComment, updateComment } = useComments(Number(applicantId));
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    reset,
  } = useForm<CommentFormData>({
    defaultValues: {
      content: content,
      rating: rating,
    },
  });

  const contentValue = watch('content');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (data: CommentFormData) => {
    const newComment = {
      commentId,
      content: data.content.trim(),
      rating: data.rating,
    };
    updateComment(newComment);
    setIsEditing(false);
  };

  const handleCancel = () => {
    reset({ content, rating });
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteComment(commentId);
  };

  return (
    <Layout>
      <Header>
        <AuthorInfo>
          <Text size={'base'} weight={'medium'}>
            {author.name}
          </Text>
          <Text size={'xs'} weight={'medium'} color={'#616677'}>
            {createdAt}
          </Text>
        </AuthorInfo>
        {!isEditing && (
          <ButtonContainer>
            <ActionButton onClick={handleEdit}>수정</ActionButton>
            <Divider>|</Divider>
            <ActionButton onClick={handleDelete}>삭제</ActionButton>
          </ButtonContainer>
        )}
      </Header>

      {isEditing ? (
        <EditMode onSubmit={handleSubmit(handleSave)}>
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
          <UnderlineTextareaField
            {...register('content', {
              required: '댓글을 입력해주세요.',
              maxLength: { value: 500, message: '500자 이하로 입력해주세요.' },
            })}
            invalid={!!errors.content}
            message={errors.content?.message}
          />
          <EditButtonContainer>
            <Button type='submit'>저장</Button>
            <Button variant='outline' onClick={handleCancel}>
              취소
            </Button>
          </EditButtonContainer>
        </EditMode>
      ) : (
        <CommentContent>
          <Text size={'sm'}>{contentValue}</Text>
        </CommentContent>
      )}
    </Layout>
  );
};

const Layout = styled.div(({ theme }) => ({
  borderLeft: `3px solid ${theme.colors.primary}`,
  paddingLeft: '1rem',
  marginBottom: '2.4rem',
}));

const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.9375rem',
});

const AuthorInfo = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
});

const ButtonContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
});

const ActionButton = styled.div(({ theme }) => ({
  background: 'none',
  border: 'none',
  color: theme.colors.gray600,
  fontSize: '0.8rem',
  cursor: 'pointer',
  padding: '0.25rem',

  '&:hover': {
    color: theme.colors.primary,
  },
}));

const Divider = styled.span(({ theme }) => ({
  color: theme.colors.gray200,
  fontSize: '0.875rem',
  margin: '0 0.25rem',
}));

const CommentContent = styled.div({
  lineHeight: '1.6',
});

const EditMode = styled.form({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const EditButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.5rem',
});
