import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '@/app/providers/auth';
import { ApplicantStarRating } from '@/pages/admin/ApplicationDetail/components/CommentSection/ApplicantStarRating';
import { useComments } from '@/pages/admin/ApplicationDetail/hooks/useComments';
import { Button } from '@/shared/components/Button';
import { Modal } from '@/shared/components/Modal';
import { Text } from '@/shared/components/Text';
import { useModal } from '@/shared/hooks/useModal';
import { CommentEditForm } from './CommentEditForm';
import * as S from './CommentItem.styles';
import type { Comment, CommentFormData } from '@/pages/admin/ApplicationDetail/types/comments';

type Props = Pick<Comment, 'author' | 'content' | 'createdAt' | 'commentId' | 'rating'>;

export const CommentItem = ({ author, commentId, content, createdAt, rating }: Props) => {
  const { applicantId } = useParams();
  const { user } = useAuth();
  const { deleteComment, updateComment } = useComments(Number(applicantId));
  const [isEditing, setIsEditing] = useState(false);
  const [editableRating, setEditableRating] = useState(rating);

  const { isOpen, openModal, closeModal } = useModal();

  const handleEdit = () => {
    setIsEditing(true);
    setEditableRating(rating);
  };

  const handleSave = (data: Pick<CommentFormData, 'content'>) => {
    const newComment = {
      commentId,
      content: data.content.trim(),
      rating: editableRating,
    };
    updateComment(newComment);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditableRating(rating);
  };

  const handleDelete = () => {
    openModal();
  };

  return (
    <>
      <S.Layout>
        <S.Header>
          <S.AuthorInfo>
            <S.NameRatingGroup>
              <Text size={'base'} weight={'medium'}>
                {author.name}
              </Text>
              {rating !== undefined && (
                <S.RatingWrapper>
                  <ApplicantStarRating
                    rating={isEditing ? editableRating : rating}
                    readOnly={!isEditing}
                    onRatingChange={setEditableRating}
                  />
                </S.RatingWrapper>
              )}
            </S.NameRatingGroup>
            {!isEditing && user?.userId === author.id && (
              <S.ButtonContainer>
                <S.ActionButton onClick={handleEdit}>수정</S.ActionButton>
                <S.Divider>|</S.Divider>
                <S.ActionButton onClick={handleDelete}>삭제</S.ActionButton>
              </S.ButtonContainer>
            )}
          </S.AuthorInfo>

          <Text size={'xs'} weight={'medium'} color={'#616677'}>
            {createdAt}
          </Text>
        </S.Header>

        {isEditing ? (
          <CommentEditForm content={content} onSave={handleSave} onCancel={handleCancel} />
        ) : (
          <S.CommentContent>
            <Text size={'sm'}>{content}</Text>
          </S.CommentContent>
        )}
      </S.Layout>

      <Modal isOpen={isOpen} onClose={closeModal} title='댓글 삭제' size='sm'>
        <Text>댓글을 완전히 삭제할까요?</Text>
        <S.ButtonGroup>
          <Button onClick={closeModal} variant='outline'>
            취소
          </Button>
          <Button onClick={() => deleteComment(commentId)}>삭제</Button>
        </S.ButtonGroup>
      </Modal>
    </>
  );
};
