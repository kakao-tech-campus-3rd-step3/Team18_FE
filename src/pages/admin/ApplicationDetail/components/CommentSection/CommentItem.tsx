import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useComments } from '@/pages/admin/ApplicationDetail/hooks/useComments';
import { Text } from '@/shared/components/Text';
import { CommentEditForm } from './CommentEditForm';
import {
  Layout,
  Header,
  AuthorInfo,
  ButtonContainer,
  ActionButton,
  Divider,
  CommentContent,
} from './CommentItem.styles';
import type { Comment, CommentFormData } from '@/pages/admin/ApplicationDetail/types/comments';

type Props = Pick<Comment, 'author' | 'content' | 'createdAt' | 'commentId' | 'rating'>;

export const CommentItem = ({ author, commentId, content, createdAt, rating }: Props) => {
  const { applicantId } = useParams();
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
        <CommentEditForm
          content={content}
          rating={rating}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <CommentContent>
          <Text size={'sm'}>{content}</Text>
        </CommentContent>
      )}
    </Layout>
  );
};
