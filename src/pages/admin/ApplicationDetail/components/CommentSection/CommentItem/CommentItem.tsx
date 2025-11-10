import styled from '@emotion/styled';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApplicantStarRating } from '@/pages/admin/ApplicationDetail/components/CommentSection/ApplicantStarRating'; // Import ApplicantStarRating
import { useComments } from '@/pages/admin/ApplicationDetail/hooks/useComments';
import { useAuth } from '@/providers/auth';
import { Text } from '@/shared/components/Text';
import { CommentEditForm } from './CommentEditForm';
import * as S from './CommentItem.styles';
import type { Comment, CommentFormData } from '@/pages/admin/ApplicationDetail/types/comments';

type Props = Pick<Comment, 'author' | 'content' | 'createdAt' | 'commentId' | 'rating'>;

export const CommentItem = ({ author, commentId, content, createdAt, rating }: Props) => {
  const { applicantId } = useParams();
  const { user } = useAuth();
  const { deleteComment, updateComment } = useComments(Number(applicantId));
  const [isEditing, setIsEditing] = useState(false);

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
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteComment(commentId);
  };

  return (
    <S.Layout>
      <S.Header>
        <S.AuthorInfo>
          <Text size={'base'} weight={'medium'}>
            {author.name}
          </Text>
          {rating !== undefined && (
            <RatingWrapper>
              <ApplicantStarRating rating={rating} readOnly={true} />
            </RatingWrapper>
          )}
          <Text size={'xs'} weight={'medium'} color={'#616677'}>
            {createdAt}
          </Text>
        </S.AuthorInfo>
        {!isEditing && user?.userId === author.id && (
          <S.ButtonContainer>
            <S.ActionButton onClick={handleEdit}>수정</S.ActionButton>
            <S.Divider>|</S.Divider>
            <S.ActionButton onClick={handleDelete}>삭제</S.ActionButton>
          </S.ButtonContainer>
        )}
      </S.Header>

      {isEditing ? (
        <CommentEditForm
          content={content}
          rating={rating}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <S.CommentContent>
          <Text size={'sm'}>{content}</Text>
        </S.CommentContent>
      )}
    </S.Layout>
  );
};

const RatingWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
});
