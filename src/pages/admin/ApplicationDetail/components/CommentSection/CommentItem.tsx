import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styled from '@emotion/styled';
import { Text } from '@/shared/components/Text';
import { Button } from '@/shared/components/Button';
import { useComments } from '@/pages/admin/ApplicationDetail/hooks/useComments';
import type { Comment } from '@/pages/admin/ApplicationDetail/types/comments';
import { UnderlineTextareaField } from '@/shared/components/Form/TextAreaField/UnderlineTextareaField';

type Props = Pick<Comment, 'author' | 'content' | 'createdAt' | 'commentId' | 'rating'>;

export const CommentItem = ({ author, commentId, content, createdAt, rating }: Props) => {
  const { applicantId } = useParams();
  const { deleteComment, updateComment } = useComments(Number(applicantId));

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // 추후 모달 및 토스트로 띄우기
    if (!editedContent.trim()) {
      alert('댓글 내용을 입력해주세요');
      return;
    }

    updateComment({
      commentId,
      content: editedContent,
      rating,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedContent(content);
    setIsEditing(false);
  };

  const handleDelete = () => {
    // 추후 모달 및 토스트로 띄우기
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      deleteComment(commentId);
    }
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
        <EditMode>
          <UnderlineTextareaField
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <EditButtonContainer>
            <Button onClick={handleSave}>저장</Button>
            <Button variant='outline' onClick={handleCancel}>
              취소
            </Button>
          </EditButtonContainer>
        </EditMode>
      ) : (
        <CommentContent>
          <Text size={'sm'}>{content}</Text>
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

const EditMode = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const EditButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '0.5rem',
});
